import { checkSubscription } from "@/lib/subscription"
import { SuspendedPage } from "@/components/suspended-page"

interface SubscriptionWrapperProps {
  children: React.ReactNode
}

/**
 * Subscription Wrapper - Server Component
 * 
 * Minden oldalletöltésnél ellenőrzi az előfizetés státuszát.
 * Ha lejárt, a SuspendedPage-t jeleníti meg az eredeti tartalom helyett.
 */
export async function SubscriptionWrapper({ children }: SubscriptionWrapperProps) {
  // ========================================
  // PREVIEW MÓD - csak teszteléshez!
  // Állítsd true-ra hogy lásd a suspended oldalt
  // ÉLESBEN MINDIG false LEGYEN!
  // ========================================
  const FORCE_SUSPENDED_PREVIEW = false
  // ========================================

  if (FORCE_SUSPENDED_PREVIEW) {
    return <SuspendedPage />
  }

  const subscription = await checkSubscription()

  if (!subscription.isActive) {
    return <SuspendedPage />
  }

  return <>{children}</>
}
