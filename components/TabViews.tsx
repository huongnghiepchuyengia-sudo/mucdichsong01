
import React, { useState, useEffect, useRef } from 'react';
import { 
  Sprout, Layers, ArrowRight, ShieldCheck, Heart, 
  Map, Phone, Mail, Globe, Clock, ChevronRight, 
  Search, Star, Fingerprint, Wind, Droplets, Flame, Mountain, Sparkles,
  ChevronDown, RotateCcw, Dices, Save, Info, AlertCircle, CheckCircle2, Target,
  Play, X, Youtube, Facebook, Loader2, Send, MessageCircle, Monitor, Gift, BookOpen, Check,
  Camera, ZoomIn, Compass, ChevronLeft
} from 'lucide-react';
import { 
  CORE_ELEMENTS, PRINCIPLES_DATA, SCHOOLS_DATA, 
  LESSONS_LIST, PURPOSES_LIST, FINGER_MAP, OBJECTIVES_LIST 
} from '../constants';
import { Tab, HandSide, School, FingerName, LifeItem } from '../types';

// Simple Reveal component
const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export const HomeView: React.FC<{ onNavigate: (tab: Tab) => void }> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-8 pt-10 pb-8">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-sm mb-12 flex flex-col items-center gap-2 md:gap-6 hover:scale-[1.01] transition-transform duration-700 leading-tight">
            <span className="text-white py-2">Khám Phá</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 py-4 px-2">Mục Đích Sống</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            Hạnh phúc viên mãn chỉ đạt được khi bạn tìm thấy và sống với Mục đích sống cân bằng của mình.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <button 
            onClick={() => onNavigate(Tab.PRINCIPLES)}
            className="mt-10 px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Bắt Đầu Hành Trình <ArrowRight size={24} />
          </button>
        </Reveal>
      </div>

      <Reveal delay={400}>
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-4">
                <Sparkles className="text-yellow-400" size={32} />
                Mục Tiêu Cốt Lõi
                <Sparkles className="text-yellow-400" size={32} />
            </h2>
             <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full mt-6 opacity-70"></div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OBJECTIVES_LIST.map((item, idx) => {
           const Icon = item.icon;
           return (
            <Reveal key={item.id} delay={idx * 100}>
              <div className="glass-panel p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 border border-white/5 group h-full hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)] cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500">
                    <Icon size={36} className={item.color} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base text-justify group-hover:text-slate-300 transition-colors">{item.content}</p>
              </div>
            </Reveal>
           );
        })}
      </div>
    </div>
  );
};

// --- Principles View ---
export const PrinciplesView: React.FC<{ onNavigate: (tab: Tab) => void }> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-10">
      
      {/* Introduction Section */}
      <div className="text-center w-full mx-auto px-4">
        <Reveal>
          <div className="inline-block p-5 rounded-full bg-orange-500/10 text-orange-400 mb-8 animate-float border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.2)] relative hover:scale-110 hover:bg-orange-500/20 hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] transition-all duration-500 cursor-pointer">
            <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-full"></div>
            <Sprout size={48} className="relative z-10" />
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Nguyên Tắc <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Cốt Lõi</span>
          </h2>
        </Reveal>
        
        <Reveal delay={400}>
          <p className="text-2xl text-slate-300 leading-relaxed mx-auto font-light whitespace-normal max-w-5xl">
            Kết quả bất ổn (chưa viên mãn) là do sự "chưa hòa hợp" giữa Tâm hồn và Hiện thực.
          </p>
        </Reveal>
      </div>

      {/* CORE ELEMENTS SECTION */}
      <div className="grid lg:grid-cols-3 gap-10">
        {CORE_ELEMENTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.id} delay={idx * 200}>
              <div className="relative group h-full">
                {/* Mystical Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
                
                <div className="glass-panel glass-panel-hover h-full p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center text-center relative z-10 bg-[#0f172a]/50 border-orange-500/10 group-hover:border-orange-500/30">
                  
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-black/40 border border-white/10 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-4 text-white uppercase tracking-wider group-hover:text-orange-300 transition-colors`}>
                    {item.title}
                  </h3>
                  
                  <span className="inline-block px-5 py-2 bg-black/40 text-orange-200 text-sm font-bold rounded-full mb-8 uppercase tracking-widest border border-orange-500/20 backdrop-blur-md group-hover:bg-orange-500/20 transition-colors">
                    {item.subtitle}
                  </span>
                  
                  <p className="text-slate-400 leading-relaxed font-light text-lg text-justify">
                    {item.content}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* OTHER PRINCIPLES SECTION */}
      <div className="space-y-10 mt-20">
        <Reveal>
          <div className="flex items-center gap-6 mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent flex-1"></div>
            <h3 className="text-2xl font-bold text-orange-200/80 uppercase tracking-[0.2em] flex items-center gap-4">
              <Layers size={24} className="text-orange-500" /> 
              <span>NGUYÊN TẮC VẬN HÀNH</span>
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent flex-1"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {PRINCIPLES_DATA.map((principle, idx) => (
            <Reveal key={principle.id} delay={idx * 150}>
              <div className="glass-panel hover:bg-slate-800/60 p-10 rounded-3xl transition-all duration-300 flex gap-8 group border-orange-500/5 hover:border-orange-500/40 h-full hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(249,115,22,0.1)] cursor-default">
                <div className="w-16 h-16 shrink-0 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-2xl group-hover:text-white group-hover:bg-orange-600 group-hover:border-orange-400 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] group-hover:scale-110 transition-all duration-300">
                  {principle.id}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">{principle.title}</h4>
                  <p className="text-slate-400 text-base leading-relaxed font-light text-justify group-hover:text-slate-300 transition-colors">{principle.content}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200}>
        <div className="flex justify-center mt-16 mb-10">
          <button 
            onClick={() => onNavigate(Tab.SCHOOLS)}
            className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-all duration-300 flex items-center gap-4"
          >
            Tiếp Tục: Trường Học & Lớp Học <ArrowRight size={24} />
          </button>
        </div>
      </Reveal>
    </div>
  );
};

