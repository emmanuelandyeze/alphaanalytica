'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Save, 
  Image as ImageIcon, 
  Loader2, 
  X,
  Upload,
  Check
} from 'lucide-react';
import Link from 'next/link';

export default function BlogEditor({ blogId = null }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(blogId ? true : false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    content: '',
    image: '',
    published: true,
  });

  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  const fetchBlog = async () => {
    try {
      const res = await fetch(`/api/blogs/${blogId}`);
      if (!res.ok) throw new Error('Failed to fetch blog');
      const data = await res.json();
      setFormData(data);
    } catch (err) {
      setError('Failed to load blog post.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });
      const data = await res.json();
      if (data.url) {
        setFormData(prev => ({ ...prev, image: data.url }));
      } else {
        throw new Error('Upload failed');
      }
    } catch (err) {
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');

    try {
      const url = blogId ? `/api/blogs/${blogId}` : '/api/blogs';
      const method = blogId ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to save blog');
      
      router.push('/admin/blogs');
      router.refresh(); // Refresh server data
    } catch (err) {
      setError('Failed to save blog post. Please check all fields.');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="animate-spin text-[#772D3C]" size={40} />
        <p className="text-gray-500 font-medium">Loading editor...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <Link 
          href="/admin/blogs"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back to Blogs
        </Link>
        <button
          type="submit"
          disabled={isSaving || isUploading}
          className="bg-[#772D3C] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#602430] shadow-lg active:scale-[0.98] transition-all disabled:opacity-70"
        >
          {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
          {blogId ? 'Update Post' : 'Publish Blog'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-center gap-3">
          <X className="shrink-0" size={20} />
          <span className="font-medium text-sm">{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Blog Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="e.g., Selecting the Right Equipment for Your Laboratory"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#772D3C] focus:border-transparent outline-none transition-all text-xl font-bold"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Content (Markdown supported)</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows={20}
              placeholder="Write your blog content here..."
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#772D3C] focus:border-transparent outline-none transition-all resize-none font-mono text-sm leading-relaxed"
            />
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 space-y-6">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <ImageIcon size={18} /> Cover Image
            </h3>
            
            <div className="relative aspect-video rounded-2xl bg-gray-200 overflow-hidden border-2 border-dashed border-gray-300 group">
              {formData.image ? (
                <>
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <label className="cursor-pointer bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                      <Upload size={16} /> Change
                      <input type="file" onChange={handleImageUpload} className="hidden" accept="image/*" />
                    </label>
                  </div>
                </>
              ) : (
                <label className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                  {isUploading ? <Loader2 className="animate-spin" size={32} /> : <Upload size={32} />}
                  <span className="text-xs font-bold mt-2 uppercase tracking-wider">
                    {isUploading ? 'Uploading...' : 'Upload Cover'}
                  </span>
                  <input type="file" onChange={handleImageUpload} className="hidden" accept="image/*" />
                </label>
              )}
            </div>
            <p className="text-xs text-gray-400 text-center italic">Supported: JPG, PNG, WEBP (Max 5MB)</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
                placeholder="Name"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#772D3C] focus:border-transparent outline-none transition-all text-sm font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                placeholder="e.g., Laboratory Management"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#772D3C] focus:border-transparent outline-none transition-all text-sm font-medium"
              />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  name="published"
                  checked={formData.published} 
                  onChange={handleInputChange}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#772D3C]"></div>
                <span className="ms-3 text-sm font-bold text-gray-700">Published</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
