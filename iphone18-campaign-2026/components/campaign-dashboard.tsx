'use client';

import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Circle,
  CircleDollarSign,
  Clock3,
  FileText,
  Goal,
  Mail,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const history = [
  { series: 'iPhone 14', year: '2022', net: 2083, isTarget: false },
  { series: 'iPhone 15', year: '2023', net: 752, isTarget: false },
  { series: 'iPhone 16', year: '2024', net: 1516, isTarget: false },
  { series: 'iPhone 17', year: '2025', net: 3301, isTarget: false },
  { series: 'iPhone 18', year: 'план 2026', net: 3850, isTarget: true },
];

const crmEvents = [
  { date: '03', month: 'сент', channels: ['Push', 'Email'], title: 'Предзаказ открыт', description: 'Основная коммуникация на всю доступную базу. Ведём к заявке на лендинге.', status: 'Готово к отправке', ready: true },
  { date: '10', month: 'сент', channels: ['SMS'], title: 'После презентации', description: 'Используем только подтверждённые детали iPhone 18. Отправка по четырём приоритетным сегментам.', status: 'В плане', ready: false },
  { date: '15', month: 'сент', channels: ['Push', 'Email'], title: 'Последняя неделя', description: 'Напоминание всей базе о завершении предзаказа при сохранении даты старта 20 сентября.', status: 'В плане', ready: false },
  { date: '19', month: 'сент', channels: ['Push'], title: 'Последний день', description: 'FOMO-коммуникация: успеть оформить предзаказ до переключения на продажи.', status: 'В плане', ready: false },
];

const segments = [
  ['01', 'Покупатели прошлых стартов', 'Покупали iPhone в первые 30 дней запусков 2023–2025 годов.'],
  ['02', 'Владельцы iPhone', 'Покупали iPhone за последние 2–4 года и не вошли в первый приоритет.'],
  ['03', 'Премиум-клиенты', 'Высокий средний чек, дорогая техника Apple или флагманские смартфоны.'],
  ['04', 'Интересовались iPhone 18', 'Заходили на лендинг, но не оформили предзаказ.'],
];

const preorderFormats = [
  ['Промостраница', 'Центральная точка и форма заявки', 'ready', 'ready', 'ready'],
  ['Акция сайта / приложения', 'Отдельный вход в механику', 'ready', 'ready', 'blocked'],
  ['РСЯ / Яндекс Директ', 'Привлечение заявок', 'ready', 'ready', 'ready'],
  ['Push, Email, SMS', 'Запуск, прогрев и FOMO', 'ready', 'ready', 'ready'],
];

const launchFormats = [
  ['Промостраница', 'Продажа и сбор всех предложений', 'working', 'empty', 'empty'],
  ['Сторис сайта / приложения', 'Товары, предложения и подборки', 'working', 'empty', 'empty'],
  ['Акции и подборки', 'Коммерческие предложения и допродажи', 'working', 'empty', 'empty'],
  ['App Store / Google Play', 'Тематические страницы приложения', 'working', 'empty', 'empty'],
  ['РСЯ / Яндекс Директ', 'Привлечение покупок', 'working', 'empty', 'empty'],
  ['Telegram Ads', 'Дополнительный платный охват', 'working', 'empty', 'empty'],
  ['Яндекс Карты / 2ГИС', 'Локальный трафик в магазины', 'working', 'empty', 'empty'],
  ['Push, Email, SMS', 'Сегментированный перевод в покупку', 'empty', 'empty', 'empty'],
];

const approvedHeadlines = [
  'iPhone 18 — будьте среди первых',
  'Новый iPhone 18 начинается с предзаказа',
  'Ваш новый iPhone 18 уже ближе',
  'iPhone 18 — тот самый повод обновиться',
  'Пора обновляться на iPhone 18',
];

const approvedDescriptions = [
  'Оформите предзаказ в 05.ru и получите iPhone 18 одним из первых.',
  'Предзакажите iPhone 18 в 05.ru — поможем быстро и понятно всё оформить.',
  'Сделайте шаг к новому iPhone 18 — оформите предзаказ в 05.ru.',
];

