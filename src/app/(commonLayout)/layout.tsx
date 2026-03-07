import { Navbar } from "@/components/layout/navbar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Common Page Layout</h1>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
