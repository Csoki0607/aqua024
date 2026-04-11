"use client"

import React from 'react'

interface PhoneLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  id?: string
}

export function PhoneLink({ href, children, className, id }: PhoneLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept if its a tel or sms link and gtag is available
    if (href.startsWith('tel:') || href.startsWith('sms:')) {
      e.preventDefault();
      if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
        (window as any).gtag_report_conversion(href);
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} id={id}>
      {children}
    </a>
  );
}
