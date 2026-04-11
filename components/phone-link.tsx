"use client"

import React from 'react'

interface PhoneLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  id?: string
}

export function PhoneLink({ href, children, className, id }: PhoneLinkProps) {
  return (
    <a href={href} className={className} id={id}>
      {children}
    </a>
  );
}
