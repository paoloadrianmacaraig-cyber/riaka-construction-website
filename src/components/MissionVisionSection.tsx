export default function MissionVisionSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* 3-column: Headline | Mission | Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: Bold Headline */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center">
            <h2 className="font-extrabold text-navy text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-[1.32] tracking-tight space-y-2.5">
              <span className="block">Engineered</span>
              <span className="block">
                for <span className="text-blue">Purpose</span>.
              </span>
              <span className="block">
                Built to <span className="text-blue">Inspire</span>.
              </span>
            </h2>
          </div>

          {/* Right: Mission + Vision Cards */}
          <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="bg-[#f8f8f8] rounded-[20px] shadow-sm p-8 lg:p-9 flex flex-col justify-start card-lift border border-gray-100">
              <p className="text-blue font-extrabold text-xs uppercase tracking-[1.4px] mb-3.5">
                Our Mission
              </p>
              <p className="text-[#5c5b5b] font-normal text-sm sm:text-base leading-relaxed">
                Our mission is to construct and deliver high-quality, durable spaces that harmonize
                function, safety, and sustainability. We believe that great quality construction has
                the power to transform communities, inspire people, and stand the test of time.
              </p>
            </div>

            <div className="bg-[#f8f8f8] rounded-[20px] shadow-sm p-8 lg:p-9 flex flex-col justify-start card-lift border border-gray-100">
              <p className="text-blue font-extrabold text-xs uppercase tracking-[1.4px] mb-3.5">
                Our Vision
              </p>
              <p className="text-[#5c5b5b] font-normal text-sm sm:text-base leading-relaxed">
                We envision a future where every project we build becomes a landmark of engineering
                excellence. We aim to redefine urban landscapes, blending bold aesthetics with smart,
                sustainable technologies that serve future generations while meeting client needs.
              </p>
            </div>
          </div>
        </div>

        {/* Ruskin Quote */}
        <div className="mt-16 sm:mt-20 text-center max-w-4xl mx-auto px-4">
          <p className="text-[#5c5b5b] text-sm sm:text-base lg:text-lg italic leading-relaxed">
            &ldquo;When we build, let us think that we build forever. Let it not be for present
            delight, nor for present use alone; let it be such work as our descendants will thank us
            for.&rdquo; &mdash; John Ruskin
          </p>
        </div>
      </div>
    </section>
  );
}
