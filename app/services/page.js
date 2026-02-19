'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
	ArrowRight,
	CheckCircle,
	Users,
	Box,
	Clipboard,
	ArrowDown,
	FlaskConical,
	Leaf,
	Factory,
	Microscope,
} from 'lucide-react';
import { FaChevronDown } from 'react-icons/fa6';

// Detailed Services Data
const servicesData = [
	{
		id: 'env',
		category: 'Environmental Testing',
		icon: <Leaf className="w-6 h-6" />,
		tagline: 'Protecting our world with precision data.',
		description:
			'Comprehensive environmental analysis for water, soil, and air quality, ensuring compliance with local and international standards.',
		image: '/images/contact.jpg', // Placeholder, using existing asset
		subServices: [
			{
				title: 'Water Analysis',
				items: [
					'Potable water quality (WHO/EPA standards)',
					'Wastewater & effluent compliance monitoring',
					'Groundwater & surface water testing',
					'Heavy metals & trace element detection',
				],
			},
			{
				title: 'Soil & Sediment',
				items: [
					'Contaminated land assessment (Hydrocarbons, VOCs, SVOCs)',
					'Agricultural soil nutrient profiling (NPK, pH)',
					'Leachate analysis',
				],
			},
			{
				title: 'Air Quality & Waste',
				items: [
					'Indoor Air Quality (IAQ) monitoring',
					'Stack emissions testing',
					'Hazardous waste classification (TCLP)',
				],
			},
		],
	},
	{
		id: 'pharma',
		category: 'Pharmaceutical & Life Sciences',
		icon: <FlaskConical className="w-6 h-6" />,
		tagline: 'Ensuring safety and efficacy from R&D to release.',
		description:
			'Rigorous testing for raw materials and finished products, supporting R&D and QA with validated methods.',
		image: '/images/services2.jpg', // Placeholder
		subServices: [
			{
				title: 'Core Testing',
				items: [
					'Raw Material Testing (USP/BP/EP monographs)',
					'Finished Product Testing (Potency, Purity, Uniformity)',
					'Stability Studies (Accelerated & Long-term)',
				],
			},
			{
				title: 'Microbiology',
				items: [
					'Sterility testing',
					'Endotoxin (LAL) testing',
					'Microbial Limit Tests (MLT)',
				],
			},
			{
				title: 'Specialized Support',
				items: ['Method Development & Validation', 'Custom R&D protocols'],
			},
		],
	},
	{
		id: 'food',
		category: 'Food & Agriculture',
		icon: <Microscope className="w-6 h-6" />,
		tagline: 'Farm-to-fork safety and quality assurance.',
		description:
			'Advanced analysis for nutritional content, contaminants, and pathogens to safeguard the food supply chain.',
		image: '/images/equipment.jpeg', // Placeholder
		subServices: [
			{
				title: 'Safety & Quality',
				items: [
					'Nutritional Labeling (Proximate analysis)',
					'Pesticide residues (GC-MS/LC-MS)',
					'Mycotoxins (Aflatoxins, Ochratoxins)',
				],
			},
			{
				title: 'Contaminants',
				items: [
					'Heavy metals (Lead, Mercury, Arsenic)',
					'Microbiology (Salmonella, E. coli, Listeria)',
				],
			},
		],
	},
	{
		id: 'industrial',
		category: 'Industrial & Materials',
		icon: <Factory className="w-6 h-6" />,
		tagline: 'Solving complex material challenges.',
		description:
			'Material characterization and chemical analysis for fuels, polymers, and industrial formulations.',
		image: '/images/consult.jpeg', // Placeholder
		subServices: [
			{
				title: 'Material Analysis',
				items: [
					'Chemical Composition & ID',
					'Polymer Testing & Degradation',
					'Fuel & Oil Analysis (Diesel, Lubricants)',
				],
			},
		],
	},
	{
		id: 'equipment',
		category: 'Lab Equipment Solutions',
		icon: <Box className="w-6 h-6" />,
		tagline: 'Premium tools for premium results.',
		description:
			'End-to-end equipment services including sales, rentals, calibration, and maintenance for top-tier lab instruments.',
		image: '/images/equipment.jpeg',
		subServices: [
			{
				title: 'offerings',
				items: [
					'Sales: Spectrophotometers, HPLCs, Balances',
					'Rental Services: Short-term & Long-term',
					'Calibration (ISO 17025 compliant)',
					'Preventative maintenance & IQ/OQ',
				],
			},
		],
	},
	{
		id: 'consulting',
		category: 'Consultancy & Training',
		icon: <Users className="w-6 h-6" />,
		tagline: 'Empowering your team and optimizing your lab.',
		description:
			'Expert guidance on lab setup, regulatory compliance, and hands-on technical training.',
		image: '/images/consult.jpeg',
		subServices: [
			{
				title: 'Services',
				items: [
					'Lab Setup & Design (Turnkey solutions)',
					'Regulatory Consulting (NAFDAC, SON, ISO 17025)',
					'Technical Training (HPLC, GC, GLP Workshops)',
				],
			},
		],
	},
];

const testimonials = [
	{
		id: 1,
		name: 'Dr. Amina Yusuf',
		role: 'Head, Quality Assurance — PharmaCo',
		text: "Alpha Analytica's turnaround and attention to detail helped our product meet regulatory timelines without compromise.",
		avatar: '/images/testimonial1.jpg',
	},
	{
		id: 2,
		name: 'Engr. Daniel Okoro',
		role: 'Environmental Manager — GreenWorks',
		text: 'Their environmental analysis gave us the confidence to remediate sites quickly and accurately.',
		avatar: '/images/testimonial2.jpg',
	},
];

