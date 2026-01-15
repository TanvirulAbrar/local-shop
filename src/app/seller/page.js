 
import Link from 'next/link';

export default function SellerDashboard() {
  return (
    < >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Seller Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/seller/add-product" className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
            <div className="text-3xl mb-4">➕</div>
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Add New Product</h2>
            <p className="text-slate-600 dark:text-slate-400">List a new item for sale</p>
          </Link>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
            <div className="text-3xl mb-4">📊</div>
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Sales Overview</h2>
            <p className="text-slate-600 dark:text-slate-400">Track your sales performance</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
            <div className="text-3xl mb-4">📦</div>
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Manage Inventory</h2>
            <p className="text-slate-600 dark:text-slate-400">Update your product listings</p>
          </div>
        </div>
      </div>
    </ >
  );
}