import React from 'react';
import { GlowCard } from '../components/ui/spotlight-card';
import type { Page } from '../App';
import Hyperspeed from '../components/ui/Hyperspeed';
import { hyperspeedPresets } from '../components/ui/hyperspeedPresets';
import { SparklesIcon } from '../components/icons/SparklesIcon';
import { TrophyIcon } from '../components/icons/TrophyIcon';
import { CheckIcon } from '../components/icons/CheckIcon';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-indigo-400">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mt-1">{desc}</p>
    </div>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 -z-10">
          <Hyperspeed effectOptions={hyperspeedPresets.four} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950 pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6 backdrop-blur-md">
                <SparklesIcon className="w-4 h-4" />
                <span>The Future of Prompt Engineering</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                Master the Language of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">Generative AI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Move beyond vague descriptions. Learn to speak to Gemini in structured JSON for pixel-perfect control. Promptry is your training ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => onNavigate('mirror')}
                    className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                    Start with Mirror
                </button>
                <button 
                    onClick={() => onNavigate('gym')}
                    className="px-8 py-4 bg-gray-900 text-purple-300 border border-purple-500/50 font-bold rounded-xl hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all transform hover:scale-105"
                >
                    Enter the Gym
                </button>
            </div>
        </div>
      </div>

      {/* The "Why JSON" Section */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-900 to-transparent" />
        
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prompting is not magic.<br/>It's a structured skill.</h2>
                <div className="space-y-8">
                    <FeatureItem 
                        icon={<span className="font-mono">{`{}`}</span>}
                        title="Precision over Prose" 
                        desc="Natural language is messy. Structured JSON prompts force you to define parameters like lighting, composition, and style explicitly."
                    />
                    <FeatureItem 
                        icon={<CheckIcon className="w-6 h-6"/>}
                        title="Repeatable Results" 
                        desc="Build a library of prompt structures that yield consistent, high-quality results across different models."
                    />
                    <FeatureItem 
                        icon={<TrophyIcon className="w-6 h-6"/>}
                        title="Feedback Loops" 
                        desc="Our engine analyzes your prompts against the target image, giving you a semantic breakdown of where you can improve."
                    />
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 font-mono text-sm text-gray-300 shadow-2xl">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-gray-500 mb-2">// The Old Way</p>
                    <p className="mb-4 opacity-50">"A cool cyberpunk city at night with neon lights..."</p>
                    
                    <p className="text-indigo-400 mb-2 mt-6">// The Promptry Way</p>
                    <div className="text-green-400">
                        {`{
  "subject": "Cyberpunk Cityscape",
  "lighting": {
    "type": "Neon Noir",
    "sources": ["Holographic billboards", "Rain-slicked streets"]
  },
  "camera": {
    "angle": "Low-angle dutch tilt",
    "lens": "35mm wide"
  }
}`}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Training</h2>
                <p className="text-gray-400">Two distinct modes designed to elevate your prompting capabilities from novice to expert.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
                <div onClick={() => onNavigate('mirror')} className="cursor-pointer group flex-1 max-w-sm">
                    <GlowCard glowColor="blue" className="h-full p-8 flex flex-col items-center text-center bg-gray-900 hover:bg-gray-800/80 transition-colors border border-cyan-900/30">
                        <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            <SparklesIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Mirror Mode</h3>
                        <p className="text-gray-400 mb-8 flex-grow">
                            Upload any image and let our reverse-engineering engine generate the perfect, mathematically precise JSON prompt to recreate it.
                        </p>
                        <span className="text-black bg-cyan-400 px-6 py-2 rounded-full font-bold group-hover:bg-white transition-colors flex items-center">
                            Analyze Image &rarr;
                        </span>
                    </GlowCard>
                </div>
                
                <div onClick={() => onNavigate('gym')} className="cursor-pointer group flex-1 max-w-sm">
                    <GlowCard glowColor="purple" className="h-full p-8 flex flex-col items-center text-center bg-gray-900 hover:bg-gray-800/80 transition-colors border border-purple-900/30">
                        <div className="w-16 h-16 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                            <TrophyIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">The Gym</h3>
                        <p className="text-gray-400 mb-8 flex-grow">
                            Test your skills. We give you a difficulty level, you generate the image. Then we score your accuracy and provide semantic feedback.
                        </p>
                        <span className="text-purple-300 border border-purple-500/50 px-6 py-2 rounded-full font-bold group-hover:bg-purple-500 group-hover:text-white transition-all flex items-center">
                            Start Challenge &rarr;
                        </span>
                    </GlowCard>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;