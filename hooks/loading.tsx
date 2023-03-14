import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface LoadingReturn {
  loading: boolean;
  complete: boolean;
}

function useLoading(): LoadingReturn {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let mounted = true;
    const handleStart = (url: string) => {
      if (url !== router.asPath && mounted) {
        setLoading(true);
        setComplete(false);
      }
    };
    const handleComplete = (url: string) => {
      if (url === router.asPath && mounted) {
        setLoading(false);
        setComplete(true);
      }
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      mounted = false;
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return {
    loading: loading,
    complete: complete
  };
}

export default useLoading;
