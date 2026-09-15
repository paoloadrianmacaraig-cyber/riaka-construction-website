import Image from 'next/image';

export default function WhyChooseSection() {
  return (
    <section className="bg-navy py-16 lg:py-24 px-6 lg:px-16 text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-extrabold text-white text-3xl sm:text-4xl leading-tight tracking-tight mb-8">
          Why Choose RIAKA
        </h2>

        {/* 4-column collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 mb-8">
          {/* Col 1: Tall ribbon-cutting */}
          <div className="lg:col-span-3 rounded-none overflow-hidden h-80 sm:h-96 lg:h-[580px] shadow-lg bg-[#1a2c4e] relative">
            <Image
              src="/why-choose/01-team-ribbon-cutting.png"
              alt="RIAKA Team Ribbon Cutting"
              fill
              className="collage-img object-cover"
              style={{ objectPosition: 'center 58%' }}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Col 2: Top wide + bottom row */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 h-auto lg:h-[580px]">
            <div className="rounded-none overflow-hidden h-52 lg:h-[285px] shadow-lg bg-[#1a2c4e] relative">
              <Image
                src="/why-choose/02-construction-work.png"
                alt="RIAKA Construction Work"
                fill
                className="collage-img object-cover"
                style={{ objectPosition: 'center 50%' }}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="grid grid-cols-12 gap-3.5 flex-1">
              <div className="col-span-7 rounded-none overflow-hidden h-44 lg:h-full shadow-lg bg-[#1a2c4e] relative">
                <Image
                  src="/why-choose/03-project-detail.png"
                  alt="RIAKA Project Detail"
                  fill
                  className="collage-img object-cover"
                  style={{ objectPosition: 'center 50%' }}
                  sizes="20vw"
                />
              </div>
              <div className="col-span-5 flex flex-col gap-3.5 h-44 lg:h-full">
                <div className="rounded-none overflow-hidden flex-1 shadow-lg bg-[#1a2c4e] relative">
                  <Image
                    src="/why-choose/04-craftsmanship.png"
                    alt="RIAKA Craftsmanship"
                    fill
                    className="collage-img object-cover"
                    sizes="15vw"
                  />
                </div>
                <div className="rounded-none overflow-hidden flex-1 shadow-lg bg-[#1a2c4e] relative">
                  <Image
                    src="/why-choose/05-materials.png"
                    alt="RIAKA Materials"
                    fill
                    className="collage-img object-cover"
                    sizes="15vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 h-auto lg:h-[580px]">
            <div className="rounded-none overflow-hidden h-56 lg:h-[375px] shadow-lg bg-[#1a2c4e] relative">
              <Image
                src="/why-choose/06-interior-finish.png"
                alt="RIAKA Interior & Finish"
                fill
                className="collage-img object-cover"
                style={{ objectPosition: 'center 40%' }}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="grid grid-cols-12 gap-3.5 flex-1">
              <div className="col-span-7 rounded-none overflow-hidden h-36 lg:h-full shadow-lg bg-[#1a2c4e] relative">
                <Image
                  src="/why-choose/07-execution.png"
                  alt="RIAKA Execution"
                  fill
                  className="collage-img object-cover"
                  sizes="20vw"
                />
              </div>
              <div className="col-span-5 rounded-none overflow-hidden h-36 lg:h-full shadow-lg bg-[#1a2c4e] relative">
                <Image
                  src="/why-choose/08-precision.png"
                  alt="RIAKA Precision"
                  fill
                  className="collage-img object-cover"
                  sizes="15vw"
                />
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 h-auto lg:h-[580px]">
            <div className="rounded-none overflow-hidden h-56 lg:h-[375px] shadow-lg bg-[#1a2c4e] relative">
              <Image
                src="/why-choose/09-large-development.png"
                alt="RIAKA Large Development"
                fill
                className="collage-img object-cover"
                style={{ objectPosition: 'center 30%' }}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-none overflow-hidden flex-1 h-36 lg:h-full shadow-lg bg-[#1a2c4e] relative">
              <Image
                src="/why-choose/10-quality-finish.png"
                alt="RIAKA Quality Finish"
                fill
                className="collage-img object-cover"
                style={{ objectPosition: 'center 50%' }}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        <p className="text-white/90 font-normal text-sm sm:text-base lg:text-lg leading-relaxed w-full text-justify sm:text-left">
          When you choose RIAKA, you choose results without limits. All of us are ready to serve and
          deliver results because we&apos;re not just a team, we&apos;re a family. We work together
          with dedication, making sure every project is handled with care, from the first consultation
          to the final turnover. Your vision becomes our goal, and we&apos;re committed to building
          spaces that you can be proud of.
        </p>
      </div>
    </section>
  );
}
