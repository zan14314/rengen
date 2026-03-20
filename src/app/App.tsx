import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { AnimatedSection } from "./components/AnimatedSection";

import imgRobotChair from "../assets/freepik_cinematic_product_macro_shot_dramatic_highlights_95234.png";
import imgGskArm from "../assets/freepik_cinematic_product_macro_shot_dramatic_highlights_95235.png";
import imgXrayDisplay from "../assets/freepik_cinematic_product_macro_shot_dramatic_highlights_95236.png";
import imgStors7 from "../assets/freepik_apple_infinite_black_studio_background_product_he_95245.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020303]">
      <HeroSection />

      {/* Slide 2: Одна компания */}
      {/* Акцентный блок: Несколько каналов использования */}
      <section className="relative bg-[#020303] overflow-hidden py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#105255] to-transparent" />
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col gap-12 items-center md:flex-row">
          {/* Text block */}
          <div className="flex-1 min-w-0">
            <AnimatedSection direction="left" delay={0.1}>
              <h2
                className="uppercase tracking-wider mb-6"
                style={{
                  fontFamily: "'GOST type B', sans-serif",
                  fontSize: "clamp(20px, 3vw, 36px)",
                  color: "#e3dbd1",
                  lineHeight: 1.3,
                }}
              >
                Одна компания. Два направления. Несколько каналов использования.
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="mb-6">
                <p
                  className="text-[#33918d] uppercase"
                  style={{
                    fontFamily: "'GOST type B', monospace",
                    fontSize: "clamp(14px, 1.5vw, 20px)",
                    lineHeight: 1.6,
                  }}
                >
                  Видео компании должно одинаково эффективно работать в разных форматах:
                </p>
                <ul className="mt-4 space-y-2">
                  {["на выставках", "на сайте", "в презентациях для клиентов", "в рассылках и маркетинговых материалах"].map((item, idx) => (
                    <AnimatedSection key={idx} direction="up" delay={0.35 + idx * 0.15}>
                      <li
                        className="text-[#33918d] uppercase flex items-start gap-2"
                        style={{
                          fontFamily: "'GOST type B', monospace",
                          fontSize: "clamp(14px, 1.5vw, 20px)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-[#33918d] mt-[0.55em] shrink-0" />
                        {item}
                      </li>
                    </AnimatedSection>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {[
              "Поэтому мы предлагаем модульный подход к созданию видеопрезентации.",
              "Создается одно центральное имиджевое видео о компании с фокусом на продукцию. На его основе формируются отдельные ролики по каждому направлению — досмотровому и медицинскому. Так каждый ролик решает свою задачу и используется именно там, где он наиболее эффективен.",
            ].map((desc, i) => (
              <AnimatedSection key={i} direction="left" delay={0.2 + i * 0.1}>
                <p
                  className="text-[#8a9a9a] mb-4"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "clamp(13px, 1.3vw, 18px)",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </AnimatedSection>
            ))}
          </div>

          {/* Image block */}
          <AnimatedSection className="flex-1 min-w-0 w-full" direction="right" delay={0.3}>
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#105255]/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={imgRobotChair}
                alt="Роботизированное медицинское кресло"
                className="w-full h-auto object-cover rounded-lg relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 3: Детализация */}
      <section className="relative bg-[#020303] overflow-hidden py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#105255] to-transparent" />
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col gap-12 items-center md:flex-row-reverse">
          <div className="flex-1 min-w-0">
            <AnimatedSection direction="right" delay={0.1}>
              <h2
                className="uppercase tracking-wider mb-6"
                style={{
                  fontFamily: "'GOST type B', sans-serif",
                  fontSize: "clamp(20px, 3vw, 36px)",
                  color: "#e3dbd1",
                  lineHeight: 1.3,
                }}
              >
                Детализация и технологичность визуализации
              </h2>
            </AnimatedSection>
            {[
              "Наш опыт работы с технологическими компаниями позволяет создавать визуализацию сложного оборудования в понятной и наглядной форме.",
              "Мы переводим технику в графику, создаем реалистичные сцены её использования и показываем принцип работы оборудования, его возможности и преимущества. Это позволяет потенциальному заказчику быстро понять, как работает продукт и почему ему можно доверять.",
            ].map((desc, i) => (
              <AnimatedSection key={i} direction="right" delay={0.2 + i * 0.1}>
                <p
                  className="text-[#8a9a9a] mb-4"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "clamp(13px, 1.3vw, 18px)",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="flex-1 min-w-0 w-full" direction="left" delay={0.3}>
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#105255]/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={imgGskArm}
                alt="Детализация роботизированного манипулятора GSK"
                className="w-full h-auto object-cover rounded-lg relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 4: Профессиональный подход */}
      <section className="relative bg-[#020303] overflow-hidden py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#105255] to-transparent" />
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col gap-12 items-center md:flex-row">
          <div className="flex-1 min-w-0">
            <AnimatedSection direction="left" delay={0.1}>
              <h2
                className="uppercase tracking-wider mb-6"
                style={{
                  fontFamily: "'GOST type B', sans-serif",
                  fontSize: "clamp(20px, 3vw, 36px)",
                  color: "#e3dbd1",
                  lineHeight: 1.3,
                }}
              >
                Профессиональная инфографика, текст и озвучка
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <p
                className="text-[#8a9a9a] mb-4"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "clamp(13px, 1.3vw, 18px)",
                  lineHeight: 1.7,
                }}
              >
                В технологических роликах важно не только показать продукт, но и правильно объяснить его преимущества.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection className="flex-1 min-w-0 w-full" direction="right" delay={0.3}>
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#105255]/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={imgXrayDisplay}
                alt="Рентген ТА БФ — интерфейс управления"
                className="w-full h-auto object-cover rounded-lg relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Акцентный блок: Мы уделяем особое внимание */}
      <section className="relative bg-[#020303] overflow-hidden pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <AnimatedSection direction="up" delay={0.1}>
            <p
              className="text-[#33918d] uppercase mt-3 max-w-[700px]"
              style={{
                fontFamily: "'GOST type B', monospace",
                fontSize: "clamp(14px, 2vw, 24px)",
                lineHeight: 1.6,
              }}
            >
              Мы уделяем особое внимание:
            </p>
          </AnimatedSection>
          <ul className="mt-4 space-y-2 max-w-[700px]">
            {[
              "инфографике",
              "структуре подачи информации",
              "текстам и формулировкам",
              "дикторской озвучке и саунд-дизайну",
            ].map((item, idx) => (
              <AnimatedSection key={idx} direction="up" delay={0.25 + idx * 0.15}>
                <li
                  className="text-[#33918d] uppercase flex items-start gap-2"
                  style={{
                    fontFamily: "'GOST type B', monospace",
                    fontSize: "clamp(14px, 2vw, 24px)",
                    lineHeight: 1.6,
                  }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-[#33918d] mt-[0.55em] shrink-0" />
                  {item}
                </li>
              </AnimatedSection>
            ))}
          </ul>
          <AnimatedSection direction="up" delay={0.25 + 4 * 0.15}>
            <p
              className="text-[#8a9a9a] mt-6 max-w-[700px]"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "clamp(13px, 1.3vw, 18px)",
                lineHeight: 1.7,
              }}
            >
              Вы лучше всех знаете свой продукт.
              <br />
              Наша задача — профессионально перевести его преимущества в понятный и убедительный видеоязык для ваших клиентов.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Extra visual section — СТОРС-7 */}
      <section className="relative bg-[#020303] overflow-hidden py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#105255] to-transparent" />
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col gap-12 items-center md:flex-row-reverse">
          <div className="flex-1 min-w-0">
            <AnimatedSection direction="right" delay={0.1}>
              <h2
                className="uppercase tracking-wider mb-6"
                style={{
                  fontFamily: "'GOST type B', sans-serif",
                  fontSize: "clamp(20px, 3vw, 36px)",
                  color: "#33918d",
                  lineHeight: 1.3,
                }}
              >
                Варианты реализации проекта
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <p
                className="text-[#8a9a9a] mb-4"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "clamp(13px, 1.3vw, 18px)",
                  lineHeight: 1.7,
                }}
              >
                Мы предлагаем два варианта реализации видеосистемы. В обоих случаях создается не один ролик, а набор видео, демонстрирующих оборудование компании в технологичной и понятной форме — с фокусом на продукте, принципе работы и ключевых преимуществах.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection className="flex-1 min-w-0 w-full" direction="left" delay={0.3}>
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#105255]/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={imgStors7}
                alt="СТОРС-7 панель управления"
                className="w-full h-auto object-cover rounded-lg relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Акцентный блок: Эти ролики можно использовать */}
      <section className="relative bg-[#020303] overflow-hidden pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <AnimatedSection direction="up" delay={0.1}>
            <p
              className="text-[#33918d] uppercase mt-3 max-w-[700px]"
              style={{
                fontFamily: "'GOST type B', monospace",
                fontSize: "clamp(14px, 2vw, 24px)",
                lineHeight: 1.6,
              }}
            >
              Эти ролики можно использовать:
            </p>
          </AnimatedSection>
          <ul className="mt-4 space-y-2 max-w-[700px]">
            {[
              "на выставках",
              "в презентациях для клиентов",
              "на сайте",
              "в маркетинговых материалах компании",
            ].map((item, idx) => (
              <AnimatedSection key={idx} direction="up" delay={0.25 + idx * 0.15}>
                <li
                  className="text-[#33918d] uppercase flex items-start gap-2"
                  style={{
                    fontFamily: "'GOST type B', monospace",
                    fontSize: "clamp(14px, 2vw, 24px)",
                    lineHeight: 1.6,
                  }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-[#33918d] mt-[0.55em] shrink-0" />
                  {item}
                </li>
              </AnimatedSection>
            ))}
          </ul>
          <AnimatedSection direction="up" delay={0.25 + 4 * 0.15}>
            <p
              className="text-[#8a9a9a] mt-6 max-w-[700px]"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "clamp(13px, 1.3vw, 18px)",
                lineHeight: 1.7,
              }}
            >
              Базовый вариант решает основную задачу — компактно показать оба направления компании и подготовить выставочные версии роликов.
              <br />
              Расширенный вариант дает более глубокую презентацию технологий: добавляются отдельные полноценные ролики по каждому направлению, которые позволяют подробнее раскрыть оборудование и его преимущества.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Extra visual section — Маммограф */}
      

      {/* Pricing */}
      <PricingSection />

      {/* Сроки изготовления */}
      <section className="relative bg-[#020303] overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#105255] to-transparent" />
        <div className="max-w-[1200px] mx-auto px-8">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="relative flex flex-col items-center text-center py-12 md:py-16">
              {/* Decorative corner brackets */}
              <div className="absolute top-0 left-4 md:left-12 w-10 h-10 border-t-2 border-l-2 border-[#105255]/60" />
              <div className="absolute top-0 right-4 md:right-12 w-10 h-10 border-t-2 border-r-2 border-[#105255]/60" />
              <div className="absolute bottom-0 left-4 md:left-12 w-10 h-10 border-b-2 border-l-2 border-[#105255]/60" />
              <div className="absolute bottom-0 right-4 md:right-12 w-10 h-10 border-b-2 border-r-2 border-[#105255]/60" />

              <p
                className="uppercase tracking-[0.3em] text-[#8a9a9a] mb-4"
                style={{
                  fontFamily: "'GOST type B', sans-serif",
                  fontSize: "clamp(13px, 1.5vw, 18px)",
                }}
              >
                Сроки изготовления
              </p>
              <p
                className="uppercase tracking-wider text-[#33918d]"
                style={{
                  fontFamily: "'Neuropol X', sans-serif",
                  fontSize: "clamp(36px, 6vw, 72px)",
                  lineHeight: 1.1,
                }}
              >
                3 недели
              </p>
              <div className="mt-6 w-16 h-px bg-gradient-to-r from-transparent via-[#33918d] to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020303] py-16 border-t border-[#1a2a2a]">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-4 h-4 rounded-full bg-[#105255]" />
            <p
              className="text-[#e3dbd1] uppercase tracking-widest"
              style={{
                fontFamily: "'Neuropol X', sans-serif",
                fontSize: "clamp(14px, 2vw, 20px)",
              }}
            >
              СКБ МЕДРЕНТЕХ
            </p>
            <div className="w-4 h-4 rounded-full bg-[#105255]" />
          </div>
          <p
            className="text-[#4a6a6a] text-center"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "clamp(11px, 1vw, 14px)",
            }}
          >
            Технологии исключительной точности
          </p>
        </div>
      </footer>
    </div>
  );
}