const preorderScorecard = [
  ['Заявки на предзаказ', '40', '—', 'Superset · ex_client_bids'],
  ['Расход РСЯ', '300 000 ₽', '—', 'Яндекс Директ'],
  ['Заявки из РСЯ', 'После медиаплана', '—', 'Директ + Superset'],
  ['CPL РСЯ', 'После медиаплана', '—', 'Расчёт'],
  ['Заявки из CRM', 'После CRM-плана', '—', 'CRM + Superset'],
  ['Трафик лендинга', 'Диагностика', '—', 'Яндекс Метрика'],
];

const launchScorecard = [
  ['Продажи iPhone 18, net', '3 850', '—', 'Superset · si_sales_documents_new_ex'],
  ['Net-выручка', '≈ 490,5 млн ₽', '—', 'Продажная витрина'],
  ['Net-прибыль', '≈ 7,3 млн ₽', '—', 'Продажная витрина'],
  ['Расход РСЯ', '600 000 ₽', '—', 'Яндекс Директ'],
  ['Покупки из РСЯ', 'После медиаплана', '—', 'Директ + продажи'],
  ['CPA / ROMI РСЯ', 'Согласовать методику', '—', 'Расчёт'],
];

const tasks = [
  ['Сейчас', 'Создать акцию предзаказа, загрузить товары, опубликовать и проверить.', 'blocker'],
  ['До 9 сентября', 'Поставить обновление промостраницы после презентации.', 'next'],
  ['До 15 сентября', 'Передать Амине оффер, поля и требования для двух волн текстов.', 'next'],
  ['Основная фаза', 'Получить предложения, акции и товарные списки от отделов продаж.', 'next'],
  ['Основная фаза', 'Получить медиаплан РСЯ, Telegram, Яндекс Карт и 2ГИС.', 'next'],
  ['Основная фаза', 'Получить CRM-план со старта продаж до 1 ноября.', 'next'],
  ['После текстов', 'Поставить единый комплект дизайна и задачи на размещение.', 'next'],
];

function StatusCell({ status }: { status: string }) {
  if (status === 'ready') return <span className="matrix-status ready"><Check /> Готово</span>;
  if (status === 'working') return <span className="matrix-status working"><Clock3 /> В работе</span>;
  if (status === 'blocked') return <span className="matrix-status blocked"><AlertTriangle /> Блокер</span>;
  return <span className="matrix-status empty"><Circle /> Не начато</span>;
}

