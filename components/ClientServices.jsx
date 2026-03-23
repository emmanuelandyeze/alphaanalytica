'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
	CheckCircle,
	ArrowRight,
} from 'lucide-react';
import { FaChevronDown } from 'react-icons/fa6';
import { 
  Leaf, 
  FlaskConical, 
  Microscope, 
  Factory, 
  Box, 
  Users 
} from 'lucide-react';

const iconMap = {
	env: <Leaf className="w-6 h-6" />,
	pharma: <FlaskConical className="w-6 h-6" />,
	food: <Microscope className="w-6 h-6" />,
	industrial: <Factory className="w-6 h-6" />,
	equipment: <Box className="w-6 h-6" />,
	consulting: <Users className="w-6 h-6" />,
};

export default function ClientServices({ categories, faq }) {
	const [activeCategory, setActiveCategory] = useState(categories[0]?.id || 'env');

	return (
		<>
			{/* Detailed Services Section */}
			<section id="services" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
				<div className="max-w-[85rem] mx-auto px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Explore Our Capabilities
						</h2>
						<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
							Select an industry or service area to see our detailed offerings.
						</p>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						{/* Category Navigation */}
						<div className="lg:w-1/4 flex-shrink-0">
							<div className="bg-white rounded-2xl shadow-sm p-2 sticky top-24 space-y-1">
								{categories.map((service) => (
									<button
										key={service.id}
										onClick={() => setActiveCategory(service.id)}
										className={`w-full text-left px-5 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 font-medium ${
											activeCategory === service.id
												? 'bg-[#772D3C] text-white shadow-md'
												: 'hover:bg-gray-100 text-gray-600'
										}`}
									>
										<span className={activeCategory === service.id ? 'text-white' : 'text-[#772D3C]'}>
											{iconMap[service.id] || <Box className="w-6 h-6" />}
										</span>
										{service.category}
									</button>
								))}
							</div>
						</div>

						{/* Content Area */}
						<div className="lg:w-3/4 min-h-[600px]">
							<AnimatePresence mode="wait">
								{categories.map((service) => (
									service.id === activeCategory && (
										<motion.div
											key={service.id}
											initial={{ opacity: 0, x: 10 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -10 }}
											transition={{ duration: 0.3 }}
											className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
										>
											<div className="flex flex-col md:flex-row gap-8 items-start mb-10">
												<div className="flex-1">
													<div className="flex items-center gap-3 text-[#772D3C] mb-4">
														{iconMap[service.id] || <Box className="w-6 h-6" />}
														<span className="font-bold text-sm tracking-wider uppercase">
															{service.category}
														</span>
													</div>
													<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
														{service.tagline}
													</h3>
													<p className="text-lg text-gray-600 leading-relaxed">
														{service.description}
													</p>
												</div>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
												{service.subServices.map((sub, idx) => (
													<div key={idx}>
														<h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
															<span className="w-2 h-2 rounded-full bg-[#FFD166]"></span>
															{sub.title}
														</h4>
														<ul className="space-y-3">
															{sub.items.map((item, i) => (
																<li key={i} className="flex items-start gap-3 text-gray-600">
																	<CheckCircle className="w-5 h-5 text-[#0070f3] mt-0.5 shrink-0" />
																	<span className="text-base">{item}</span>
																</li>
															))}
														</ul>
													</div>
												))}
											</div>

											<div className="mt-12 pt-8 border-t border-gray-100 flex gap-4">
												<a
													href="/contact"
													className="bg-[#772D3C] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-[#602430] transition-all transform hover:-translate-y-0.5"
												>
													Request a Quote
												</a>
											</div>
										</motion.div>
									)
								))}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 md:py-24 bg-white">
				<div className="max-w-4xl mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">
						Common Questions
					</h2>
					<div className="space-y-4">
						{faq.map((f, i) => (
							<details
								key={i}
								className="group bg-gray-50 rounded-2xl p-6 hover:bg-white border border-transparent hover:border-gray-200 shadow-sm transition-all"
							>
								<summary className="cursor-pointer flex flex-row justify-between items-center list-none font-medium text-lg text-gray-800">
									<span>{f.q}</span>
									<FaChevronDown className="text-gray-400 group-open:rotate-180 transition-transform" />
								</summary>
								<div className="mt-4 text-gray-600 leading-relaxed">
									{f.a}
								</div>
							</details>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
