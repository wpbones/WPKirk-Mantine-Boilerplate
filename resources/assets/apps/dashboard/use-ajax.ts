import useSWR, { type SWRResponse } from 'swr';

declare global {
  interface Window {
    ajaxurl: string;
    WPKirkMantine: { nonce: string };
  }
}

const fetcher = async <T,>(action: string): Promise<T> => {
  const body = new URLSearchParams({
    action,
    nonce: window.WPKirkMantine.nonce,
  });

  const res = await fetch(window.ajaxurl, {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  if (!res.ok) {
    throw new Error(`Ajax ${action} failed: HTTP ${res.status}`);
  }

  return res.json() as Promise<T>;
};

/**
 * Typed wrapper around useSWR for WordPress AJAX actions.
 * Always returns the canonical { data, error, isLoading } shape — no split
 * branches that force callers to handle three different objects.
 */
export function useAjax<T>(action: string): SWRResponse<T, Error> {
  return useSWR<T, Error>(action, fetcher);
}
