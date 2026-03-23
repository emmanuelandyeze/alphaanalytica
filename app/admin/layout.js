'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Globe
} from 'lucide-react';

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-800 font-sans">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#772D3C]"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/admin/login');
    return null;
  }

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/admin/dashboard' },
    { name: 'Blogs', icon: <FileText size={20} />, href: '/admin/blogs' },
    { name: 'Site Content', icon: <Settings size={20} />, href: '/admin/content' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <span className="text-xl font-bold text-[#772D3C]">Admin Panel</span>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                pathname === item.href 
                  ? 'bg-[#772D3C] text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              {isSidebarOpen && <span className="font-medium">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
          >
            <Globe size={20} />
            {isSidebarOpen && <span className="font-medium">View Website</span>}
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="w-full flex items-center gap-4 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all mt-2"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              {navItems.find(i => i.href === pathname)?.name || 'Admin'}
            </h1>
            <p className="text-gray-500 mt-1">Manage your website content and blogs.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#772D3C]/10 flex items-center justify-center text-[#772D3C] font-bold">
                {session?.user?.name?.[0] || 'A'}
              </div>
              <span className="font-medium">{session?.user?.name}</span>
            </div>
          </div>
        </header>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[calc(100vh-200px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
