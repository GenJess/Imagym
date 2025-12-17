import React from 'react';
import { Page } from '../App';
import SplashCursor from './splash-cursor';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans flex flex-col selection:bg-indigo-500/30 relative">
      <SplashCursor />
      <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_10px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
              P
            </div>
            <span className="font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_2px_rgba(255,255,255,0.1)]">
              Promptry
            </span>
          </div>

          <div className="flex items-center gap-1 md:gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                currentPage === 'home' 
                  ? 'text-cyan-300 bg-gray-900 shadow-[0_0_15px_rgba(34,211,238,0.2)] border border-cyan-500/30' 
                  : 'text-gray-400 hover:text-cyan-300 hover:bg-gray-900/50'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => onNavigate('mirror')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                currentPage === 'mirror' 
                  ? 'text-indigo-300 bg-gray-900 shadow-[0_0_15px_rgba(99,102,241,0.2)] border border-indigo-500/30' 
                  : 'text-gray-400 hover:text-indigo-300 hover:bg-gray-900/50'
              }`}
            >
              Mirror
            </button>
            <button 
              onClick={() => onNavigate('gym')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                currentPage === 'gym' 
                  ? 'text-purple-300 bg-gray-900 shadow-[0_0_15px_rgba(168,85,247,0.2)] border border-purple-500/30' 
                  : 'text-gray-400 hover:text-purple-300 hover:bg-gray-900/50'
              }`}
            >
              Gym
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col relative">
        {children}
      </main>

      <footer className="border-t border-gray-900 bg-gray-950 py-8 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Promptry AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};