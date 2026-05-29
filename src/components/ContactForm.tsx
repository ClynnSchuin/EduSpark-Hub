import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';

interface ContactFormProps {
  initialService?: string;
}

export default function ContactForm({ initialService = 'orals' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: 'Grade 8',
    service: initialService,
    message: '',
    isUrgent: false,
  });

  // Synchronize state when custom service selection is made externally
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const selectedServiceObj = SERVICES.find((s) => s.id === formData.service);
  const basePrice = selectedServiceObj ? selectedServiceObj.price : 0;
  const isRushMarkup = formData.isUrgent;
  
  // Calculate instant quote
  const calculatedPrice = isRushMarkup 
    ? Math.round(basePrice * 1.5) 
    : basePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable form logging/sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  // Pre-fill a WhatsApp message based on their form data
  const handleDirectWhatsApp = () => {
    const serviceName = selectedServiceObj ? selectedServiceObj.name : 'School support';
    const urgencyText = isRushMarkup ? 'URGENT (24-hour delivery)' : 'Standard duration';
    const text = encodeURIComponent(
      `Hello EduSpark Hub! 🚀 I've filled in your website reservation form:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Grade: ${formData.grade}\n` +
      `• Task: ${serviceName}\n` +
      `• Contact Details: ${formData.phone} / ${formData.email}\n` +
      `• Urgency: ${urgencyText}\n` +
      `• Requirements: ${formData.message || 'None specified'}\n\n` +
      `Estimated Quote: R${calculatedPrice}\n` +
      `Could we please kickstart this project?`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="relative font-sans text-gray-300 max-w-xl mx-auto w-full bg-[#090909] border border-[#FFD700]/30 rounded-sm p-6 sm:p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:border-[#FFD700]/50 hover:shadow-[0_0_35px_rgba(255,215,0,0.15)] transition-all duration-300 overflow-hidden">
      {/* Corner notches */}
      <span className="absolute top-0 right-0 w-3 h-[1px] bg-[#FFD700]/45"></span>
      <span className="absolute top-0 right-0 w-[1px] h-3 bg-[#FFD700]/45"></span>
      <span className="absolute bottom-0 left-0 w-3 h-[1px] bg-[#FFD700]/45"></span>
      <span className="absolute bottom-0 left-0 w-[1px] h-3 bg-[#FFD700]/45"></span>

      {/* Absolute design accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 rounded-bl-full pointer-events-none"></div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-[9px] font-mono mb-2 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3 h-3 animate-pulse" /> Direct Reservation Desk
            </div>
            <h3 className="text-2xl font-serif text-white tracking-tight">Let's Lift Their Grades</h3>
            <p className="text-xs text-gray-400 mt-1 font-light">
              Provide task guidelines & details. We will email or text back in 2 hours with pricing structures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-neutral-900 border border-gray-800 focus:border-[#FFD700] rounded-sm px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600 focus:shadow-[0_0_10px_rgba(255,215,0,0.05)]"
                placeholder="Parent or Student Name"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-neutral-900 border border-gray-800 focus:border-[#FFD700] rounded-sm px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600 focus:shadow-[0_0_10px_rgba(255,215,0,0.05)]"
                placeholder="parentsio@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone/WhatsApp Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                Cellphone / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-neutral-900 border border-gray-800 focus:border-[#FFD700] rounded-sm px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600 focus:shadow-[0_0_10px_rgba(255,215,0,0.05)]"
                placeholder="e.g. 074 016 1182"
              />
            </div>

            {/* Grade Selection */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="grade" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                Student's School Grade
              </label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="w-full bg-neutral-900 border border-gray-800 focus:border-[#FFD700] rounded-sm px-4 py-3 text-white text-sm outline-none transition-all select-none focus:shadow-[0_0_10px_rgba(255,215,0,0.05)] cursor-pointer"
              >
                <option value="Grade R-3">Foundation Phase (R - 3)</option>
                <option value="Grade 4-7">Intermediate Phase (4 - 7)</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12 / Matric</option>
              </select>
            </div>
          </div>

          {/* Service Needed Selection */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="service" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
              Required Support Category
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full bg-neutral-900 border border-gray-800 focus:border-[#FFD700] rounded-sm px-4 py-3 text-white text-sm outline-none transition-all select-none focus:shadow-[0_0_10px_rgba(255,215,0,0.05)] cursor-pointer"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} {s.id !== 'rush-delivery' ? `(From R${s.price})` : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
              Outline Requirements & Topics
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-neutral-900 border border-gray-800 focus:border-[#FFD700] rounded-sm px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600 focus:shadow-[0_0_10px_rgba(255,215,0,0.05)] resize-none"
              placeholder="e.g. Needs a 3-minute speeches in Afrikaans about my hobby with 5 revision questions and vocab cards."
            ></textarea>
          </div>

          {/* Urgent / Rush toggle checkbox */}
          <div className="flex items-center gap-3.5 bg-neutral-950/80 border border-amber-500/15 rounded-sm p-4 transition-all">
            <input
              type="checkbox"
              id="isUrgent"
              name="isUrgent"
              checked={formData.isUrgent}
              onChange={handleCheckboxChange}
              className="w-5 h-5 rounded-sm border-gray-850 text-[#FFD700] bg-neutral-900 focus:ring-[#FFD700]/50 accent-[#FFD700] shrink-0 cursor-pointer"
            />
            <div className="flex flex-col">
              <label htmlFor="isUrgent" className="text-xs font-bold text-[#FFD700] uppercase tracking-wider cursor-pointer flex items-center gap-1.5">
                Rush Request Needed (+50%)
              </label>
              <span className="text-[11px] text-gray-400 font-light">
                Turnaround within 24 hours. Ideal for sudden deadlines next week or tomorrow.
              </span>
            </div>
          </div>

          {/* Instant Price estimation widget */}
          <div className="bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-sm p-4 flex items-center justify-between">
            <div>
              <span className="block text-[10px] text-[#FFD700]/80 font-mono uppercase tracking-widest">
                Cost Estimate
              </span>
              <span className="text-xl font-serif text-white block mt-0.5">
                {selectedServiceObj?.id === 'rush-delivery' ? 'Price + 50% Markup' : `R${calculatedPrice}`}
              </span>
            </div>
            <div className="text-right flex flex-col gap-0.5">
              <span className="text-[9px] text-gray-500 font-mono uppercase leading-none">Verified Quote</span>
              <span className="inline-flex items-center gap-1 text-[10px] text-[#FFD700] mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Guarantee Quality
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-sm bg-[#FFD700] hover:bg-[#ffe240] text-black font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(255,215,0,0.15)] flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                Request Free Custom Quotation <Send className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </form>
      ) : (
        /* Form success confirmation block */
        <div className="text-center py-6 flex flex-col items-center gap-5 font-sans animate-in zoom-in-95 duration-400">
          <div className="w-16 h-16 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.15)] animate-bounce">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-serif text-white tracking-tight">Request Lodged Successfully!</h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto leading-relaxed font-light">
              Hey <span className="text-white font-bold">{formData.name}</span>, your request for the{' '}
              <span className="text-[#FFD700] font-bold">
                {selectedServiceObj?.name}
              </span>{' '}
              task has been registered. We will notify you at{' '}
              <span className="text-white font-medium">{formData.phone}</span> /{' '}
              <span className="text-white font-medium">{formData.email}</span> with a formal quote within 2 hours.
            </p>
          </div>

          <div className="w-full bg-[#FFD700]/5 border border-white/10 rounded-sm p-5 text-left flex flex-col gap-2 text-xs">
            <span className="font-bold text-[#FFD700] uppercase tracking-widest font-mono text-[10px]">Summary Sheet</span>
            <div className="grid grid-cols-2 gap-2 text-gray-400 font-light pt-1">
              <span>Selected Option:</span> <span className="text-white text-right font-medium">{selectedServiceObj?.name}</span>
              <span>Pupil Phase:</span> <span className="text-white text-right">{formData.grade}</span>
              <span>Estimated cost:</span> <span className="text-[#FFD700] text-right font-bold font-mono">R{calculatedPrice}</span>
              <span>Deadlines status:</span> <span className="text-amber-400 text-right uppercase font-mono text-[10px]">{isRushMarkup ? 'URGENT 24H' : 'Standard'}</span>
            </div>
          </div>

          {/* WhatsApp Direct Accelerator */}
          <div className="border border-[#FFD700]/20 bg-[#0B0B0B] p-6 rounded-sm w-full flex flex-col gap-4">
            <p className="text-xs text-gray-400 text-center leading-relaxed font-light">
              Want to skip the queue and finalize delivery instantly? Initiate direct contact on WhatsApp with your loaded options right now!
            </p>
            <button
              onClick={handleDirectWhatsApp}
              className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.15)]"
            >
              <MessageSquare className="w-4 h-4 fill-black/15" /> Launch Direct WhatsApp Chat <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                grade: 'Grade 8',
                service: 'orals',
                message: '',
                isUrgent: false,
              });
            }}
            className="text-xs text-gray-500 hover:text-white transition-colors underline focus:outline-none cursor-pointer font-light"
          >
            Request help for another child's school project
          </button>
        </div>
      )}
    </div>
  );
}
