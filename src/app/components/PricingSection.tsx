import { AnimatedSection } from "./AnimatedSection";

interface PricingTier {
  name: string;
  price: string;
  units: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Базовый вариант",
    price: "700 000 \u20BD",
    units: "3 единицы контента",
    features: [
      "Флагманское видео — 2 минуты. Общий ролик о компании (досмотр и медицина).",
      "Выставочная версия: 1 минута — досмотровое оборудование",
      "Выставочная версия: 1 минута — медицинское оборудование",
    ],
  },
  {
    name: "Расширенный вариант",
    price: "1 100 000 \u20BD",
    units: "5 единиц контента",
    highlighted: true,
    features: [
      "Флагманский фильм — 4 минуты. Подробная презентация компании и её технологий.",
      "Отдельный ролик: 2 минуты — досмотровое оборудование",
      "Отдельный ролик: 2 минуты — медицинское оборудование",
      "Ролики с дикторской озвучкой, инфографикой и более подробным раскрытием технологий.",
      "Выставочные версии: 2 мин — досмотр, 2 мин — медицина. Оптимизированы для экранов на стендах.",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="relative bg-[#020303] overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#105255] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-8">
        <AnimatedSection direction="up" delay={0.1}>
          <h2
            className="text-[#e3dbd1] text-center mt-2 uppercase tracking-wider mb-4"
            style={{
              fontFamily: "'GOST type B', sans-serif",
              fontSize: "clamp(20px, 3vw, 36px)",
            }}
          >
            Два варианта системы видеороликов
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <p
            className="text-center text-[#8a9a9a] max-w-[800px] mx-auto mb-4"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "clamp(13px, 1.3vw, 17px)",
              lineHeight: 1.7,
            }}
          >
            Оба варианта предполагают создание системы видеороликов,
            демонстрирующих оборудование компании в технологичной и понятной
            форме — с фокусом на продукте, принципах работы и ключевых
            преимуществах.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.25}>
          <p
            className="text-center text-[#33918d] max-w-[800px] mx-auto mb-16"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "clamp(13px, 1.3vw, 17px)",
              lineHeight: 1.7,
            }}
          >
            Главный принцип подачи — максимальный фокус на продукте.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {tiers.map((tier, idx) => (
            <AnimatedSection
              key={tier.name}
              direction={idx === 0 ? "left" : "right"}
              delay={0.3 + idx * 0.15}
            >
              <div
                className="rounded-xl p-8 h-full transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: tier.highlighted
                    ? "linear-gradient(135deg, #0a2e30 0%, #051515 100%)"
                    : "linear-gradient(135deg, #0d1414 0%, #060a0a 100%)",
                  border: tier.highlighted
                    ? "1px solid #105255"
                    : "1px solid #1a2a2a",
                }}
              >
                {tier.highlighted && (
                  <div
                    className="inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-widest mb-4"
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      background: "rgba(16, 82, 85, 0.3)",
                      color: "#33918d",
                      border: "1px solid #105255",
                    }}
                  >
                    Рекомендуем
                  </div>
                )}

                <h3
                  className="text-[#e3dbd1] uppercase tracking-wider mb-6"
                  style={{
                    fontFamily: "'GOST type B'",
                    fontSize: "clamp(16px, 2vw, 22px)",
                  }}
                >
                  {tier.name}
                </h3>

                <p
                  className="mt-4 mb-1"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "clamp(24px, 3.5vw, 40px)",
                    color: tier.highlighted ? "#33918d" : "#4a6a6a",
                  }}
                >
                  {tier.price}
                </p>

                <p
                  className="text-[#6a8a8a] uppercase tracking-wider mb-8"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "clamp(12px, 1.2vw, 15px)",
                  }}
                >
                  {tier.units}
                </p>

                <div className="space-y-4">
                  {tier.features.map((feature, fi) => (
                    <div key={fi} className="flex gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#105255] shrink-0" />
                      <p
                        className="text-[#8a9a9a]"
                        style={{
                          fontFamily: "'Share Tech Mono', monospace",
                          fontSize: "clamp(12px, 1.2vw, 15px)",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
