'use client';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-center">
        <div className="font-[family-name:var(--font-geist-mono)]">
          Welcome to Kameroon.Next
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row content-center">
          <a href="/scan" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base sm:text-base h-12 sm:h-12 px-5 sm:px-5">
            Go to scanner
          </a>
        </div>
      </main>
    </div>
  );
}