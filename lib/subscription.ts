import { createClient } from "@supabase/supabase-js"
import { unstable_cache } from "next/cache"

/**
 * Előfizetés ellenőrző modul - Supabase verzió
 * 
 * Szükséges environment változók:
 * - NEXT_PUBLIC_SUPABASE_URL: A Supabase projekt URL-je
 * - SUPABASE_SERVICE_ROLE_KEY: Service role kulcs (NEM az anon key!)
 * - SITE_ID: Az adott weboldal client ID-ja a clients táblában
 */

export interface SubscriptionStatus {
  isActive: boolean
  clientName?: string
}

/**
 * Belső függvény ami ténylegesen lekérdezi az adatbázist
 */
async function fetchSubscriptionStatus(siteId: string): Promise<SubscriptionStatus> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.warn("[Subscription] Missing Supabase credentials, defaulting to active")
    return { isActive: true }
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
      .from("clients")
      .select("subscription_active, name")
      .eq("id", siteId)
      .single()

    if (error) {
      console.error("[Subscription] Supabase error:", error.message)
      return { isActive: true }
    }

    if (!data) {
      console.error("[Subscription] Client not found:", siteId)
      return { isActive: true }
    }

    return {
      isActive: data.subscription_active ?? true,
      clientName: data.name,
    }
  } catch (error) {
    console.error("[Subscription] Check failed:", error)
    return { isActive: true }
  }
}

/**
 * Ellenőrzi az előfizetés státuszát - CACHE-elve 60 másodpercig
 * Így nem lassítja az oldalt, de 1 percen belül frissül a státusz
 */
export async function checkSubscription(): Promise<SubscriptionStatus> {
  const siteId = process.env.SITE_ID

  if (!siteId) {
    console.warn("[Subscription] Missing SITE_ID, defaulting to active")
    return { isActive: true }
  }

  // Cache 60 másodpercig - az oldal gyors marad, de percenként frissül
  const getCachedStatus = unstable_cache(
    async () => fetchSubscriptionStatus(siteId),
    [`subscription-${siteId}`],
    { 
      revalidate: 60, // 60 másodperc cache
      tags: [`subscription-${siteId}`] 
    }
  )

  return getCachedStatus()
}