function FormatsTable({ rows }: { rows: string[][] }) {
  return (
    <Table className="format-table">
      <TableHeader><TableRow><TableHead>Формат</TableHead><TableHead>Роль</TableHead><TableHead>Текст</TableHead><TableHead>Дизайн</TableHead><TableHead>Размещение</TableHead></TableRow></TableHeader>
      <TableBody>
        {rows.map(([format, role, copy, design, placement]) => (
          <TableRow key={format}>
            <TableCell className="format-name">{format}</TableCell><TableCell className="format-role">{role}</TableCell>
            <TableCell><StatusCell status={copy} /></TableCell><TableCell><StatusCell status={design} /></TableCell><TableCell><StatusCell status={placement} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function Scorecard({ rows }: { rows: string[][] }) {
  return (
    <Table className="scorecard-table">
      <TableHeader><TableRow><TableHead>Метрика</TableHead><TableHead>План</TableHead><TableHead>Факт</TableHead><TableHead>Источник</TableHead></TableRow></TableHeader>
      <TableBody>{rows.map(([metric, plan, actual, source]) => <TableRow key={metric}><TableCell className="score-metric">{metric}</TableCell><TableCell className="score-plan">{plan}</TableCell><TableCell><span className="pending-value">{actual}</span></TableCell><TableCell className="score-source">{source}</TableCell></TableRow>)}</TableBody>
    </Table>
  );
}

export function CampaignDashboard() {
  return (
    <>
      <section id="strategy" aria-labelledby="strategy-title">
        <div className="section-heading">
          <div><p className="section-kicker">Стратегическая рамка</p><h2 id="strategy-title">Не «почему новый iPhone»,<br />а «почему именно в 05.ru»</h2></div>
          <p className="section-summary">На перегретом рынке новинка сама по себе не отличает бренд. 05.ru должен дать человеку понятную причину решиться.</p>
        </div>
        <div className="strategy-layout">
          <Card className="big-idea-card">
            <CardHeader><Badge className="idea-badge">Креативная идея</Badge><CardTitle>Достойное алиби</CardTitle></CardHeader>
            <CardContent><blockquote>05.ru — знакомый «соучастник»: понимает желание обновиться, не осуждает и помогает оформить покупку понятно и удобно.</blockquote></CardContent>
          </Card>
          <div className="objective-stack">
            <div className="objective-row"><span className="objective-icon"><ShoppingBag /></span><div><strong>Бизнес</strong><p>Продать не менее 3 850 устройств iPhone 18 net.</p></div></div>
            <div className="objective-row"><span className="objective-icon"><Goal /></span><div><strong>Маркетинг</strong><p>Собрать 40 предзаказов и привести релевантный спрос.</p></div></div>
            <div className="objective-row"><span className="objective-icon"><MessageCircle /></span><div><strong>Коммуникация</strong><p>Сделать 05.ru первым понятным местом выбора новой модели.</p></div></div>
          </div>
        </div>

        <div className="audience-panel">
          <div className="audience-intro"><Users /><div><p className="section-kicker">Приоритетная аудитория</p><h3>Уже хотят новый iPhone,<br />но ещё выбирают продавца</h3></div></div>
          <div className="audience-groups"><span>Импульсивные апгрейдеры · iPhone 11–16</span><span>Рациональные покупатели</span><span>Покупатели прошлых стартов</span><span>Премиум-клиенты</span></div>
        </div>
      </section>

      <section id="history" aria-labelledby="history-title">
        <div className="section-heading">
          <div><p className="section-kicker">Основание плана</p><h2 id="history-title">История запусков и цель 2026</h2></div>
          <p className="section-summary">План 3 850 рассчитан по CAGR 16,59% между запусками iPhone 14 и 17. Рост 2025 года напрямую не переносился.</p>
        </div>
        <div className="history-grid">
          <Card className="chart-card">
            <CardHeader><CardTitle>Продажи смартфонов net</CardTitle><CardDescription>Сопоставимый период: 20 сентября — 1 ноября</CardDescription></CardHeader>
            <CardContent>
              <figure className="history-chart" aria-label="Продажи iPhone 14 — iPhone 17 и план iPhone 18 в устройствах net">
                <div className="target-line"><span>цель 3 850</span></div>
                <div className="history-bars">
                  {history.map((item) => (
                    <div className={item.isTarget ? 'history-bar target' : 'history-bar'} key={item.series} aria-label={`${item.series}: ${item.net.toLocaleString('ru-RU')} устройств net`}>
                      <strong>{item.net.toLocaleString('ru-RU')}</strong>
                      <span className="bar-track"><i style={{ height: `${Math.max((item.net / 3850) * 100, 8)}%` }} /></span>
                      <b>{item.series}</b><small>{item.year}</small>
                    </div>
                  ))}
                </div>
              </figure>
              <div className="chart-legend"><span><i className="legend-history" /> История</span><span><i className="legend-target" /> План iPhone 18</span></div>
            </CardContent>
          </Card>
          <div className="finance-stack">
            <Card className="finance-card"><CardHeader><CircleDollarSign /><CardDescription>Расчётный ориентир net-выручки</CardDescription></CardHeader><CardContent><p>≈ 490,5 млн ₽</p><small>при среднем уровне iPhone 17</small></CardContent></Card>
            <Card className="finance-card"><CardHeader><BarChart3 /><CardDescription>Расчётный ориентир net-прибыли</CardDescription></CardHeader><CardContent><p>≈ 7,3 млн ₽</p><small>пересчитать после цен и микса</small></CardContent></Card>
            <div className="method-note"><strong>Важно</strong><p>Финансовые значения — ориентиры. Жёстко утверждённый план основной фазы — 3 850 устройств net.</p></div>
          </div>
        </div>
      </section>

      <section id="crm" aria-labelledby="crm-title">
        <div className="section-heading">
          <div><p className="section-kicker">CRM-маркетинг · предзаказ</p><h2 id="crm-title">Четыре волны коммуникации</h2></div>
          <p className="section-summary">Push и Email — вся доступная база. SMS — только приоритетные сегменты после презентации.</p>
        </div>
        <div className="crm-layout">
          <div className="crm-timeline">
            {crmEvents.map((event) => (
              <article className={event.ready ? 'crm-event ready' : 'crm-event'} key={event.date}>
                <time><strong>{event.date}</strong><span>{event.month}</span></time>
                <div className="event-body"><div className="event-top"><div className="channel-badges">{event.channels.map((channel) => <Badge variant="outline" key={channel}>{channel}</Badge>)}</div><span className={event.ready ? 'event-status ready' : 'event-status'}>{event.ready ? <CheckCircle2 /> : <Clock3 />}{event.status}</span></div><h3>{event.title}</h3><p>{event.description}</p></div>
              </article>
            ))}
          </div>
          <Card className="segment-card">
            <CardHeader><CardTitle>Приоритет SMS</CardTitle><CardDescription>Один клиент должен попадать в наивысший доступный приоритет.</CardDescription></CardHeader>
            <CardContent><ol className="segment-list">{segments.map(([number, title, description]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div></li>)}</ol></CardContent>
          </Card>
        </div>
      </section>

      <section id="formats" aria-labelledby="formats-title">
        <div className="section-heading">
          <div><p className="section-kicker">Производство и размещение</p><h2 id="formats-title">Матрица форматов</h2></div>
          <p className="section-summary">Готовность читается по цепочке: текст → дизайн → размещение. Готовый баннер ещё не означает опубликованный формат.</p>
        </div>
        <Tabs defaultValue="preorder" className="format-tabs">
          <TabsList aria-label="Выбор фазы"><TabsTrigger value="preorder">Предзаказ · 4 формата</TabsTrigger><TabsTrigger value="launch">Старт продаж · все форматы</TabsTrigger></TabsList>
          <TabsContent value="preorder"><Card className="table-card"><CardContent><FormatsTable rows={preorderFormats} /></CardContent></Card></TabsContent>
          <TabsContent value="launch"><Card className="table-card"><CardContent><FormatsTable rows={launchFormats} /></CardContent></Card></TabsContent>
        </Tabs>
      </section>

      <section id="paid" aria-labelledby="paid-title">
        <div className="section-heading">
          <div><p className="section-kicker">Интернет-маркетинг</p><h2 id="paid-title">РСЯ — 900 тысяч рублей</h2></div>
          <p className="section-summary">Медиапланы Telegram Ads, Яндекс Карт и 2ГИС ещё должны быть подготовлены интернет-маркетологом.</p>
        </div>
        <div className="paid-grid">
          <Card className="budget-card">
            <CardHeader><CardTitle>Распределение РСЯ</CardTitle><CardDescription>Подтверждённый бюджет двух фаз</CardDescription></CardHeader>
            <CardContent><div className="budget-total">900 000 ₽</div><div className="budget-bar" aria-label="33,3 процента на предзаказ и 66,7 процента на старт продаж"><span className="budget-preorder" /><span className="budget-launch" /></div><div className="budget-labels"><span><i className="budget-dot preorder" /><strong>300 000 ₽</strong> Предзаказ · 33,3%</span><span><i className="budget-dot launch" /><strong>600 000 ₽</strong> Продажи · 66,7%</span></div></CardContent>
          </Card>
          <div className="channel-stack">
            <div className="channel-row"><span className="channel-icon"><Radio /></span><div><strong>РСЯ / Директ</strong><p>Предзаказ готов. Для продаж нужны медиаплан, аудитории и задача на запуск.</p></div><Badge className="soft-success">Готово к 02.09</Badge></div>
            <div className="channel-row"><span className="channel-icon"><Send /></span><div><strong>Telegram Ads</strong><p>Канал подтверждён для основной фазы; бюджет и требования не определены.</p></div><Badge variant="outline">Нужен план</Badge></div>
            <div className="channel-row"><span className="channel-icon"><MapPinned /></span><div><strong>Яндекс Карты + 2ГИС</strong><p>Баннеры и сторис для локального трафика в магазины.</p></div><Badge variant="outline">Нужен план</Badge></div>
          </div>
        </div>
      </section>

      <section id="messaging" aria-labelledby="messaging-title">
        <div className="section-heading">
          <div><p className="section-kicker">Сообщения и тексты</p><h2 id="messaging-title">Предзаказ утверждён.<br />Продажи — две волны.</h2></div>
          <p className="section-summary">Копирайтер Амина Умарова готовит отдельные версии «старт продаж» и «новые iPhone есть в 05.ru» к 15 сентября.</p>
        </div>
        <div className="message-wave-grid">
          <Card className="message-wave active"><CardHeader><Badge variant="secondary">Сейчас</Badge><CardTitle>Оформить предзаказ</CardTitle><CardDescription>Получить новый iPhone одним из первых и пройти понятное оформление в 05.ru.</CardDescription></CardHeader><CardContent><strong>CTA: Оформить предзаказ</strong></CardContent></Card>
          <Card className="message-wave"><CardHeader><Badge variant="outline">Волна 1</Badge><CardTitle>Старт продаж</CardTitle><CardDescription>Новые iPhone уже в продаже. Использование — первые 1–2 недели.</CardDescription></CardHeader><CardContent><strong>CTA: Купить / выбрать модель</strong></CardContent></Card>
          <Card className="message-wave"><CardHeader><Badge variant="outline">Волна 2</Badge><CardTitle>Есть в 05.ru</CardTitle><CardDescription>Постоянная коммуникация о наличии до завершения кампании.</CardDescription></CardHeader><CardContent><strong>CTA: Купить / найти магазин</strong></CardContent></Card>
        </div>
        <div className="approved-copy-grid">
          <Card><CardHeader><CardTitle>5 заголовков РСЯ</CardTitle><CardDescription>Автор: Магомед · утверждены на весь предзаказ</CardDescription></CardHeader><CardContent><ol className="copy-list">{approvedHeadlines.map((item) => <li key={item}><Check />{item}</li>)}</ol></CardContent></Card>
          <Card><CardHeader><CardTitle>3 описания РСЯ</CardTitle><CardDescription>Все варианты укладываются в лимит 80 символов</CardDescription></CardHeader><CardContent><ol className="copy-list descriptions">{approvedDescriptions.map((item) => <li key={item}><Check />{item}</li>)}</ol></CardContent></Card>
        </div>
      </section>

      <section id="tracking" aria-labelledby="tracking-title">
        <div className="section-heading">
          <div><p className="section-kicker">Центр метрик</p><h2 id="tracking-title">План-факт кампании</h2></div>
          <div className="data-freshness"><Clock3 /> Данные ещё не поступали · срез 01.09</div>
        </div>
        <div className="tracking-callout"><Radio /><div><strong>Кампания ещё не запущена</strong><p>Факт будет заполняться из Superset, Яндекс Директа, CRM и Метрики. Дневная траектория не нарисована: распределение плана по дням пока не утверждено.</p></div></div>
        <Tabs defaultValue="preorder" className="tracking-tabs">
          <TabsList aria-label="Scorecard по фазам"><TabsTrigger value="preorder">Предзаказ</TabsTrigger><TabsTrigger value="launch">Старт продаж</TabsTrigger></TabsList>
          <TabsContent value="preorder"><Card className="table-card"><CardContent><Scorecard rows={preorderScorecard} /></CardContent></Card></TabsContent>
          <TabsContent value="launch"><Card className="table-card"><CardContent><Scorecard rows={launchScorecard} /></CardContent></Card></TabsContent>
        </Tabs>
        <div className="tracking-rules">
          <div><strong>09:30 ежедневно</strong><span>факт за завершённый день</span></div><ArrowRight /><div><strong>По понедельникам</strong><span>недельный вывод и прогноз</span></div><ArrowRight /><div><strong>На смене фазы</strong><span>фиксация результата этапа</span></div>
        </div>
      </section>

      <section id="tasks" aria-labelledby="tasks-title">
        <div className="section-heading">
          <div><p className="section-kicker">Рабочий фокус</p><h2 id="tasks-title">Что делать дальше</h2></div>
          <p className="section-summary">Сначала закрыть единственный блокер запуска, параллельно запустить подготовку основной фазы.</p>
        </div>
        <div className="task-list">{tasks.map(([when, task, tone], index) => <article className={`task-row ${tone}`} key={task}><span className="task-number">{String(index + 1).padStart(2, '0')}</span><div><small>{when}</small><strong>{task}</strong></div><span className="task-state">{tone === 'blocker' ? <AlertTriangle /> : <Clock3 />}{tone === 'blocker' ? 'Блокирует запуск' : 'Следующий шаг'}</span></article>)}</div>
      </section>

      <section id="owners" aria-labelledby="owners-title">
        <div className="section-heading"><div><p className="section-kicker">Команда и ответственность</p><h2 id="owners-title">Кто ведёт кампанию</h2></div></div>
        <div className="owner-grid">
          <div className="owner-card lead"><span>МК</span><div><strong>Магомед Кадимагомедов</strong><p>Онлайн-стратегия, промомеханики, аналитика, тексты и дизайн</p></div></div>
          <div className="owner-card"><span>ЮБ</span><div><strong>Юлия Бородина</strong><p>CRM-стратегия, сегменты, календарь и рассылки</p></div></div>
          <div className="owner-card"><span>АУ</span><div><strong>Амина Умарова</strong><p>Две волны текстов основной фазы · дедлайн 15.09</p></div></div>
          <div className="owner-card"><span>РЛ</span><div><strong>Регина Лямина</strong><p>Проджект рекламной кампании</p></div></div>
          <div className="owner-card"><span>КК</span><div><strong>Камиль Казимов</strong><p>Креативная идея и коммуникационная стратегия</p></div></div>
          <div className="owner-card"><span>ОН</span><div><strong>Омар Нахибашев</strong><p>Арт-дирекшн и визуальная система РК</p></div></div>
        </div>
      </section>

      <section className="sources-section" id="sources" aria-labelledby="sources-title">
        <div><p className="section-kicker">Источники и ссылки</p><h2 id="sources-title">Рабочая база страницы</h2><p>Сайт собран по актуальному срезу документов кампании на 1 сентября 2026 года. Неподтверждённые значения помечены как ожидающие плана или факта.</p></div>
        <div className="source-links">
          <a href="https://05.ru/promo/iphone18/" target="_blank" rel="noreferrer"><MonitorSmartphone /> Промостраница</a>
          <a href="https://05tech.kaiten.ru/69495589" target="_blank" rel="noreferrer"><Radio /> РСЯ · 69495589</a>
          <a href="https://05tech.kaiten.ru/69268318" target="_blank" rel="noreferrer"><Mail /> CRM · 69268318</a>
          <a href="https://05tech.kaiten.ru/69503770" target="_blank" rel="noreferrer"><FileText /> Тексты · 69503770</a>
        </div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><span>05</span><strong>iPhone 18 · Campaign Control</strong></div><p>Версия 1.0 · данные на 01.09.2026</p></footer>
    </>
  );
}
