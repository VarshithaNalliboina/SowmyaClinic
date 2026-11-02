"use client";

import { useEffect } from "react";

// Runs the ORIGINAL site script (public/script-85fca9.js) once, after React has hydrated the page.
// The script is unchanged from the static site: slider, sticky header, mobile menu,
// scroll animations, map tabs, smooth anchors and the WhatsApp booking form.
let started = false;

export default function SiteScript({ src }: { src: string }) {
  useEffect(() => {
    if (started) return; // run once (React dev mode mounts effects twice)
    started = true;

    // The original script listens for window "load" (preloader, #hash scrolling).
    // In Next.js the page can already be fully loaded before this runs, so while the
    // script executes, a "load" listener added after load is called right away instead.
    const originalAdd = window.addEventListener;
    const patched = function (
      this: Window,
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) {
      if (type === "load" && document.readyState === "complete") {
        const ev = new Event("load");
        setTimeout(() => {
          if (typeof listener === "function") listener.call(window, ev);
          else listener.handleEvent(ev);
        }, 0);
        return;
      }
      return originalAdd.call(this, type, listener, options);
    };
    window.addEventListener = patched as typeof window.addEventListener;
    const restore = () => {
      window.addEventListener = originalAdd;
    };

    const s = document.createElement("script");
    s.src = src;
    s.onload = restore;
    s.onerror = restore;
    document.body.appendChild(s);
  }, [src]);

  return null;
}
