import React from 'react';
import { 
  FileText, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Plus,
  ArrowUpRight,
  Settings,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import connectToDatabase from '@/lib/mongodb';
import Blog from '@/models/Blog';
import User from '@/models/User';
import SiteVisit from '@/models/SiteVisit';
import Enquiry from '@/models/Enquiry';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  await connectToDatabase();
  
  const blogCount = await Blog.countDocuments();
  const adminCount = await User.countDocuments();
  const visitCount = await SiteVisit.countDocuments();
  const enquiryCount = await Enquiry.countDocuments();

  // Calculate Site Visits Change (Last 30 days vs Previous 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  const last30DaysVisits = await SiteVisit.countDocuments({ timestamp: { $gte: thirtyDaysAgo } });
  const prev30DaysVisits = await SiteVisit.countDocuments({ timestamp: { $gte: sixtyDaysAgo, $lt: thirtyDaysAgo } });
  
  let visitChange = 0;
  if (prev30DaysVisits > 0) {
    visitChange = Math.round(((last30DaysVisits - prev30DaysVisits) / prev30DaysVisits) * 100);
  } else if (last30DaysVisits > 0) {
    visitChange = 100;
  }

  const stats = [
    { name: 'Total Blogs', value: blogCount, icon: <FileText className="text-blue-600" />, change: '+12%', changeType: 'increase' }, // Still hardcoded for now or fetch similar
    { name: 'Admins', value: adminCount, icon: <Users className="text-purple-600" />, change: '0%', changeType: 'neutral' },
    { name: 'Site Visits', value: visitCount.toLocaleString(), icon: <TrendingUp className="text-green-600" />, change: `${visitChange >= 0 ? '+' : ''}${visitChange}%`, changeType: visitChange >= 0 ? (visitChange > 0 ? 'increase' : 'neutral') : 'decrease' },
    { name: 'Enquiries', value: enquiryCount.toLocaleString(), icon: <MessageSquare className="text-orange-600" />, change: '+5%', changeType: 'increase' },
  ];

  const recentBlogs = await Blog.find().sort({ createdAt: -1 }).limit(5);
  const recentVisits = await SiteVisit.find().sort({ timestamp: -1 }).limit(5);

  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gray-50 rounded-2xl">
                {stat.icon}
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                stat.changeType === 'increase' ? 'bg-green-50 text-green-600' : 
                stat.changeType === 'decrease' ? 'bg-red-50 text-red-600' : 
                'bg-gray-50 text-gray-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.name}</h3>
            <p className="text-3xl font-extrabold text-gray-900 tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Blogs */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Blog Posts</h2>
            <Link href="/admin/blogs" className="text-sm font-semibold text-[#772D3C] hover:underline flex items-center gap-1">
              View All <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {recentBlogs.length > 0 ? recentBlogs.map((blog) => (
              <div key={blog._id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-all">
                <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden shrink-0">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 truncate">{blog.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{blog.date} • {blog.author}</p>
                </div>
                <Link href={`/admin/blogs/edit/${blog._id}`} className="p-2 text-gray-400 hover:text-[#772D3C]">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            )) : (
              <div className="p-10 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500 italic">No blog posts found.</p>
                <Link href="/admin/blogs/new" className="inline-flex items-center gap-2 text-[#772D3C] font-semibold mt-4 hover:underline">
                  <Plus size={18} /> Create your first post
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Recently Visited Pages */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Site Activity</h2>
            <Link href="/admin/analytics" className="text-sm font-semibold text-[#772D3C] hover:underline flex items-center gap-1">
              View Logs <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[500px] lg:min-w-0">
              <thead className="bg-gray-100/50 text-gray-500 font-bold">
                <tr>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Page</th>
                  <th className="px-4 py-3">From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {recentVisits.length > 0 ? recentVisits.map((visit) => (
                  <tr key={visit._id} className="hover:bg-white/50 transition-colors">
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(visit.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-900 truncate block max-w-[150px]" title={visit.path}>
                        {visit.path}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-400 italic">
                      {visit.referrer ? visit.referrer.split('/')[2] : 'Direct'}
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="3" className="px-4 py-10 text-center text-gray-400 italic">
                      No visits recorded yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
          
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Quick Actions */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/admin/blogs/new" className="flex flex-col items-center justify-center p-8 bg-[#772D3C] text-white rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-center gap-4">
              <Plus size={32} strokeWidth={3} />
              <span className="font-bold text-lg">Add New Blog</span>
            </Link>
            <Link href="/admin/content" className="flex flex-col items-center justify-center p-8 bg-[#FFD166] text-[#0f1724] rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-center gap-4">
              <Settings size={32} strokeWidth={3} />
              <span className="font-bold text-lg">Edit Home Content</span>
            </Link>
          </div>
        </div>

        {/* System Status Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">System</h2>
          <div className="bg-[#772D3C]/5 border border-[#772D3C]/10 p-6 rounded-3xl h-full">
            <h4 className="font-bold text-[#772D3C] mb-2 flex items-center gap-2">
              <AlertCircle size={18} /> System Status
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Website is connected to MongoDB. Tracking {visitCount.toLocaleString()} total visits. {enquiryCount} enquiries received. 
              {last30DaysVisits} visits in the last 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
