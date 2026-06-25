import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60dvh] flex flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="gold-rule mx-auto" aria-hidden="true" />
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase"> !! 404 !!</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#d8d4cc]">
        This page is Lost to the Ages
      </h1>
      <p className="font-body text-sm text-[#7a7670] max-w-[36ch]">
        The Lore you seek was never found. Perhaps you were seeing things! 
      </p>
      <Link
        to="/"
        className="font-body text-sm tracking-widest uppercase px-5 py-2.5 border border-[#c9a84c]/40 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 transition-all duration-[180ms]"
      >
        Return to the Saga
      </Link>
    </div>
  );
}
