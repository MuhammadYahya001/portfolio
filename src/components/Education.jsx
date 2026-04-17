import { useScrollReveal } from '../hooks/useScrollReveal';
import Section from './Section';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <Section
      ref={ref}
      id="education"
      eyebrow="Background"
      title="Education & Growth"
    >
      <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
        {/* Image */}
        <div className="relative group overflow-hidden rounded-2xl order-2 md:order-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-premium" />
          <div className="relative overflow-hidden rounded-2xl border border-green-400/30 bg-gradient-to-br from-green-900/40 to-slate-950/40">
            <img
              src="/images/Fast.jpeg"
              alt="FAST Islamabad Campus"
              className="w-full h-full object-cover transition-premium group-hover:scale-105"
              onError={(e) => {
                console.error('Campus image failed to load');
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <h3 className="text-3xl font-bold text-white">
            FAST Islamabad
          </h3>
          <p className="mt-2 text-lg text-green-400 font-semibold">
            Cybersecurity Student
          </p>

          <p className="mt-6 text-slate-300 leading-relaxed">
            Currently pursuing education at FAST Islamabad, one of Pakistan's premier institutions. Specialized focus on developing advanced cybersecurity skills, penetration testing methodologies, and secure systems architecture.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-400/10 border border-green-400/30 text-green-400 flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-white">Specialization</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Cybersecurity, Ethical Hacking, Penetration Testing, Network Security
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-400/10 border border-green-400/30 text-green-400 flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-white">Technical Arsenal</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Kali Linux, Metasploit, Burp Suite, Python, C++, Network Analysis Tools
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-400/10 border border-green-400/30 text-green-400 flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-white">Commitment</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Building secure systems, contributing to cybersecurity community, ethical practices
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-green-700 bg-green-900/40 px-3 py-1 text-sm text-green-300">
              🔐 Cybersecurity
            </span>
            <span className="rounded-full border border-green-700 bg-green-900/40 px-3 py-1 text-sm text-green-300">
              🔍 Penetration Testing
            </span>
            <span className="rounded-full border border-green-700 bg-green-900/40 px-3 py-1 text-sm text-green-300">
              🛡️ System Security
            </span>
            <span className="rounded-full border border-green-700 bg-green-900/40 px-3 py-1 text-sm text-green-300">
              📚 Open Source
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
