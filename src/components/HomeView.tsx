import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Trophy, CheckCircle2, Award, Clock, BookCheck, BadgeCent, Lightbulb, FileEdit, UserCheck, Send } from 'lucide-react';
import { ActiveTab, Benefit, ProcessStep } from '../types';
import { BUSINESS_INFO, BENEFITS, PROCESS_STEPS, STATS } from '../data';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 24, hours: 12, minutes: 5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Map icons dynamically to avoid hard-to-maintain mapping
  const renderBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-[#FFD700]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#FFD700]" />;
      case 'BookCheck': return <BookCheck className="w-5 h-5 text-[#FFD700]" />;
      case 'BadgeCent': return <BadgeCent className="w-5 h-5 text-[#FFD700]" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#FFD700]" />;
      default: return <Sparkles className="w-5 h-5 text-[#FFD700]" />;
    }
  };

  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileEdit': return <FileEdit className="w-6 h-6 text-[#FFD700]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#FFD700]" />;
      case 'Send': return <Send className="w-6 h-6 text-[#FFD700]" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-[#FFD700]" />;
      default: return <Sparkles className="w-6 h-6 text-[#FFD700]" />;
    }
  };

  return (
    <div className="bg-black text-gray-300 font-sans relative">
      {/* Vertical Side Tag */}
      <div className="absolute left-4 top-[400px] -rotate-90 origin-left text-[9px] tracking-[0.45em] uppercase text-gray-600 font-bold hidden xl:block pointer-events-none z-10 select-none">
        Online Education Specialists • Bloemfontein
      </div>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 sm:pb-28 lg:pb-36 px-4 sm:px-6 lg:px-8 border-b border-[#FFD700]/20 min-h-[580px] flex items-center">
        {/* Geometric Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 border-r-[1px] border-t-[1px] border-[#FFD700]/20 rounded-tr-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-[1px] border-b-[1px] border-[#FFD700]/10 rounded-bl-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        {/* Background glow flares */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#FFD700]/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#FFD700]/5 blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full z-10">
          {/* Hero text panel */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 border border-[#FFD700]/30 rounded-full text-[10px] uppercase tracking-widest text-[#FFD700] bg-[#FFD700]/5 font-mono select-none">
              Based in Bloemfontein, South Africa
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-[0.95] max-w-xl">
              Your Success <br />
              <span className="text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
                Our Mission.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 font-light max-w-lg leading-relaxed">
              Helping students excel in school, one task at a time. From orals to projects and exam prep, we make learning fun, easy, and stress-free. Available fully online nationwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto pt-4">
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-10 py-4 bg-[#FFD700] hover:bg-[#ffe240] text-black font-extrabold uppercase text-xs tracking-widest rounded-sm hover:brightness-110 shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300 transform hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
                id="hero-cta-btn"
              >
                Get Started Now
              </button>
              
              <div className="flex flex-col text-left border-l border-gray-800 pl-4 py-1">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 font-mono">Next Exam Series</span>
                <span className="text-sm font-mono text-[#FFD700] font-bold tracking-widest select-none">
                  {timeLeft.days}D : {timeLeft.hours.toString().padStart(2, '0')}H : {timeLeft.minutes.toString().padStart(2, '0')}M
                </span>
              </div>
            </div>

            {/* Quick trust notes */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 pt-6 border-t border-[#FFD700]/10 w-full mt-4 text-[10px] font-mono text-gray-500">
              <span className="flex items-center gap-1.5 uppercase tracking-wider"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" /> 100% Plagiarism-free</span>
              <span className="flex items-center gap-1.5 uppercase tracking-wider"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" /> 24-48h Turnaround</span>
              <span className="flex items-center gap-1.5 uppercase tracking-wider"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" /> S.A. Curriculums</span>
            </div>
          </div>

          {/* Hero Illustration Wrapper */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full h-[400px] sm:h-[430px] relative max-w-[450px]">
              <div className="absolute inset-0 border border-[#FFD700]/30 rounded-2xl transform rotate-3"></div>
              
              <div className="absolute inset-0 bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-[#FFD700]/50">
                <img
                  src={BUSINESS_INFO.heroImgUrl}
                  alt="Students studying with neon gold glow theme"
                  className="w-full h-full object-cover select-none block"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback visual illustration block if image fails to render
                    (e.target as HTMLElement).style.display = 'none';
                    const fb = document.getElementById('hero-img-fallback-block');
                    if (fb) fb.classList.remove('hidden');
                  }}
                />

                {/* Nice image fallback banner */}
                <div id="hero-img-fallback-block" className="hidden py-32 px-8 text-center bg-neutral-900 flex flex-col items-center justify-center gap-4 w-full h-full">
                  <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 border border-[#FFD700] flex items-center justify-center text-[#FFD700] animate-pulse">
                    <BookCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-snug">Empowering School Learners</h3>
                    <p className="text-xs text-gray-400 mt-1 max-w-[250px]">
                      Delivering premium orals templates, science diagrams and visual outlines.
                    </p>
                  </div>
                </div>

                {/* Floating active card on the frame */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md rounded-xl p-3 border border-[#FFD700]/25 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 border border-[#FFD700] flex items-center justify-center text-[#FFD700] font-serif font-bold text-sm">
                    E
                  </div>
                  <div className="flex-1">
                    <span className="block text-white text-xs font-bold font-sans">Active Grade Levels</span>
                    <span className="text-[9px] text-[#FFD700] font-mono uppercase tracking-widest leading-none">Grade R - Grade 12</span>
                  </div>
                  <div className="text-right text-[9px] font-mono text-gray-400">
                    Afrikaans & English
                  </div>
                </div>
              </div>

              {/* Floating Tutor Support Badge */}
              <div className="absolute -bottom-6 -left-8 bg-[#0A0A0A] border border-[#FFD700]/40 p-4 rounded-lg shadow-xl w-48 hidden md:block">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">Active Tutors</span>
                </div>
                <p className="text-sm font-serif text-white">Professional Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Geometric Features/Benefits Strip - Replaces Stats on Landing */}
      <section className="border-b border-[#FFD700]/20 bg-black grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 relative z-10">
        {BENEFITS.map((benefit, i) => (
          <div 
            key={i} 
            className="border-b sm:border-b-0 border-[#FFD700]/20 p-6 flex flex-col justify-center items-center text-center group hover:bg-[#FFD700]/5 transition-all duration-300 last:border-b-0 min-h-[140px] sm:border-r last:sm:border-r-0"
          >
            <span className="text-[#FFD700] font-mono text-xs mb-2 font-bold tracking-widest">0{i + 1}</span>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#FFD700] transition-colors duration-200">
              {i === 0 ? "Easy Support" : i === 1 ? "Fast Delivery" : i === 2 ? "All Grades" : i === 3 ? "Affordable" : "Fun Visuals"}
            </h3>
            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">
              {i === 0 ? "Tailored to Curriculums" : i === 1 ? "24–48h Turnaround" : i === 2 ? "Grade R to 12" : i === 3 ? "Parent Friendly" : "Engaging Materials"}
            </p>
          </div>
        ))}
      </section>

      {/* 3. Stats section - repurposed with geometric borders */}
      <section className="bg-neutral-950 border-b border-[#FFD700]/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center flex flex-col gap-1 border-r border-[#FFD700]/10 last:border-0">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FFD700] tracking-tight drop-shadow-[0_0_8px_rgba(255,215,0,0.15)] font-mono">
                {stat.value}
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.1 Luxury Benefit Cards Details section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#FFD700]/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs text-[#FFD700] font-mono font-bold uppercase tracking-widest">
              OUR CONFIDENCE
            </span>
            <h2 className="text-4xl font-serif text-white tracking-tight leading-snug">
              Why Parents & Students Choose Us
            </h2>
            <div className="w-16 h-0.5 bg-[#FFD700]/40 mx-auto"></div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-lg mx-auto">
              We understand school requirements run deep, and busy parents deserve reliable, creative assistance. Here's why we excel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="group relative bg-[#FFD700]/0 border border-[#FFD700]/10 rounded-sm p-8 hover:bg-neutral-950 hover:border-[#FFD700]/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all duration-300"
              >
                {/* Thin lines corner tags */}
                <span className="absolute top-0 right-0 w-4 h-[1px] bg-[#FFD700]/30"></span>
                <span className="absolute top-0 right-0 w-[1px] h-4 bg-[#FFD700]/30"></span>
                <span className="absolute bottom-0 left-0 w-4 h-[1px] bg-[#FFD700]/30"></span>
                <span className="absolute bottom-0 left-0 w-[1px] h-4 bg-[#FFD700]/30"></span>

                <div className="flex flex-col gap-5">
                  <div className="w-11 h-11 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center relative text-white">
                    {renderBenefitIcon(benefit.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-white text-lg tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Process Step by Step Guide */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#FFD700]/10 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs text-[#FFD700] font-mono font-bold uppercase tracking-widest">
              HOW WE WORK
            </span>
            <h2 className="text-4xl font-serif text-white tracking-tight leading-snug">
              Simple Steps to Success
            </h2>
            <div className="w-16 h-0.5 bg-[#FFD700]/40 mx-auto"></div>
            <p className="text-sm text-gray-400 leading-relaxed font-light max-w-lg mx-auto">
              Our straightforward digital pipeline ensures your school project guidelines are handled with fast, stress-free accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((p, i) => (
              <div key={i} className="flex flex-col gap-5 items-center text-center relative group">
                {/* Horizontal dynamic connecting line only on large layouts */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-1/2 w-full h-[1px] border-t border-dashed border-[#FFD700]/25 z-0"></div>
                )}

                {/* Step circle container */}
                <div className="relative w-14 h-14 rounded-full bg-black border border-[#FFD700] flex items-center justify-center text-white shadow-[0_0_12px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 z-10">
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FFD700] border border-black text-black font-mono font-bold text-[10px] flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {p.step}
                  </span>
                  {renderStepIcon(p.iconName)}
                </div>

                <div className="flex flex-col gap-2 mt-2 z-10">
                  <h3 className="font-serif text-white text-base tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-[210px] sm:max-w-none font-light">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt CTA to Action desk */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-10 py-4 border border-[#FFD700] text-[#FFD700] hover:text-black hover:bg-[#FFD700] font-sans font-bold text-xs tracking-widest transition-all uppercase flex items-center gap-2 group cursor-pointer rounded-sm"
              id="steps-cta-btn"
            >
              Order Resources Today <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Direct Quick Pitch Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto rounded-sm border border-[#FFD700]/30 bg-[#0A0A0A] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFD700]/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col gap-3 max-w-lg text-center md:text-left">
            <span className="text-[10px] text-[#FFD700] font-mono uppercase tracking-widest font-bold">
              GET COMMITTED
            </span>
            <h2 className="text-3xl font-serif text-white tracking-tight leading-tight">
              Ready to Accelerate Their Academic Grades?
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed font-light mt-1">
              Take the pressure off! EduSpark Hub empowers parents with expert academic aids written by professional Afrikaans and English speechwriters and designers.
            </p>
          </div>

          <div className="flex flex-col w-full sm:w-auto gap-3 shrink-0">
            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#FFD700] hover:bg-[#ffe240] text-black font-extrabold text-xs uppercase tracking-widest rounded-sm text-center transition-all duration-300 shadow-[0_4px_12px_rgba(255,215,0,0.15)] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] cursor-pointer"
              id="pitch-cta-primary"
            >
              Start Learning Now
            </button>
            <button
              onClick={() => {
                setActiveTab('prices');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 border border-[#FFD700]/30 hover:border-[#FFD700] hover:bg-white/5 font-extrabold text-xs rounded-sm text-center text-white tracking-widest uppercase transition-all duration-300 cursor-pointer"
              id="pitch-cta-prices"
            >
              Analyze Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
