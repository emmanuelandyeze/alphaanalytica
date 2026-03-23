'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Search, ClipboardCheck, FileText, Settings, Truck, FlaskConical, BarChart3 } from 'lucide-react';

const iconMap = {
    'Sample Collection': <Beaker className="w-8 h-8 text-white" />,
    'Analysis': <Search className="w-8 h-8 text-white" />,
    'QA/QC Verification': <ClipboardCheck className="w-8 h-8 text-white" />,
    'Reporting': <FileText className="w-8 h-8 text-white" />,
    'Consultation & Scoping': <Settings className="w-8 h-8 text-white" />,
    'Sample Logistics': <Truck className="w-8 h-8 text-white" />,
    'Advanced Analysis': <FlaskConical className="w-8 h-8 text-white" />,
    'Data Insight & Reporting': <BarChart3 className="w-8 h-8 text-white" />,
};

export default function Process({ content }) {
    const defaultContent = {
        title: 'Our Workflow',
        description: 'From sample intake to final report, transparency and precision drive every step of our process.',
        steps: [
            { id: 1, title: 'Sample Collection', description: 'We provide sterile containers and clear guidelines for collecting your samples, or our field team can visit your site.' },
            { id: 2, title: 'Analysis', description: 'Samples are processed in our ISO-certified labs using advanced instrumentation like HPLC and GC-MS.' },
            { id: 3, title: 'QA/QC Verification', description: 'Data is rigorously reviewed against reference standards to ensure absolute accuracy and repeatability.' },
            { id: 4, title: 'Reporting', description: 'You receive a comprehensive, easy-to-read Certificate of Analysis (CoA) via our secure digital portal.' }
        ]
    };

    const data = content || defaultContent;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[85rem] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {data.title}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {data.description}
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {data.steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-50 flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#772D3C] flex items-center justify-center mb-6 shadow-md">
                                    {iconMap[step.title] || <Beaker className="w-8 h-8 text-white" />}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
