import image_dbe59ff4ceccdfe0db38f16ec582f7a18f3dd85f from 'figma:asset/dbe59ff4ceccdfe0db38f16ec582f7a18f3dd85f.png'
import image_3d469915bb59361936ccc0eba4b24ad6b4dd91df from 'figma:asset/3d469915bb59361936ccc0eba4b24ad6b4dd91df.png'
import image_e429b5c860d3aa78e9fd9a4a1d791c017d1063de from 'figma:asset/e429b5c860d3aa78e9fd9a4a1d791c017d1063de.png'
import imgFreepik952421 from "figma:asset/beab6e3ee5db5e22f1bda3b2db12a9d7ae0e2c26.png";
import imgFreepik952511 from "figma:asset/7fca0ebdd0213009a93d0f57eb4645ac17a7c1f5.png";
import imgBottom from "figma:asset/ee49248282d34cd2573f6bb2b3365804976d4781.png";
import { AnimatedSection } from "./AnimatedSection";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#020303] overflow-hidden flex flex-col items-center">
      {/* Top dots */}
      <div className="w-full max-w-[1200px] mx-auto px-8 pt-10 flex justify-between items-center">
        <div className="w-8 h-8 rounded-full bg-[#105255]" />
        <div className="w-8 h-8 rounded-full bg-[#105255]" />
      </div>

      {/* Logos */}
      <AnimatedSection className="flex items-center justify-center gap-6 mt-16" delay={0.2}>
        <div className="w-[120px] h-[120px] flex items-center justify-center">
          <img
            alt="СКБ МЕДРЕНТЕХ"
            className="max-w-full max-h-full object-contain"
            src={image_e429b5c860d3aa78e9fd9a4a1d791c017d1063de}
          />
        </div>
        <p
          className="text-[#e3dbd1] text-[40px]"
          style={{ fontFamily: "'GOST type B', 'Share Tech Mono', monospace" }}
        >
          x
        </p>
        <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-full">
          <img
            alt="Partner"
            className="w-full h-full object-cover"
            src={image_3d469915bb59361936ccc0eba4b24ad6b4dd91df}
          />
        </div>
      </AnimatedSection>

      {/* Main Title */}
      <AnimatedSection delay={0.4} direction="scale">
        <h1
          className="text-[#e3dbd1] text-center mt-8"
          style={{
            fontFamily: "'Neuropol X', sans-serif",
            fontSize: "clamp(32px, 6vw, 80px)",
            letterSpacing: "0.05em",
          }}
        >СКБ МЕДРЕНТЕХ</h1>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <p
          className="text-[#e3dbd1] text-center mt-2 uppercase tracking-wider"
          style={{
            fontFamily: "'GOST type B', monospace",
            fontSize: "clamp(16px, 3vw, 40px)",
          }}
        >
          технологии исключительной точности
        </p>
      </AnimatedSection>

      {/* Question block */}
      <AnimatedSection
        className="w-full max-w-[1100px] mx-auto px-8 mt-20"
        delay={0.3}
        direction="left"
      >
        <p
          className="text-[#e3dbd1] uppercase"
          style={{
            fontFamily: "'GOST type B', monospace",
            fontSize: "clamp(14px, 2vw, 24px)",
          }}
        >
          Как показать оборудование на выставке, не привозя крупногабаритную технику?

        </p>
        <p
          className="text-[#33918d] uppercase mt-3 max-w-[700px]"
          style={{
            fontFamily: "'GOST type B', monospace",
            fontSize: "clamp(14px, 2vw, 24px)",
          }}
        >Мы предлагаем решение — видеопрезентацию, которая позволяет наглядно продемонстрировать работу оборудования, его ключевые функции и технические характеристики.</p>
        <p
          className="text-[#33918d] uppercase mt-3 max-w-[700px]"
          style={{
            fontFamily: "'GOST type B', monospace",
            fontSize: "clamp(14px, 2vw, 24px)",
          }}
        >Современная визуализация дает возможность показать то, что невозможно увидеть на стенде: принцип работы техники, внутренние процессы и реальные сценарии применения.</p>

      </AnimatedSection>

      {/* Bottom image */}
      <AnimatedSection className="w-full mt-16" delay={0.2} direction="scale">
        <img
          alt="Industrial equipment detail"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "715px" }}
          src={image_dbe59ff4ceccdfe0db38f16ec582f7a18f3dd85f}
        />
      </AnimatedSection>
    </section>
  );
}