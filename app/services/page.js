'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
	ArrowRight,
	CheckCircle,
	Users,
	Box,
	Clipboard,
	ArrowDown,
} from 'lucide-react';
import { FaChevronDown } from 'react-icons/fa6';

// Services page for Alpha Analytica — enhanced with images, animations, gallery, testimonials and FAQ
// Tailwind CSS assumed. Uses next/image for optimized images. Replace image paths in /public/images as needed.

const services = [
	{
		id: 1,
		title: 'Analytical Testing Services',
		description:
			'State-of-the-art instrumentation (HPLC, GC-MS, AAS) and validated methods for pharma, environment and materials.',
		bullets: [
			'Method validation & transfer',
			'Batch release & stability testing',
			'Trace-level environmental monitoring',
		],
		image: '/images/contact.jpg',
		icon: <Clipboard className="w-6 h-6" />,
	},
	{
		id: 2,
		title: 'Equipment Sales & Rentals',
		description:
			'High-quality spectrophotometers, centrifuges, autoclaves — with maintenance, calibration, and flexible rental plans.',
		bullets: [
			'Installation & training',
			'Calibration programs',
			'Sustainable equipment options',
		],
		image: '/images/equipment.jpeg',
		icon: <Box className="w-6 h-6" />,
	},
	{
		id: 3,
		title: 'Consultancy & Training',
		description:
			'Regulatory guidance, process optimisation, staff training and project management for R&D and QC labs.',
		bullets: [
			'Regulatory submissions',
			'Custom workshops',
			'Project scoping & management',
		],
		image: '/images/consult.jpeg',
		icon: <Users className="w-6 h-6" />,
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
	{ id: 1, value: '+10k', label: 'Samples Processed' },
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

const cardVariants = {
	hidden: { opacity: 0, y: 18 },
	visible: { opacity: 1, y: 0 },
};

export default function Page() {
	return (
		<div className="text-gray-800">
			{/* HERO */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="relative bg-[#772D3C] text-white pt-20 pb-28 md:pb-36"
				style={{
					backgroundImage: "url('/images/services2.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-black/40"></div>
				<div className="relative max-w-[85rem] mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<motion.div
							initial={{ x: -20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							<h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
								Our Services
							</h1>
							<p className="max-w-2xl text-lg text-gray-100/90">
								Your trusted partner in analytical chemistry
								solutions — precision, innovation and
								regulatory insight to drive your research
								and business forward.
							</p>
							<div className="flex gap-4">
								<a
									href="#contact"
									className="inline-flex items-center gap-3 bg-[#FFD166] text-[#0f1724] px-6 py-3 rounded-2xl font-semibold shadow-md hover:scale-[1.01] transition-transform"
								>
									Get a Quote{' '}
									<ArrowRight className="w-4 h-4" />
								</a>
								<a
									href="#services"
									className="inline-flex items-center gap-3 border border-white/30 px-5 py-3 rounded-2xl"
								>
									Explore Services
								</a>
							</div>
						</motion.div>

						{/* <motion.div
							initial={{ scale: 0.98, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.9 }}
							className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
						>
							<Image
								src="/images/lab-hero.jpg"
								alt="lab equipment"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
							/>
						</motion.div> */}
					</div>
				</div>
			</motion.section>

			{/* Overview + Stats */}
			<section className="py-12 md:py-20 bg-white">
				<div className="max-w-[85rem] mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-4">
								Comprehensive Solutions
							</h2>
							<p className="text-gray-600 mb-6 max-w-xl">
								Alpha Analytica blends technical excellence
								with practical lab workflows so you can
								trust results, reduce risk, and accelerate
								product timelines.
							</p>
							<ul className="space-y-3">
								<li className="flex items-start gap-3 text-gray-700">
									<CheckCircle className="w-5 h-5 text-[#0070f3] mt-1" />
									Turnkey testing & reporting
								</li>
								<li className="flex items-start gap-3 text-gray-700">
									<CheckCircle className="w-5 h-5 text-[#0070f3] mt-1" />
									Equipment lifecycle support
								</li>
								<li className="flex items-start gap-3 text-gray-700">
									<CheckCircle className="w-5 h-5 text-[#0070f3] mt-1" />
									Tailored consultancy & training
								</li>
							</ul>
						</div>

						<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
							{stats.map((s) => (
								<motion.div
									key={s.id}
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
									className="bg-gray-50 p-6 rounded-2xl text-center shadow-sm"
								>
									<div className="text-3xl font-bold">
										{s.value}
									</div>
									<div className="text-sm text-gray-500">
										{s.label}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section
				id="services"
				className="py-12 md:py-20 bg-gray-50"
			>
				<div className="max-w-[85rem] mx-auto px-6">
					<div className="text-center mb-10">
						<h3 className="text-2xl font-bold">
							Our Core Services
						</h3>
						<p className="text-gray-600 max-w-2xl mx-auto mt-2">
							From routine QC to complex method development
							— we cover the analytical lifecycle.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((svc, i) => (
							<motion.article
								key={svc.id}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={cardVariants}
								transition={{
									duration: 0.6,
									delay: i * 0.12,
								}}
								className="bg-white rounded-2xl shadow-md overflow-hidden"
							>
								<div className="relative h-44 w-full">
									<Image
										src={svc.image}
										alt={svc.title}
										fill
										sizes="(max-width: 768px) 100vw, 33vw"
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<div className="flex items-center justify-between mb-3">
										<h4 className="text-xl font-semibold">
											{svc.title}
										</h4>
										<div className="text-[#0070f3]">
											{svc.icon}
										</div>
									</div>
									<p className="text-gray-600 mb-4">
										{svc.description}
									</p>

									<ul className="text-sm text-gray-700 space-y-2 mb-4">
										{svc.bullets.map((b, idx) => (
											<li
												key={idx}
												className="flex items-start gap-2"
											>
												<span className="mt-1 text-[#10b981]">
													•
												</span>
												<span>{b}</span>
											</li>
										))}
									</ul>

									<div className="flex items-center justify-between">
										<a
											href="/contact"
											className="text-sm font-medium inline-flex items-center gap-2"
										>
											Learn More{' '}
											<ArrowRight className="w-4 h-4" />
										</a>
										<a
											href="/request-quote"
											className="bg-[#0070f3] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow-lg"
										>
											Request Quote
										</a>
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="py-12 md:py-16 bg-white">
				<div className="max-w-[85rem] mx-auto px-6">
					<h3 className="text-2xl font-bold text-center mb-8">
						Lab Gallery
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-2 gap-4">
						{[
							'/images/equipment.jpeg',
							'/images/contact.jpg',
							// '/images/equipment2.png',
							// '/images/equipment2.png',
						].map((src, i) => (
							<motion.div
								key={i}
								whileHover={{ scale: 1.03 }}
								className="relative h-40 rounded-xl overflow-hidden shadow-sm"
							>
								<Image
									src={src}
									alt={`gallery-${i}`}
									fill
									className="object-cover"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials + FAQ */}
			<section className="py-12 md:py-20 bg-gray-50">
				<div className="max-w-3xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-1 gap-8">
					<div>
						<h3 className="text-2xl font-bold mb-6">
							Frequently asked questions
						</h3>
						<div className="space-y-4">
							{faq.map((f, i) => (
								<details
									key={i}
									className="bg-white rounded-2xl p-5 shadow-sm"
								>
									<summary className="cursor-pointer flex flex-row justify-between items-center list-none font-medium">
										<p>{f.q}</p>
										<FaChevronDown />
									</summary>
									<div className="mt-3 text-gray-600">
										{f.a}
									</div>
								</details>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA / Contact strip */}
			<section
				id="contact"
				className="py-12 md:py-16 bg-[#072a17] text-white"
			>
				<div className="max-w-[85rem] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
					<div>
						<h3 className="text-2xl font-bold">
							Ready to elevate your lab?
						</h3>
						<p className="text-gray-200 mt-2">
							Contact our team for quotes, training and
							custom projects.
						</p>
					</div>
					<div className="flex gap-3">
						<a
							href="/contact"
							className="bg-[#FFD166] text-black px-6 py-3 rounded-full font-semibold"
						>
							Contact Us
						</a>
						{/* <a
							href="tel:+2347034343002"
							className="border border-white/20 px-5 py-3 rounded-full"
						>
							Call Sales
						</a> */}
					</div>
				</div>
			</section>
		</div>
	);
}
