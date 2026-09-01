# Design QA — hero iPhone 18

## Источники

- Референс Apple: `/var/folders/6m/dl3gj2gx6pn7c_9fqs1k4lsr0000gn/T/codex-clipboard-83781877-987b-4807-a7c4-0817a633ceb8.png`
- Реализация, desktop: `/tmp/iphone18-hero-qa/desktop.png`
- Реализация, mobile: `/tmp/iphone18-hero-qa/mobile.png`
- Совмещенное сравнение: `/tmp/iphone18-hero-qa/comparison.png`

## Условия проверки

- Desktop: `1440 × 900`, device pixel ratio `2`.
- Mobile: `390 × 844`, device pixel ratio `2`.
- Состояние: авторизованная страница `/promo/iphone2026`, начало страницы.

## Сравнение

1. Первый проход: референс Apple и desktop-реализация открыты в одном сравнительном изображении.
2. Сохранена ключевая визуальная идея референса: единый светло-синий фон, крупное светящееся яблоко, белая типографика и минимум декоративных элементов.
3. Осознанное отличие от референса: текст кампании расположен слева, яблоко справа — по задаче пользователя и для сохранения всей необходимой информации о РК.
4. На mobile изображение остается фоном hero-блока, яблоко вынесено наверх, текст читается на затемненном градиенте и не выходит за границы карточки.

## Найденные проблемы

- P1: нет.
- P2: нет.
- P3: нет.

## Проверки

- Композиция desktop: passed.
- Композиция mobile: passed.
- Читаемость текста и метаданных: passed.
- Изображение не растянуто и сохраняет пропорции: passed.
- Скругления и отступы согласованы с остальной страницей: passed.

## Final result

passed

## Apple Design audit — 01.09.2026

### Исправлено

- Purpose / simplicity: удалено повторяющееся пояснение из боковой навигации; производственные задачи не добавляются на презентационную страницу.
- Familiarity / wayfinding: активный пункт desktop- и mobile-навигации синхронизируется с фактически видимым разделом и получает `aria-current="location"`.
- Response: ссылки, вкладки и кнопка входа дают мгновенный press-feedback; действие не задерживается анимацией.
- Typography: Inter удалён; используется системный стек платформы с отдельной display-ролью, оптической настройкой и tabular nums.
- Materials: sticky topbar и mobile-nav используют translucent material со scroll-edge тенью вместо жёсткого разделителя.
- Accessibility: добавлены skip-link, заметный общий focus, `prefers-reduced-transparency`, `prefers-contrast: more` и более мягкий `prefers-reduced-motion` без потери цветовой обратной связи.
- Spatial consistency: мобильная навигация удерживает активный пункт в видимой области, якоря учитывают sticky chrome.
- Brand consistency: в footer используется тот же логотип 05.ru, что в header и login.

### Осознанно не добавлено

- Пружинные и momentum-анимации: на странице нет drag/swipe/sheet-взаимодействий, поэтому они не решают пользовательскую задачу.
- Параллакс и анимация hero: постоянное движение отвлекало бы от целей и KPI кампании.
- Звуки и haptics: у информационной страницы нет значимого действия, которое оправдывает multimodal feedback.

### Проверка

- Desktop `1440 × 900`: passed.
- Mobile `390 × 844`: passed, горизонтального overflow нет.
- Scroll-spy desktop / mobile: passed.
- Tabs: passed, выбранная панель и `aria-selected` синхронизированы.
- Интерактивные зоны меньше `24 × 24px`: не найдены.
- Последовательность заголовков `h1–h3`: passed.
- Browser console errors / warnings: не найдены.
- Lint, TypeScript, production build: passed.

### Final result

passed
