import { Mail, MessageCircle, MapPin, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import ContactForm from './ContactForm';
import { BUSINESS_INFO } from '../data';

interface ContactViewProps {
  preselectedService?: string;
}

export default function ContactView({ preselectedService = 'orals' }: ContactViewProps) {
  return (
    <div className="bg-black text-gray-300 font-sans py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 animate-fade-in">
          <span className="text-xs text-[#FFD700] font-mono font-bold uppercase tracking-widest">
            24/7 SUPPORT PIPELINE
          </span>
          <h1 className="text-4xl font-serif text-white tracking-tight leading-snug">
            We're Always Here to Help Your Child
          </h1>
          <div className="w-16 h-0.5 bg-[#FFD700]/40 mx-auto mt-1"></div>
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg mx-auto">
            Whether you need custom worksheets, urgent speeches, or science projects preparation guides, get connected with our experts now.
          </p>
        </div>

        {/* Structural split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Short Bio info Card */}
            <div className="relative overflow-hidden bg-[#090909] border border-gray-800 rounded-sm p-8 flex flex-col gap-4 shadow-sm">
              <span className="absolute top-0 right-0 w-3 h-[1px] bg-[#FFD700]/20"></span>
              <span className="absolute top-0 right-0 w-[1px] h-3 bg-[#FFD700]/20"></span>
              
              <h3 className="text-lg font-serif text-white tracking-tight">
                EduSpark Hub Support Desk
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                As a fully digital study support platform born in Bloemfontein, we deliver optimized study aids nation-wide. No physical meetings required; we transfer completed checklists via email or WhatsApp files.
              </p>
            </div>

            {/* Direct Contact Medium cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* WhatsApp card */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="group relative p-6 bg-[#090909] border border-emerald-500/10 rounded-sm flex flex-col gap-3.5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 text-left cursor-pointer"
                id="contact-whatsapp"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-250">
                  <MessageCircle className="w-5 h-5 fill-emerald-400/5 group-hover:fill-black/10" />
                </div>
                <div>
                  <span className="block text-[9px] text-gray-500 font-mono uppercase tracking-widest leading-none mb-1">
                    WhatsApp Chat
                  </span>
                  <span className="font-bold text-white text-sm sm:text-base group-hover:text-emerald-400 transition-colors">
                    {BUSINESS_INFO.whatsappFormatted}
                  </span>
                  <span className="block text-[9px] text-emerald-500 mt-1 font-mono uppercase font-semibold">
                    • Average 15m reply
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="group relative p-6 bg-[#090909] border border-[#FFD700]/10 rounded-sm flex flex-col gap-3.5 hover:border-[#FFD700]/40 hover:bg-[#FFD700]/5 transition-all duration-300 text-left cursor-pointer"
                id="contact-email"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-colors duration-250">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] text-gray-500 font-mono uppercase tracking-widest leading-none mb-1">
                    Email Account
                  </span>
                  <span className="font-bold text-white text-sm sm:text-base group-hover:text-[#FFD700] transition-colors break-all block">
                    {BUSINESS_INFO.email}
                  </span>
                  <span className="block text-[9px] text-[#FFD700] mt-1 font-mono uppercase font-semibold">
                    • 1–2 hours response
                  </span>
                </div>
              </a>

            </div>

            {/* Hours and Regional Operations */}
            <div className="bg-[#090909] border border-gray-800 rounded-sm p-7 flex flex-col gap-4 text-xs font-light">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-serif text-sm tracking-tight mb-0.5 font-normal">Order Intake Hours</span>
                  <span className="text-gray-400 font-normal">{BUSINESS_INFO.workingHours}</span>
                  <p className="text-gray-500 mt-1 font-mono text-[10px]">Academic team active 24/7 for urgent orders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                <MapPin className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-serif text-sm tracking-tight mb-0.5 font-normal">Headquarters & Delivery</span>
                  <span className="text-gray-400 font-normal">{BUSINESS_INFO.location}</span>
                  <p className="text-gray-500 mt-1 font-mono text-[10px]">Deliveries made worldwide via PDF & cloud file links.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-white/5 pt-4 text-[11px]">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-serif text-sm tracking-tight mb-0.5 font-normal">Privacy Assured</span>
                  <p className="text-gray-400 leading-relaxed">
                    Student identities and teacher instructions are kept strictly confidential. Your child's details are protected securely.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <ContactForm initialService={preselectedService} />
          </div>

        </div>

      </div>
    </div>
  );
}
