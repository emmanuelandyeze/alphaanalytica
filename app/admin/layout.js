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
  Globe,
  BarChart3
} from 'lucide-react';

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false); // Default to closed for mobile

  // Close sidebar when clicking outside on mobile
  const sidebarRef = React.useRef(null);
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target) && window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

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
    { name: 'Analytics', icon: <BarChart3 size={20} />, href: '/admin/analytics' },
    { name: 'Blogs', icon: <FileText size={20} />, href: '/admin/blogs' },
    { name: 'Site Content', icon: <Settings size={20} />, href: '/admin/content' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row text-gray-800 font-sans relative">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-50">
        <span className="text-xl font-bold text-[#772D3C]">Admin Panel</span>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#772D3C]"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity" />
      )}

      {/* Sidebar */}
      <aside 
        ref={sidebarRef}
        className={`
          fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 transform
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isSidebarOpen ? 'w-64' : 'lg:w-20'}
          flex flex-col lg:sticky lg:h-screen
        `}
      >
        <div className="p-6 hidden lg:flex items-center justify-between">
          {(isSidebarOpen || window.innerWidth < 1024) && (
            <span className="text-xl font-bold text-[#772D3C]">Admin Panel</span>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 hidden lg:block">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                if (window.innerWidth < 1024) setIsSidebarOpen(false);
              }}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                pathname === item.href 
                  ? 'bg-[#772D3C] text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              {(isSidebarOpen || window.innerWidth < 1024) && <span className="font-medium">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
          >
            <Globe size={20} />
            {(isSidebarOpen || window.innerWidth < 1024) && <span className="font-medium">View Website</span>}
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="w-full flex items-center gap-4 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all mt-2"
          >
            <LogOut size={20} />
            {(isSidebarOpen || window.innerWidth < 1024) && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 p-4 lg:p-8">
        <header className="mb-6 lg:mb-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              {navItems.find(i => i.href === pathname)?.name || 'Admin'}
            </h1>
            <p className="text-gray-500 text-sm mt-1">Manage your website content and blogs.</p>
          </div>
          <div className="flex items-center gap-4 self-end md:self-auto">
            <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#772D3C]/10 flex items-center justify-center text-[#772D3C] font-bold">
                {session?.user?.name?.[0] || 'A'}
              </div>
              <span className="font-medium text-sm lg:text-base">{session?.user?.name}</span>
            </div>
          </div>
        </header>

        <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-sm border border-gray-100 min-h-[calc(100vh-200px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
