'use client';

import {
  LayoutDashboard,
  MapIcon,
  Megaphone,
  MessageSquareText,
  Radio,
  Target,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'Обзор', href: '#overview', icon: LayoutDashboard },
  { label: 'Цели', href: '#kpi', icon: Target },
  { label: 'Этапы', href: '#roadmap', icon: MapIcon },
  { label: 'Стратегия', href: '#strategy', icon: Users },
  { label: 'CRM-план', href: '#crm', icon: MessageSquareText },
  { label: 'Форматы', href: '#formats', icon: Megaphone },
  { label: 'Метрики', href: '#tracking', icon: Radio },
] as const;

function useActiveSection() {
  const [activeHref, setActiveHref] = useState<(typeof navItems)[number]['href']>('#overview');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const activationLine = Math.min(180, window.innerHeight * 0.28);
      let current: (typeof navItems)[number]['href'] = navItems[0].href;

      for (const item of navItems) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section && section.getBoundingClientRect().top <= activationLine) current = item.href;
      }

      setActiveHref((previous) => (previous === current ? previous : current));
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
    };
  }, []);

  return { activeHref, setActiveHref };
}

export function MobileCampaignNavigation() {
  const { activeHref, setActiveHref } = useActiveSection();
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const activeLink = linkRefs.current[activeHref];
    if (!activeLink || window.innerWidth > 820) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    activeLink.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
  }, [activeHref]);

  return (
    <nav className="mobile-nav" aria-label="Быстрая навигация">
      {navItems.map(({ label, href }) => (
        <a
          aria-current={activeHref === href ? 'location' : undefined}
          href={href}
          key={href}
          onClick={() => setActiveHref(href)}
          ref={(node) => {
            linkRefs.current[href] = node;
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export function DesktopCampaignNavigation() {
  const { activeHref, setActiveHref } = useActiveSection();

  return (
    <aside className="sidebar" aria-label="Навигация по кампании">
      <p className="nav-kicker">Разделы</p>
      <nav>
        {navItems.map(({ label, href, icon: Icon }) => (
          <a
            aria-current={activeHref === href ? 'location' : undefined}
            className="nav-link"
            href={href}
            key={href}
            onClick={() => setActiveHref(href)}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
