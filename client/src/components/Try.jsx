import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const starterPrompts = [
  'Summarize the uploaded documents in 5 bullet points',
  'What are the key risks mentioned in the report?',
  'Compare the main findings across all documents',
];

const initialMessages = [
  {
    id: 1,
    role: 'assistant',
    text: 'Welcome back. Ask anything about your knowledge base and I will answer using the uploaded documents.',
    time: '09:41',
  },
  {
    id: 2,
    role: 'user',
    text: 'Give me the main takeaways from the latest strategy document.',
    time: '09:42',
  },
  {
    id: 3,
    role: 'assistant',
    text: 'The strategy document focuses on three priorities: faster document ingestion, stronger retrieval accuracy, and clearer source-grounded responses. It also recommends expanding enterprise support and improving user onboarding.',
    time: '09:42',
  },
];

const assistantReply =
  'Based on the indexed files, the strongest pattern is a push toward faster onboarding, better answer accuracy, and clearer source visibility. If you want, I can break that down by document or turn it into an action list.';

function maskApiKey(value) {
  if (!value) return 'Not connected';
  if (value.length <= 8) return value;
  return `${value.slice(0, 6)}...${value.slice(-4)}`;
}

function Try() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [showApiModal, setShowApiModal] = useState(true);

  const addUserMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || isThinking || showApiModal) return;

    const nextId = Date.now();
    setMessages((current) => [
      ...current,
      {
        id: nextId,
        role: 'user',
        text: trimmed,
        time: 'Now',
      },
    ]);
    setInput('');
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: nextId + 1,
          role: 'assistant',
          text: assistantReply,
          time: 'Now',
        },
      ]);
      setIsThinking(false);
    }, 700);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUserMessage(input);
  };

  const submitApiKey = () => {
    const trimmed = apiKeyInput.trim();
    if (!trimmed) return;

    setApiKey(trimmed);
    setShowApiModal(false);
  };

  const handleApiKeySubmit = (event) => {
    event.preventDefault();
    submitApiKey();
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-800 font-sans">
      <div className={showApiModal ? 'pointer-events-none select-none blur-[2px]' : ''}>
        <nav className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-sm border border-indigo-500 overflow-hidden bg-white">
                  <img src="https://www.logodesign.net/logo-new/arrows-inside-globe-with-airplane-507ld.png?nwm=1&nws=1&industry=All&txt_keyword=" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Rag Flow
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  {maskApiKey(apiKey)}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 md:py-8">
          <div className="mb-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Live conversation workspace
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Ask anything about your documents
            </h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              A focused chat workspace for retrieval-based answers, summaries, and follow-up questions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 items-start">
            <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_60px_-30px_rgba(15,23,42,0.22)]">
              <div className="border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">Current chat</p>
                    <h2 className="mt-1 text-2xl font-semibold text-slate-900">Document assistant</h2>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600">
                      3 documents loaded
                    </div>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600">
                      Source-grounded answers
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-slate-100 px-5 pb-4 pt-5 sm:px-6">
                <div className="flex flex-wrap gap-3">
                  {starterPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => addUserMessage(prompt)}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5 bg-[#f8f8f8] px-5 py-6 sm:px-6 min-h-[420px]">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-2xl rounded-[28px] px-5 py-4 shadow-sm ${
                        message.role === 'user'
                          ? 'bg-[#2f2f2f] text-white'
                          : 'border border-slate-200 bg-white text-slate-800'
                      }`}
                    >
                      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
                        <span className={message.role === 'user' ? 'text-slate-300' : 'text-slate-400'}>
                          {message.role === 'user' ? 'You' : 'Assistant'}
                        </span>
                        <span className={message.role === 'user' ? 'text-slate-500' : 'text-slate-300'}>|</span>
                        <span className={message.role === 'user' ? 'text-slate-300' : 'text-slate-400'}>
                          {message.time}
                        </span>
                      </div>
                      <p className={`leading-7 ${message.role === 'user' ? 'text-slate-100' : 'text-slate-700'}`}>
                        {message.text}
                      </p>
                    </div>
                  </div>
                ))}

                {isThinking && (
                  <div className="flex justify-start">
                    <div className="rounded-[28px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
                      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                        <span>Assistant</span>
                        <span>|</span>
                        <span>Thinking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-bounce"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-bounce [animation-delay:150ms]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-400 animate-bounce [animation-delay:300ms]"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-200 bg-white p-4 sm:p-5">
                <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.35)]">
                  <div className="flex flex-col gap-3">
                    <textarea
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      rows={3}
                      placeholder="Ask a question about your uploaded documents..."
                      className="w-full resize-none bg-transparent px-2 py-2 text-[15px] leading-7 text-slate-700 placeholder:text-slate-400 focus:outline-none"
                    />
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-slate-500">
                        Message your knowledge base
                      </p>
                      <button
                        type="submit"
                        disabled={!input.trim() || isThinking || showApiModal}
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#2f2f2f] px-5 py-3 font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-slate-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
      </div>

      {showApiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/45 backdrop-blur-sm"></div>

          <div className="relative w-full max-w-xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_-28px_rgba(15,23,42,0.45)] ring-1 ring-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-7">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </span>
                Enter API Key
              </h2>
              <button
                type="button"
                onClick={submitApiKey}
                disabled={!apiKeyInput.trim()}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleApiKeySubmit}>
              <div className="px-6 py-7 sm:px-7">
                <p className="max-w-lg text-lg leading-8 text-slate-600">
                  Paste your API key to unlock the conversation workspace. The chat screen will appear right after submission.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="password"
                    value={apiKeyInput}
                    onChange={(event) => setApiKeyInput(event.target.value)}
                    placeholder="sk-rag-..."
                    autoFocus
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-mono text-slate-800 shadow-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
                  />
                  <button
                    type="submit"
                    disabled={!apiKeyInput.trim()}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2f2f2f] px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-black disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Submit
                  </button>
                </div>
              </div>

              <div className="flex justify-end border-t border-slate-100 bg-slate-50 px-6 py-5 sm:px-7">
                <button
                  type="submit"
                  disabled={!apiKeyInput.trim()}
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Try;