const stats = [
	{ id: 1, value: '+1k', label: 'Samples Processed' },
	{ id: 2, value: '+150', label: 'Validated Methods' },
	{ id: 3, value: '+50', label: 'Partner Institutions' },
];

const faq = [
	{
		q: 'Do you handle international shipments for equipment?',
		a: 'Yes — we ship globally and handle customs paperwork for equipment purchases and long-term rentals.',
	},
	{
		q: 'How fast can I get a routine analysis report?',
		a: 'Typical turnaround for routine tests is 3–7 business days; expedited services are available on request.',
	},
	{
		q: 'Can you develop custom analytical methods for novel compounds?',
		a: 'Absolutely — we specialise in bespoke method development and validation for new molecules and matrices.',
	},
];

const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(servicesData[0].id);

	return (
		<div className="text-gray-800 font-sans">
			{/* HERO */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="relative bg-[#772D3C] text-white pt-32 pb-24 md:pt-40 md:pb-32"
				style={{
					backgroundImage: "url('/images/services2.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
				<div className="relative max-w-[85rem] mx-auto px-6 text-center">
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto space-y-6"
					>
						<h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
							World-Class Analytical Services
						</h1>
						<p className="text-lg md:text-xl text-gray-200 leading-relaxed">
							From environmental compliance to pharmaceutical
							R&D — precision, innovation, and regulatory
							insight to drive your business forward.
						</p>
					</motion.div>
				</div>
			</motion.section>

			{/* Overview stats */}
			<section className="py-12 bg-white border-b border-gray-100">
				<div className="max-w-[85rem] mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
						{stats.map((s) => (
							<div key={s.id} className="pt-4 md:pt-0 px-4">
								<div className="text-4xl font-bold text-[#772D3C]">
									{s.value}
								</div>
								<div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-2">
									{s.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Detailed Services Section */}
			<section
				id="services"
				className="py-16 md:py-24 bg-gray-50 scroll-mt-20"
			>
				<div className="max-w-[85rem] mx-auto px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Explore Our Capabilities
						</h2>
						<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
							Select an industry or service area to see our
							detailed offerings.
						</p>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						{/* Category Navigation (Sidebar/Top bar on mobile) */}
						<div className="lg:w-1/4 flex-shrink-0">
							<div className="bg-white rounded-2xl shadow-sm p-2 sticky top-24 space-y-1">
								{servicesData.map((service) => (
									<button
										key={service.id}
										onClick={() =>
											setActiveCategory(service.id)
										}
										className={`w-full text-left px-5 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 font-medium ${activeCategory === service.id
												? 'bg-[#772D3C] text-white shadow-md'
												: 'hover:bg-gray-100 text-gray-600'
											}`}
									>
										<span
											className={
												activeCategory ===
													service.id
													? 'text-white'
													: 'text-[#772D3C]'
											}
										>
											{service.icon}
										</span>
										{service.category}
									</button>
								))}
							</div>
						</div>

						{/* Content Area */}
						<div className="lg:w-3/4 min-h-[600px]">
							<AnimatePresence mode="wait">
								{servicesData.map(
									(service) =>
										service.id === activeCategory && (
											<motion.div
												key={service.id}
												initial={{
													opacity: 0,
													x: 10,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												exit={{
													opacity: 0,
													x: -10,
												}}
												transition={{
													duration: 0.3,
												}}
												className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
											>
												<div className="flex flex-col md:flex-row gap-8 items-start mb-10">
													<div className="flex-1">
														<div className="flex items-center gap-3 text-[#772D3C] mb-4">
															{service.icon}
															<span className="font-bold text-sm tracking-wider uppercase">
																{
																	service.category
																}
															</span>
														</div>
														<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
															{
																service.tagline
															}
														</h3>
														<p className="text-lg text-gray-600 leading-relaxed">
															{
																service.description
															}
														</p>
													</div>
													{/* <div className="w-full md:w-1/3 relative h-48 rounded-2xl overflow-hidden shrink-0">
														<Image
															src={service.image}
															alt={service.category}
															fill
															className="object-cover"
														/>
													</div> */}
												</div>

												<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
													{service.subServices.map(
														(
															sub,
															idx,
														) => (
															<div
																key={
																	idx
																}
															>
																<h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
																	<span className="w-2 h-2 rounded-full bg-[#FFD166]"></span>
																	{
																		sub.title
																	}
																</h4>
																<ul className="space-y-3">
																	{sub.items.map(
																		(
																			item,
																			i,
																		) => (
																			<li
																				key={
																					i
																				}
																				className="flex items-start gap-3 text-gray-600"
																			>
																				<CheckCircle className="w-5 h-5 text-[#0070f3] mt-0.5 shrink-0" />
																				<span className="text-base">
																					{
																						item
																					}
																				</span>
																			</li>
																		),
																	)}
																</ul>
															</div>
														),
													)}
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
										),
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials + FAQ */}
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

			{/* CTA */}
			<section className="py-20 bg-[#072a17] text-white overflow-hidden relative">
				<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-3xl"></div>

				<div className="max-w-[85rem] mx-auto px-6 relative z-10 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Ready to elevate your lab standards?
					</h2>
					<p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
						Partner with Alpha Analytica for reliable results,
						expert consultancy, and world-class equipment.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/contact"
							className="bg-[#FFD166] text-[#0f1724] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
						>
							Get Started Today
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
