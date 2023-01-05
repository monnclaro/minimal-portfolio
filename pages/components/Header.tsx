export function Header() {
  return (
    <header className="static top-0 w-screen border-b-[1px] bg-[#EAEDF0CC]  py-[16px] font-semibold text-black shadow-sm backdrop-blur-[6px] dark:border-zinc-800 dark:bg-[#121212cc] dark:text-white lg:fixed lg:px-[450px]">
      <div className="flex justify-center gap-5 text-sm lg:text-base">
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

        <button className="hover:text-[#0077ff] dark:hover:text-slate-300">
          Contact
        </button>
      </div>
    </header>
  );
}
