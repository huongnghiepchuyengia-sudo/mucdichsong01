import React, { useState } from 'react';
import { Tab } from './types';
import { 
  HomeView,
  PrinciplesView, 
  SchoolsView, 
  LessonsView, 
  PurposeView, 
  ExperienceView, 
  ContactView 
} from './components/TabViews';
import { Compass, Book, GraduationCap, Target, Fingerprint, Mail, Menu, X, Sparkles, Home } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Removed 'Trang Chủ' from menu items, but it remains accessible via Logo
  const menuItems = [
    { id: Tab.PRINCIPLES, label: 'Nguyên Tắc', icon: Compass },
    { id: Tab.SCHOOLS, label: 'Trường Lớp', icon: GraduationCap },
    { id: Tab.LESSONS, label: 'Bài Học', icon: Book },
    { id: Tab.PURPOSE, label: 'Mục Đích', icon: Target },
    { id: Tab.EXPERIENCE, label: 'Trải Nghiệm', icon: Fingerprint },
    { id: Tab.CONTACT, label: 'Khóa học', icon: Mail },
  ];

  const handleNavigate = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME: return <HomeView onNavigate={handleNavigate} />;
      case Tab.PRINCIPLES: return <PrinciplesView onNavigate={handleNavigate} />;
      case Tab.SCHOOLS: return <SchoolsView onNavigate={handleNavigate} />;
      case Tab.LESSONS: return <LessonsView onNavigate={handleNavigate} />;
      case Tab.PURPOSE: return <PurposeView onNavigate={handleNavigate} />;
      case Tab.EXPERIENCE: return <ExperienceView onNavigate={handleNavigate} />;
      case Tab.CONTACT: return <ContactView />;
      default: return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-200">
      {/* Header - Mystical Glass */}
      <header className="sticky top-0 z-50 transition-all duration-500 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Clicks to Home */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => setActiveTab(Tab.HOME)}
            >
              <div className="w-11 h-11 relative flex items-center justify-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-md group-hover:bg-orange-400/30 transition-all duration-500"></div>
                
                {/* Fingerprint Icon Container */}
                <div className="relative w-11 h-11 bg-[#0f172a] rounded-full border border-orange-500/40 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:border-orange-400">
                  <Fingerprint size={24} className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-300 tracking-tight drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                Mục Đích Sống
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 bg-black/20 p-1 rounded-full border border-white/5 backdrop-blur-sm">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-5 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden group
                    ${activeTab === item.id 
                      ? 'text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]' 
                      : 'text-slate-400 hover:text-orange-200 hover:bg-white/5'
                    }`}
                >
                  {/* Background for active item */}
                  {activeTab === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-100"></div>
                  )}
                  
                  <item.icon size={18} strokeWidth={2.5} className={`relative z-10 ${activeTab === item.id ? "text-white" : ""}`} />
                  <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="xl:hidden p-2 rounded-xl text-orange-200 hover:bg-white/10 transition-colors border border-transparent hover:border-orange-500/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Content */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#020617]/95 border-t border-white/10 absolute w-full shadow-2xl animate-fade-in-up backdrop-blur-xl h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-3">
              {/* Add explicit Home button for Mobile only if desired, or rely on Logo. 
                  Currently hiding it from list as requested. */}
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-lg font-medium transition-all
                    ${activeTab === item.id 
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30 shadow-[inset_0_0_10px_rgba(249,115,22,0.1)]' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-orange-200'
                    }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === item.id ? 'bg-orange-500/20 text-orange-300' : 'bg-white/5 text-slate-500'}`}>
                    <item.icon size={24} />
                  </div>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-[#020617]/40 backdrop-blur-lg border-t border-white/5 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-tr from-orange-600 to-red-700 rounded-md flex items-center justify-center text-white border border-orange-500/20">
                <Fingerprint size={18} className="text-orange-200" />
              </div>
              <span className="font-bold text-slate-400 text-lg">Mục Đích Sống</span>
            </div>
            <p className="text-center text-base text-slate-500 font-medium">
              © 2024. Khám phá bí ẩn bên trong bạn.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;