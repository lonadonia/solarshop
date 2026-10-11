/**
 * Progressive enhancement for the static homepage.
 * The page is fully readable without JavaScript; this adds the menu, tabs,
 * shop filter, "Ask about this" shortcuts and the enquiry form behaviour.
 *
 * Framework-free on purpose: the same file runs inside Next.js and in the
 * single-file preview build.
 */

type Cleanup = () => void;

const qs = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const qsa = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

function on<K extends keyof HTMLElementEventMap>(
  el: EventTarget,
  type: K | string,
  fn: (e: HTMLElementEventMap[K]) => void,
  cleanups: Cleanup[],
  opts?: AddEventListenerOptions,
) {
  el.addEventListener(type, fn as EventListener, opts);
  cleanups.push(() => el.removeEventListener(type, fn as EventListener, opts));
}

function initHeader(c: Cleanup[]) {
  const header = qs("[data-header]");
  if (!header) return;
  const update = () => header.setAttribute("data-scrolled", String(window.scrollY > 8));
  update();
  on(window, "scroll", update, c, { passive: true });
}

function initNav(c: Cleanup[]) {
  const toggle = qs<HTMLButtonElement>("[data-nav-toggle]");
  const panel = qs("[data-nav-panel]");
  if (!toggle || !panel) return;
  const label = qs("[data-nav-label]", toggle);
  const iconOpen = qs("[data-icon-open]", toggle);
  const iconClose = qs("[data-icon-close]", toggle);
  let closeTimer = 0;

  const set = (open: boolean, returnFocus = false) => {
    window.clearTimeout(closeTimer);
    toggle.setAttribute("aria-expanded", String(open));
    if (label) label.textContent = open ? "Close menu" : "Open menu";
    iconOpen?.classList.toggle("hidden", open);
    iconClose?.classList.toggle("hidden", !open);
    if (open) {
      panel.hidden = false;
      requestAnimationFrame(() => panel.setAttribute("data-open", "true"));
    } else {
      panel.setAttribute("data-open", "false");
      closeTimer = window.setTimeout(() => (panel.hidden = true), 240);
      if (returnFocus) toggle.focus();
    }
  };

  on(toggle, "click", () => set(toggle.getAttribute("aria-expanded") !== "true"), c);
  qsa("[data-nav-link]", panel).forEach((a) => on(a, "click", () => set(false), c));
  on(document, "keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") set(false, true);
  }, c);
  on(document, "click", (e: MouseEvent) => {
    const t = e.target as Node;
    if (toggle.getAttribute("aria-expanded") === "true" && !panel.contains(t) && !toggle.contains(t)) set(false);
  }, c);
  const mq = window.matchMedia("(min-width: 1280px)");
  const onMq = () => mq.matches && set(false);
  mq.addEventListener("change", onMq);
  c.push(() => mq.removeEventListener("change", onMq));
}

