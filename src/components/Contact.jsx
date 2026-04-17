import Section from './Section';

export default function Contact() {
  return (
    <Section id='contact' eyebrow='PING' title='Contact'>
      <div className='rounded-2xl border border-slate-800 bg-slate-900/40 p-6'>
        <p className='text-sm text-slate-300'>
          If you want to collaborate, discuss security projects, or share learning resources, feel free to reach out.
        </p>

        <div className='mt-5 flex flex-wrap gap-3'>
          <Action href='mailto:muhammadyahyajan001@gmail.com' label='Email' />
          <Action href='https://github.com/MuhammadYahya001' label='GitHub' external />
          <Action href='https://www.linkedin.com/in/muhammad-yahya-jan-03b344325' label='LinkedIn' external />
        </div>

        <p className='mt-6 font-mono text-xs text-slate-400'>
          Tip: Later you can add a Resume PDF and a Writeups section (TryHackMe/HTB).
        </p>
      </div>
    </Section>
  );
}

function Action({ href, label, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className='inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-slate-200 hover:border-slate-700 hover:bg-slate-950/70 hover:text-white'
    >
      {label}
    </a>
  );
}
