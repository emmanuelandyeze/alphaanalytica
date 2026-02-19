'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, FlaskConical, Microscope, Factory, Box, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
	{
		title: 'Environmental Testing',
		description: 'Water, soil, and air quality analysis for regulatory compliance.',
		icon: <Leaf className="w-6 h-6 text-white" />,
		color: 'bg-[#29bd94]',
		link: '/services#env',
	},
	{
		title: 'Pharma & Life Sciences',
		description: 'R&D support, sterility testing, and stability studies.',
		icon: <FlaskConical className="w-6 h-6 text-white" />,
		color: 'bg-[#772D3C]',
		link: '/services#pharma',
	},
	{
		title: 'Food & Agriculture',
		description: 'Nutritional labeling, contaminant testing, and safety.',
		icon: <Microscope className="w-6 h-6 text-white" />,
		color: 'bg-[#FFD166]',
		link: '/services#food',
	},
	{
		title: 'Industrial Materials',
		description: 'Chemical composition and material characterization.',
		icon: <Factory className="w-6 h-6 text-white" />,
		color: 'bg-[#4A5568]',
		link: '/services#industrial',
	},
	{
		title: 'Equipment Solutions',
		description: 'Sales, rentals, and calibration services.',
		icon: <Box className="w-6 h-6 text-white" />,
		color: 'bg-[#2B6CB0]',
		link: '/services#equipment',
	},
	{
		title: 'Consultancy',
		description: 'Lab setup, training, and regulatory guidance.',
		icon: <Users className="w-6 h-6 text-white" />,
		color: 'bg-[#ED8936]',
		link: '/services#consulting',
	},
];

const Services = () => {
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-[85rem] mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-end mb-12">
					<div className="max-w-xl">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Industries We Serve
						</h2>
						<p className="text-gray-600 text-lg">
							Tailored analytical solutions for critical sectors,
							delivering data you can trust.
						</p>
					</div>
					<Link
						href="/services"
						className="hidden md:flex items-center gap-2 text-[#772D3C] font-semibold hover:border-b-2 border-[#772D3C] pb-0.5 transition-all"
					>
						View All Services <ArrowRight className="w-4 h-4" />
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{industries.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							whileHover={{ y: -5 }}
							className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
						>
							<div
								className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6 shadow-sm`}
							>
								{item.icon}
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#772D3C] transition-colors">
								{item.title}
							</h3>
							<p className="text-gray-500 mb-6 leading-relaxed">
								{item.description}
							</p>
							<Link
								href={item.link}
								className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all"
							>
								Explore Capabilities
								<ArrowRight className="w-4 h-4" />
							</Link>
						</motion.div>
					))}
				</div>

				<div className="mt-8 text-center md:hidden">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 text-[#772D3C] font-semibold"
					>
						View All Services <ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Services;
