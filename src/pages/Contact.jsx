import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import { useSEO } from '../hooks/useSEO';

const TOPICS = [
  'Report a content error',
  'Suggest a new topic',
  'Report a bug or technical issue',
  'Privacy / data request',
  'Advertising inquiry',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with the PyPath team. Report errors, suggest topics, ask questions, or send privacy requests.',
    path: '/contact',
  });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Build mailto link — works without a backend
    const subject = encodeURIComponent(`[PyPath] ${form.topic || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:contact@py-path.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  const inputClass = 'w-full font-mono text-sm px-4 py-3 rounded-xl outline-none transition-all duration-150';
  const inputStyle = {
    background: '#1a1f2e',
    color: '#e8eaf0',
    border: '1px solid #2a3040',
  };
  const focusStyle = {
    border: '1px solid rgba(59,130,246,0.5)',
    boxShadow: '0 0 0 3px rgba(59,130,246,0.1)',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen pt-14"
      style={{ background: '#0f1117' }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#6b7280] mb-8">
          <Link to="/" className="hover:text-[#9ca3af] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-[#9ca3af]">Contact</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-mono font-bold text-3xl text-[#e8eaf0] mb-3">Contact Us</h1>
          <p className="font-serif text-[#9ca3af] leading-relaxed">
            Found a mistake? Have a suggestion? Need to make a privacy request? We&apos;d love to hear from you. Fill in the form below and your default email client will open with the message ready to send.
          </p>
        </div>

        {status === 'sent' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-[#22c55e]/30 p-8 text-center"
            style={{ background: 'rgba(34,197,94,0.05)' }}
          >
            <div className="text-4xl mb-4">✅</div>
            <h2 className="font-mono font-bold text-lg text-[#e8eaf0] mb-2">Email client opened</h2>
            <p className="font-serif text-sm text-[#9ca3af] mb-6">
              Your email client should have opened with the message pre-filled. Just hit Send — we typically respond within 2 business days.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="font-mono text-sm text-[#3b82f6] hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-2">
                Your Name <span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className={inputClass}
                style={inputStyle}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => Object.assign(e.target.style, inputStyle)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-2">
                Email Address <span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className={inputClass}
                style={inputStyle}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => Object.assign(e.target.style, inputStyle)}
              />
            </div>

            {/* Topic */}
            <div>
              <label className="block font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-2">
                Topic <span className="text-[#ef4444]">*</span>
              </label>
              <select
                name="topic"
                required
                value={form.topic}
                onChange={handleChange}
                className={inputClass}
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={e => Object.assign(e.target.style, { ...inputStyle, ...focusStyle })}
                onBlur={e => Object.assign(e.target.style, { ...inputStyle, cursor: 'pointer' })}
              >
                <option value="" disabled>Select a topic...</option>
                {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-2">
                Message <span className="text-[#ef4444]">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your question or feedback in detail..."
                className={`${inputClass} resize-none`}
                style={inputStyle}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => Object.assign(e.target.style, inputStyle)}
              />
            </div>

            <button
              type="submit"
              className="w-full font-mono font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-150"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: '#fff',
                boxShadow: '0 4px 16px rgba(59,130,246,0.3)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}
            >
              Open Email Client →
            </button>

            <p className="font-mono text-xs text-[#6b7280] text-center">
              Clicking the button will open your email client with the message pre-filled.
              No data is sent directly from this site.
            </p>
          </form>
        )}

        {/* Other info */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: '🔒',
              title: 'Privacy Requests',
              desc: 'To exercise data rights under GDPR/CCPA, use the topic "Privacy / data request" above.',
              link: { label: 'Read Privacy Policy', to: '/privacy-policy' },
            },
            {
              icon: '📢',
              title: 'Advertising',
              desc: 'Ads on PyPath are served by Google AdSense. We do not handle direct ad placements.',
              link: { label: 'About PyPath', to: '/about' },
            },
          ].map(card => (
            <div
              key={card.title}
              className="rounded-xl border border-[#2a3040] p-5"
              style={{ background: '#1a1f2e' }}
            >
              <div className="text-2xl mb-2">{card.icon}</div>
              <h3 className="font-mono font-semibold text-sm text-[#e8eaf0] mb-1">{card.title}</h3>
              <p className="font-serif text-xs text-[#9ca3af] leading-relaxed mb-2">{card.desc}</p>
              <Link to={card.link.to} className="font-mono text-xs text-[#3b82f6] hover:underline">
                {card.link.label} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
