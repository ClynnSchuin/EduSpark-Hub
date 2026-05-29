import { useState } from 'react';
import { Copy, Check, Ticket, BadgeCent, HelpCircle, Shield, AlertTriangle } from 'lucide-react';
import { SERVICES, OPTIONAL_ADD_ONS, BUSINESS_INFO } from '../data';
import { ActiveTab } from '../types';

interface PricesViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  setPreselectedService: (serviceId: string) => void;
}

export default function PricesView({ setActiveTab, setPreselectedService }: PricesViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.specialOfferCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleBookNow = (serviceId: string) => {
    setPreselectedService(serviceId);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-gray-300 font-sans py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 animate-fade-in">
          <span className="text-xs text-[#FFD700] font-mono font-bold uppercase tracking-widest">
            TRANSPARENT VALUE
          </span>
          <h1 className="text-4xl font-serif text-white tracking-tight leading-snug">
            Affordable Prices for Every Student
          </h1>
          <div className="w-16 h-0.5 bg-[#FFD700]/40 mx-auto mt-1"></div>
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg mx-auto">
            High-quality school support doesn't have to break your family budget. No sign-up fees or complex recurring commitments.
          </p>
        </div>

        {/* Pricing Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Price Table */}
          <div className="lg:col-span-8 bg-[#FFD700]/0 border border-[#FFD700]/20 rounded-sm p-1 overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.05)]">
            <div className="bg-neutral-950/90 rounded-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#FFD700]/15 bg-black/60 flex justify-between items-center text-[10px] uppercase tracking-widest font-mono text-[#FFD700] font-bold">
                <span>Task / Service Type</span>
                <span>ZAR Price Indicator</span>
              </div>

              <div className="divide-y divide-white/5">
                {SERVICES.map((s) => (
                  <div
                    key={s.id}
                    id={`price-row-${s.id}`}
                    className="px-6 py-5 flex items-center justify-between gap-4 hover:bg-neutral-900/40 transition-colors duration-150"
                  >
                    <div>
                      <h3 className="font-serif text-white text-base leading-snug">
                        {s.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 max-w-md hidden sm:block font-light">
                        {s.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#FFD700]">
                        {s.id === 'projects' ? 'R250 – R350' : s.id === 'rush-delivery' ? '+50%' : `R${s.price}`}
                      </span>

                      <button
                        onClick={() => handleBookNow(s.id)}
                        className="px-5 py-2 text-[10px] uppercase font-bold tracking-widest rounded-sm bg-transparent border border-[#FFD700]/40 hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all cursor-pointer text-[#FFD700]"
                        id={`prices-order-${s.id}`}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Voucher Box + Extras */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* SPECIAL OFFER TICKET */}
            <div className="relative overflow-hidden bg-gradient-to-tr from-[#FFD700]/10 to-transparent border border-[#FFD700]/30 rounded-sm p-6 sm:p-8 text-center shadow-[0_0_25px_rgba(255,215,0,0.1)] flex flex-col gap-5">
              {/* Corner ribbons */}
              <span className="absolute top-0 right-0 w-3 h-[1px] bg-[#FFD700]/30"></span>
              <span className="absolute top-0 right-0 w-[1px] h-3 bg-[#FFD700]/30"></span>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                <Ticket className="w-4 h-4 animate-pulse" />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[9px] text-[#FFD700] font-mono font-bold uppercase tracking-widest leading-none">
                  LIMITED DISCOUNT
                </span>
                <span className="text-2xl font-serif text-white tracking-tight mt-1">
                  Get {BUSINESS_INFO.specialOfferDiscount} OFF
                </span>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-light">
                  Save instantly on your child's very first task draft or summary order.
                </p>
              </div>

              {/* Coupon Card Indicator */}
              <div className="border border-white/10 bg-black/80 rounded-sm p-4 flex flex-col gap-2 relative">
                <span className="block text-[8px] text-gray-500 font-mono uppercase tracking-widest text-left">
                  Voucher Code
                </span>
                <div className="flex items-center justify-between gap-2 px-3 py-2 bg-[#090909] border border-white/5 rounded-sm">
                  <span className="font-mono text-sm sm:text-base font-extrabold text-[#FFD700] tracking-widest pl-1">
                    {BUSINESS_INFO.specialOfferCode}
                  </span>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-[9px] rounded-sm bg-[#FFD700] hover:bg-[#ffe240] text-black font-extrabold tracking-widest uppercase transition-colors cursor-pointer"
                    id="copy-voucher-code"
                  >
                    {copied ? (
                      <>
                        Copied <Check className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        Copy <Copy className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* OPTIONAL ADD-ONS LIST */}
            <div className="bg-[#090909] border border-gray-800 rounded-sm p-7 flex flex-col gap-4 relative">
              <span className="absolute bottom-0 left-0 w-3 h-[1px] bg-[#FFD700]/20"></span>
              <span className="absolute bottom-0 left-0 w-[1px] h-3 bg-[#FFD700]/20"></span>

              <h3 className="text-white text-xs font-bold uppercase font-mono tracking-widest border-l-2 border-[#FFD700] pl-2.5">
                Optional Study Add-ons
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Need extra study assets to supercharge your child's preparation or orals?
              </p>

              <div className="flex flex-col gap-3">
                {OPTIONAL_ADD_ONS.map((add, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-gray-300 font-light">{add.name}</span>
                    <span className="font-mono text-[#FFD700] font-bold">R{add.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Informative Quote Guarantee indicator */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-neutral-950/60 p-8 rounded-sm border border-white/5 text-xs text-gray-400 font-light">
          <div className="flex gap-3">
            <BadgeCent className="w-5 h-5 text-[#FFD700] shrink-0" />
            <div>
              <span className="block font-bold text-white uppercase tracking-wider mb-1 font-mono text-[10px]">Affordable Aids</span>
              <p className="leading-relaxed">We strive to make South African secondary and primary school task outline assistance completely affordable for all working parents.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-[#FFD700] shrink-0" />
            <div>
              <span className="block font-bold text-white uppercase tracking-wider mb-1 font-mono text-[10px]">Satisfaction Assured</span>
              <p className="leading-relaxed">If elements of an oral or science template require small adjustments to match school criteria, we provide free turnarounds.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <span className="block font-bold text-white uppercase tracking-wider mb-1 font-mono text-[10px]">Rush Service Policies</span>
              <p className="leading-relaxed">All emergency orders delivered within 24 hours carry a standard +50% markup to sponsor immediate senior writing queues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
