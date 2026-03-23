'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Loader2, 
  Check, 
  AlertCircle,
  Layout,
  Type,
  ImageIcon,
  Plus,
  Trash2
} from 'lucide-react';

const PAGES = [
  { id: 'home', name: 'Home Page' },
  { id: 'services', name: 'Services Page' },
  { id: 'about', name: 'About Page' },
];

export default function ContentEditorPage() {
  const [activePage, setActivePage] = useState('home');
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchContent();
  }, [activePage]);

  const fetchContent = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/content?page=${activePage}`);
      const data = await res.json();
      setSections(data);
    } catch (error) {
      console.error('Failed to fetch content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateSection = async (section, content) => {
    setIsSaving(true);
    setMessage({ type: '', text: '' });
    try {
      const res = await fetch('/api/content', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: activePage, section, content }),
      });
      if (res.ok) {
        setMessage({ type: 'success', text: 'Section updated successfully!' });
        fetchContent(); // Refresh
      } else {
        throw new Error('Failed to update');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update section.' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="animate-spin text-[#772D3C]" size={40} />
        <p className="text-gray-500 font-medium">Loading content editor...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl w-fit">
        {PAGES.map((page) => (
          <button
            key={page.id}
            onClick={() => setActivePage(page.id)}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
              activePage === page.id 
                ? 'bg-white text-[#772D3C] shadow-sm shadow-[#772D3C]/10' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {page.name}
          </button>
        ))}
      </div>

      {message.text && (
        <div className={`p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${
          message.type === 'success' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'
        }`}>
          {message.type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
          <span className="font-medium text-sm">{message.text}</span>
        </div>
      )}

      <div className="space-y-12">
        {sections.length > 0 ? sections.map((sec) => (
          <SectionEditor 
            key={sec.section} 
            sectionData={sec} 
            onSave={(content) => handleUpdateSection(sec.section, content)} 
            isSaving={isSaving}
          />
        )) : (
          <div className="py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <Layout className="mx-auto text-gray-300 mb-4" size={48} strokeWidth={1} />
            <p className="text-gray-500 italic">No sections found for this page yet. Use the data migration script to seed content or add them via the database.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionEditor({ sectionData, onSave, isSaving }) {
  const [content, setContent] = useState(sectionData.content);

  const handleFieldChange = (key, value) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (key, index, subKey, value) => {
    const newArray = [...content[key]];
    newArray[index] = { ...newArray[index], [subKey]: value };
    handleFieldChange(key, newArray);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
      <div className="bg-gray-50/50 px-8 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-bold text-gray-900 capitalize tracking-tight flex items-center gap-2">
          <Type size={18} className="text-[#772D3C]" />
          {sectionData.section.replace(/([A-Z])/g, ' $1').trim()} Section
        </h3>
        <button
          onClick={() => onSave(content)}
          disabled={isSaving}
          className="bg-white text-[#772D3C] px-5 py-2 rounded-xl text-sm font-bold border border-[#772D3C]/20 hover:bg-[#772D3C] hover:text-white transition-all shadow-sm active:scale-95 disabled:opacity-50"
        >
          {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} className="inline mr-2" />}
          Save Changes
        </button>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(content).map(([key, value]) => {
          if (Array.isArray(value)) return null; // Handle arrays separately below
          
          return (
            <div key={key} className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{key.replace(/([A-Z])/g, ' $1')}</label>
              {typeof value === 'string' && value.length > 50 ? (
                <textarea
                  value={value}
                  onChange={(e) => handleFieldChange(key, e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#772D3C] focus:border-transparent outline-none transition-all text-sm leading-relaxed"
                  rows={4}
                />
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleFieldChange(key, e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#772D3C] focus:border-transparent outline-none transition-all text-sm font-medium"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Array Handlers (e.g., Services, Stats, etc.) */}
      {Object.entries(content).map(([key, value]) => {
        if (!Array.isArray(value)) return null;

        return (
          <div key={key} className="px-8 pb-8 space-y-4">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{key}</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {value.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 space-y-3 relative group/item">
                  {Object.entries(item).map(([subKey, subValue]) => (
                    <div key={subKey} className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{subKey}</label>
                      <input
                        type="text"
                        value={subValue}
                        onChange={(e) => handleArrayChange(key, index, subKey, e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#772D3C] focus:border-transparent outline-none transition-all text-xs font-medium"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