// --- Schools View ---
export const SchoolsView: React.FC<{ onNavigate: (tab: Tab) => void }> = ({ onNavigate }) => {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  const handleSchoolClick = (school: School) => {
    setSelectedSchool(school);
  };

  return (
    <div className="space-y-16">
        <div className="text-center mb-20">
            <Reveal>
                <div className="inline-block p-4 rounded-full bg-orange-500/10 text-orange-400 mb-6 animate-float border border-orange-500/20 hover:scale-110 transition-transform duration-500">
                    <Fingerprint size={48} />
                </div>
            </Reveal>
            <Reveal delay={100}>
                <h2 className="text-5xl font-bold mb-6 uppercase tracking-wide">
                    <span className="text-white">Trường Học</span> <span className="text-slate-500 mx-3">&</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Lớp Học</span>
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-slate-400 max-w-3xl mx-auto text-xl">Có 4 trường học tương ứng với 4 lớp học cuộc đời.</p>
            </Reveal>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
            {SCHOOLS_DATA.map((school, idx) => {
                const Icon = school.icon;
                return (
                <Reveal key={school.id} delay={idx * 150}>
                    <div 
                        onClick={() => handleSchoolClick(school)}
                        className={`p-10 rounded-[2.5rem] border transition-all duration-500 group h-full relative overflow-hidden ${school.color} hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-700">
                            <Icon size={160} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20">
                                    <Icon size={40} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold group-hover:text-white transition-colors">{school.name}</h3>
                                    <p className="text-base font-semibold opacity-80 uppercase tracking-wider mt-1">{school.class}</p>
                                </div>
                            </div>
                            <p className="mb-10 opacity-90 leading-relaxed text-lg text-justify">{school.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                <div className="bg-black/30 p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:bg-black/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Quá ít</span>
                                    <span className="text-slate-300 font-medium">{school.lessons.tooLittle}</span>
                                </div>
                                <div className="bg-gradient-to-b from-green-500/10 to-emerald-500/5 p-5 rounded-2xl border border-green-500/30 flex flex-col justify-between relative overflow-hidden group/bal hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 blur-xl rounded-full -mr-8 -mt-8 group-hover/bal:bg-green-500/30 transition-all duration-500"></div>
                                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                         <CheckCircle2 size={12} /> Cân bằng
                                    </span>
                                    <span className="text-white font-bold text-lg">{school.lessons.balanced}</span>
                                </div>
                                <div className="bg-black/30 p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:bg-black/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Quá nhiều</span>
                                    <span className="text-slate-300 font-medium">{school.lessons.tooMuch}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            )})}
        </div>

        {selectedSchool && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedSchool(null)}></div>
                <div className="relative bg-white text-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-fade-in-up">
                    <button onClick={() => setSelectedSchool(null)} className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10">
                        <X size={24} className="text-slate-600" />
                    </button>
                    <div className="p-8 space-y-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex gap-4">
                            <div className="shrink-0 mt-1"><Sprout className="text-blue-600" size={24} /></div>
                            <div className="text-blue-900 text-base leading-relaxed">
                                <span className="font-bold">Trong mỗi lớp học, con đường đi từ Bài học cuộc sống đến Mục đích sống sẽ diễn ra theo 4 bước sau: </span> 
                                Bước 1. Thiết lập ➔ Bước 2. Rắc rối nảy sinh ➔ Bước 3. Sự leo thang ➔ Bước 4. Đột phá.
                            </div>
                        </div>
                        <div className={`border-2 ${selectedSchool.modalTheme.border} ${selectedSchool.modalTheme.bg} rounded-2xl p-8`}>
                            <h3 className={`text-2xl font-bold text-center mb-8 uppercase ${selectedSchool.modalTheme.titleColor}`}>
                                {selectedSchool.classProcess.title}
                            </h3>
                            <div className="space-y-8">
                                {selectedSchool.classProcess.steps.map((step, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="text-lg font-bold text-slate-800">
                                            {step.step}: <span className="font-normal whitespace-pre-line">{step.description}</span>
                                        </div>
                                        <div className="text-base text-slate-600 italic bg-white/60 p-3 rounded-lg border border-slate-200/50">
                                            <span className="font-bold not-italic mr-1">Ví dụ:</span>{step.example}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        <Reveal delay={200}>
          <div className="flex justify-center mt-16 mb-10">
            <button 
              onClick={() => onNavigate(Tab.LESSONS)}
              className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-all duration-300 flex items-center gap-4"
            >
              Tiếp Tục: Khám Phá Bài Học <ArrowRight size={24} />
            </button>
          </div>
        </Reveal>
    </div>
  );
};

// --- Lessons View ---
export const LessonsView: React.FC<{ onNavigate: (tab: Tab) => void }> = ({ onNavigate }) => {
    const [selectedLesson, setSelectedLesson] = useState<LifeItem | null>(null);

    const handleLessonClick = (lesson: LifeItem) => {
        setSelectedLesson(lesson);
    };

    return (
        <div className="space-y-16">
             <Reveal>
                <div className="relative w-full h-96 md:h-[450px] rounded-3xl overflow-hidden mb-16 group shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 hover:shadow-[0_0_60px_rgba(249,115,22,0.15)] transition-all duration-700">
                    <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=3576" alt="Life Challenges" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[1.5s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                         <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight drop-shadow-2xl">
                            <span className="text-white">BÀI HỌC CUỘC ĐỜI</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">(THÁCH THỨC)</span>
                        </h2>
                        <p className="text-white text-xl md:text-2xl whitespace-nowrap mb-8 drop-shadow-lg font-medium">Những thử thách bạn cần vượt qua để trưởng thành và tìm thấy Mục đích sống.</p>
                        <p className="text-white/60 italic font-light text-lg whitespace-nowrap group-hover:text-white transition-colors duration-500">"Chướng ngại vật chính là con đường."</p>
                    </div>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                {LESSONS_LIST.map((lesson, idx) => {
                    const Icon = lesson.icon;
                    return (
                    <Reveal key={lesson.id} delay={idx * 50}>
                        <div onClick={() => handleLessonClick(lesson)} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-red-500/40 transition-all hover:bg-slate-800/60 group h-full relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)] cursor-pointer">
                            <div className="flex items-center gap-8 relative z-10">
                                <div className="shrink-0 text-red-400 group-hover:text-red-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    {Icon ? <Icon size={120} strokeWidth={1} /> : <span className="text-6xl font-bold text-red-400">{lesson.id}</span>}
                                </div>
                                <div className="w-full">
                                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">{lesson.name}</h4>
                                    <p className="text-slate-400 text-base mb-4 text-justify group-hover:text-slate-300 transition-colors">{lesson.description}</p>
                                    <div className="bg-red-900/20 p-4 rounded-xl border border-red-500/10 group-hover:bg-red-900/30 group-hover:border-red-500/30 transition-all">
                                        <p className="text-red-200 text-sm font-medium flex gap-3"><ShieldCheck size={18} className="shrink-0 mt-0.5" /><span className="opacity-90">Thử thách: {lesson.challenge}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                )})}
            </div>
            
            {selectedLesson && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedLesson(null)}></div>
                    <div className="relative bg-[#0f172a] border border-red-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-fade-in-up">
                        <button onClick={() => setSelectedLesson(null)} className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-10 border border-white/10">
                            <X size={24} className="text-white" />
                        </button>
                        <div className="p-8 md:p-12">
                            <div className="text-center mb-10 pb-8 border-b border-white/10">
                                <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                                    {selectedLesson.icon && <selectedLesson.icon size={40} className="text-red-400" />}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-3">Bài Học: <span className="text-red-400">{selectedLesson.name}</span></h3>
                                <p className="text-slate-400 text-lg italic max-w-2xl mx-auto">"{selectedLesson.description}"</p>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-red-950/20 p-6 rounded-2xl border border-red-500/20">
                                    <h4 className="text-red-400 font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider"><ShieldCheck size={24} /> Vấn đề & Thách thức</h4>
                                    <p className="text-slate-300 text-lg leading-relaxed">{selectedLesson.challenge}</p>
                                </div>
                                {selectedLesson.details && (
                                    <>
                                        <div className="bg-slate-800/30 p-6 rounded-2xl border border-white/10">
                                            <h4 className="text-orange-300 font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider"><AlertCircle size={24} /> Biểu hiện khi chưa tốt nghiệp</h4>
                                            <ul className="space-y-3">
                                                {selectedLesson.details.symptoms.map((symptom, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-300"><div className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400"></div><span>{symptom}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-blue-950/20 p-6 rounded-2xl border border-blue-500/20">
                                            <h4 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider"><CheckCircle2 size={24} /> Chìa khóa vượt qua</h4>
                                            <p className="text-slate-300 text-lg leading-relaxed text-justify">{selectedLesson.details.advice}</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-6 rounded-2xl border border-yellow-500/20 text-center">
                                            <h4 className="text-yellow-400 font-bold text-xl mb-3 flex items-center justify-center gap-3 uppercase tracking-wider"><Gift size={24} /> Món quà sau thử thách</h4>
                                            <p className="text-white text-lg font-medium italic">"{selectedLesson.details.gift}"</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Reveal delay={200}>
              <div className="flex justify-center mt-16 mb-10">
                <button 
                  onClick={() => onNavigate(Tab.PURPOSE)}
                  className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-all duration-300 flex items-center gap-4"
                >
                  Tiếp Tục: Khám Phá Mục Đích <ArrowRight size={24} />
                </button>
              </div>
            </Reveal>
        </div>
    );
};

// --- Purpose View ---
export const PurposeView: React.FC<{ onNavigate: (tab: Tab) => void }> = ({ onNavigate }) => {
    const [selectedPurpose, setSelectedPurpose] = useState<LifeItem | null>(null);

    const handlePurposeClick = (purpose: LifeItem) => {
        setSelectedPurpose(purpose);
    };

    return (
        <div className="space-y-16">
             <Reveal>
                <div className="relative w-full h-96 md:h-[450px] rounded-3xl overflow-hidden mb-16 group shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] transition-all duration-700">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3506" alt="Life Purpose" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[1.5s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                         <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight drop-shadow-2xl"><span className="text-white">MỤC ĐÍCH SỐNG</span></h2>
                        <p className="text-white text-xl md:text-2xl whitespace-nowrap mb-8 drop-shadow-lg font-medium">Đích đến viên mãn khi bạn đã tốt nghiệp các bài học.</p>
                    </div>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                {PURPOSES_LIST.map((purpose, idx) => {
                    const Icon = purpose.icon;
                    return (
                    <Reveal key={purpose.id} delay={idx * 50}>
                        <div onClick={() => handlePurposeClick(purpose)} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all hover:bg-slate-800/60 group h-full relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] cursor-pointer">
                            <div className="flex items-center gap-8 relative z-10">
                                <div className="shrink-0 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    {Icon ? <Icon size={120} strokeWidth={1} /> : <span className="text-6xl font-bold text-blue-400">{purpose.id}</span>}
                                </div>
                                <div className="w-full">
                                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{purpose.name}</h4>
                                    <p className="text-slate-400 text-base mb-4 text-justify group-hover:text-slate-300 transition-colors">{purpose.description}</p>
                                    <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/10 group-hover:bg-blue-900/30 group-hover:border-blue-500/30 transition-all">
                                        <p className="text-blue-200 text-sm font-medium flex gap-3"><Star size={18} className="shrink-0 mt-0.5" /><span className="opacity-90">Viên mãn: {purpose.fulfillment}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                )})}
            </div>

            {selectedPurpose && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPurpose(null)}></div>
                    <div className="relative bg-[#0f172a] border border-blue-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-fade-in-up">
                        <button onClick={() => setSelectedPurpose(null)} className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-10 border border-white/10">
                            <X size={24} className="text-white" />
                        </button>
                        <div className="p-8 md:p-12">
                            <div className="text-center mb-10 pb-8 border-b border-white/10">
                                <div className="w-20 h-20 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                    {selectedPurpose.icon && <selectedPurpose.icon size={40} className="text-blue-400" />}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-3">Mục Đích: <span className="text-blue-400">{selectedPurpose.name}</span></h3>
                                <p className="text-slate-400 text-lg italic max-w-2xl mx-auto">"{selectedPurpose.description}"</p>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-blue-950/20 p-6 rounded-2xl border border-blue-500/20">
                                    <h4 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider"><Star size={24} /> Sự Viên Mãn</h4>
                                    <p className="text-slate-300 text-lg leading-relaxed">{selectedPurpose.fulfillment}</p>
                                </div>
                                {selectedPurpose.details && (
                                    <>
                                        <div className="bg-slate-800/30 p-6 rounded-2xl border border-white/10">
                                            <h4 className="text-teal-300 font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider"><Target size={24} /> Đặc điểm nhận dạng</h4>
                                            <ul className="space-y-3">
                                                {selectedPurpose.details.symptoms.map((symptom, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-300"><div className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400"></div><span>{symptom}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-indigo-950/20 p-6 rounded-2xl border border-indigo-500/20">
                                            <h4 className="text-indigo-400 font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider"><Compass size={24} /> Lời khuyên để phát triển</h4>
                                            <p className="text-slate-300 text-lg leading-relaxed text-justify">{selectedPurpose.details.advice}</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-orange-900/20 to-amber-900/20 p-6 rounded-2xl border border-orange-500/20 text-center">
                                            <h4 className="text-orange-400 font-bold text-xl mb-3 flex items-center justify-center gap-3 uppercase tracking-wider"><Gift size={24} /> Di sản bạn mang đến thế giới</h4>
                                            <p className="text-white text-lg font-medium italic">"{selectedPurpose.details.gift}"</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Reveal delay={200}>
              <div className="flex justify-center mt-16 mb-10">
                <button 
                  onClick={() => onNavigate(Tab.EXPERIENCE)}
                  className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-all duration-300 flex items-center gap-4"
                >
                  Tiếp Tục: Trải Nghiệm Vân Tay <ArrowRight size={24} />
                </button>
              </div>
            </Reveal>
        </div>
    );
};

// Finger options with Priority Scores and School Info
const FINGER_OPTIONS = [
    { value: 'K', label: 'K (Khí)', priority: 4.0, pureSchoolId: 'AIR', weightedSchoolIds: [{id: 'AIR', weight: 1}], description: "- Tâm: có 1 tâm là các đường xoáy tròn hoặc xoắn ốc hình tròn hoặc bầu dục.\n- Delta: Có hai delta nằm ở hai bên.", image: "https://i.postimg.cc/87SgfdLr/KHÍ.png" },
    { value: 'N', label: 'N (Nước)', priority: 3.0, pureSchoolId: 'WATER', weightedSchoolIds: [{id: 'WATER', weight: 1}], description: "Tâm: Nơi đường vân cong nhất, hình thác nước đổ về ngón út.\nDelta: Có 1 delta nằm ở bên phía ngón cái.", image: "https://i.postimg.cc/Wdvcqm0z/NƯỚC.jpg" },
    { value: 'L', label: 'L (Lửa)', priority: 2.0, pureSchoolId: 'FIRE', weightedSchoolIds: [{id: 'FIRE', weight: 1}], description: "Tâm: không có; vân tay xếp chồng lên nhau giống lều trại.\nDelta: không có.", image: "https://i.postimg.cc/jDbYn6yn/LỬA.png" },
    { value: 'Đ', label: 'Đ (Đất)', priority: 1.0, pureSchoolId: 'EARTH', weightedSchoolIds: [{id: 'EARTH', weight: 1}], description: "Tâm: không có; vân tay xếp chồng lên nhau giống ngọn đồi.\nDelta: không có", image: "https://i.postimg.cc/FY4Xkb09/ĐẤT.jpg" },
    { value: 'KK', label: 'KK (Khí phức hợp)', priority: 3.9, pureSchoolId: 'AIR', weightedSchoolIds: [{id: 'AIR', weight: 1}], description: "Tâm: Có 2 tâm, hai dòng khí xoắn vào nhau (Thái cực)..\nDelta: Có 2 delta ở 2 bên tâm.", image: "https://i.postimg.cc/qNTH6c2t/KHÍ_KHÍ.png" },
    { value: 'KN', label: 'KN (Khí nước)', priority: 3.5, pureSchoolId: null, weightedSchoolIds: [{id: 'AIR', weight: 0.5}, {id: 'WATER', weight: 0.5}], description: "Tâm: có các đường xoáy tròn hoặc xoắn ốc hình tròn hoặc bầu dục.\nDelta: có hai delta nằm ở hai bên (một nằm sát tâm và 1 nằm xa tâm).", image: "https://i.postimg.cc/JsLCH3jt/KHÍ_NƯỚC.png" },
    { value: 'NN', label: 'NN (Nước ngược)', priority: 3.1, pureSchoolId: 'WATER', weightedSchoolIds: [{id: 'WATER', weight: 1}], description: "Tâm: Nơi đường vân cong nhất, hình thác nước đổ về ngón cái.\nDelta: Có 1 delta nằm ở bên phía ngón út.", image: "https://i.postimg.cc/WdxFZ1s9/NƯỚC_NGƯỢC.jpg" },
    { value: 'LN', label: 'LN (Lửa nước)', priority: 2.5, pureSchoolId: null, weightedSchoolIds: [{id: 'FIRE', weight: 0.5}, {id: 'WATER', weight: 0.5}], description: "Tâm: không có; hình dạng kết hợp giữa lửa và nước.\nDelta: không có.", image: "https://i.postimg.cc/rDk2RGx3/LỬA_NƯỚC.png" },
];

const getSchoolConfig = (id: string) => SCHOOLS_DATA.find(s => s.id === id);

// Tay Trái: Cái -> Trỏ -> Giữa -> Áp -> Út (4, 3, 2, 1, 0)
// Tay Phải: Cái -> Trỏ -> Giữa -> Áp -> Út (5, 6, 7, 8, 9)
const PICKING_ORDER = [4, 3, 2, 1, 0, 5, 6, 7, 8, 9];

export const ExperienceView: React.FC<{ onNavigate: (tab: Tab) => void }> = ({ onNavigate }) => {
    const [fingerTypes, setFingerTypes] = useState<string[]>(Array(10).fill(''));
    const [showGuide, setShowGuide] = useState(false);
    const [pickingStep, setPickingStep] = useState<number>(0); 
    const [detailItem, setDetailItem] = useState<LifeItem | null>(null);

    const handleFingerChange = (index: number, value: string) => {
        const newTypes = [...fingerTypes];
        newTypes[index] = value;
        setFingerTypes(newTypes);
        if (pickingStep < PICKING_ORDER.length - 1) setPickingStep(prev => prev + 1);
        else setPickingStep(PICKING_ORDER.length); 
    };

    const randomize = () => {
        const newTypes = fingerTypes.map(() => {
            const opts = FINGER_OPTIONS.map(o => o.value);
            return opts[Math.floor(Math.random() * opts.length)];
        });
        setFingerTypes(newTypes);
        setPickingStep(PICKING_ORDER.length);
    };

    const clear = () => {
        setFingerTypes(Array(10).fill(''));
        setPickingStep(0);
    };

    const goToStep = (stepIdx: number) => {
        setPickingStep(stepIdx);
    };

    const pureCounts = { AIR: 0, WATER: 0, FIRE: 0, EARTH: 0 };
    const totalCounts = { AIR: 0, WATER: 0, FIRE: 0, EARTH: 0 };

    fingerTypes.forEach(ft => {
        if (!ft) return;
        const opt = FINGER_OPTIONS.find(o => o.value === ft);
        if (!opt) return;
        if (opt.pureSchoolId) pureCounts[opt.pureSchoolId as keyof typeof pureCounts] += 1;
        opt.weightedSchoolIds.forEach(w => totalCounts[w.id as keyof typeof totalCounts] += w.weight);
    });

    const CONDITIONS = {
        AIR: { minPure: 3, targetTotal: 4, label: 'Khí' },
        WATER: { minPure: 7, targetTotal: 8, label: 'Nước' },
        FIRE: { minPure: 1, targetTotal: 2, label: 'Lửa' },
        EARTH: { minPure: 1, targetTotal: 2, label: 'Đất' },
    };

    const eligibleResults = Object.keys(CONDITIONS).map(key => {
        const schoolId = key as keyof typeof CONDITIONS;
        const config = CONDITIONS[schoolId];
        const pure = pureCounts[schoolId];
        const total = totalCounts[schoolId];
        return { id: schoolId, pure, total, config, hasMinPure: pure >= config.minPure, hasTargetTotal: total >= config.targetTotal };
    });

    const pureQualifiedSchools = eligibleResults.filter(r => r.hasMinPure);
    const fullyQualifiedSchools = pureQualifiedSchools.filter(r => r.hasTargetTotal);
    let activeSchoolIds: string[] = [];
    if (fullyQualifiedSchools.length > 0) activeSchoolIds = fullyQualifiedSchools.map(r => r.id);
    else if (pureQualifiedSchools.length > 0) {
        const maxTotal = Math.max(...pureQualifiedSchools.map(r => r.total));
        activeSchoolIds = pureQualifiedSchools.filter(r => r.total === maxTotal).map(r => r.id);
    }
    const orderedActiveSchools = ['AIR', 'WATER', 'FIRE', 'EARTH'].filter(id => activeSchoolIds.includes(id));

    const fingersWithScores = fingerTypes.map((type, idx) => {
        const opt = FINGER_OPTIONS.find(o => o.value === type);
        return { index: idx, priority: opt ? opt.priority : null, type, schoolIds: opt ? opt.weightedSchoolIds.map(w => w.id) : [] };
    }).filter(f => f.priority !== null) as { index: number, priority: number, type: string, schoolIds: string[] }[];

    const minPriority = fingersWithScores.length > 0 ? Math.min(...fingersWithScores.map(f => f.priority)) : null;
    const maxPriority = fingersWithScores.length > 0 ? Math.max(...fingersWithScores.map(f => f.priority)) : null;

    const getFingerStatus = (finger: any) => {
        const isKK = finger.type === 'KK';
        return { isMax: isKK || (finger.priority === maxPriority), isMin: isKK || (finger.priority === minPriority), isKK };
    };

    const purposeParts: { name: string; traits: string; originalItem?: LifeItem }[] = [];
    const processedPurposeIndices = new Set<number>();
    const highRankPairs = [{ left: 4, right: 5, name: "Thành công / Người thực thi" }, { left: 3, right: 6, name: "Quyền lực / Lãnh đạo" }, { left: 2, right: 7, name: "Liêm chính / Người cố vấn" }, { left: 1, right: 8, name: "Sáng tạo / Nghệ sĩ" }, { left: 0, right: 9, name: "Thấu hiểu / Người chữa lành" }];

    highRankPairs.forEach(pair => {
        const leftFinger = fingersWithScores.find(f => f.index === pair.left);
        const rightFinger = fingersWithScores.find(f => f.index === pair.right);
        if (leftFinger && rightFinger && getFingerStatus(leftFinger).isMax && getFingerStatus(rightFinger).isMax && orderedActiveSchools.length > 0) {
            const original = PURPOSES_LIST.find(p => pair.name.toLowerCase().includes(p.name.toLowerCase()));
            purposeParts.push({ name: pair.name, traits: orderedActiveSchools.map(sid => getSchoolConfig(sid)?.lessons.balanced).join(' & '), originalItem: original });
            processedPurposeIndices.add(pair.left); processedPurposeIndices.add(pair.right);
        }
    });

    fingersWithScores.forEach(f => {
        if (getFingerStatus(f).isMax && !processedPurposeIndices.has(f.index)) {
             const side = f.index < 5 ? HandSide.LEFT : HandSide.RIGHT;
             const name = f.index===0||f.index===9? FingerName.LITTLE : f.index===1||f.index===8? FingerName.RING : f.index===2||f.index===7? FingerName.MIDDLE : f.index===3||f.index===6? FingerName.INDEX : FingerName.THUMB;
             const mapItem = FINGER_MAP.find(m => m.side === side && m.finger === name);
             if(mapItem && orderedActiveSchools.length > 0) {
                const original = PURPOSES_LIST.find(p => mapItem.purpose.toLowerCase().includes(p.name.toLowerCase()));
                purposeParts.push({ name: mapItem.purpose, traits: orderedActiveSchools.map(sid => getSchoolConfig(sid)?.lessons.balanced).join(' & '), originalItem: original });
             }
        }
    });

    const lessonParts: { name: string; traits: string; isKey: boolean; originalItem?: LifeItem }[] = [];
    const processedLessonIndices = new Set<number>();
    const lowRankPairs = [{ left: 4, right: 5, name: "Vấn đề Thất bại" }, { left: 3, right: 6, name: "Vấn đề Bất lực" }, { left: 2, right: 7, name: "Vấn đề Tội lỗi" }, { left: 1, right: 8, name: "Vấn đề Ẩn náu / Trốn tránh" }, { left: 0, right: 9, name: "Vấn đề Sự thân mật" }];

    lowRankPairs.forEach(pair => {
        const leftFinger = fingersWithScores.find(f => f.index === pair.left);
        const rightFinger = fingersWithScores.find(f => f.index === pair.right);
        if (leftFinger && rightFinger && getFingerStatus(leftFinger).isMin && getFingerStatus(rightFinger).isMin && orderedActiveSchools.length > 0) {
             const pureName = pair.name.replace('Vấn đề ', '');
             const original = LESSONS_LIST.find(l => pureName.toLowerCase().includes(l.name.toLowerCase()) || l.name.toLowerCase().includes(pureName.toLowerCase()));
             lessonParts.push({ name: pair.name, traits: orderedActiveSchools.map(s => `${getSchoolConfig(s)?.lessons.tooLittle} / ${getSchoolConfig(s)?.lessons.tooMuch}`).join(' & '), isKey: pair.left === 1, originalItem: original });
             processedLessonIndices.add(pair.left); processedLessonIndices.add(pair.right);
        }
    });

    fingersWithScores.forEach(f => {
        if (getFingerStatus(f).isMin && !processedLessonIndices.has(f.index)) {
            const side = f.index < 5 ? HandSide.LEFT : HandSide.RIGHT;
            const name = f.index===0||f.index===9? FingerName.LITTLE : f.index===1||f.index===8? FingerName.RING : f.index===2||f.index===7? FingerName.MIDDLE : f.index===3||f.index===6? FingerName.INDEX : FingerName.THUMB;
            const mapItem = FINGER_MAP.find(m => m.side === side && m.finger === name);
            if(mapItem && orderedActiveSchools.length > 0) {
                const pureName = mapItem.lesson.replace('Vấn đề ', '');
                const original = LESSONS_LIST.find(l => pureName.toLowerCase().includes(l.name.toLowerCase()) || l.name.toLowerCase().includes(pureName.toLowerCase()));
                lessonParts.push({ name: mapItem.lesson.replace('Vấn đề ', ''), traits: orderedActiveSchools.map(s => `${getSchoolConfig(s)?.lessons.tooLittle} / ${getSchoolConfig(s)?.lessons.tooMuch}`).join(' & '), isKey: f.index === 1, originalItem: original });
            }
        }
    });

    const hasInput = fingerTypes.some(t => t !== '');

    const getFingerData = (idx: number) => {
        const type = fingerTypes[idx];
        const opt = FINGER_OPTIONS.find(o => o.value === type);
        const fingerObj = fingersWithScores.find(f => f.index === idx);
        let isMax = false, isMin = false;
        if (fingerObj) { const status = getFingerStatus(fingerObj); isMax = status.isMax; isMin = status.isMin; }
        const side = idx < 5 ? HandSide.LEFT : HandSide.RIGHT;
        let fName = '';
        if (idx === 0 || idx === 9) fName = FingerName.LITTLE;
        else if (idx === 1 || idx === 8) fName = FingerName.RING;
        else if (idx === 2 || idx === 7) fName = FingerName.MIDDLE;
        else if (idx === 3 || idx === 6) fName = FingerName.INDEX;
        else if (idx === 4 || idx === 5) fName = FingerName.THUMB;
        const mapEntry = FINGER_MAP.find(m => m.side === side && m.finger === fName);
        return { fingerName: fName.replace('Ngón ', ''), type, score: opt ? opt.priority : 0, mapEntry, validSchools: orderedActiveSchools.map(id => getSchoolConfig(id)).filter(s => s !== undefined) as School[], isMax, isMin, isSet: !!type };
    };

    const tableRightIndices = [5, 6, 7, 8, 9], tableLeftIndices = [4, 3, 2, 1, 0];
    const gridCols = "w-full min-w-[1400px] grid grid-cols-[50px_160px_90px_70px_1.5fr_1.5fr_1.2fr_1.2fr_1.2fr] gap-0 items-stretch";

    const renderWizard = () => {
        const currentFingerIdx = PICKING_ORDER[pickingStep];
        const sideText = currentFingerIdx < 5 ? 'TAY TRÁI' : 'TAY PHẢI';
        const isRightHand = currentFingerIdx >= 5;
        let fName = '';
        if (currentFingerIdx === 0 || currentFingerIdx === 9) fName = 'NGÓN ÚT';
        else if (currentFingerIdx === 1 || currentFingerIdx === 8) fName = 'NGÓN ÁP ÚT';
        else if (currentFingerIdx === 2 || currentFingerIdx === 7) fName = 'NGÓN GIỮA';
        else if (currentFingerIdx === 3 || currentFingerIdx === 6) fName = 'NGÓN TRỎ';
        else if (currentFingerIdx === 4 || currentFingerIdx === 5) fName = 'NGÓN CÁI';

        return (
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-orange-500/20 animate-fade-in-up">
                <div className="text-center mb-8">
                    <div className={`inline-block px-12 py-5 rounded-full font-black tracking-[0.15em] text-4xl md:text-6xl border-4 uppercase mb-8 shadow-2xl transition-all duration-500
                        ${isRightHand 
                            ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-yellow-500/20' 
                            : 'bg-blue-600/20 text-blue-400 border-blue-500/50 shadow-blue-500/20'}`}>
                        {sideText}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase drop-shadow-lg">
                        Bước {pickingStep + 1}: <span className="text-orange-400">{fName}</span>
                    </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {PICKING_ORDER.map((idx, step) => {
                        const isCompleted = fingerTypes[idx] !== '';
                        const isActive = pickingStep === step;
                        return (
                            <button key={step} onClick={() => goToStep(step)} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all border-2 ${isActive ? 'bg-orange-600 border-orange-400 text-white scale-125 shadow-lg' : isCompleted ? 'bg-green-600/20 border-green-500 text-green-400' : 'bg-slate-800 border-white/10 text-slate-500'}`}>{step + 1}</button>
                        );
                    })}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {FINGER_OPTIONS.map((opt) => (
                        <button key={opt.value} onClick={() => handleFingerChange(currentFingerIdx, opt.value)} className={`group relative p-3 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center bg-slate-900/40 ${fingerTypes[currentFingerIdx] === opt.value ? 'border-orange-500 bg-orange-500/5 ring-4 ring-orange-500/20' : 'border-white/5 hover:border-orange-500/30 hover:bg-slate-800/60 hover:-translate-y-2 hover:shadow-xl'}`}>
                            <div className="w-full aspect-square overflow-hidden rounded-xl mb-4 bg-black relative">
                                <img src={opt.image} alt={opt.value} className={`w-full h-full object-cover transition-all duration-700 ${fingerTypes[currentFingerIdx] === opt.value ? 'scale-110' : 'opacity-80 group-hover:opacity-100 group-hover:scale-105'}`} />
                                {fingerTypes[currentFingerIdx] === opt.value && <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center backdrop-blur-[2px]"><CheckCircle2 size={48} className="text-orange-500 drop-shadow-lg" /></div>}
                            </div>
                            <span className={`text-2xl font-black mb-1 ${fingerTypes[currentFingerIdx] === opt.value ? 'text-orange-400' : 'text-white'}`}>{opt.value}</span>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{opt.label.split('(')[1].replace(')', '')}</span>
                            <div className="mt-4 p-4 rounded-xl bg-black/40 text-left w-full h-24 overflow-y-auto text-[11px] leading-relaxed text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-white/5 scrollbar-thin">{opt.description}</div>
                        </button>
                    ))}
                </div>
                <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
                    <button disabled={pickingStep === 0} onClick={() => setPickingStep(prev => prev - 1)} className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${pickingStep === 0 ? 'text-slate-600 cursor-not-allowed opacity-30' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}><ChevronLeft size={24} /> Ngón trước đó</button>
                    {hasInput && pickingStep < PICKING_ORDER.length && <button onClick={() => setPickingStep(PICKING_ORDER.length)} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all">Xem kết quả ngay <ArrowRight size={20} /></button>}
                    <div className="text-slate-500 font-mono font-bold uppercase tracking-widest text-sm text-right">Tiến độ: {Math.round((fingerTypes.filter(f => f !== '').length / 10) * 100)}%</div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-8 animate-fade-in pb-20">
            <Reveal>
                <div className="relative w-full py-16 rounded-2xl overflow-hidden mb-8 group shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-orange-500/20 bg-[#0f172a]/40 hover:border-orange-500/40 hover:shadow-[0_0_60px_rgba(249,115,22,0.15)] hover:scale-[1.01] transition-all duration-700">
                    <div className="flex flex-col items-center justify-center p-6 text-center relative z-20">
                         <div className="w-20 h-20 rounded-full bg-orange-500/20 border border-orange-400/50 flex items-center justify-center mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-pulse-slow"><Fingerprint size={40} className="text-orange-400" /></div>
                         <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 uppercase tracking-tight drop-shadow-2xl max-w-5xl mx-auto leading-tight">
                            <span className="text-white block md:inline md:mr-3 py-2">CÔNG THỨC</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 py-4 px-2">VIÊN MÃN</span>
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl max-w-3xl font-light">Chọn dấu vân tay trực quan cho từng ngón để giải mã cuộc đời bạn.</p>
                    </div>
                </div>
            </Reveal>

            <div className="flex flex-wrap gap-5 justify-center items-center mb-10">
                <button onClick={() => setShowGuide(true)} className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all border border-slate-300 flex items-center gap-3 text-lg hover:-translate-y-1 hover:shadow-lg"><Youtube size={24} className="text-red-600" /> Hướng dẫn xem vân tay</button>
                <button onClick={randomize} className="px-6 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all flex items-center gap-3 text-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30"><Dices size={24} /> Xem Thử (Ngẫu Nhiên)</button>
                <button onClick={clear} className="px-6 py-3 rounded-xl bg-slate-700 text-white font-bold hover:bg-slate-600 transition-all flex items-center gap-3 text-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/30"><RotateCcw size={24} /> Nhập lại</button>
            </div>

            {pickingStep < PICKING_ORDER.length ? renderWizard() : <div className="flex justify-center mb-10"><button onClick={() => setPickingStep(0)} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-2xl text-orange-200 font-bold flex items-center gap-3 transition-all hover:shadow-xl group"><Fingerprint size={24} className="group-hover:rotate-12 transition-transform" /> Chỉnh sửa / Nhập lại vân tay</button></div>}

            {hasInput && (
                <div className="mt-16 animate-fade-in-up">
                    <div className="text-center mb-10">
                         <h2 className="text-3xl font-bold text-white mb-3">Kết Quả Phân Tích</h2>
                         <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="mb-10">
                        <div className="glass-panel rounded-2xl overflow-hidden border border-orange-500/30">
                             <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 px-6 py-5 text-center border-b border-orange-500/30 relative">
                                <h3 className="text-xl md:text-2xl font-bold text-orange-200 uppercase tracking-wider flex items-center justify-center gap-3"><Sparkles size={24} className="text-orange-400" /> TRƯỜNG HỌC & LỚP HỌC <Sparkles size={24} className="text-orange-400" /></h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-slate-900/30">
                                {eligibleResults.map((result) => {
                                    const school = getSchoolConfig(result.id);
                                    const isActive = activeSchoolIds.includes(result.id);
                                    return (
                                        <div key={result.id} className={`relative p-6 rounded-2xl transition-all duration-500 ${isActive ? 'bg-gradient-to-br from-orange-600/30 via-red-600/20 to-transparent border border-orange-500/50 shadow-2xl scale-[1.03]' : 'bg-transparent border border-white/5 opacity-60 grayscale-[0.5]'}`}>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-4 mb-5">
                                                    <div className={`p-3 rounded-xl ${isActive ? 'bg-orange-500/20 text-orange-300' : 'bg-slate-800 text-slate-500'}`}>{school?.icon && <school.icon size={24} />}</div>
                                                    <div>
                                                        <div className={`font-bold text-lg ${isActive ? "text-white" : "text-slate-400"}`}>{school?.name}</div>
                                                        <div className={`text-xs uppercase font-bold ${isActive ? "text-orange-200" : "text-slate-500"}`}>{school?.class}</div>
                                                    </div>
                                                </div>
                                                <div className={`space-y-3 p-4 rounded-xl ${isActive ? 'bg-black/40 border border-orange-500/20' : 'bg-black/20'}`}>
                                                    <div className="flex justify-between items-center text-base"><span className={`text-xs uppercase font-bold ${isActive ? "text-orange-200/70" : "text-slate-500"}`}>Vân gốc</span><div className="flex items-baseline gap-1"><span className={`font-mono font-bold text-lg ${result.hasMinPure ? "text-green-400" : "text-slate-400"}`}>{result.pure}</span><span className="text-slate-600 text-sm font-bold">/ {result.config.minPure}</span></div></div>
                                                    <div className="flex justify-between items-center text-base"><span className={`text-xs uppercase font-bold ${isActive ? "text-orange-200/70" : "text-slate-500"}`}>Tổng</span><div className="flex items-baseline gap-1"><span className={`font-mono font-bold text-lg ${result.hasTargetTotal ? "text-green-400" : "text-slate-400"}`}>{result.total}</span><span className="text-slate-600 text-sm font-bold">/ {result.config.targetTotal}</span></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                         <div className="glass-panel rounded-2xl overflow-hidden border border-orange-500/30">
                            <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 px-6 py-5 text-center border-b border-orange-500/30"><h3 className="text-xl md:text-2xl font-bold text-orange-200 uppercase tracking-wider flex items-center justify-center gap-3"><Sparkles size={24} className="text-orange-400" /> BÀI HỌC & MỤC ĐÍCH <Sparkles size={24} className="text-orange-400" /></h3></div>
                            <div className="overflow-x-auto bg-slate-900/30">
                                <div className={`${gridCols} border-b border-white/20 text-slate-400 uppercase font-bold tracking-wider text-lg sticky left-0 bg-slate-900/50 py-5`}>
                                    <div className="h-full flex items-center justify-center border-r border-white/10 px-2">Tay</div><div className="h-full flex items-center justify-center border-r border-white/10 px-2">Ngón</div><div className="h-full flex items-center justify-center border-r border-white/10 px-2">Vân</div><div className="h-full flex items-center justify-center border-r border-white/10 px-2">Hạng</div><div className="h-full flex items-center justify-center border-r border-white/10 px-2">Bài học</div><div className="h-full flex items-center justify-center border-r border-white/10 px-2">Mục đích</div><div className="h-full flex items-center justify-center border-r border-white/10 px-2">Quá nhiều</div><div className="h-full flex items-center justify-center border-r border-white/10 px-2">Cân bằng</div><div className="h-full flex items-center justify-center px-2">Quá ít</div>
                                </div>
                                <div>
                                    {[...tableRightIndices, ...tableLeftIndices].map((idx) => {
                                        const data = getFingerData(idx);
                                        const isKeyRow = data.isMax || data.isMin;
                                        return (
                                            <div key={idx} className={`${gridCols} border-b border-white/10 transition-colors duration-200 last:border-b-0 ${isKeyRow ? 'bg-orange-900/10' : 'hover:bg-white/5'}`}>
                                                <div className="h-full flex items-center justify-center border-r border-white/10 px-2"><span className="font-bold text-slate-500 text-xs uppercase tracking-widest">{idx < 5 ? 'TRÁI' : 'PHẢI'}</span></div>
                                                <div className="h-full flex items-center justify-center border-r border-white/10 px-2"><span className="font-medium text-slate-300 text-lg">{data.fingerName}</span></div>
                                                <div className="h-full flex items-center justify-center border-r border-white/10 px-2"><span className={`font-bold text-xl ${data.isSet ? "text-white" : "text-slate-600"}`}>{data.type || '-'}</span></div>
                                                <div className="h-full flex items-center justify-center border-r border-white/10 px-2"><span className={`font-mono text-xl ${isKeyRow ? "text-orange-400 font-bold" : "text-slate-600"}`}>{data.type ? data.score : '-'}</span></div>
                                                <div className="h-full flex items-center justify-center text-center border-r border-white/10 px-3 py-4"><span className={`text-xl leading-tight ${data.isMin ? "text-red-400 font-bold" : "text-slate-500"}`}>{data.isMin ? data.mapEntry?.lesson.replace('Vấn đề ', '') : ''}</span></div>
                                                <div className="h-full flex items-center justify-center text-center border-r border-white/10 px-3 py-4"><span className={`text-xl leading-tight ${data.isMax ? "text-blue-400 font-bold" : "text-slate-500"}`}>{data.isMax ? data.mapEntry?.purpose : ''}</span></div>
                                                <div className="h-full flex flex-col items-center justify-center text-center border-r border-white/10 px-3 py-4"><div className="text-slate-400 text-lg leading-snug">{data.isMin && data.validSchools.length > 0 && (<div className="flex flex-col gap-1.5">{data.validSchools.map(s => (<div key={s.id}><span className="text-orange-500/80 font-bold mr-1">{s.name}:</span><span className="text-slate-300">{s.lessons.tooMuch}</span></div>))}</div>)}</div></div>
                                                <div className="h-full flex flex-col items-center justify-center text-center border-r border-white/10 px-3 py-4"><div className="text-slate-300 font-medium text-lg leading-snug">{data.isMax && data.validSchools.length > 0 && (<div className="flex flex-col gap-1.5">{data.validSchools.map(s => (<div key={s.id}><span className="text-green-500/80 font-bold mr-1">{s.name}:</span><span className="text-green-100">{s.lessons.balanced}</span></div>))}</div>)}</div></div>
                                                <div className="h-full flex flex-col items-center justify-center text-center px-3 py-4"><div className="text-slate-400 text-lg leading-snug">{data.isMin && data.validSchools.length > 0 && (<div className="flex flex-col gap-1.5">{data.validSchools.map(s => (<div key={s.id}><span className="text-orange-500/80 font-bold mr-1">{s.name}:</span><span className="text-slate-300">{s.lessons.tooLittle}</span></div>))}</div>)}</div></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {orderedActiveSchools.length > 0 && (
                        <div className="mt-16 mb-10">
                             <div className="glass-panel rounded-2xl overflow-hidden border border-orange-500/30">
                                <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 px-6 py-5 text-center border-b border-orange-500/30"><h3 className="text-xl md:text-2xl font-bold text-orange-200 uppercase tracking-wider flex items-center justify-center gap-3"><Sparkles size={24} className="text-orange-400" /> CÔNG THỨC DẪN ĐẾN CUỘC SỐNG VIÊN MÃN CỦA BẠN <Sparkles size={24} className="text-orange-400" /></h3></div>
                                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-orange-500/30">
                                    <div className="p-8">
                                        <h4 className="text-center text-base font-bold text-slate-400 uppercase tracking-widest mb-8 pb-3 border-b border-white/10">TRẢI NGHIỆM BÀI HỌC CUỘC SỐNG</h4>
                                        <div className="space-y-8">
                                            {lessonParts.length > 0 ? lessonParts.map((item, i) => (
                                                <div key={i} className="flex flex-col gap-3 group/item cursor-pointer" onClick={() => item.originalItem && setDetailItem(item.originalItem)}>
                                                    <div className={`text-2xl md:text-3xl font-bold text-center uppercase tracking-wide flex items-center justify-center gap-2 transition-colors duration-300 group-hover/item:text-orange-400 ${item.isKey ? "text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]" : "text-orange-200"}`}>{item.name}{item.isKey && <Star size={24} className="fill-red-400 animate-pulse" />}</div>
                                                    {item.isKey && <div className="text-center"><span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30 uppercase tracking-wider">Quan trọng nhất</span></div>}
                                                    <div className={`text-base text-slate-400 font-light leading-relaxed text-justify bg-black/20 p-4 rounded-xl border transition-all duration-300 group-hover/item:border-orange-500/40 group-hover/item:bg-white/5 ${item.isKey ? "border-red-500/30 bg-red-900/10" : "border-white/5"}`}>
                                                        {item.traits}
                                                        <div className="mt-2 text-right"><span className="text-[10px] uppercase font-bold text-orange-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-end gap-1">Nhấn để xem chi tiết <ChevronRight size={10}/></span></div>
                                                    </div>
                                                </div>
                                            )) : <div className="text-center text-slate-600 italic text-lg">Chưa xác định</div>}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h4 className="text-center text-base font-bold text-slate-400 uppercase tracking-widest mb-8 pb-3 border-b border-white/10">SỐNG VỚI MỤC ĐÍCH SỐNG CÂN BẰNG</h4>
                                        <div className="space-y-8">
                                            {purposeParts.length > 0 ? purposeParts.map((item, i) => (
                                                <div key={i} className="flex flex-col gap-3 group/item cursor-pointer" onClick={() => item.originalItem && setDetailItem(item.originalItem)}>
                                                    <div className="text-2xl md:text-3xl font-bold text-blue-200 text-center uppercase tracking-wide transition-colors duration-300 group-hover/item:text-blue-400">{item.name}</div>
                                                    <div className="text-base text-slate-300 font-light leading-relaxed text-justify bg-black/20 p-4 rounded-xl border border-white/5 transition-all duration-300 group-hover/item:border-blue-500/40 group-hover/item:bg-white/5">
                                                        {item.traits}
                                                        <div className="mt-2 text-right"><span className="text-[10px] uppercase font-bold text-blue-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-end gap-1">Nhấn để xem chi tiết <ChevronRight size={10}/></span></div>
                                                    </div>
                                                </div>
                                            )) : <div className="text-center text-slate-600 italic text-lg">Chưa xác định</div>}
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    )}
                </div>
            )}
            
            {detailItem && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setDetailItem(null)}></div>
                    <div className={`relative bg-[#0f172a] border w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-fade-in-up ${detailItem.challenge ? 'border-red-500/30' : 'border-blue-500/30'}`}>
                        <button onClick={() => setDetailItem(null)} className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-10 border border-white/10"><X size={24} className="text-white" /></button>
                        <div className="p-8 md:p-12">
                            <div className="text-center mb-10 pb-8 border-b border-white/10">
                                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 border shadow-2xl ${detailItem.challenge ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'}`}>
                                    {detailItem.icon && <detailItem.icon size={40} />}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-3">{detailItem.challenge ? 'Bài Học:' : 'Mục Đích:'} <span className={detailItem.challenge ? 'text-red-400' : 'text-blue-400'}>{detailItem.name}</span></h3>
                                <p className="text-slate-400 text-lg italic max-w-2xl mx-auto">"{detailItem.description}"</p>
                            </div>
                            <div className="space-y-8">
                                <div className={`p-6 rounded-2xl border ${detailItem.challenge ? 'bg-red-950/20 border-red-500/20' : 'bg-blue-950/20 border-blue-500/20'}`}>
                                    <h4 className={`font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider ${detailItem.challenge ? 'text-red-400' : 'text-blue-400'}`}>{detailItem.challenge ? <ShieldCheck size={24} /> : <Star size={24} />} {detailItem.challenge ? 'Vấn đề & Thách thức' : 'Sự Viên Mãn'}</h4>
                                    <p className="text-slate-300 text-lg leading-relaxed">{detailItem.challenge || detailItem.fulfillment}</p>
                                </div>
                                {detailItem.details && (
                                    <>
                                        <div className="bg-slate-800/30 p-6 rounded-2xl border border-white/10">
                                            <h4 className="text-orange-300 font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider"><AlertCircle size={24} /> {detailItem.challenge ? 'Biểu hiện khi chưa tốt nghiệp' : 'Đặc điểm nhận dạng'}</h4>
                                            <ul className="space-y-3">
                                                {detailItem.details.symptoms.map((symptom, i) => (<li key={i} className="flex items-start gap-3 text-slate-300"><div className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${detailItem.challenge ? 'bg-orange-400' : 'bg-teal-400'}`}></div><span>{symptom}</span></li>))}
                                            </ul>
                                        </div>
                                        <div className={`p-6 rounded-2xl border ${detailItem.challenge ? 'bg-blue-950/20 border-blue-500/20' : 'bg-indigo-950/20 border-indigo-500/20'}`}>
                                            <h4 className={`font-bold text-xl mb-4 flex items-center gap-3 uppercase tracking-wider ${detailItem.challenge ? 'text-blue-400' : 'text-indigo-400'}`}>{detailItem.challenge ? <CheckCircle2 size={24} /> : <Compass size={24} />} {detailItem.challenge ? 'Chìa khóa vượt qua' : 'Lời khuyên để phát triển'}</h4>
                                            <p className="text-slate-300 text-lg leading-relaxed text-justify">{detailItem.details.advice}</p>
                                        </div>
                                        <div className={`p-6 rounded-2xl border text-center ${detailItem.challenge ? 'bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/20' : 'bg-gradient-to-r from-orange-900/20 to-amber-900/20 border-orange-500/20'}`}>
                                            <h4 className={`font-bold text-xl mb-3 flex items-center justify-center gap-3 uppercase tracking-wider ${detailItem.challenge ? 'text-yellow-400' : 'text-orange-400'}`}><Gift size={24} /> {detailItem.challenge ? 'Món quà sau thử thách' : 'Di sản bạn mang đến thế giới'}</h4>
                                            <p className="text-white text-lg font-medium italic">"{detailItem.details.gift}"</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showGuide && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowGuide(false)}></div>
                    <div className="relative bg-[#0f172a] border border-orange-500/30 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-fade-in-up">
                        <div className="sticky top-0 bg-[#0f172a]/95 backdrop-blur-md p-6 border-b border-white/10 flex justify-between items-center z-10"><h3 className="text-2xl font-bold text-white flex items-center gap-3"><Fingerprint size={32} className="text-orange-500" /> Hướng Dẫn Lấy Mẫu & Xác Định Vân Tay</h3><button onClick={() => setShowGuide(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"><X size={28} /></button></div>
                        <div className="p-8 space-y-10">
                            <div><h4 className="text-orange-400 font-bold mb-5 flex items-center gap-3 text-xl"><Camera size={24} /> 1. Hướng Dẫn Lấy Mẫu: Chụp & Phóng To</h4><div className="bg-slate-800/50 p-6 rounded-2xl border border-white/10 space-y-6"><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="flex flex-col items-center text-center gap-3"><div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2"><Camera size={32} /></div><h5 className="font-bold text-white">Bước 1: Chụp Hình</h5><p className="text-sm text-slate-400">Dùng camera điện thoại (bật đèn Flash nếu cần), chụp rõ nét phần đầu ngón tay.</p></div><div className="flex flex-col items-center text-center gap-3"><div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mb-2"><ZoomIn size={32} /></div><h5 className="font-bold text-white">Bước 2: Phóng To</h5><p className="text-sm text-slate-400">Mở ảnh vừa chụp, dùng 2 ngón tay phóng to (zoom) vào phần tâm của dấu vân tay.</p></div><div className="flex flex-col items-center text-center gap-3"><div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-2"><Search size={32} /></div><h5 className="font-bold text-white">Bước 3: Đối Chiếu</h5><p className="text-sm text-slate-400">So sánh hình dạng đường vân với các mẫu bên dưới để xác định chủng vân tay.</p></div></div><div className="bg-orange-900/20 p-4 rounded-xl border border-orange-500/20 text-center"><p className="text-orange-200 text-sm font-medium">💡 Mẹo: Hãy lau sạch camera và ngón tay trước khi chụp để có hình ảnh rõ nét nhất.</p></div></div></div>
                            <div className="h-px bg-white/10"></div>
                            <div><h4 className="text-orange-400 font-bold mb-5 flex items-center gap-3 text-xl"><Search size={24} /> 2. Nhận Diện 8 Chủng Vân Tay Cơ Bản</h4><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{FINGER_OPTIONS.map((opt) => (<div key={opt.value} className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all group hover:-translate-y-2 hover:shadow-lg"><div className="flex items-center justify-between mb-3"><span className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">{opt.value}</span><span className="text-sm bg-white/10 px-3 py-1.5 rounded-lg text-slate-300 font-medium">{opt.label.split('(')[1].replace(')', '')}</span></div><div className="w-full aspect-square bg-black/40 rounded-xl mb-4 flex items-center justify-center border border-white/5 overflow-hidden"><img src={opt.image} alt={opt.label} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500" /></div><p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line font-light text-justify">{opt.description}</p></div>))}</div></div>
                        </div>
                        <div className="p-6 border-t border-white/10 bg-slate-900/50 text-center"><button onClick={() => setShowGuide(false)} className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all text-lg hover:-translate-y-1 hover:shadow-lg">Đã Hiểu & Bắt Đầu Nhập</button></div>
                    </div>
                </div>
            )}

            <Reveal delay={200}><div className="flex justify-center mt-16 mb-10"><button onClick={() => onNavigate(Tab.CONTACT)} className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-all duration-300 flex items-center gap-4">Đọc Kết Quả Chuyên Sâu <ArrowRight size={24} /></button></div></Reveal>
        </div>
    );
};

export const ContactView: React.FC = () => {
  return (
    <div className="space-y-16 max-w-7xl mx-auto pb-20">
      <Reveal><div className="text-center mb-16"><h2 className="text-5xl font-bold mb-6 drop-shadow-2xl"><span className="text-white">KHÓA HỌC</span> <span className="text-orange-500 px-1">&</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">KẾT NỐI</span></h2><p className="text-slate-400 text-xl text-center max-w-4xl mx-auto leading-relaxed">Nếu anh chị muốn tìm thấy Mục đích sống của chính mình hay mong muốn có kiến thức và kỹ năng để giúp mọi người tìm thấy Mục đích sống của họ thì hãy tham gia khóa học này.</p></div></Reveal>
      <div className="grid md:grid-cols-2 gap-10">
        <Reveal delay={100}><div className="glass-panel p-10 rounded-3xl h-full flex flex-col justify-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"><div className="text-center md:text-left mb-8"><h3 className="text-3xl font-bold text-blue-400 uppercase leading-tight mb-2">Khóa Học</h3><h3 className="text-3xl font-bold text-white uppercase leading-tight">Phân Tích Mục Đích Sống</h3></div><div className="space-y-6"><div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-white/5 hover:border-orange-500/30 transition-all hover:bg-slate-800/60 hover:-translate-y-1"><div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center shrink-0 text-orange-400"><Clock size={20} /></div><div><h4 className="font-bold text-white text-lg">Thời gian</h4><p className="text-slate-400 text-base">1 buổi (3 giờ)</p></div></div><div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-white/5 hover:border-orange-500/30 transition-all hover:bg-slate-800/60 hover:-translate-y-1"><div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center shrink-0 text-orange-400"><Monitor size={20} /></div><div><h4 className="font-bold text-white text-lg">Hình thức học</h4><p className="text-slate-400 text-base">Trực tiếp hoặc Online</p></div></div><div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-white/5 hover:border-orange-500/30 transition-all hover:bg-slate-800/60 hover:-translate-y-1"><div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center shrink-0 text-orange-400"><Target size={20} /></div><div><h4 className="font-bold text-white text-lg">Kết quả</h4><p className="text-slate-400 text-base leading-relaxed">Bạn có kiến thức, tìm thấy bài học cuộc sống và mục đích sống của bản thân, đọc được kết quả phân tích cho mình và cho mọi người.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 transition-all hover:bg-green-500/20 hover:-translate-y-1"><div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 text-green-400"><Gift size={20} /></div><div><h4 className="font-bold text-slate-300 text-lg">Học phí: <span className="text-green-400 font-extrabold uppercase ml-1">Miễn phí tham gia</span>.</h4></div></div></div></div></Reveal>
        <Reveal delay={200}><div className="glass-panel p-10 rounded-3xl h-full flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"><div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/30 shadow-2xl animate-pulse-slow hover:scale-110 transition-transform duration-500"><MessageCircle size={48} className="text-blue-400" /></div><h3 className="text-3xl font-bold text-white mb-4">Đăng Ký Qua Zalo</h3><p className="text-slate-400 mb-10 text-lg max-w-md">Vui lòng liên hệ trực tiếp với chuyên gia để đăng ký tham gia khóa học miễn phí này.</p><a href="https://zalo.me/0795121981" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold text-xl transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png" className="w-8 h-8 bg-white rounded-full p-0.5" alt="" />Đăng Ký Ngay</a><div className="mt-8 pt-8 border-t border-white/10 w-full"><div className="flex flex-col gap-4 items-center"><div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors hover:scale-105"><Phone size={18} /> <span>0795.12.19.81</span></div><div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors hover:scale-105"><Mail size={18} /> <span>huongnghiep.chuyengia@gmail.com</span></div></div></div></div></Reveal>
      </div>
    </div>
  );
};
