import Link from "next/link";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <nav>
      <Link href="/development" className="mx-2 hover:underline">
        Development
      </Link>
      <Link href="/marketing" className="mx-2 hover:underline">
        Marketing
      </Link>
      <Link href="/marketing/settings" className="mx-2 hover:underline">
        Settings
      </Link>
      <Link href="/sales" className="mx-2 hover:underline">
        Sales
      </Link>

      <div className="flex gap-4">
        <div className="w-1/2 border p-2">{marketingSlot}</div>
        <div className="w-1/2 border p-2">{salesSlot}</div>
      </div>

      <div className="w-1/2 border p-2">{children}</div>
    </nav>
  );
}
