import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="font-heading text-4xl">Page not found</h1>
      <Link href="/" className="mt-6 inline-block text-[#a1a1a1] hover:text-white">
        Back home
      </Link>
    </div>
  );
}
