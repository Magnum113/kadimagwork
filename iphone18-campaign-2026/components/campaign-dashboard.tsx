'use client';

import {
  Goal,
  MapPinned,
  MessageCircle,
  MonitorSmartphone,
  Radio,
  Send,
  ShoppingBag,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const companyHistory = [
  { series: 'iPhone 14', year: '2022', index: 63.1, isTarget: false },
  { series: 'iPhone 15', year: '2023', index: 22.8, isTarget: false },
  { series: 'iPhone 16', year: '2024', index: 45.9, isTarget: false },
  { series: 'iPhone 17', year: '2025', index: 100, isTarget: false },
  { series: 'iPhone 18', year: 'план 2026', index: 116.6, isTarget: true },
];

const onlineStoreMetrics = [
  ['Продажи net', '344', 'устройства'],
  ['Net-выручка', '≈ 44,9', 'млн ₽'],
  ['Net-прибыль', '≈ 839', 'тыс. ₽'],
];

const crmEvents = [
  { date: '03', channels: ['Push', 'Email'], title: 'Старт предзаказа', audience: 'Вся доступная база' },
  { date: '10', channels: ['SMS'], title: 'Коммуникация после презентации', audience: 'Приоритетные сегменты' },
  { date: '15', channels: ['Push', 'Email'], title: 'Последняя неделя предзаказа', audience: 'Вся доступная база' },
  { date: '19', channels: ['Push'], title: 'Последний день предзаказа', audience: 'Вся доступная база' },
];

const segments = [
  'Покупатели iPhone прошлых стартов',
  'Владельцы iPhone с покупкой за последние 2–4 года',
  'Премиум-клиенты',
  'Посетители лендинга iPhone 18 без заявки',
];

const preorderFormats = [
  ['Промостраница', 'Основная точка входа и форма заявки'],
  ['Акция на сайте и в приложении', 'Товары и условия предзаказа'],
  ['Push, Email, SMS', 'Запуск, напоминание и завершение предзаказа'],
  ['РСЯ / Яндекс Директ', 'Привлечение заявок'],
];

const launchFormats = [
  ['Промостраница', 'Информация о новинках и все предложения кампании'],
  ['Сторис на сайте и в приложении', 'Товары и подборки из кампании'],
  ['Акции и товарные подборки', 'Коммерческие предложения по категориям'],
  ['App Store / Google Play', 'Тематическое оформление страницы приложения'],
  ['Push, Email, SMS', 'Сегментированные коммуникации о старте и наличии'],
  ['РСЯ / Яндекс Директ', 'Привлечение покупателей'],
  ['Telegram Ads', 'Дополнительный охват'],
  ['Яндекс Карты / 2ГИС', 'Локальный трафик в магазины'],
];

const campaignMetrics = [
  ['Заявки на предзаказ', '40', 'Superset'],
  ['Компания · рост net-продаж', '+16,6%', 'Superset'],
  ['Компания · рост net-выручки', '+16,6% ориентир', 'Superset'],
  ['Компания · рост net-прибыли', '+16,6% ориентир', 'Superset'],
  ['Интернет-магазин · продажи net', '344', 'Superset'],
  ['Интернет-магазин · net-выручка', '≈ 44,9 млн ₽', 'Superset'],
  ['Интернет-магазин · net-прибыль', '≈ 839 тыс. ₽', 'Superset'],
  ['Расход РСЯ', '900 000 ₽', 'Яндекс Директ'],
  ['Трафик и конверсия промостраницы', 'Диагностика', 'Яндекс Метрика'],
  ['Отклики на CRM-коммуникации', 'Диагностика', 'CRM-отчёты'],
];

const team = [
  ['МК', 'Магомед Кадимагомедов', 'Кампания и онлайн-продвижение'],
  ['ЮБ', 'Юлия Бородина', 'CRM-маркетинг'],
  ['АУ', 'Амина Умарова', 'Тексты'],
  ['РЛ', 'Регина Лямина', 'Управление проектом'],
  ['КК', 'Камиль Казимов', 'Коммуникационная стратегия'],
  ['ОН', 'Омар Нахибашев', 'Арт-дирекшн'],
];

function FormatsTable({ rows }: { rows: string[][] }) {
  return (
    <Table className="format-table">
      <TableHeader>
        <TableRow><TableHead>Формат</TableHead><TableHead>Роль в кампании</TableHead></TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(([format, role]) => (
          <TableRow key={format}>
            <TableCell className="format-name">{format}</TableCell>
            <TableCell className="format-role">{role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function CampaignDashboard() {
  return (
    <>
      <section id="strategy" aria-labelledby="strategy-title">
        <div className="section-heading">
          <div><p className="section-kicker">Подход</p><h2 id="strategy-title">Стратегия и аудитория</h2></div>
          <p className="section-summary">Показать 05.ru как понятное и удобное место покупки нового iPhone.</p>
        </div>

        <div className="strategy-layout">
          <Card className="positioning-card">
            <CardHeader>
              <CardDescription>Позиционирование</CardDescription>
              <CardTitle>Новый iPhone удобно покупать в 05.ru</CardTitle>
            </CardHeader>
            <CardContent><p>Единое сообщение во всех каналах: новинка доступна, условия понятны, оформить покупку легко.</p></CardContent>
          </Card>

          <div className="objective-stack">
            <div className="objective-row"><span className="objective-icon"><ShoppingBag /></span><div><strong>Бизнес</strong><p>Рост net-продаж компании на 16,6%; интернет-магазин — 344 устройства net.</p></div></div>
            <div className="objective-row"><span className="objective-icon"><Goal /></span><div><strong>Маркетинг</strong><p>40 заявок на предзаказ.</p></div></div>
            <div className="objective-row"><span className="objective-icon"><MessageCircle /></span><div><strong>Коммуникация</strong><p>Поддержать выбор 05.ru на всём пути к покупке.</p></div></div>
          </div>
        </div>

        <div className="audience-panel">
          <div className="audience-intro"><Users /><div><p className="section-kicker">Основная аудитория</p><h3>Покупатели, которые планируют обновить iPhone</h3></div></div>
          <div className="audience-groups"><span>Покупатели прошлых стартов</span><span>Владельцы iPhone 11–16</span><span>Премиум-клиенты</span><span>Посетители лендинга</span></div>
        </div>
      </section>

      <section id="history" aria-labelledby="history-title">
        <div className="section-heading">
          <div><p className="section-kicker">Бизнес-метрики</p><h2 id="history-title">План основной фазы</h2></div>
          <p className="section-summary">Компания показана относительно запуска iPhone 17. Абсолютные цели приведены только для сайта и приложения.</p>
        </div>
        <Card className="chart-card">
          <CardHeader><CardTitle>Динамика net-продаж компании</CardTitle><CardDescription>Индекс: запуск iPhone 17 = 100 · период 20 сентября — 1 ноября</CardDescription></CardHeader>
          <CardContent>
            <figure className="history-chart" aria-label="Индекс net-продаж компании для запусков iPhone 14 — iPhone 17 и цель iPhone 18, где запуск iPhone 17 равен 100">
              <div className="target-line"><span>цель 116,6</span></div>
              <div className="history-bars">
                {companyHistory.map((item) => (
                  <div className={item.isTarget ? 'history-bar target' : 'history-bar'} key={item.series} aria-label={`${item.series}: индекс ${item.index.toLocaleString('ru-RU')}`}>
                    <strong>{item.index.toLocaleString('ru-RU')}</strong>
                    <span className="bar-track"><i style={{ height: `${Math.max((item.index / 116.6) * 100, 8)}%` }} /></span>
                    <b>{item.series}</b><small>{item.year}</small>
                  </div>
                ))}
              </div>
            </figure>
            <div className="chart-legend"><span><i className="legend-history" /> Индекс прошлых запусков</span><span><i className="legend-target" /> План 2026</span></div>
          </CardContent>
        </Card>
        <div className="online-metrics-heading">
          <div><p className="section-kicker">Абсолютные цели</p><h3>Интернет-магазин: сайт и приложение</h3></div>
          <p>Расчёт по CAGR запусков 2022–2025 и экономике одного устройства iPhone 17.</p>
        </div>
        <div className="online-metrics-grid">
          {onlineStoreMetrics.map(([label, value, unit]) => (
            <Card className="online-metric-card" key={label}>
              <CardHeader><CardDescription>{label}</CardDescription></CardHeader>
              <CardContent><p><strong>{value}</strong><span>{unit}</span></p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="crm" aria-labelledby="crm-title">
        <div className="section-heading">
          <div><p className="section-kicker">Период предзаказа</p><h2 id="crm-title">CRM-план</h2></div>
          <p className="section-summary">Push и Email — на всю базу. SMS — по приоритетным сегментам.</p>
        </div>
        <div className="crm-layout">
          <div className="crm-timeline">
            {crmEvents.map((event) => (
              <article className="crm-event" key={event.date}>
                <time dateTime={`2026-09-${event.date}`}><strong>{event.date}</strong><span>сент</span></time>
                <div className="event-body">
                  <div className="channel-badges">{event.channels.map((channel) => <Badge variant="outline" key={channel}>{channel}</Badge>)}</div>
                  <h3>{event.title}</h3><p>{event.audience}</p>
                </div>
              </article>
            ))}
          </div>
          <Card className="segment-card">
            <CardHeader><CardTitle>Приоритеты SMS</CardTitle></CardHeader>
            <CardContent><ol className="segment-list">{segments.map((segment, index) => <li key={segment}><span>{String(index + 1).padStart(2, '0')}</span><strong>{segment}</strong></li>)}</ol></CardContent>
          </Card>
        </div>
      </section>

      <section id="formats" aria-labelledby="formats-title">
        <div className="section-heading">
          <div><p className="section-kicker">Каналы</p><h2 id="formats-title">Форматы по этапам</h2></div>
          <p className="section-summary">На предзаказе — четыре ключевых формата. На старте продаж — полный набор онлайн-размещений.</p>
        </div>
        <Tabs defaultValue="preorder" className="format-tabs">
          <TabsList aria-label="Выбор этапа"><TabsTrigger value="preorder">Предзаказ</TabsTrigger><TabsTrigger value="launch">Старт продаж</TabsTrigger></TabsList>
          <TabsContent value="preorder"><Card className="table-card"><CardContent><FormatsTable rows={preorderFormats} /></CardContent></Card></TabsContent>
          <TabsContent value="launch"><Card className="table-card"><CardContent><FormatsTable rows={launchFormats} /></CardContent></Card></TabsContent>
        </Tabs>
      </section>

      <section id="paid" aria-labelledby="paid-title">
        <div className="section-heading">
          <div><p className="section-kicker">Платное продвижение</p><h2 id="paid-title">Бюджет и каналы</h2></div>
        </div>
        <div className="paid-grid">
          <Card className="budget-card">
            <CardHeader><CardTitle>РСЯ</CardTitle><CardDescription>Общий бюджет кампании</CardDescription></CardHeader>
            <CardContent><div className="budget-total">900 000 ₽</div><div className="budget-bar" aria-label="33,3 процента на предзаказ и 66,7 процента на старт продаж"><span className="budget-preorder" /><span className="budget-launch" /></div><div className="budget-labels"><span><i className="budget-dot preorder" /><strong>300 000 ₽</strong> Предзаказ</span><span><i className="budget-dot launch" /><strong>600 000 ₽</strong> Старт продаж</span></div></CardContent>
          </Card>
          <div className="channel-stack">
            <div className="channel-row"><span className="channel-icon"><Radio /></span><div><strong>РСЯ / Яндекс Директ</strong><p>Предзаказ и старт продаж</p></div></div>
            <div className="channel-row"><span className="channel-icon"><Send /></span><div><strong>Telegram Ads</strong><p>Старт продаж</p></div></div>
            <div className="channel-row"><span className="channel-icon"><MapPinned /></span><div><strong>Яндекс Карты и 2ГИС</strong><p>Старт продаж и локальный трафик</p></div></div>
          </div>
        </div>
      </section>

      <section id="messaging" aria-labelledby="messaging-title">
        <div className="section-heading">
          <div><p className="section-kicker">Коммуникация</p><h2 id="messaging-title">Сообщения по этапам</h2></div>
        </div>
        <div className="message-wave-grid">
          <Card className="message-wave active"><CardHeader><Badge variant="secondary">Предзаказ</Badge><CardTitle>Оформить предзаказ</CardTitle><CardDescription>Получить iPhone 18 одним из первых.</CardDescription></CardHeader></Card>
          <Card className="message-wave"><CardHeader><Badge variant="outline">Старт продаж</Badge><CardTitle>Новые iPhone в продаже</CardTitle><CardDescription>Коммуникация первых недель запуска.</CardDescription></CardHeader></Card>
          <Card className="message-wave"><CardHeader><Badge variant="outline">Основная фаза</Badge><CardTitle>iPhone 18 есть в 05.ru</CardTitle><CardDescription>Коммуникация о наличии до 1 ноября.</CardDescription></CardHeader></Card>
        </div>
      </section>

      <section id="tracking" aria-labelledby="tracking-title">
        <div className="section-heading">
          <div><p className="section-kicker">Оценка результата</p><h2 id="tracking-title">Метрики кампании</h2></div>
          <p className="section-summary">Факт будет обновляться по мере прохождения кампании.</p>
        </div>
        <Card className="table-card">
          <CardContent>
            <Table className="scorecard-table">
              <TableHeader><TableRow><TableHead>Метрика</TableHead><TableHead>План</TableHead><TableHead>Источник</TableHead></TableRow></TableHeader>
              <TableBody>{campaignMetrics.map(([metric, plan, source]) => <TableRow key={metric}><TableCell className="score-metric">{metric}</TableCell><TableCell className="score-plan">{plan}</TableCell><TableCell className="score-source">{source}</TableCell></TableRow>)}</TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="tracking-rules">
          <div><strong>Ежедневно</strong><span>заявки и продажи</span></div>
          <div><strong>Еженедельно</strong><span>динамика относительно плана</span></div>
          <div><strong>По итогам этапа</strong><span>результат и выводы</span></div>
        </div>
      </section>

      <section id="owners" aria-labelledby="owners-title">
        <div className="section-heading"><div><p className="section-kicker">Команда</p><h2 id="owners-title">Ответственные</h2></div></div>
        <div className="owner-grid">
          {team.map(([initials, name, role], index) => <div className={index === 0 ? 'owner-card lead' : 'owner-card'} key={name}><span>{initials}</span><div><strong>{name}</strong><p>{role}</p></div></div>)}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><span>05</span><strong>Рекламная кампания iPhone 18</strong></div>
        <a href="https://05.ru/promo/iphone18/" target="_blank" rel="noreferrer"><MonitorSmartphone /> Промостраница</a>
        <p>Данные на 01.09.2026</p>
      </footer>
    </>
  );
}
