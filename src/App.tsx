import {
  ArrowRight,
  BadgeCheck,
  Bot,
  ClipboardList,
  ExternalLink,
  LineChart,
  MapPinned,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  ShoppingBasket,
  Sparkles
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const evidence = [
  {
    title: "Готовые блюда для B2B-витрин",
    text: "Публичный B2B-сайт Caloristika говорит о готовых блюдах для кофеен, кафе, фитнес-клубов, вендинга, апарт-отелей и досуговых центров.",
    href: "https://caloristikab2b.ru/"
  },
  {
    title: "Личный кабинет уже заявлен",
    text: "Demo показывает CRM-контур продаж поверх публичного B2B-сценария: лиды, дегустации, пилоты, SKU-матрицы и повторные заказы.",
    href: "https://caloristikab2b.ru/"
  },
  {
    title: "Публичный контакт для входа",
    text: "На сайте указаны Санкт-Петербург, телефон +7 (911) 134-30-00 и food.b2b@caloristika.ru.",
    href: "https://caloristikab2b.ru/feedback"
  }
]

const demoMetrics = [
  ["98", "компаний в laptop demo-базе"],
  ["11", "публичных demo SKU Caloristika"],
  ["5", "стадий уже заполнены сделками"],
  ["3", "demo-заказа для показа повтора"]
]

const segments = [
  ["Кофейни и пекарни", "Допродажа сырников, десертов, салатов и горячих блюд к кофе без кухни."],
  ["Кофейные сети", "Единая матрица по нескольким точкам, дегустации, контроль списаний и повтор."],
  ["Вендинг и микромаркеты", "Полезная готовая еда для холодильников самообслуживания и офисных маршрутов."],
  ["Офисы и БЦ", "Холодильник готовой еды для сотрудников, где важны график, остатки и повторный заказ."],
  ["Кампусы", "Быстрые завтраки и обеды для дневного трафика без очереди в столовой."]
]

const workflow = [
  {
    icon: MapPinned,
    title: "Лид найден",
    text: "CRM собирает публичный адрес, сайт, 2ГИС/карты, контакт и примерное время до точки."
  },
  {
    icon: PhoneCall,
    title: "Квалификация",
    text: "Менеджер видит сегмент, fit, score, риск списаний и следующий вопрос для ЛПР."
  },
  {
    icon: PackageCheck,
    title: "Матрица SKU",
    text: "Подбирается короткий запуск под формат: кофе, микромаркет, офис, кампус или фитнес."
  },
  {
    icon: ShoppingBasket,
    title: "Пилот и повтор",
    text: "Пробная поставка превращается в повторный заказ, а следующий шаг остается в задачах менеджера."
  },
  {
    icon: Bot,
    title: "AI-задачи",
    text: "AI-агенты готовят письмо, скрипт, follow-up, SKU-рекомендацию и enrichment."
  }
]

const packages = [
  {
    title: "Demo на встречу",
    price: "готово на laptop",
    text: "Показать Caloristika персональную CRM с их сегментами, продуктами, лидами и pipeline.",
    items: ["Caloristika SQLite demo DB", "GitHub Pages landing", "CRM запуск через env DB path"]
  },
  {
    title: "Пилот на 14 дней",
    price: "280-450 тыс. ₽",
    text: "Проверить один сегмент и дать менеджеру конкретные задачи от лида до дегустации.",
    items: ["30-50 проверенных B2B-лидов", "5 дегустаций", "SKU-матрицы и repeat-order контроль"]
  },
  {
    title: "Масштабирование",
    price: "90-180 тыс. ₽/мес",
    text: "Каждый месяц добавлять сегменты, лиды, enrichment и AI-операции для менеджеров.",
    items: ["Новые лиды СПб", "Контроль повторов", "AI-задачи и отчеты по воронке"]
  }
]

const objections = [
  {
    q: "У нас уже есть личный кабинет",
    a: "Кабинет принимает заказ. Эта CRM ведет до заказа: где искать партнеров, кому звонить, какую матрицу дать на дегустацию и когда дожимать повтор."
  },
  {
    q: "У нас уже есть база клиентов",
    a: "Тогда первый эффект быстрее: импортируем базу, добавляем сегменты, score, 2ГИС/открытые источники, статусы и следующие действия."
  },
  {
    q: "Как встроить в текущий контур",
    a: "Демо можно вести отдельно от текущего контура. Если пилот дает повторы, интегрируем через API, Telegram, выгрузки или MCP."
  }
]

function SectionHeading({
  label,
  title,
  children
}: {
  label: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto mb-8 flex max-w-5xl flex-col gap-4">
      <Badge variant="outline" className="w-fit border-primary/30 text-primary">
        {label}
      </Badge>
      <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-normal md:text-5xl">{title}</h2>
      {children ? <div className="max-w-3xl text-lg leading-8 text-muted-foreground">{children}</div> : null}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a className="flex items-center gap-3 font-semibold" href="#top" aria-label="Caloristika CRM Demo">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground">C</span>
            <span>Caloristika CRM Demo</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground lg:flex" aria-label="Навигация">
            <a className="hover:text-foreground" href="#evidence">
              Основание
            </a>
            <a className="hover:text-foreground" href="#demo">
              Что показать
            </a>
            <a className="hover:text-foreground" href="#workflow">
              Процесс
            </a>
            <a className="hover:text-foreground" href="#offer">
              Оффер
            </a>
          </nav>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="mailto:food.b2b@caloristika.ru?subject=CRM%20demo%20for%20Caloristika">
              Контакт Caloristika
            </a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-border px-5 py-12 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-7">
              <Badge variant="accent" className="w-fit">
                Персональное demo для B2B ready-to-eat в Санкт-Петербурге
              </Badge>
              <div className="flex flex-col gap-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-normal md:text-7xl">
                  CRM для B2B-продаж готовой еды: от первого интереса до повторного заказа
                </h1>
                <p className="max-w-3xl text-xl leading-8 text-muted-foreground md:text-2xl">
                  Когда поставщик готовой еды запускает B2B-продажи, команде нужно быстро понять,
                  какие компании подходят, что предложить каждому сегменту, как провести дегустацию,
                  принять первый заказ и закрепить повтор. Demo собирает этот путь в одном рабочем месте:
                  лиды СПб, сегменты, SKU-матрицы, дегустации, заказы, Telegram-каталог и AI-задачи менеджеру.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#demo">
                    Что открыть на встрече
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="https://github.com/egoriklok/caloristika-b2b-crm-demo" target="_blank" rel="noreferrer">
                    GitHub repo
                    <ExternalLink data-icon="inline-end" />
                  </a>
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                {demoMetrics.map(([value, label]) => (
                  <Card key={value}>
                    <CardContent className="p-4">
                      <div className="text-2xl font-semibold">{value}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-primary/30">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Laptop demo stack
                </Badge>
                <CardTitle>Что уже подготовлено для показа</CardTitle>
                <CardDescription>
                  Отдельная база не смешивается с Lunch-Up CRM и запускается через переменную окружения.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {[
                    ["SQLite", "data/caloristika_demo_crm.sqlite"],
                    ["CRM", "Next 16 + React 19 + shadcn-style UI"],
                    ["Каталог", "публичные SKU Caloristika с demo-ценами"],
                    ["AI", "задачи для outreach, SKU matrix, follow-up"]
                  ].map(([title, text]) => (
                    <div className="flex items-start gap-3 rounded-md border border-border bg-muted p-3" key={title}>
                      <BadgeCheck className="mt-0.5 size-5 text-primary" />
                      <div>
                        <div className="font-semibold">{title}</div>
                        <div className="text-sm text-muted-foreground">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="evidence" className="px-5 py-14 md:px-8">
          <SectionHeading label="Почему Caloristika" title="Это самый удобный первый клиент из конкурентной базы">
            Caloristika B2B уже говорит языком партнеров и прибыли. Значит, на встрече можно сразу показывать,
            как CRM превращает публичную воронку в управляемые продажи по сегментам.
          </SectionHeading>
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {evidence.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Открыть источник
                      <ExternalLink data-icon="inline-end" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="demo" className="border-y border-border bg-muted px-5 py-14 md:px-8">
          <SectionHeading label="Demo база" title="Показываем сразу под их B2B-сценарии">
            В CRM нужно открыть воронку, каталог, матрицы запуска, AI-агентов и заказы. Важный акцент:
            все цены SKU в демо являются заглушками до получения рабочего прайса Caloristika.
          </SectionHeading>
          <div className="mx-auto max-w-7xl">
            <Tabs defaultValue="segments">
              <TabsList className="flex w-full flex-wrap justify-start">
                <TabsTrigger value="segments">Сегменты</TabsTrigger>
                <TabsTrigger value="crm">CRM-экраны</TabsTrigger>
                <TabsTrigger value="sources">Источники</TabsTrigger>
              </TabsList>
              <TabsContent value="segments">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {segments.map(([title, text]) => (
                    <Card key={title}>
                      <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{text}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="crm">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ["Воронка", "Показать сделки на стадиях: новый лид, квалификация, контакт, дегустация, пробная поставка."],
                    ["Каталог", "Показать публичные SKU Caloristika, фото, веса, сроки, demo-цены и предупреждение по прайсу."],
                    ["Матрица запуска", "Показать готовые наборы для кофеен, сетей, микромаркетов, офисов и кампусов."],
                    ["ИИ-агенты", "Показать queued-задачи: письмо, скрипт, follow-up, SKU matrix и enrichment."]
                  ].map(([title, text]) => (
                    <Card key={title}>
                      <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{text}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="sources">
                <Card>
                  <CardHeader>
                    <CardTitle>Что можно говорить честно</CardTitle>
                    <CardDescription>
                      Данные CRM собираются из публичных источников и demo-допущений. Перед продажей надо обновить ЛПР,
                      адреса, контакты, реальные SKU и цены.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-3">
                      {["caloristikab2b.ru", "caloristika.ru", "Lunch-Up CRM lead base adapted for demo"].map((item) => (
                        <div className="rounded-md border border-border bg-card p-3 text-sm" key={item}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="workflow" className="px-5 py-14 md:px-8">
          <SectionHeading label="Процесс продажи" title="Один экран объясняет путь от базы до денег">
            CRM помогает команде вести каждого партнера по следующему действию после лида, дегустации,
            пилота и первой поставки.
          </SectionHeading>
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
            {workflow.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title}>
                  <CardHeader>
                    <Icon className="size-7 text-primary" />
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.text}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="offer" className="border-y border-border bg-secondary px-5 py-14 md:px-8">
          <SectionHeading label="Коммерческий оффер" title="Что продавать на встрече">
            Начать с готового demo, затем предложить короткий пилот на одном сегменте. Большое внедрение продавать
            только после сигнала по лидам, дегустациям и повторным заказам.
          </SectionHeading>
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {packages.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                  <div className="text-2xl font-semibold">{item.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {item.items.map((feature) => (
                      <li className="flex gap-2" key={feature}>
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="px-5 py-14 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="w-fit">
                Скрипт разговора
              </Badge>
              <h2 className="text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
                Формулировка для первого звонка
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                “Мы собрали вертикальную CRM для B2B ready-to-eat в Петербурге. По публичной модели Caloristika
                видно, как можно выстроить управляемую воронку партнеров: лид, дегустация, матрица,
                пилот и повтор. Я могу показать демо уже под ваши сегменты.”
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Возражения</CardTitle>
                <CardDescription>Короткие ответы для директора по развитию или операционного руководителя.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {objections.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={item.q}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8">
          <Card className="mx-auto max-w-7xl border-primary/30 bg-primary text-primary-foreground">
            <CardContent className="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="size-5" />
                  Следующий шаг
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-normal">Открыть laptop CRM и пройти сценарий за 12 минут</h2>
                <p className="mt-3 max-w-3xl text-primary-foreground/85">
                  Встреча должна идти по маршруту: почему Caloristika, воронка, лиды, каталог, матрицы, AI-задачи,
                  заказы, затем цена пилота.
                </p>
              </div>
              <Button asChild variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                <a href="#demo">
                  Сценарий demo
                  <LineChart data-icon="inline-end" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 text-sm text-muted-foreground md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>Public prospect demo. Not affiliated with or approved by Caloristika.</div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-foreground" href="https://caloristikab2b.ru/" target="_blank" rel="noreferrer">
              Caloristika B2B source
            </a>
            <a className="hover:text-foreground" href="https://github.com/egoriklok/caloristika-b2b-crm-demo" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