function initTabs(c: Cleanup[]) {
  qsa("[data-tabs]").forEach((list) => {
    const tabs = qsa<HTMLButtonElement>('[role="tab"]', list);
    const select = (tab: HTMLButtonElement, focus = false) => {
      tabs.forEach((t) => {
        const selected = t === tab;
        t.setAttribute("aria-selected", String(selected));
        t.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls") || "");
        if (panel) panel.hidden = !selected;
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
      on(tab, "click", () => select(tab), c);
      on(tab, "keydown", (e: KeyboardEvent) => {
        const keys: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
        if (!(e.key in keys)) return;
        e.preventDefault();
        select(tabs[(keys[e.key] + tabs.length) % tabs.length], true);
      }, c);
    });
  });
}

function initFilter(c: Cleanup[]) {
  const group = qs("[data-filter]");
  if (!group) return;
  const chips = qsa<HTMLButtonElement>("[data-filter-value]", group);
  const items = qsa("[data-category]");
  const count = qs("[data-filter-count]");
  chips.forEach((chip) =>
    on(chip, "click", () => {
      const value = chip.dataset.filterValue;
      chips.forEach((ch) => ch.setAttribute("aria-pressed", String(ch === chip)));
      let shown = 0;
      items.forEach((item) => {
        const match = value === "all" || item.dataset.category === value;
        item.hidden = !match;
        if (match) shown++;
      });
      if (count) count.textContent = `Showing ${shown} ${shown === 1 ? "product" : "products"}`;
    }, c),
  );
}

function initForm(c: Cleanup[]) {
  const form = qs<HTMLFormElement>("#enquiry-form");
  if (!form) return;
  const success = qs("[data-form-success]");
  const status = qs("[data-form-status]", form);
  const submit = qs<HTMLButtonElement>("[data-submit]", form);
  const spinner = qs("[data-submit-spinner]", form);
  const arrow = qs("[data-submit-arrow]", form);
  const submitLabel = qs("[data-submit-label]", form);

  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement | RadioNodeList | null;

  const setError = (id: string, message: string) => {
    const err = document.getElementById(`${id}-error`);
    const input = document.getElementById(id);
    if (err) {
      err.textContent = message;
      err.hidden = !message;
    }
    if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
  };

  const rules: { id: string; check: () => string }[] = [
    {
      id: "name",
      check: () => ((field("name") as HTMLInputElement).value.trim().length < 2 ? "Enter your full name." : ""),
    },
    {
      id: "email",
      check: () => {
        const v = (field("email") as HTMLInputElement).value.trim();
        if (!v) return "Enter your email address.";
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter an email address like name@example.com.";
      },
    },
    {
      id: "phone",
      check: () => {
        const v = (field("phone") as HTMLInputElement).value.trim();
        return !v || /^[+()\d\s.-]{7,20}$/.test(v) ? "" : "Use digits, spaces and + only, or leave this blank.";
      },
    },
    {
      id: "postcode",
      check: () => ((field("postcode") as HTMLInputElement).value.trim().length < 3 ? "Enter your postcode or ZIP so we can check coverage." : ""),
    },
    {
      id: "property",
      check: () => ((field("property") as RadioNodeList).value ? "" : "Choose the type of property."),
    },
    {
      id: "consent",
      check: () => ((field("consent") as HTMLInputElement).checked ? "" : "Tick the box so we can reply to you."),
    },
  ];

  const validate = (only?: string) => {
    let firstInvalid: string | null = null;
    rules.forEach((r) => {
      if (only && r.id !== only) return;
      const msg = r.check();
      if (r.id === "property") {
        const err = document.getElementById("property-error");
        if (err) {
          err.textContent = msg;
          err.hidden = !msg;
        }
        qsa('input[name="property"]', form).forEach((i) => i.setAttribute("aria-invalid", msg ? "true" : "false"));
      } else setError(r.id, msg);
      if (msg && !firstInvalid) firstInvalid = r.id;
    });
    return firstInvalid;
  };

  // Re-check a field once the visitor leaves it, and clear errors as they fix them.
  ["name", "email", "phone", "postcode"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    on(el, "blur", () => {
      if ((el as HTMLInputElement).value.trim()) validate(id);
    }, c);
    on(el, "input", () => {
      if (el.getAttribute("aria-invalid") === "true") validate(id);
    }, c);
  });
  qsa('input[name="property"], #consent', form).forEach((el) =>
    on(el, "change", () => validate(el.id === "consent" ? "consent" : "property"), c),
  );

  const setBusy = (busy: boolean) => {
    if (!submit) return;
    submit.disabled = busy;
    submit.setAttribute("aria-busy", String(busy));
    spinner?.classList.toggle("hidden", !busy);
    arrow?.classList.toggle("hidden", busy);
    if (submitLabel) submitLabel.textContent = busy ? "Sending..." : "Send my enquiry";
  };

  const showStatus = (kind: "error" | "info" | "", message: string) => {
    if (!status) return;
    status.textContent = message;
    status.className =
      "rounded-2xl text-[0.95rem] empty:hidden " +
      (kind === "error"
        ? "bg-[#f8e3db] p-4 text-[#7a2e1a]"
        : kind === "info"
          ? "bg-mist p-4 text-lake"
          : "");
  };

  const showSuccess = () => {
    form.hidden = true;
    if (success) {
      success.hidden = false;
      success.focus();
    }
  };

  on(form, "submit", async (e: SubmitEvent) => {
    e.preventDefault();
    showStatus("", "");
    const firstInvalid = validate();
    if (firstInvalid) {
      const target =
        firstInvalid === "property" ? qs<HTMLInputElement>('input[name="property"]', form) : document.getElementById(firstInvalid);
      target?.focus();
      showStatus("error", "Please check the highlighted fields.");
      return;
    }

    const data = new FormData(form);
    if (String(data.get("company_website") || "")) {
      showSuccess(); // quietly drop bot submissions
      return;
    }
    data.delete("company_website");
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      postcode: String(data.get("postcode") || "").trim(),
      property: String(data.get("property") || ""),
      interests: data.getAll("interests").map(String),
      message: String(data.get("message") || "").trim(),
      consent: true,
      source: "solarshop-homepage",
    };

    const endpoint = (form.dataset.endpoint || "").trim();
    if (!endpoint) {
      showStatus(
        "info",
        "Preview mode: your details passed every check, but this form is not connected to an inbox yet, so nothing was sent. Set NEXT_PUBLIC_ENQUIRY_ENDPOINT to go live.",
      );
      return;
    }

    setBusy(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      showSuccess();
    } catch {
      showStatus("error", "We couldn't send your enquiry just now. Check your connection and try again, or call us instead.");
    } finally {
      setBusy(false);
    }
  }, c);

  const reset = qs("[data-form-reset]");
  if (reset)
    on(reset, "click", () => {
      form.reset();
      rules.forEach((r) => (r.id === "property" ? null : setError(r.id, "")));
      form.hidden = false;
      if (success) success.hidden = true;
      showStatus("", "");
      (document.getElementById("name") as HTMLInputElement | null)?.focus();
    }, c);

  // "Ask about this" buttons prefill the form.
  qsa<HTMLAnchorElement>("[data-enquire]").forEach((btn) =>
    on(btn, "click", () => {
      const topic = btn.dataset.enquire;
      const property = btn.dataset.property;
      const interest = btn.dataset.interest;
      const message = document.getElementById("message") as HTMLTextAreaElement | null;
      if (form.hidden && reset) (reset as HTMLButtonElement).click();
      if (message && topic) message.value = `I'd like to know more about ${topic}.`;
      if (property) {
        const radio = qsa<HTMLInputElement>('input[name="property"]', form).find((r) => r.value === property);
        if (radio) radio.checked = true;
      }
      if (interest) {
        const box = qsa<HTMLInputElement>('input[name="interests"]', form).find((r) => r.value === interest);
        if (box) box.checked = true;
      }
      window.setTimeout(() => (document.getElementById("name") as HTMLInputElement | null)?.focus({ preventScroll: true }), 450);
    }, c),
  );
}

/** A photo that fails to load is removed, revealing the illustration underneath. */
function initPhotos(c: Cleanup[]) {
  qsa<HTMLImageElement>("img[data-photo]").forEach((img) => {
    const fallBack = () => {
      img.parentElement?.querySelector("[data-photo-fallback]")?.removeAttribute("aria-hidden");
      img.remove();
    };
    if (img.complete && img.naturalWidth === 0) fallBack();
    else on(img, "error", fallBack, c, { once: true });
  });
}

export function initSite(): Cleanup {
  const cleanups: Cleanup[] = [];
  initHeader(cleanups);
  initNav(cleanups);
  initTabs(cleanups);
  initFilter(cleanups);
  initForm(cleanups);
  initPhotos(cleanups);
  document.documentElement.classList.add("js");
  return () => cleanups.forEach((fn) => fn());
}
