import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, ShieldCheck, HelpCircle, MessageCircle, SendHorizontal } from 'lucide-react';

interface Props {
  t: any;
  lang: string;
}

interface Message {
  text: string;
  isBot: boolean;
  type?: 'text' | 'myth' | 'faq';
}

export default function Chatbot({ t, lang }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: `Welcome to ${t.chatbotTitle}! ${t.chatbotSub}`, isBot: true }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { text, isBot: false }];
    setMessages(newMessages);
    setInput('');

    // Simulated AI Logic (Myth Buster & FAQ)
    setTimeout(() => {
      let response = "I'm still learning. Try asking about health myths or vaccinations!";
      let type: 'text' | 'myth' | 'faq' = 'text';

      const lowerText = text.toLowerCase();

      // Myth Busting logic
      if (lowerText.includes('myth') || lowerText.includes('fact') || lowerText.includes('is it true')) {
        response = "Myth: Cold weather causes the common cold. \n\nFact: Colds are caused by viruses, not the temperature. However, cold air can dry out mucus membranes, making you more susceptible.";
        type = 'myth';
      } else if (lowerText.includes('vaccine') || lowerText.includes('safe')) {
        response = "Verified: Vaccines undergo rigorous testing for safety and efficacy. They are the most effective way to prevent infectious diseases.";
        type = 'myth';
      } else if (lowerText.includes('diet') || lowerText.includes('food')) {
        response = "Health Tip: A balanced diet rich in whole grains, proteins, and vegetables is key to a healthy heart and mind.";
        type = 'faq';
      } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
        response = "Hello! I am your MediBuddy AI. How can I help you with health information today?";
      }

      setMessages([...newMessages, { text: response, isBot: true, type }]);

      // Save to Backend (MongoDB & API Notification)
      fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, response: response, lang: lang })
      }).catch(err => console.error('Failed to sync with backend:', err));
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[100] group"
      >
        <MessageSquare size={28} />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {t.chatbotTitle}
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 w-[350px] sm:w-[400px] h-[600px] bg-white rounded-[32px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-[100] animate-in slide-in-from-bottom-10 fade-in duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-600 p-6 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
            <ShieldCheck size={24} />
          </div>
          <div>
            <div className="font-bold text-lg leading-none mb-1">{t.chatbotTitle}</div>
            <div className="text-[10px] opacity-80 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              Online AI Assistant
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
              m.isBot 
                ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100' 
                : 'bg-primary text-white rounded-tr-none'
            }`}>
              {m.type === 'myth' && <div className="text-[10px] font-black uppercase text-rose-500 mb-1 flex items-center gap-1"><ShieldCheck size={12}/> {t.mythBuster}</div>}
              {m.type === 'faq' && <div className="text-[10px] font-black uppercase text-blue-500 mb-1 flex items-center gap-1"><HelpCircle size={12}/> {t.healthFAQ}</div>}
              <div className="whitespace-pre-wrap">{m.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar border-t border-gray-50">
        <button onClick={() => handleSend("Myth Buster")} className="whitespace-nowrap px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-bold border border-rose-100 hover:bg-rose-100 transition-colors">
          🔥 {t.mythBuster}
        </button>
        <button onClick={() => handleSend("Vaccine Safety FAQ")} className="whitespace-nowrap px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border border-blue-100 hover:bg-blue-100 transition-colors">
          📋 {t.healthFAQ}
        </button>
        <button onClick={() => handleSend("Common Cold Facts")} className="whitespace-nowrap px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100 hover:bg-emerald-100 transition-colors">
          💊 Verified Info
        </button>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-1 border border-gray-100">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
            placeholder={t.chatPlaceholder}
            className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none"
          />
          <button 
            onClick={() => handleSend(input)}
            className="bg-primary text-white p-2 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <Send size={18} />
          </button>
        </div>
        
        {/* Social Integration Icons (Simulation) */}
        <div className="flex justify-center items-center gap-4 mt-3">
           <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">Connect:</div>
           <a href="https://wa.me/1234567890" target="_blank" className="text-emerald-500 hover:scale-110 transition-transform">
             <MessageCircle size={18} />
           </a>
           <a href="https://t.me/medibuddy_bot" target="_blank" className="text-sky-500 hover:scale-110 transition-transform">
             <SendHorizontal size={18} />
           </a>
        </div>
      </div>
    </div>
  );
}
