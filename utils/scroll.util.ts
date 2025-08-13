import { Page, Locator } from "@playwright/test";

export async function scrollToSection(section: Locator) {
    await section.scrollIntoViewIfNeeded();
}

export const centerOn = async (p: Page, l: Locator) => {
    await p.mouse.wheel(0, 800);
    const h = await l.elementHandle();
    if (!h) throw new Error('centerOn: element not found');
  
    await h.evaluate(n => n.scrollIntoView({ block: 'center', inline: 'nearest' }));
  
    await p.waitForFunction(
      (node) => {
        const el = node as HTMLElement | null;
        if (!el) return false;
        const b = el.getBoundingClientRect();
        const vis = Math.max(0, Math.min(b.bottom, innerHeight) - Math.max(b.top, 0));
        const centered = Math.abs((b.top + b.height / 2) - innerHeight / 2) < 4;
        return centered && b.height > 0 && vis / b.height >= 0.6; // <- stały próg
      },
      h,                                   // JEDEN arg
      { polling: 'raf' }                   // (opcjonalnie) stabilniejsze odpytywanie
    );
  };