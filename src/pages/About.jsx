import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import { useSEO } from '../hooks/useSEO';

const STATS = [
  { value: '200+', label: 'Topics', color: '#3b82f6' },
  { value: '5', label: 'Skill Levels', color: '#facc15' },
  { value: '100%', label: 'Free', color: '#22c55e' },
  { value: '0', label: 'Sign-ups Needed', color: '#a855f7' },
];

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Structured Curriculum',
    desc: 'Every topic is carefully ordered — from your first print() to CPython internals. No random jumping around.',
    color: '#3b82f6',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'In-Browser Python Compiler',
    desc: 'Write and run real Python code directly in your browser — powered by Pyodide. No installation, no setup.',
    color: '#a855f7',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Learn at Your Own Pace',
    desc: 'Your progress is saved locally on your device. Pick up exactly where you left off, no account required.',
    color: '#22c55e',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Interview Preparation',
    desc: '26+ curated Python interview questions with detailed answers and code examples, from basics to hard-level topics.',
    color: '#facc15',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Progress Tracking',
    desc: 'Visual progress rings, streak tracking, and a full dashboard — all stored privately on your device.',
    color: '#f97316',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'For All Skill Levels',
    desc: 'Whether you\'re writing your first variable or optimising a distributed system — there\'s a track for you.',
    color: '#06b6d4',
  },
];

export default function About() {
  const navigate = useNavigate();

  useSEO({
    title: 'About PyPath — Free Python Learning Platform',
    description: 'PyPath is a free, independent Python learning platform with 200+ structured topics across 5 skill levels. No sign-up needed. Learn Python your way.',
    path: '/about',
    keywords: ['about PyPath', 'PyPath platform', 'free Python learning website', 'Python education'],
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen pt-14"
      style={{ background: '#0f1117' }}
    >
      {/* Hero */}
      <div
        className="border-b border-[#2a3040] py-16"
        style={{ background: 'linear-gradient(180deg, #161b27 0%, #0f1117 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-xl"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#fff', boxShadow: '0 4px 20px rgba(59,130,246,0.4)' }}
            >
              Py
            </div>
            <span className="font-mono font-bold text-3xl text-[#e8eaf0]">Path</span>
          </div>
          <h1 className="font-mono font-bold text-3xl sm:text-4xl text-[#e8eaf0] mb-4">
            About PyPath
          </h1>
          <p className="font-serif text-lg text-[#9ca3af] leading-relaxed max-w-2xl mx-auto">
            PyPath is a free, independent Python learning platform built for developers who want to go deep — not just skim the surface. No fluff. No paywalls. No sign-ups required.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="text-center rounded-xl border border-[#2a3040] p-5"
              style={{ background: '#1a1f2e' }}
            >
              <div className="font-mono font-bold text-3xl mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="font-mono text-xs text-[#6b7280]">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-14 rounded-2xl border border-[#2a3040] p-8"
          style={{ background: '#161b27' }}
        >
          <h2 className="font-mono font-bold text-xl text-[#e8eaf0] mb-4">Our Mission</h2>
          <p className="font-serif text-[#9ca3af] leading-relaxed mb-4">
            High-quality programming education should be accessible to everyone — regardless of where you live, what you earn, or whether you can afford a subscription. PyPath was built on this belief.
          </p>
          <p className="font-serif text-[#9ca3af] leading-relaxed mb-4">
            We provide a carefully structured, deeply detailed Python curriculum that takes learners from absolute beginners writing their first <code className="font-mono text-sm text-[#a5d6ff] px-1 py-0.5 rounded" style={{ background: 'rgba(59,130,246,0.1)' }}>print("hello")</code> all the way to understanding CPython internals, distributed computing, and AI/ML pipelines.
          </p>
          <p className="font-serif text-[#9ca3af] leading-relaxed">
            Every topic includes a conceptual explanation, real code examples, common pitfalls, and a challenge to test your understanding. No surface-level overviews.
          </p>
        </motion.section>

        {/* Features */}
        <h2 className="font-mono font-bold text-xl text-[#e8eaf0] mb-6">What PyPath Offers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.07 }}
              className="rounded-xl border border-[#2a3040] p-5 hover:border-[#3a4155] transition-colors"
              style={{ background: '#1a1f2e' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ background: `${f.color}18`, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="font-mono font-semibold text-sm text-[#e8eaf0] mb-2">{f.title}</h3>
              <p className="font-serif text-xs text-[#9ca3af] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Notice */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-14 rounded-2xl border border-[#2a3040] p-6"
          style={{ background: '#161b27' }}
        >
          <h2 className="font-mono font-bold text-base text-[#e8eaf0] mb-3">Content & Accuracy</h2>
          <p className="font-serif text-sm text-[#9ca3af] leading-relaxed mb-3">
            All content on PyPath is written to be accurate and up-to-date with current Python best practices. That said, programming languages evolve — if you spot an error, outdated information, or have a suggestion, we welcome feedback via our <Link to="/contact" className="text-[#3b82f6] hover:underline">Contact page</Link>.
          </p>
          <p className="font-serif text-sm text-[#9ca3af] leading-relaxed">
            Code examples are tested and intended to run on Python 3.10+. Some advanced features (e.g., the no-GIL build) may require Python 3.13+.
          </p>
        </motion.section>

        {/* Advertising Notice */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-14 rounded-2xl border border-[#2a3040] p-6"
          style={{ background: '#161b27' }}
        >
          <h2 className="font-mono font-bold text-base text-[#e8eaf0] mb-3">Advertising</h2>
          <p className="font-serif text-sm text-[#9ca3af] leading-relaxed mb-3">
            PyPath is free to use and supported by advertising provided by <strong className="text-[#e8eaf0]">Google AdSense</strong>. Ads help keep this platform alive and free for everyone.
          </p>
          <p className="font-serif text-sm text-[#9ca3af] leading-relaxed">
            We have no control over the specific ads displayed — Google selects them based on your browsing history and interests. You can manage your ad preferences or opt out of personalized ads at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">adssettings.google.com</a>. See our <Link to="/privacy-policy" className="text-[#3b82f6] hover:underline">Privacy Policy</Link> for full details.
          </p>
        </motion.section>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/curriculum')}
            className="inline-flex items-center gap-2 font-mono font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: '#fff',
              boxShadow: '0 4px 20px rgba(59,130,246,0.3)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
          >
            Start Learning Python →
          </button>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
