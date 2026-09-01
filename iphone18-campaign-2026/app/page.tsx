import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Goal,
  LayoutDashboard,
  Map,
  Megaphone,
  MessageSquareText,
  Radio,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

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
  { label: 'Roadmap', href: '#roadmap', icon: Map },
  { label: 'Цели и KPI', href: '#kpi', icon: Target },
  { label: 'Стратегия', href: '#strategy', icon: Users },
  { label: 'CRM-план', href: '#crm', icon: MessageSquareText },
  { label: 'Форматы', href: '#formats', icon: Megaphone },
  { label: 'План-факт', href: '#tracking', icon: Radio },
];

const kpis = [
  { label: 'Заявки на предзаказ', value: '40', detail: 'главная цель 02–19 сентября', icon: Goal, tone: 'blue' },
  { label: 'Продажи iPhone 18 net', value: '3 850', detail: '+16,6% к запуску iPhone 17', icon: Target, tone: 'violet' },
  { label: 'Бюджет РСЯ', value: '900 000 ₽', detail: '300 тыс. + 600 тыс. ₽', icon: CircleDollarSign, tone: 'green' },
  { label: 'Период кампании', value: '61 день', detail: '2 сентября — 1 ноября', icon: CalendarDays, tone: 'amber' },
];

export default function Home() {
  return (
    <div className="campaign-shell">
      <header className="topbar">
        <a className="brand" href="#overview" aria-label="05.ru — начало страницы">
          <span className="brand-mark">05</span>
          <span><strong>05.ru</strong><small>Рекламные кампании</small></span>
        </a>
        <div className="topbar-meta">
          <span className="freshness"><Clock3 /> Срез на 01.09.2026</span>
          <Badge className="status-badge"><span className="status-dot" /> Готова к запуску</Badge>
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
          <div className="sidebar-note"><Sparkles /><p>Единая страница стратегии, плана и результатов кампании.</p></div>
        </aside>

        <main className="content">
          <section className="campaign-hero" id="overview">
            <div className="hero-copy">
              <div className="eyebrow"><span>iPhone 18</span><span>2026</span></div>
              <h1>От предзаказа<br />к сильному старту</h1>
              <p className="hero-lead">Собрать ранний спрос, затем перевести интерес к новинке в покупку — с единым сообщением во всех онлайн-форматах 05.ru.</p>
              <div className="hero-meta">
                <span><CalendarDays /> 02.09–01.11</span>
                <span><CheckCircle2 /> Владелец: Магомед Кадимагомедов</span>
              </div>
            </div>
            <div className="hero-signal" aria-hidden="true">
              <span className="signal-orbit orbit-one" /><span className="signal-orbit orbit-two" /><span className="signal-core">18</span>
            </div>
          </section>

          <section aria-labelledby="kpi-title" id="kpi">
            <div className="section-heading compact-heading">
              <div><p className="section-kicker">Главные ориентиры</p><h2 id="kpi-title">Кампания в четырёх цифрах</h2></div>
              <a className="text-link" href="#tracking">Открыть план-факт <ArrowUpRight /></a>
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
              <div><p className="section-kicker">Две связанные фазы</p><h2 id="roadmap-title">Roadmap кампании</h2></div>
              <p className="section-summary">Граница 20 сентября — рабочий ориентир и сдвигается вместе с фактическим стартом продаж.</p>
            </div>
            <div className="phase-grid">
              <Card className="phase-card phase-active">
                <CardHeader>
                  <div className="phase-topline"><Badge variant="secondary">Фаза 1</Badge><span>02–19 сентября</span></div>
                  <CardTitle>Предзаказ</CardTitle>
                  <CardDescription>Собрать 40 заявок и сформировать выбор 05.ru до начала продаж.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="phase-budget"><span>Бюджет РСЯ</span><strong>300 000 ₽</strong></div>
                  <div className="phase-status"><CheckCircle2 /> Баннеры, лендинг, CRM и РСЯ готовы</div>
                </CardContent>
              </Card>
              <div className="phase-connector" aria-hidden="true"><span>≈ 20.09</span></div>
              <Card className="phase-card">
                <CardHeader>
                  <div className="phase-topline"><Badge variant="outline">Фаза 2</Badge><span>20 сентября — 1 ноября</span></div>
                  <CardTitle>Старт продаж</CardTitle>
                  <CardDescription>Перевести накопленный интерес в покупки новых моделей iPhone.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="phase-budget"><span>Бюджет РСЯ</span><strong>600 000 ₽</strong></div>
                  <div className="phase-status muted"><Clock3 /> Требует подготовки всех форматов</div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="priority-card" aria-labelledby="priority-title">
            <div className="priority-index">01</div>
            <div>
              <p className="section-kicker">Критично до запуска 2 сентября</p>
              <h2 id="priority-title">Создать и опубликовать акцию предзаказа</h2>
              <p>Загрузить подготовленные товары, применить готовые текст и баннер, затем проверить отображение на сайте и в приложении.</p>
            </div>
            <span className="priority-state"><span className="status-dot danger" /> Единственный блокер</span>
          </section>
          <CampaignDashboard />
        </main>
      </div>
    </div>
  );
}
