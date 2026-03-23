'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  ExternalLink,
  Loader2,
  AlertCircle,
  FileText
} from 'lucide-react';

export default function BlogsAdminPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/blogs/${deleteId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setBlogs(blogs.filter(b => b._id !== deleteId));
        setDeleteId(null);
      }
    } catch (error) {
      console.error('Failed to delete blog:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="animate-spin text-[#772D3C]" size={40} />
        <p className="text-gray-500 font-medium">Loading your stories...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search blogs by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#772D3C] focus:border-transparent outline-none transition-all"
          />
        </div>
        <Link 
          href="/admin/blogs/new"
          className="bg-[#772D3C] text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#602430] shadow-lg active:scale-[0.98] transition-all"
        >
          <Plus size={20} /> Add New Blog
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Blog Post</th>
              <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Category</th>
              <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Date</th>
              <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => (
              <tr key={blog._id} className="group hover:bg-gray-50/50 transition-colors">
                <td className="py-5 px-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden shrink-0 border border-gray-100">
                      <img src={blog.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-[#772D3C] transition-colors">{blog.title}</h4>
                      <p className="text-sm text-gray-500">By {blog.author}</p>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-4">
                  <span className="px-3 py-1 bg-[#772D3C]/5 text-[#772D3C] rounded-full text-xs font-bold uppercase tracking-wider">
                    {blog.category}
                  </span>
                </td>
                <td className="py-5 px-4 text-gray-500 text-sm">
                  {blog.date}
                </td>
                <td className="py-5 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link 
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                      title="View on site"
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <Link 
                      href={`/admin/blogs/edit/${blog._id}`}
                      className="p-2.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all"
                      title="Edit post"
                    >
                      <Edit2 size={18} />
                    </Link>
                    <button 
                      onClick={() => setDeleteId(blog._id)}
                      className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                      title="Delete post"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="py-20 text-center">
                  <div className="flex flex-col items-center gap-4 text-gray-400">
                    <FileText size={48} strokeWidth={1} />
                    <p className="font-medium text-lg">No blog posts found matching your search.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Delete Blog Post?</h3>
            <p className="text-gray-500 text-center mb-10">
              This action cannot be undone. Are you sure you want to permanently delete this story?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setDeleteId(null)}
                className="py-3.5 rounded-2xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                disabled={isDeleting}
                className="py-3.5 rounded-2xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isDeleting ? <Loader2 className="animate-spin" size={20} /> : 'Delete Post'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
