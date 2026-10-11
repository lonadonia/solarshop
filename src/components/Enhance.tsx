"use client";

import { useEffect } from "react";
import { initSite } from "@/lib/enhance";

/** Mounts the framework-free enhancement script once the page is interactive. */
export function Enhance() {
  useEffect(() => initSite(), []);
  return null;
}
