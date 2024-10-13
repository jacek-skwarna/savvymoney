import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="text-7xl text-center mb-3">Not Found</h1>
      <p className="text-center mb-3">Could not find requested resource</p>
      <p className="text-center">
        <Link href="/" className="simple-link">Return Home</Link>
      </p>
    </>
  );
}
