import { useEffect, useRef, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';

const GreenhouseCapitalPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Trigger hero animation after mount
    setIsVisible(true);

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    portfolioRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-white text-black px-8 md:px-12 py-8">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto pt-20">
          {/* Staggered Grid Header with Sequential Animation */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-x-12 md:gap-y-8 max-w-4xl mx-auto md:min-h-[200px]">
              <div className="md:col-start-1 md:row-start-1 text-center md:text-left mb-4 md:mb-0">
                <h1
                  className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-extralight tracking-tight opacity-90 hero-text ${isVisible ? 'hero-text-1' : ''}`}
                  style={{ animationDelay: '0.3s' }}
                >
                  AI Native
                </h1>
              </div>
              <div className="md:col-start-2 md:row-start-2 text-center md:text-left mb-4 md:mb-0">
                <h1
                  className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-extralight tracking-tight opacity-85 hero-text ${isVisible ? 'hero-text-2' : ''}`}
                  style={{ animationDelay: '0.5s' }}
                >
                  Company
                </h1>
              </div>
              <div className="md:col-start-3 md:row-start-3 text-center md:text-left mb-4 md:mb-0">
                <h1
                  className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-extralight tracking-tight opacity-80 hero-text ${isVisible ? 'hero-text-3' : ''}`}
                  style={{ animationDelay: '0.7s' }}
                >
                  Builder
                </h1>
              </div>
              <div className="md:col-start-4 md:row-start-4 text-center md:text-left">
                <h1
                  className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-extralight tracking-tight opacity-75 hero-text ${isVisible ? 'hero-text-4' : ''}`}
                  style={{ animationDelay: '0.9s' }}
                >
                  Operator
                </h1>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="space-y-16">
            {/* Florece AI */}
            <div
              ref={(el) => (portfolioRefs.current[0] = el)}
              className="border-b border-black/10 pb-12 reveal-section"
            >
              <h2 className="text-2xl md:text-3xl font-inter font-light mb-6 tracking-wide company-title">
                Florece AI
              </h2>
              <p className="text-sm md:text-base font-inter font-light leading-relaxed opacity-70 mb-4 max-w-2xl">
                The first agentic online flowershop, thriving to build hyperpersonalization in love economy
              </p>
              <a
                href="https://florece.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-inter font-light tracking-wider uppercase underline underline-offset-4 hover:no-underline transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 inline-block animated-link"
              >
                florece.ai
              </a>
            </div>

            {/* Genera AI */}
            <div
              ref={(el) => (portfolioRefs.current[1] = el)}
              className="border-b border-black/10 pb-12 reveal-section"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-inter font-light tracking-wide company-title">
                  Genera AI
                </h2>
                <span className="text-xs font-inter font-light tracking-wider uppercase bg-black/5 px-3 py-1 rounded-full w-fit badge-pulse">
                  Startup Peru 2025 Winner
                </span>
              </div>
              <p className="text-sm md:text-base font-inter font-light leading-relaxed opacity-70 mb-4 max-w-2xl">
                A SAAS for teachers that creates ministry compliant classes that students love
              </p>
              <a
                href="https://generaapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-inter font-light tracking-wider uppercase underline underline-offset-4 hover:no-underline transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 inline-block animated-link"
              >
                generaapp.com
              </a>
            </div>

            {/* Prisma */}
            <div
              ref={(el) => (portfolioRefs.current[2] = el)}
              className="pb-12 reveal-section"
            >
              <h2 className="text-2xl md:text-3xl font-inter font-light mb-6 tracking-wide company-title">
                Prisma
              </h2>
              <p className="text-sm md:text-base font-inter font-light leading-relaxed opacity-70 mb-6 max-w-2xl">
                A product creators community: product, growth and design. We create community events like world product day for 400+ people on site and curated spaces like coffee meetups and executive dinners
              </p>
              <div className="space-y-2">
                <div>
                  <a
                    href="https://prisma-aiworkshop.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-inter font-light tracking-wider uppercase underline underline-offset-4 hover:no-underline transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 inline-block animated-link"
                  >
                    AI Workshop: prisma-aiworkshop.vercel.app
                  </a>
                </div>
                <div>
                  <a
                    href="https://prismatalent.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-inter font-light tracking-wider uppercase underline underline-offset-4 hover:no-underline transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 inline-block animated-link"
                  >
                    Talent Platform: prismatalent.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-24 pt-12 border-t border-black/10">
            <p className="text-xs font-inter font-light tracking-wider uppercase opacity-60">
              contacto: <a href="mailto:hello@ghcapital.lat" className="hover:opacity-100 transition-opacity duration-300 animated-link">hello@ghcapital.lat</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenhouseCapitalPage;
