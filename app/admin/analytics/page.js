import React from 'react';
import connectToDatabase from '@/lib/mongodb';
import SiteVisit from '@/models/SiteVisit';
import { 
  Calendar, 
  Globe, 
  Monitor, 
  MapPin, 
  ArrowLeft,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

function formatDate(date) {
  return new Date(date).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function getRelativeTime(date) {
  const now = new Date();
  const diff = now - new Date(date);
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
}

export default async function AnalyticsPage() {
  await connectToDatabase();

  // Get visits sorted by newest first
  const visits = await SiteVisit.find().sort({ timestamp: -1 }).limit(100);
  const totalVisits = await SiteVisit.countDocuments();
  
  // Calculate unique IPs (basic proxy for unique visitors)
  const uniqueVisitors = await SiteVisit.distinct('ip').then(ips => ips.length);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Site Analytics</h2>
          <p className="text-gray-500 text-sm mt-1">Detailed logs of all visitor traffic.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Total Hits</span>
            <span className="text-xl font-extrabold text-[#772D3C]">{totalVisits.toLocaleString()}</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Unique Visitors</span>
            <span className="text-xl font-extrabold text-blue-600">{uniqueVisitors.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Visits Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">Time</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">Page Path</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">Visitor Info</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">Referrer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {visits.map((visit) => (
                <tr key={visit._id} className="hover:bg-gray-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-900">{getRelativeTime(visit.timestamp)}</span>
                      <span className="text-xs text-gray-400">{formatDate(visit.timestamp)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {visit.path}
                      </span>
                      <Link href={visit.path} target="_blank" className="text-gray-300 hover:text-[#772D3C]">
                        <ExternalLink size={12} />
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <MapPin size={14} className="text-gray-400" />
                        <span className="font-mono text-xs">{visit.ip || 'Unknown'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Monitor size={14} />
                        <span className="truncate max-w-[200px]" title={visit.userAgent}>
                          {visit.userAgent ? (
                            visit.userAgent.includes('Mobi') ? 'Mobile' : 'Desktop'
                          ) : 'Unknown Device'}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {visit.referrer ? (
                      <span className="text-xs text-gray-500 truncate max-w-[150px] block" title={visit.referrer}>
                        {visit.referrer.replace(/^https?:\/\//, '')}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-300 italic">Direct</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {visits.length === 0 && (
          <div className="py-20 text-center">
            <Globe className="mx-auto text-gray-200 mb-4" size={48} />
            <p className="text-gray-400 font-medium">No site visits recorded yet.</p>
          </div>
        )}
        
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            Showing the last 100 visits. More detailed analytics coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
