export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Muhammad Yahya Jan</p>
        <p className="font-mono text-xs">
          Built with React + Vite • Deployed on Netlify
        </p>
      </div>
    </footer>
  );
}