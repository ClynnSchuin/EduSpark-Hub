import { Sparkles, Heart, Shield, Lightbulb, Users, Compass, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function AboutView() {
  const values = [
    {
      title: 'Reliability & Trust',
      desc: 'Complete school summaries and task drafts to top criteria, on time, every single time. Parents can rely on our consistent excellence.',
      icon: <Shield className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: 'Edu-Creative Spark',
      desc: 'We transform dry textbook materials into clear, color-coded diagrams and visual summaries that spark genuine student memory.',
      icon: <Lightbulb className="w-5 h-5 text-[#FFD700]" />
    },
    {
      title: 'Parent Support Catalyst',
      desc: 'Our packages are parent-centric. We structure files so parents can review Afrikaans or English orals with zero language stress.',
      icon: <Users className="w-5 h-5 text-[#FFD700]" />
    }
  ];

  return (
    <div className="bg-black text-gray-300 font-sans py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 animate-fade-in">
          <div className="inline-flex items-center gap-1 mx-auto px-4 py-1 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-[10px] font-mono uppercase tracking-widest bg-[#FFD700]/5">
            <Compass className="w-3.5 h-3.5 animate-spin duration-3000" /> Bloemfontein Born • Nationwide Delivery
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-white">
            Bright Minds, Better Grades
          </h1>
          <div className="w-16 h-0.5 bg-[#FFD700]/40 mx-auto mt-2"></div>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            EduSpark Hub was created with one core mission: to make learning simple, effective, and exciting for every school student. We provide customized resources that empower students to build lasting confidence.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text block columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-3xl font-serif text-white tracking-tight border-b border-[#FFD700]/20 pb-4">
              Empowering Students & Restoring Parent Peace of Mind
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              We understand that parents often struggle to help their children manage complex schoolwork, especially when balancing hectic professional work and family life. Standard school textbooks can feel dense or overwhelming, leaving students confused.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Our professional team of writers and educators provides visual outlines and study materials packaged in digestible steps. Whether they require a structured Afrikaans speech, complex science project advice, or high-mark visual posters, we make it exciting.
            </p>

            {/* Direct Core Checklists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] shrink-0 mt-0.5">
                  <Check className="w-3" h-3="" />
                </span>
                <div>
                  <span className="font-bold text-white block">Syllabus Tailored</span>
                  <p className="text-gray-400 mt-0.5 font-light">Aligned perfectly to your child's specific classroom criteria.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] shrink-0 mt-0.5">
                  <Check className="w-3" h-3="" />
                </span>
                <div>
                  <span className="font-bold text-white block">Expert Linguists</span>
                  <p className="text-gray-400 mt-0.5 font-light">High scoring English & Afrikaans language guides and pronunciations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] shrink-0 mt-0.5">
                  <Check className="w-3" h-3="" />
                </span>
                <div>
                  <span className="font-bold text-white block">Visual Guides Only</span>
                  <p className="text-gray-400 mt-0.5 font-light">No messy code or dense worksheets, visual memory markers only.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] shrink-0 mt-0.5">
                  <Check className="w-3" h-3="" />
                </span>
                <div>
                  <span className="font-bold text-white block">Immediate Support response</span>
                  <p className="text-gray-400 mt-0.5 font-light">Get immediate quotes and delivery updates via simple WhatsApp lines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Student study visualization */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full h-[380px] sm:h-[400px] relative max-w-[400px]">
              <div className="absolute inset-0 border border-[#FFD700]/30 rounded-2xl transform rotate-3"></div>
              
              <div className="absolute inset-0 bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-[#FFD700]/50 flex items-center justify-center">
                <img
                  src={BUSINESS_INFO.aboutImgUrl}
                  alt="Student completing school tasks happily"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const fb = document.getElementById('about-img-fallback');
                    if (fb) fb.classList.remove('hidden');
                  }}
                />
                <div id="about-img-fallback" className="hidden py-24 px-6 text-center text-[#FFD700]/80 flex flex-col items-center justify-center gap-3 w-full h-full bg-neutral-950">
                  <Heart className="w-10 h-10 animate-pulse text-[#FFD700]" />
                  <span className="font-serif text-lg text-white">Nurturing Bright Minds</span>
                  <p className="text-xs text-gray-400 max-w-[200px] font-light">We deliver customized materials nation-wide from Bloemfontein.</p>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/85 border border-[#FFD700]/30 text-[#FFD700] text-[9px] font-mono uppercase font-bold tracking-widest">
                  100% Online Delivery
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section Grid */}
        <div className="flex flex-col gap-10 border-t border-white/10 pt-16 mt-4">
          <div className="text-center flex flex-col gap-3">
            <span className="text-xs text-[#FFD700] font-mono uppercase tracking-widest font-bold">OUR COMPASS</span>
            <h3 className="text-3xl font-serif text-white tracking-tight">The Core Pillars We Live By</h3>
            <div className="w-12 h-0.5 bg-[#FFD700]/30 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="group relative bg-[#090909]/90 border border-gray-800 rounded-sm p-8 hover:border-[#FFD700]/40 transition duration-300 flex flex-col gap-5 text-left"
              >
                {/* Thin lines corner tags */}
                <span className="absolute top-0 right-0 w-3 h-[1px] bg-[#FFD700]/20"></span>
                <span className="absolute top-0 right-0 w-[1px] h-3 bg-[#FFD700]/20"></span>
                <span className="absolute bottom-0 left-0 w-3 h-[1px] bg-[#FFD700]/20"></span>
                <span className="absolute bottom-0 left-0 w-[1px] h-3 bg-[#FFD700]/20"></span>

                <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center shadow-[0_0_8px_rgba(255,215,0,0.1)]">
                  {v.icon}
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg tracking-tight">{v.title}</h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
