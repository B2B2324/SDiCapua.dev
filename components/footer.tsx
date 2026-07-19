export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Stephen DiCapua
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/stephen-dicapua"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/b2b2324"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href="mailto:Sdicap970@icloud.com"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
