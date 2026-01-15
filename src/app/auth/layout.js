import '../globals.css';

export default function AuthLayout({ children }) {
  return (
    <section lang="en">
      <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        
      </div>
    </section>
  );
}