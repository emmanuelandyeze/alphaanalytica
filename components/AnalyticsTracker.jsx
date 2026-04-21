'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const AnalyticsTracker = () => {
  const pathname = usePathname();
  const trackedPath = useRef(null);

  useEffect(() => {
    // Do not track localhost or admin routes
    if (window.location.hostname === 'localhost' || pathname.startsWith('/admin')) {
      return;
    }

    // Only track if the path has changed to avoid duplicate tracking on re-renders
    if (trackedPath.current !== pathname) {
      const trackVisit = async () => {
        try {
          await fetch('/api/analytics/track', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              path: pathname,
              referrer: document.referrer || null,
              userAgent: navigator.userAgent || null,
            }),
          });
          trackedPath.current = pathname;
        } catch (error) {
          console.error('Failed to track site visit:', error);
        }
      };

      trackVisit();
    }
  }, [pathname]);

  return null;
};

export default AnalyticsTracker;
