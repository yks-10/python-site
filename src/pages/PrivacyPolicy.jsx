import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import { useSEO } from '../hooks/useSEO';

const LAST_UPDATED = 'March 2025';

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="font-mono font-bold text-lg text-[#e8eaf0] mb-4 pb-2 border-b border-[#2a3040]">
        {title}
      </h2>
      <div className="space-y-3 font-serif text-sm text-[#9ca3af] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function P({ children }) {
  return <p>{children}</p>;
}

function Ul({ items }) {
  return (
    <ul className="space-y-1.5 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy',
    description: 'Read the PyPath Privacy Policy. Learn how we handle your data, use cookies, and work with third-party services including Google AdSense and Analytics.',
    path: '/privacy-policy',
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#6b7280] mb-4">
            <Link to="/" className="hover:text-[#9ca3af] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#9ca3af]">Privacy Policy</span>
          </div>
          <h1 className="font-mono font-bold text-3xl text-[#e8eaf0] mb-3">Privacy Policy</h1>
          <p className="font-mono text-xs text-[#6b7280]">Last updated: {LAST_UPDATED}</p>
          <div
            className="mt-4 p-4 rounded-xl border border-[#2a3040] font-mono text-xs text-[#9ca3af] leading-relaxed"
            style={{ background: '#161b27' }}
          >
            PyPath is a free educational platform. We are committed to being transparent about how we operate. This policy explains what data is collected, by whom, and how it is used when you visit this website.
          </div>
        </div>

        {/* Sections */}
        <Section title="1. Who We Are">
          <P>
            PyPath (<strong className="text-[#e8eaf0]">py-path.com</strong>) is a free, independent Python learning platform. We provide structured Python tutorials, curriculum, interview preparation, and an in-browser Python compiler. This site is operated independently and is not affiliated with the Python Software Foundation.
          </P>
        </Section>

        <Section title="2. Information We Collect">
          <P>We do <strong className="text-[#e8eaf0]">not</strong> require you to create an account or provide personal information to use PyPath. However, some information is collected automatically or through third-party services:</P>

          <div>
            <p className="font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-2 mt-4">a) Data stored locally on your device</p>
            <P>Your learning progress (topics completed, streaks, activity dates) is stored entirely in your browser&apos;s <strong className="text-[#e8eaf0]">localStorage</strong>. This data never leaves your device and is never transmitted to our servers. You can clear it at any time by resetting progress in the Dashboard or clearing your browser storage.</P>
          </div>

          <div>
            <p className="font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-2 mt-4">b) Automatically collected data</p>
            <P>When you visit PyPath, third-party services (described below) may automatically collect:</P>
            <Ul items={[
              'IP address and approximate geographic location',
              'Browser type, version, and operating system',
              'Device type (desktop, mobile, tablet)',
              'Pages visited, time spent, and referring URL',
              'Interaction data (clicks, scroll depth)',
            ]} />
          </div>
        </Section>

        <Section title="3. Cookies">
          <P>Cookies are small text files stored on your device by your browser. PyPath itself does not set first-party cookies. However, third-party services embedded on this site may set their own cookies.</P>

          <div>
            <p className="font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-2 mt-4">Types of cookies used</p>
            <Ul items={[
              'Advertising cookies — set by Google AdSense to show relevant ads based on your interests and browsing activity.',
              'Analytics cookies — set by Google Analytics to understand how visitors use the site (page views, session duration, etc.).',
              'Performance cookies — set by Google to measure ad effectiveness and prevent fraud.',
            ]} />
          </div>

          <P>You can control or disable cookies through your browser settings. Note that disabling cookies may affect the functionality of some features.</P>
        </Section>

        <Section title="4. Google AdSense & Advertising">
          <P>
            PyPath uses <strong className="text-[#e8eaf0]">Google AdSense</strong> to display advertisements. Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to this and other websites.
          </P>
          <Ul items={[
            'Google may use data about your visits to serve personalized advertisements.',
            'Google\'s use of advertising cookies enables it to serve ads based on your visit to PyPath and/or other sites on the Internet.',
            'You may opt out of personalized advertising by visiting Google\'s Ads Settings at https://adssettings.google.com',
            'You may also opt out of third-party vendor use of cookies by visiting https://www.aboutads.info',
          ]} />
          <P>
            For more information about how Google collects and uses data, please review Google&apos;s Privacy Policy at <strong className="text-[#60a5fa]">https://policies.google.com/privacy</strong>.
          </P>
        </Section>

        <Section title="5. Google Analytics">
          <P>
            We may use <strong className="text-[#e8eaf0]">Google Analytics</strong> to understand site usage patterns. Google Analytics collects data such as pages visited, time on site, and traffic sources. This data is aggregated and anonymized and is used solely to improve the site.
          </P>
          <P>
            You can opt out of Google Analytics tracking by installing the <strong className="text-[#60a5fa]">Google Analytics Opt-out Browser Add-on</strong> available at https://tools.google.com/dlpage/gaoptout.
          </P>
        </Section>

        <Section title="6. Third-Party Services">
          <P>PyPath integrates with the following third-party services:</P>
          <Ul items={[
            'Google Fonts — used to load typography. Google may collect your IP address when fonts are fetched.',
            'Pyodide (CDN) — the in-browser Python runtime is loaded from jsDelivr CDN. No personal data is shared.',
            'Google AdSense — for displaying advertisements (see Section 4).',
          ]} />
          <P>Each of these third parties has its own privacy policy governing their data practices. We are not responsible for the privacy practices of these third parties.</P>
        </Section>

        <Section title="7. How We Use Information">
          <P>Information collected through third-party services is used to:</P>
          <Ul items={[
            'Display relevant advertisements to support the free availability of this platform',
            'Understand how users navigate the site so we can improve content and user experience',
            'Diagnose technical issues',
            'Comply with legal obligations',
          ]} />
          <P>We do <strong className="text-[#e8eaf0]">not</strong> sell, rent, or trade any personal information to third parties.</P>
        </Section>

        <Section title="8. Children's Privacy">
          <P>
            PyPath is intended for general audiences and is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, please contact us and we will delete it promptly.
          </P>
        </Section>

        <Section title="9. Your Rights (GDPR / CCPA)">
          <P>Depending on your location, you may have the following rights regarding your data:</P>
          <Ul items={[
            'Right to access — request a copy of personal data held about you',
            'Right to deletion — request deletion of your personal data',
            'Right to opt out — opt out of the sale of personal data (California residents)',
            'Right to object — object to processing of your data for advertising purposes',
          ]} />
          <P>Since PyPath itself stores no personal data on its servers, most of these rights relate to data held by third-party services (Google). You can exercise these rights directly through Google&apos;s My Account settings or by contacting us.</P>
        </Section>

        <Section title="10. Data Security">
          <P>All traffic to PyPath is served over HTTPS. Your locally stored progress data is protected by your browser&apos;s same-origin policy and is never transmitted over the network. We follow industry best practices to maintain the security of this site.</P>
        </Section>

        <Section title="11. Changes to This Policy">
          <P>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this page periodically. Continued use of PyPath after changes constitutes acceptance of the updated policy.</P>
        </Section>

        <Section title="12. Contact Us">
          <P>If you have any questions about this Privacy Policy, want to exercise your data rights, or want to report a concern, please reach out via our <Link to="/contact" className="text-[#3b82f6] hover:underline">Contact page</Link>.</P>
        </Section>
      </div>

      <Footer />
    </motion.div>
  );
}
