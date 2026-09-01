import {
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Goal,
  LayoutDashboard,
  Map,
  Megaphone,
  MessageSquareText,
  Radio,
  Target,
  Users,
} from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CampaignDashboard } from '@/components/campaign-dashboard';

const navItems = [
  { label: 'Обзор', href: '#overview', icon: LayoutDashboard },
  { label: 'Цели', href: '#kpi', icon: Target },
  { label: 'Этапы', href: '#roadmap', icon: Map },
  { label: 'Стратегия', href: '#strategy', icon: Users },
  { label: 'CRM-план', href: '#crm', icon: MessageSquareText },
  { label: 'Форматы', href: '#formats', icon: Megaphone },
  { label: 'Метрики', href: '#tracking', icon: Radio },
];

const kpis = [
  { label: 'Предзаказы', value: '40', detail: 'цель первой фазы', icon: Goal, tone: 'blue' },
  { label: 'Net-продажи компании', value: '+16,6%', detail: 'к запуску iPhone 17', icon: Target, tone: 'violet' },
  { label: 'Интернет-магазин', value: '344', detail: 'устройства net · сайт + приложение', icon: CircleDollarSign, tone: 'green' },
  { label: 'Бюджет РСЯ', value: '900 000 ₽', detail: 'на две фазы', icon: CircleDollarSign, tone: 'green' },
];

export default function Home() {
  return (
    <div className="campaign-shell">
      <header className="topbar">
        <a className="brand" href="#overview" aria-label="05.ru — начало страницы">
          <Image className="brand-logo" src="/logo-05ru.svg" alt="05.ru" width={108} height={36} priority />
        </a>
        <div className="topbar-meta">
          <span className="campaign-period">2 сентября — 1 ноября 2026</span>
          <Badge className="status-badge">План кампании</Badge>
        </div>
      </header>

      <nav className="mobile-nav" aria-label="Быстрая навигация">
        {navItems.map(({ label, href }) => <a href={href} key={href}>{label}</a>)}
      </nav>

      <div className="page-grid">
        <aside className="sidebar" aria-label="Навигация по кампании">
          <p className="nav-kicker">Разделы</p>
          <nav>
            {navItems.map(({ label, href, icon: Icon }, index) => (
              <a className={index === 0 ? 'nav-link active' : 'nav-link'} href={href} key={href}>
                <Icon /><span>{label}</span>
              </a>
            ))}
          </nav>
          <div className="sidebar-note"><p>Краткий план рекламной кампании для команды 05.ru.</p></div>
        </aside>

        <main className="content">
          <section className="campaign-hero" id="overview">
            <div className="hero-copy">
              <div className="eyebrow"><span>iPhone 18</span><span>2026</span></div>
              <h1>Рекламная кампания<br />iPhone 18</h1>
              <p className="hero-lead">План онлайн-продвижения 05.ru: цели, этапы, аудитория, каналы и оценка результата.</p>
              <div className="hero-meta">
                <span><CalendarDays /> 02.09–01.11</span>
                <span><CheckCircle2 /> Владелец: Магомед Кадимагомедов</span>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true" />
          </section>

          <section aria-labelledby="kpi-title" id="kpi">
            <div className="section-heading compact-heading">
              <div><p className="section-kicker">Главные показатели</p><h2 id="kpi-title">Цели кампании</h2></div>
            </div>
            <div className="kpi-grid">
              {kpis.map(({ label, value, detail, icon: Icon, tone }) => (
                <Card className={`kpi-card tone-${tone}`} key={label}>
                  <CardHeader><div className="kpi-icon"><Icon /></div><CardDescription>{label}</CardDescription></CardHeader>
                  <CardContent><p className="metric-value">{value}</p><p className="metric-detail">{detail}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
            <div className="section-heading">
              <div><p className="section-kicker">Сроки</p><h2 id="roadmap-title">Этапы кампании</h2></div>
              <p className="section-summary">Дата старта продаж ориентировочная и зависит от фактического запуска.</p>
            </div>
            <div className="phase-grid">
              <Card className="phase-card phase-active">
                <CardHeader>
                  <div className="phase-topline"><Badge variant="secondary">Фаза 1</Badge><span>02–19 сентября</span></div>
                  <CardTitle>Предзаказ</CardTitle>
                  <CardDescription>Собрать 40 заявок до начала продаж.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="phase-budget"><span>Бюджет РСЯ</span><strong>300 000 ₽</strong></div>
                </CardContent>
              </Card>
              <div className="phase-connector" aria-hidden="true"><span>≈ 20.09</span></div>
              <Card className="phase-card">
                <CardHeader>
                  <div className="phase-topline"><Badge variant="outline">Фаза 2</Badge><span>20 сентября — 1 ноября</span></div>
                  <CardTitle>Старт продаж</CardTitle>
                  <CardDescription>Увеличить net-продажи компании на 16,6% к запуску iPhone 17.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="phase-budget"><span>Бюджет РСЯ</span><strong>600 000 ₽</strong></div>
                </CardContent>
              </Card>
            </div>
          </section>
          <CampaignDashboard />
        </main>
      </div>
    </div>
  );
}
