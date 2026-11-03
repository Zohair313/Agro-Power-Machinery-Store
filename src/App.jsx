import React, { useState, useEffect } from 'react';
import urData from './locales/ur.json';
import enData from './locales/en.json';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Wrench,
  Gauge,
  ShieldCheck,
  Truck,
  HelpCircle,
  Star,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en'); // English by default per user request
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partForm, setPartForm] = useState({
    name: '',
    phone: '',
    model: '',
    part: ''
  });

  const t = lang === 'ur' ? urData : enData;
  const isRtl = lang === 'ur';

  // Synchronize document dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = lang === 'ur'
      ? 'ایگرو پاور مشینری اسٹور لاہور | ترکی ملکنگ مشینیں اور ڈیری آلات'
      : 'Agro Power Machinery Store Lahore | Turkish Milking Machines & Parts';
  }, [lang, isRtl]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ur' ? 'en' : 'ur'));
  };

  const openWhatsApp = (customMessage) => {
    const text = encodeURIComponent(customMessage || 'السلام علیکم، مجھے ترکی ملکنگ مشین کے بارے میں معلومات لینی ہیں۔');
    window.open(`https://wa.me/923101338666?text=${text}`, '_blank');
  };

  const handlePartFormSubmit = (e) => {
    e.preventDefault();
    const msg = lang === 'ur'
      ? `السلام علیکم ایگرو پاور مشینری اسٹور،\nنام: ${partForm.name || 'نامعلوم'}\nفون: ${partForm.phone || 'نامعلوم'}\nمشین ماڈل: ${partForm.model || 'معلوم نہیں'}\nمطلوبہ سپیئر پارٹ: ${partForm.part}`
      : `Hello Agro Power Machinery Store,\nName: ${partForm.name || 'N/A'}\nPhone: ${partForm.phone || 'N/A'}\nMachine Model: ${partForm.model || 'N/A'}\nPart Needed: ${partForm.part}`;
    openWhatsApp(msg);
  };

  const ArrowIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen text-[#22282B] bg-[#F6F4EE] selection:bg-[#1E4D2B] selection:text-white antialiased">
      {/* 1. TOP BAR */}
      <section className="bg-[#22282B] text-neutral-200 text-xs sm:text-sm border-b border-neutral-800 py-2 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-neutral-400 hidden md:inline">{t.topbar.callNow}</span>
            <a
              href="tel:+923101338666"
              className="inline-flex items-center gap-1.5 hover:text-[#D98E1F] font-semibold text-neutral-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D98E1F]" />
              <span dir="ltr">+92 310 1338666</span>
            </a>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <a
              href="tel:+923114338666"
              className="inline-flex items-center gap-1.5 hover:text-[#D98E1F] font-semibold text-neutral-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D98E1F]" />
              <span dir="ltr">+92 311 4338666</span>
            </a>
          </div>

          <div className="flex items-center gap-3 ms-auto">
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-1.5 hover:text-[#D98E1F] text-neutral-200 transition-colors py-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </button>
            <span className="text-neutral-600">|</span>
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-0.5 border border-neutral-600 hover:border-[#D98E1F] text-white hover:text-[#D98E1F] rounded text-xs font-semibold tracking-wider transition-colors"
            >
              {t.topbar.switchLang}
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#F6F4EE]/95 backdrop-blur-sm border-b border-neutral-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#1E4D2B] text-white rounded flex items-center justify-center font-bold text-lg border border-[#163820]">
              APM
            </div>
            <div>
              <div className="font-extrabold text-[#1E4D2B] text-lg sm:text-xl tracking-tight leading-none">
                {lang === 'ur' ? 'ایگرو پاور مشینری اسٹور' : 'AGRO POWER MACHINERY'}
              </div>
              <div className="text-xs text-neutral-600 font-medium tracking-wide mt-1">
                {lang === 'ur' ? 'لاہور — ترکی ملکنگ مشینیں و ڈیری آلات' : 'Lahore — Turkish Milking Machines & Parts'}
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#22282B]">
            <a href="#machines" className="hover:text-[#1E4D2B] transition-colors">{t.nav.machines}</a>
            <a href="#tools" className="hover:text-[#1E4D2B] transition-colors">{t.nav.tools}</a>
            <a href="#spare-parts" className="hover:text-[#1E4D2B] transition-colors">{t.nav.spareParts}</a>
            <a href="#why-us" className="hover:text-[#1E4D2B] transition-colors">{t.nav.whyUs}</a>
            <a href="#reviews" className="hover:text-[#1E4D2B] transition-colors">{t.nav.reviews}</a>
            <a href="#visit-us" className="hover:text-[#1E4D2B] transition-colors">{t.nav.visitUs}</a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white text-sm font-semibold px-4 py-2.5 rounded border border-[#1E4D2B] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D98E1F]" />
              <span>{t.nav.contactWhatsApp}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F6F4EE] border-b border-neutral-300 px-6 py-4 space-y-3">
            <a
              href="#machines"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-1.5 border-b border-neutral-200"
            >
              {t.nav.machines}
            </a>
            <a
              href="#tools"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-1.5 border-b border-neutral-200"
            >
              {t.nav.tools}
            </a>
            <a
              href="#spare-parts"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-1.5 border-b border-neutral-200"
            >
              {t.nav.spareParts}
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-1.5 border-b border-neutral-200"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-1.5 border-b border-neutral-200"
            >
              {t.nav.reviews}
            </a>
            <a
              href="#visit-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-1.5 border-b border-neutral-200"
            >
              {t.nav.visitUs}
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full inline-flex justify-center items-center gap-2 bg-[#1E4D2B] text-white py-3 rounded font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#D98E1F]" />
                <span>{t.nav.contactWhatsApp}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (Split Layout) */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left/Start Column: Concrete Headline & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-[#1E4D2B]/10 text-[#1E4D2B] border border-[#1E4D2B]/30 px-3 py-1 rounded text-xs sm:text-sm font-semibold">
                {t.hero.badge}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E4D2B] leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => openWhatsApp('السلام علیکم، مجھے ترکی ملکنگ مشینوں کی قیمت اور ماڈلز کے ریٹ جاننے ہیں۔')}
                  className="inline-flex items-center justify-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white px-6 py-3.5 rounded font-semibold text-base border border-[#1E4D2B] transition-colors min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 text-[#D98E1F]" />
                  <span>{t.hero.ctaWhatsApp}</span>
                </button>
                <a
                  href="tel:+923101338666"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-neutral-100 text-[#22282B] px-6 py-3.5 rounded font-semibold text-base border border-neutral-400 transition-colors min-h-[48px]"
                >
                  <Phone className="w-5 h-5 text-[#1E4D2B]" />
                  <span>{t.hero.ctaCall}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-neutral-200 text-xs sm:text-sm text-neutral-600 flex flex-wrap gap-y-2 gap-x-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1E4D2B]" />
                  <span>{lang === 'ur' ? 'لاہور میں دستیابی' : 'Direct Stock in Lahore'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1E4D2B]" />
                  <span>{lang === 'ur' ? 'ٹریننگ اور رہنمائی' : 'Setup & Demo Included'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1E4D2B]" />
                  <span>{lang === 'ur' ? 'پنجاب بھر میں ترسیل' : 'All-Punjab Delivery'}</span>
                </span>
              </div>
            </div>

            {/* Right/End Column: Realistic Machine Photo & Facts Badge */}
            <div className="lg:col-span-5">
              <div className="bg-[#F6F4EE] border border-neutral-300 rounded p-4 sm:p-5">
                <div className="relative aspect-4/3 rounded overflow-hidden border border-neutral-300 bg-white">
                  <img
                    src="/images/hero-machine-real.jpg"
                    alt={t.hero.imageAlt}
                    loading="eager"
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/hero-machine.jpg";
                    }}
                  />
                  <div className="absolute bottom-2 start-2 bg-[#22282B]/90 text-white text-xs px-2.5 py-1 rounded border border-neutral-600">
                    {lang === 'ur' ? 'اصل ترکی ماڈل اسٹور گودام میں' : 'Original Turkish Stock at Lahore Store'}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-300 flex items-center justify-between text-xs text-neutral-600">
                  <span>{lang === 'ur' ? 'روحی نالہ روڈ گودام' : 'Rohi Nala Road Warehouse'}</span>
                  <span className="font-semibold text-[#1E4D2B]">{lang === 'ur' ? 'تازہ امپورٹ لاٹ' : 'Fresh Import Batch'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Under Hero: Facts Row (Strictly 3 factual badges) */}
          <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.hero.stats.map((st, idx) => (
              <div key={idx} className="bg-[#F6F4EE] p-5 rounded border border-neutral-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#1E4D2B] text-[#D98E1F] flex items-center justify-center shrink-0">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Star className="w-5 h-5 fill-current" />}
                  {idx === 2 && <Wrench className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <div className="text-base font-bold text-[#22282B]">{st.label}</div>
                  <div className="text-xs sm:text-sm text-neutral-600 mt-0.5">{st.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MACHINES SECTION (Feature Blocks: Single-Bucket vs Double-Cluster) */}
      <section id="machines" className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#1E4D2B] uppercase tracking-wider block mb-1">
            {t.machines.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22282B]">
            {t.machines.title}
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2">
            {t.machines.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {/* Block 1: Single Bucket Machine */}
          <div className="bg-white border border-neutral-300 rounded overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:border-neutral-400 transition-colors">
            <div className="lg:col-span-5 bg-neutral-100 border-b lg:border-b-0 lg:border-inline-end border-neutral-300 p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#1E4D2B] text-white text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  {t.machines.singleBucket.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#22282B]">
                  {t.machines.singleBucket.name}
                </h3>
                <div className="text-xs font-mono font-semibold text-neutral-500 mt-1">
                  {t.machines.singleBucket.model}
                </div>
              </div>

              <div className="my-6 aspect-4/3 rounded overflow-hidden border border-neutral-300 bg-white">
                <img
                  src="/images/single-bucket-real.jpg"
                  alt={t.machines.singleBucket.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/single-bucket.jpg";
                  }}
                />
              </div>

              <div className="bg-[#F6F4EE] border border-neutral-300 p-3 rounded text-xs text-neutral-700">
                <span className="font-bold text-[#1E4D2B]">{lang === 'ur' ? 'فارم سائز:' : 'Suitable For:'} </span>
                {t.machines.singleBucket.targetHerd}
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                  {t.machines.singleBucket.description}
                </p>

                {/* Technical Specifications Table */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  {lang === 'ur' ? 'تکنیکی تفصیلات (فیکٹری اسپیکس)' : 'Technical Specifications'}
                </h4>
                <div className="border border-neutral-200 rounded divide-y divide-neutral-200 text-sm">
                  <div className="grid grid-cols-12 p-3 bg-[#F6F4EE]">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.capacity}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.singleBucket.specs.capacity}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 p-3 bg-white">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.speed}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.singleBucket.specs.speed}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 p-3 bg-[#F6F4EE]">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.motor}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.singleBucket.specs.motor}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 p-3 bg-white">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.pump}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.singleBucket.specs.pump}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 p-3 bg-[#F6F4EE]">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.pulsator}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.singleBucket.specs.pulsator}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-600">
                  {lang === 'ur' ? 'گارنٹی اور پارٹس کی فراہمی کے ساتھ' : 'Complete with local warranty & parts backup'}
                </div>
                <button
                  onClick={() => openWhatsApp(t.machines.singleBucket.whatsappMsg)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white px-5 py-3 rounded font-semibold text-sm transition-colors min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#D98E1F]" />
                  <span>{t.machines.singleBucket.cta}</span>
                  <ArrowIcon className="w-4 h-4 ms-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Block 2: Double Cluster Machine */}
          <div className="bg-white border border-neutral-300 rounded overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:border-neutral-400 transition-colors">
            <div className="lg:col-span-5 bg-neutral-100 border-b lg:border-b-0 lg:border-inline-end border-neutral-300 p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#D98E1F] text-black text-xs font-bold px-2.5 py-1 rounded mb-3">
                  {t.machines.doubleCluster.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#22282B]">
                  {t.machines.doubleCluster.name}
                </h3>
                <div className="text-xs font-mono font-semibold text-neutral-500 mt-1">
                  {t.machines.doubleCluster.model}
                </div>
              </div>

              <div className="my-6 aspect-4/3 rounded overflow-hidden border border-neutral-300 bg-white">
                <img
                  src="/images/double-cluster-real.jpg"
                  alt={t.machines.doubleCluster.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/double-cluster.jpg";
                  }}
                />
              </div>

              <div className="bg-[#F6F4EE] border border-neutral-300 p-3 rounded text-xs text-neutral-700">
                <span className="font-bold text-[#1E4D2B]">{lang === 'ur' ? 'فارم سائز:' : 'Suitable For:'} </span>
                {t.machines.doubleCluster.targetHerd}
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                  {t.machines.doubleCluster.description}
                </p>

                {/* Technical Specifications Table */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  {lang === 'ur' ? 'تکنیکی تفصیلات (فیکٹری اسپیکس)' : 'Technical Specifications'}
                </h4>
                <div className="border border-neutral-200 rounded divide-y divide-neutral-200 text-sm">
                  <div className="grid grid-cols-12 p-3 bg-[#F6F4EE]">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.capacity}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.doubleCluster.specs.capacity}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 p-3 bg-white">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.speed}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.doubleCluster.specs.speed}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 p-3 bg-[#F6F4EE]">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.motor}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.doubleCluster.specs.motor}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 p-3 bg-white">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.pump}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.doubleCluster.specs.pump}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 p-3 bg-[#F6F4EE]">
                    <span className="col-span-5 sm:col-span-4 font-semibold text-neutral-800">
                      {t.machines.specsLabels.pulsator}
                    </span>
                    <span className="col-span-7 sm:col-span-8 text-neutral-700">
                      {t.machines.doubleCluster.specs.pulsator}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-600">
                  {lang === 'ur' ? 'ہیوی ڈیوٹی ٹینک اور پریشر گیج کے ساتھ' : 'Includes heavy-duty reserve tank & vacuum gauge'}
                </div>
                <button
                  onClick={() => openWhatsApp(t.machines.doubleCluster.whatsappMsg)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white px-5 py-3 rounded font-semibold text-sm transition-colors min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#D98E1F]" />
                  <span>{t.machines.doubleCluster.cta}</span>
                  <ArrowIcon className="w-4 h-4 ms-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DAIRY TOOLS AND ACCESSORIES (Compact Grid Layout, completely distinct from machines) */}
      <section id="tools" className="py-16 bg-[#EDE9DE] border-y border-neutral-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#1E4D2B] uppercase tracking-wider block mb-1">
                {t.tools.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#22282B]">
                {t.tools.title}
              </h2>
              <p className="text-neutral-600 text-sm mt-1 max-w-xl">
                {t.tools.subtitle}
              </p>
            </div>
            <button
              onClick={() => openWhatsApp('السلام علیکم، مجھے ڈیری فارم اوزار اور لوازمات کی قیمتوں کی لسٹ چاہیے۔')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1E4D2B] hover:text-[#163820] bg-white border border-neutral-300 px-4 py-2.5 rounded shrink-0 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D98E1F]" />
              <span>{t.tools.inquireAll}</span>
            </button>
          </div>

          {/* Compact 3-Column Item Catalog with technical tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.tools.items.map((tool, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-300 p-5 rounded hover:border-[#1E4D2B] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded border border-neutral-200">
                      {tool.tag}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">#0{i+1}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#22282B] mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-medium">{lang === 'ur' ? 'اسٹاک میں موجود' : 'In Stock Lahore'}</span>
                  <button
                    onClick={() => openWhatsApp(`السلام علیکم، مجھے ${tool.name} کا ریٹ معلوم کرنا ہے۔`)}
                    className="text-[#1E4D2B] hover:text-[#163820] font-semibold inline-flex items-center gap-1"
                  >
                    <span>{lang === 'ur' ? 'قیمت پوچھیں' : 'Ask Price'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPARE PARTS (Dedicated Block with 3-Step Flow & Inline WhatsApp Form) */}
      <section id="spare-parts" className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-[#22282B] text-neutral-100 rounded border border-neutral-700 p-6 sm:p-10 lg:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#D98E1F] uppercase tracking-wider block mb-1">
              {t.spareParts.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {t.spareParts.title}
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-2">
              {t.spareParts.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Wearable Parts List & 3-Step Ordering Flow */}
            <div className="lg:col-span-7 space-y-8">
              {/* Wearable Parts Chips */}
              <div>
                <div className="mb-4 aspect-16/9 rounded overflow-hidden border border-neutral-700 bg-neutral-900">
                  <img
                    src="/images/spare-parts.jpg"
                    alt={lang === 'ur' ? 'ملکنگ مشین سپیئر پارٹس گودام' : 'Milking machine original spare parts inventory'}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  {lang === 'ur' ? 'عام طور پر تبدیل ہونے والے سپیئر پارٹس:' : 'Common Replaceable Spare Parts:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.spareParts.partsList.map((p, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded text-xs sm:text-sm text-neutral-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D98E1F]" />
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Step Process */}
              <div>
                <h4 className="text-sm font-bold text-white mb-4">
                  {t.spareParts.stepsTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {t.spareParts.steps.map((st, i) => (
                    <div
                      key={i}
                      className="bg-neutral-800/80 border border-neutral-700 p-4 rounded flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-2xl font-mono font-bold text-[#D98E1F] mb-1">
                          {st.num}
                        </div>
                        <div className="font-bold text-sm text-white mb-1">
                          {st.title}
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openWhatsApp('السلام علیکم، مجھے ملکنگ مشین کے سپیئر پارٹ کی تصویر بھیج کر قیمت معلوم کرنی ہے۔')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D98E1F] hover:bg-[#b87616] text-black font-bold px-6 py-3.5 rounded text-sm transition-colors"
                >
                  <MessageCircle className="w-4.5 h-4.5 text-black" />
                  <span>{lang === 'ur' ? 'واٹس ایپ پر پارٹ کی تصویر بھیجیں' : 'Send Part Photo on WhatsApp'}</span>
                </button>
              </div>
            </div>

            {/* Right: Inline WhatsApp Form */}
            <div className="lg:col-span-5 bg-neutral-800 border border-neutral-700 p-6 rounded">
              <h3 className="text-lg font-bold text-white mb-1">
                {t.spareParts.form.title}
              </h3>
              <p className="text-xs text-neutral-400 mb-5">
                {t.spareParts.form.desc}
              </p>

              <form onSubmit={handlePartFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    {t.spareParts.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={partForm.name}
                    onChange={(e) => setPartForm({ ...partForm, name: e.target.value })}
                    placeholder={t.spareParts.form.namePlaceholder}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D98E1F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    {t.spareParts.form.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={partForm.phone}
                    onChange={(e) => setPartForm({ ...partForm, phone: e.target.value })}
                    placeholder={t.spareParts.form.phonePlaceholder}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D98E1F] text-start"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    {t.spareParts.form.modelLabel}
                  </label>
                  <input
                    type="text"
                    value={partForm.model}
                    onChange={(e) => setPartForm({ ...partForm, model: e.target.value })}
                    placeholder={t.spareParts.form.modelPlaceholder}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D98E1F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    {t.spareParts.form.partLabel} *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={partForm.part}
                    onChange={(e) => setPartForm({ ...partForm, part: e.target.value })}
                    placeholder={t.spareParts.form.partPlaceholder}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D98E1F]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white py-3 rounded font-bold text-sm border border-emerald-600/40 transition-colors min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#D98E1F]" />
                  <span>{t.spareParts.form.submitBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY BUY FROM US (ONE Horizontal Strip / Numbered Row Layout) */}
      <section id="why-us" className="py-14 bg-white border-y border-neutral-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#1E4D2B] uppercase tracking-wider block mb-1">
              {t.whyUs.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#22282B]">
              {t.whyUs.title}
            </h2>
          </div>

          {/* Numbered Row / Strip Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse rtl:md:divide-x-reverse divide-neutral-200">
            {t.whyUs.points.map((pt, i) => (
              <div key={i} className={`pt-4 md:pt-0 ${i !== 0 ? 'md:px-4' : 'md:pe-4'}`}>
                <div className="text-3xl font-mono font-bold text-[#1E4D2B] mb-2">
                  0{pt.num}
                </div>
                <h3 className="text-base font-bold text-[#22282B] mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER REVIEWS (Simple, Honest Layout with Google 4.5 rating) */}
      <section id="reviews" className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#1E4D2B] uppercase tracking-wider block mb-1">
              {t.reviews.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#22282B]">
              {t.reviews.title}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-300 px-3.5 py-2 rounded text-xs sm:text-sm font-semibold text-neutral-800">
            <div className="flex text-[#D98E1F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i === 4 ? 'fill-[#D98E1F]/40' : 'fill-current'}`} />
              ))}
            </div>
            <span>{t.reviews.ratingSummary}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.reviews.items.map((rev, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-300 p-6 rounded flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex text-[#D98E1F] mb-3">
                  {[...Array(rev.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-200">
                <div className="font-bold text-sm text-[#22282B]">
                  {rev.author}
                </div>
                <div className="text-xs text-neutral-500">
                  {rev.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. VISIT US (Shop Info, Directions & Embedded Google Maps) */}
      <section id="visit-us" className="py-16 bg-[#EDE9DE] border-t border-neutral-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#1E4D2B] uppercase tracking-wider block mb-1">
              {t.visit.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#22282B]">
              {t.visit.title}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              {t.visit.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Information Box */}
            <div className="lg:col-span-5 bg-white border border-neutral-300 rounded p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4 text-[#1E4D2B]" />
                    <span>{t.visit.addressTitle}</span>
                  </div>
                  <div className="text-base font-bold text-[#22282B] leading-snug">
                    {t.visit.address}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    <Clock className="w-4 h-4 text-[#1E4D2B]" />
                    <span>{t.visit.hoursTitle}</span>
                  </div>
                  <div className="text-sm text-neutral-700">
                    {t.visit.hours}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    <Phone className="w-4 h-4 text-[#1E4D2B]" />
                    <span>{t.visit.phonesTitle}</span>
                  </div>
                  <div className="space-y-1.5" dir="ltr">
                    {t.visit.phones.map((p, pIdx) => (
                      <div key={pIdx}>
                        <a
                          href={`tel:${p.raw}`}
                          className="text-base font-bold text-[#1E4D2B] hover:text-[#163820] transition-colors"
                        >
                          {p.display}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200">
                <a
                  href={t.visit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white px-5 py-3 rounded font-semibold text-sm transition-colors min-h-[48px]"
                >
                  <MapPin className="w-4 h-4 text-[#D98E1F]" />
                  <span>{t.visit.getDirections}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Google Maps Embed Frame */}
            <div className="lg:col-span-7 bg-white border border-neutral-300 rounded overflow-hidden min-h-[360px] flex flex-col">
              <div className="bg-neutral-100 border-b border-neutral-200 px-4 py-2.5 text-xs text-neutral-600 flex items-center justify-between">
                <span className="font-medium">{lang === 'ur' ? 'گوگل میپس لوکیشن' : 'Google Maps Location'}</span>
                <span>Mian Zarri Market, Rohi Nala Road, Lahore</span>
              </div>
              <iframe
                title="Agro Power Machinery Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108920.89312999432!2d74.300000!3d31.430000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919013c7a72d3ab%3A0x6b810d7a641a9954!2sRohi%20Nala%20Rd%2C%20Lahore!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#22282B] text-neutral-300 pt-12 pb-8 border-t border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-800">
            {/* Col 1: Brand & Bio */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1E4D2B] text-white rounded flex items-center justify-center font-bold text-base border border-[#163820]">
                  APM
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {lang === 'ur' ? 'ایگرو پاور مشینری اسٹور' : 'AGRO POWER MACHINERY'}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {lang === 'ur' ? 'لاہور، پاکستان' : 'Lahore, Pakistan'}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3">
              <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                {t.footer.quickLinks}
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#machines" className="hover:text-white transition-colors">{t.nav.machines}</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">{t.nav.tools}</a></li>
                <li><a href="#spare-parts" className="hover:text-white transition-colors">{t.nav.spareParts}</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">{t.nav.whyUs}</a></li>
                <li><a href="#visit-us" className="hover:text-white transition-colors">{t.nav.visitUs}</a></li>
              </ul>
            </div>

            {/* Col 3: Direct Contact */}
            <div className="md:col-span-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                {t.footer.contactHeading}
              </div>
              <div className="text-xs sm:text-sm text-neutral-300">
                {t.visit.address}
              </div>
              <div className="space-y-1 text-sm font-semibold" dir="ltr">
                <div>
                  <a href="tel:+923101338666" className="text-[#D98E1F] hover:underline">
                    +92 310 1338666
                  </a>
                </div>
                <div>
                  <a href="tel:+923114338666" className="text-[#D98E1F] hover:underline">
                    +92 311 4338666
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={t.footer.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-white bg-neutral-800 px-3 py-1.5 rounded border border-neutral-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.footer.facebookText}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
            <div>{t.footer.copyright}</div>
            <div>{t.footer.designedBy}</div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Bottom Corner, modest size, big tap target) */}
      <aside aria-label="Floating WhatsApp Action" className="fixed bottom-5 end-5 z-50">
        <button
          onClick={() => openWhatsApp('السلام علیکم ایگرو پاور مشینری، مجھے ملکنگ مشین کی قیمت اور معلومات چاہیے۔')}
          className="flex items-center gap-2.5 bg-[#1E4D2B] hover:bg-[#163820] text-white px-4 py-3 rounded border border-emerald-500/40 shadow-md hover:shadow-lg transition-all min-h-[48px]"
          aria-label={t.floatingWhatsApp}
        >
          <MessageCircle className="w-5 h-5 text-[#D98E1F]" />
          <span className="text-xs sm:text-sm font-bold">{t.floatingWhatsApp}</span>
        </button>
      </aside>
    </div>
  );
}
