import Link from "next/link";

export default function ArtistLayout({ children }) {
  return (
    <section>
      <header className="-mt-10 mb-4 ml-4 text-white text-base">
        <Link href="/">◁ Back to all artists</Link>
      </header>
      <header className="absolute h-2 w-screen bg-gray-100"></header>
      {children}
    </section>
  );
}
