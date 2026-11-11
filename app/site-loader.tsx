"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const routeIntentKey = "nailashes-route-intent";
const initialDuration = 2000;
const routeDuration = 1000;
const fadeDuration = 350;

function LoaderVisual() {
  return (
    <div className="site-loader-content">
      <div className="loader-grid" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <span className="loader-square" key={index} />
        ))}
      </div>
      <div className="loader-wordmark">
        <strong>NAILASHES</strong>
        <span>Indirapuram Studio</span>
      </div>
    </div>
  );
}

export function SiteLoaderFallback() {
  return (
    <div className="site-loader-backdrop is-visible" role="status" aria-label="Loading Nailashes">
      <LoaderVisual />
    </div>
  );
}

export default function SiteLoader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(true);
  const [visible, setVisible] = useState(true);
  const previousPath = useRef<string | null>(null);
  const initialStartedAt = useRef(0);
  const initialComplete = useRef(false);
  const hideTimer = useRef<number | null>(null);
  const unmountTimer = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
    if (unmountTimer.current !== null) window.clearTimeout(unmountTimer.current);
    hideTimer.current = null;
    unmountTimer.current = null;
  }, []);

  const show = useCallback(
    (duration: number) => {
      clearTimers();
      setMounted(true);
      window.requestAnimationFrame(() => setVisible(true));
      hideTimer.current = window.setTimeout(() => {
        setVisible(false);
        initialComplete.current = true;
        unmountTimer.current = window.setTimeout(() => setMounted(false), fadeDuration);
      }, duration);
    },
    [clearTimers],
  );

  const routeDelay = useCallback(() => {
    if (initialComplete.current) return routeDuration;
    const remaining = initialDuration - (Date.now() - initialStartedAt.current);
    return Math.max(routeDuration, remaining);
  }, []);

  useEffect(() => {
    let firstDelay = initialDuration;
    try {
      const intent = window.sessionStorage.getItem(routeIntentKey);
      if (intent && Date.now() - Number(intent) < 8000) firstDelay = routeDuration;
      window.sessionStorage.removeItem(routeIntentKey);

      const savedTheme = window.localStorage.getItem("nailashes-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        document.documentElement.dataset.theme = savedTheme;
      }
    } catch {
      // Storage may be unavailable in private browsing modes.
    }

    initialStartedAt.current = Date.now();
    show(firstDelay);

    const handleInternalNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;

      try {
        window.sessionStorage.setItem(routeIntentKey, String(Date.now()));
      } catch {
        // The in-page route listener still shows the transition loader.
      }
      show(routeDelay());
    };

    document.addEventListener("click", handleInternalNavigation, true);

    return () => {
      document.removeEventListener("click", handleInternalNavigation, true);
      clearTimers();
    };
  }, [clearTimers, routeDelay, show]);

  useEffect(() => {
    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    try {
      window.sessionStorage.removeItem(routeIntentKey);
    } catch {
      // Navigation does not depend on session storage.
    }
    show(routeDelay());
  }, [pathname, routeDelay, show]);

  if (!mounted) return null;

  return (
    <div
      className={visible ? "site-loader-backdrop is-visible" : "site-loader-backdrop is-leaving"}
      role="status"
      aria-label="Loading Nailashes"
      aria-live="polite"
    >
      <LoaderVisual />
    </div>
  );
}
