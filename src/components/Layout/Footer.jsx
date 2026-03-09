import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="border-t border-[#2a3040] mt-auto"
      style={{ background: '#0f1117' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#fff' }}
              >
                Py
              </div>
              <span className="font-mono font-bold text-base text-[#e8eaf0]">Path</span>
            </div>
            <p className="font-serif text-sm text-[#9ca3af] leading-relaxed max-w-xs">
              A free Python learning platform. Master one concept at a time, from syntax to CPython internals.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#22c55e' }}
              />
              <span className="font-mono text-xs text-[#6b7280]">100% Free. Always.</span>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">
              Learn
            </h4>
            <ul className="space-y-1">
              {[
                { to: '/curriculum', label: 'Curriculum' },
                { to: '/interview', label: 'Interview Prep' },
                { to: '/compiler', label: 'Python Compiler' },
                { to: '/topic/beginner-intro-to-python-installing-python-ides', label: 'Start Learning' },
                { to: '/dashboard', label: 'My Progress' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-mono text-sm text-[#9ca3af] hover:text-[#3b82f6] transition-colors inline-flex items-center py-1.5 min-h-[44px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">
              Skill Levels
            </h4>
            <ul className="space-y-1">
              {[
                { label: '🟢 Beginner', to: '/curriculum#beginner' },
                { label: '🟡 Intermediate', to: '/curriculum#intermediate' },
                { label: '🔵 Advanced', to: '/curriculum#advanced' },
                { label: '🔴 Expert', to: '/curriculum#expert' },
                { label: '🟣 Mastery', to: '/curriculum#mastery' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-mono text-sm text-[#9ca3af] hover:text-[#e8eaf0] transition-colors inline-flex items-center py-1.5 min-h-[44px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">
              Site
            </h4>
            <ul className="space-y-1">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-mono text-sm text-[#9ca3af] hover:text-[#e8eaf0] transition-colors inline-flex items-center py-1.5 min-h-[44px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#2a3040] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-mono text-xs text-[#6b7280]">
            PyPath — Free Python learning for everyone.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/about" className="font-mono text-xs text-[#6b7280] hover:text-[#9ca3af] transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-mono text-xs text-[#6b7280] hover:text-[#9ca3af] transition-colors">
              Contact
            </Link>
            <Link to="/privacy-policy" className="font-mono text-xs text-[#6b7280] hover:text-[#9ca3af] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
