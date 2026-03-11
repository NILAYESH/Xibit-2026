import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleLogin = () => {
    // Basic handler; integrate with your backend auth redirect
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md border border-indigo-500 overflow-hidden bg-white">
                <img src="https://www.logodesign.net/logo-new/arrows-inside-globe-with-airplane-507ld.png?nwm=1&nws=1&industry=All&txt_keyword=" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Rag Flow
              </span>
            </Link>
            
            <div>
              <button 
                onClick={handleLogin}
                className="flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2 px-5 rounded-xl shadow-sm transition-all duration-200 ease-in-out hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.58c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 mt-4">
            Interact with your documents like never before
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Our RAG (Retrieval-Augmented Generation) application allows you to upload text or PDFs  
            and ask questions directly to them using the power of generative AI. 
          </p>
        </div>

        {/* How to Use Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How to use our application</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-slate-200 z-0 border-t border-dashed border-slate-300"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-inner">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Upload Documents</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Securely upload your PDFs, Word documents, or plain text files. Our engine processes and indexes your files in seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shadow-inner">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Ask Questions</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Interact with the AI using natural language. Ask complex or highly specific questions about the content of your knowledge base.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-violet-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center shadow-inner">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Get Instant Insights</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Receive accurate, context-aware answers extracted directly from your files. The AI cites its sources so you can verify instantly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;