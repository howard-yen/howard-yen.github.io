'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const redirectMap: Record<string, string> = {
  About: '/',
  Publications: '/publications',
  Contact: '/',
};

export function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && redirectMap[hash]) {
      router.replace(redirectMap[hash]);
    }
  }, [router]);

  return null;
}
