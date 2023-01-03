export function Header() {
  return (
    <header className="fixed top-0 w-screen border-b-[1px] bg-[#EAEDF0CC] px-[450px] py-[16px] font-semibold text-black shadow-sm dark:border-zinc-800  dark:bg-[#121212cc] dark:text-white">
      <div className="text-md flex justify-center gap-5">
        <a
          href="https://linkedin.com/in/augustomonclaro"
          className="hover:text-[#0076FF] dark:hover:text-slate-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/monnclaro"
          className="hover:text-[#0076FF] dark:hover:text-slate-300"
        >
          GitHub
        </a>

        <a href="#" className="hover:text-[#0076FF] dark:hover:text-slate-300">
          About
        </a>
        <a href="#" className="hover:text-[#0077ff] dark:hover:text-slate-300">
          Contact
        </a>
      </div>
    </header>
  );
}
