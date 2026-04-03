export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="marketing-shell flex min-h-screen w-full flex-col items-center">
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
