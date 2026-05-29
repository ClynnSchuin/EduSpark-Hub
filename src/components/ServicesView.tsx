import { useState } from 'react';
import { Speech, Sparkles, Component, NotebookPen, GraduationCap, ShieldCheck, HelpCircle, BookOpen, Zap, CheckCircle2, ChevronRight, ChevronDown, MessageSquare } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { ActiveTab, ServiceItem } from '../types';

interface ServicesViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  setPreselectedService: (serviceId: string) => void;
}

export default function ServicesView({ setActiveTab, setPreselectedService }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'projects' | 'summaries' | 'premium'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { label: 'All Resources', id: 'all' as const },
    { label: 'Afrikaans & English Orals', id: 'languages' as const },
    { label: 'Projects & Visual Crafts', id: 'projects' as const },
    { label: 'Exam Prep & Summaries', id: 'summaries' as const },
    { label: 'Parent Premium Solutions', id: 'premium' as const },
  ];

  const getServiceCategory = (id: string): string => {
    switch (id) {
      case 'orals':
        return 'languages';
      case 'projects':
      case 'visual-tasks':
      case 'assignments':
        return 'projects';
      case 'summaries':
      case 'exam-packs':
      case 'homework-help':
        return 'summaries';
      case 'parent-package':
      case 'rush-delivery':
        return 'premium';
      default:
        return 'all';
    }
  };

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'all') return true;
    return getServiceCategory(s.id) === activeCategory;
  });

  const renderServiceIcon = (iconName: string) => {
    const cls = "w-6 h-6 text-[#FFD700]";
    switch (iconName) {
      case 'Speech': return <Speech className={cls} />;
      case 'Sparkles': return <Sparkles className={cls} />;
      case 'Component': return <Component className={cls} />;
      case 'NotebookPen': return <NotebookPen className={cls} />;
      case 'GraduationCap': return <GraduationCap className={cls} />;
      case 'ShieldCheck': return <ShieldCheck className={cls} />;
      case 'HelpCircle': return <HelpCircle className={cls} />;
      case 'BookOpen': return <BookOpen className={cls} />;
      case 'Zap': return <Zap className={`${cls} text-amber-400`} />;
      default: return <Sparkles className={cls} />;
    }
  };

  const handleBookNow = (serviceId: string) => {
    setPreselectedService(serviceId);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-gray-300 font-sans py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 animate-fade-in">
          <span className="text-xs text-[#FFD700] font-mono font-bold uppercase tracking-widest">
            DIGITAL SYLLABUS OFFERS
          </span>
          <h1 className="text-4xl font-serif text-white tracking-tight leading-snug">
            Interactive Classroom Support Services
          </h1>
          <div className="w-16 h-0.5 bg-[#FFD700]/40 mx-auto mt-1"></div>
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg mx-auto">
            Choose high-scoring preps, model instructions, or visual craft summaries. Click cards to inspect curriculum-by-curriculum details.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 border-b border-[#FFD700]/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null);
              }}
              className={`px-5 py-3 text-[10px] font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer rounded-sm ${
                activeCategory === cat.id
                  ? 'bg-[#FFD700] text-black shadow-[0_0_12px_rgba(255,215,0,0.15)] font-extrabold'
                  : 'bg-[#0A0A0A] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative bg-[#090909]/95 border rounded-sm p-7 transition-all duration-300 flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.15)] bg-black' 
                    : 'border-gray-800 hover:border-[#FFD700]/40 hover:bg-neutral-900/40'
                }`}
              >
                {/* Thin lines corner tags */}
                <span className="absolute top-0 right-0 w-3 h-[1px] bg-[#FFD700]/25"></span>
                <span className="absolute top-0 right-0 w-[1px] h-3 bg-[#FFD700]/25"></span>
                <span className="absolute bottom-0 left-0 w-3 h-[1px] bg-[#FFD700]/25"></span>
                <span className="absolute bottom-0 left-0 w-[1px] h-3 bg-[#FFD700]/25"></span>

                <div>
                  {/* Card Header Info */}
                  <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD700]/5 border border-[#FFD700]/20 flex items-center justify-center p-2">
                        {renderServiceIcon(service.iconName)}
                      </div>
                      <div>
                        {service.id === 'rush-delivery' ? (
                          <span className="inline-block px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] font-mono font-bold uppercase rounded-sm tracking-wider">
                            Urgent Add-On
                          </span>
                        ) : (
                          <span className="inline-block px-1.5 py-0.5 bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-[8px] font-mono font-semibold uppercase rounded-sm tracking-wider">
                            Classroom Resource
                          </span>
                        )}
                        <h3 className="font-serif text-white text-base leading-tight mt-1">
                          {service.name.split(' (')[0]}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-[8px] text-gray-500 font-mono uppercase tracking-widest leading-none">
                        Est Price
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-[#FFD700] mt-0.5 block">
                        {service.id === 'projects' ? 'R250+' : service.id === 'rush-delivery' ? '+50%' : `R${service.price}`}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>

                  {/* Bullet accordion */}
                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : service.id)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#FFD700] hover:text-[#ffe240] font-semibold transition-colors focus:outline-none cursor-pointer"
                      id={`expand-details-${service.id}`}
                    >
                      {isExpanded ? (
                        <>
                          Hide Syllabus Details <ChevronDown className="w-3.5 h-3.5 transform rotate-180 transition-transform" />
                        </>
                      ) : (
                        <>
                          Expand Syllabus Details <ChevronRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    {isExpanded && (
                      <ul className="flex flex-col gap-2 mt-3.5 text-xs text-gray-400 border-t border-white/5 pt-3.5 animate-in slide-in-from-top-2 duration-200 font-light">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="shrink-0 text-[#FFD700] mt-0.5">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleBookNow(service.id)}
                    className="w-full py-3 bg-transparent border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] font-sans font-bold text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer rounded-sm"
                    id={`book-service-${service.id}`}
                  >
                    Select Category
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prompt parent package help */}
        <div className="mt-8 p-8 rounded-sm bg-[#090909] border border-[#FFD700]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-4">
            <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 items-center justify-center text-[#FFD700]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-white text-lg">Premium Monthly Peace of Mind Subscription</h3>
              <p className="text-xs text-gray-400 mt-1 max-w-xl font-light">
                Get priority delivery of summaries, projects outline assistance and speech preparation for all subjects, Grade R to 12. Ideal for busy working moms and dads.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleBookNow('parent-package')}
            className="w-full md:w-auto px-8 py-3.5 bg-[#FFD700] hover:bg-[#ffe240] text-black font-extrabold text-[10px] uppercase tracking-widest transition-all shadow-[0_0_12px_rgba(255,215,0,0.2)] rounded-sm cursor-pointer whitespace-nowrap"
            id="premium-parent-package-view"
          >
            Review Subscription (R1,200)
          </button>
        </div>
      </div>
    </div>
  );
}
