'use client';

import React from 'react';
import { ShieldCheck, Target, Zap, Award } from 'lucide-react';

const features = [
	{
		title: 'Uncompromising Precision',
		description:
			'Our rigorous QA/QC protocols ensure every result is accurate, repeatable, and defensible.',
		icon: <Target className="w-6 h-6 text-[#772D3C]" />,
	},
	{
		title: 'Regulatory Expertise',
		description:
			'We navigate complex standards (ISO, NAFDAC, EPA) so you stay compliant and confident.',
		icon: <ShieldCheck className="w-6 h-6 text-[#772D3C]" />,
	},
	{
		title: 'Rapid Turnaround',
		description:
			'Optimized workflows mean you get critical data faster without sacrificing quality.',
		icon: <Zap className="w-6 h-6 text-[#772D3C]" />,
	},
	{
		title: 'Certified Excellence',
		description:
			'ISO 17025 accredited methods and a team of veteran scientists dedicated to your success.',
		icon: <Award className="w-6 h-6 text-[#772D3C]" />,
	},
];

const HeroText = () => {
	return (
		<div className="bg-[#0E202A] text-white py-24">
			<div className="max-w-[85rem] mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div>
						<span className="text-[#FFD166] font-bold tracking-wider uppercase text-sm mb-2 block">
							Why Choose Alpha Analytica?
						</span>
						<h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
							More Than Just a Lab — We Are Your Strategic
							Partner.
						</h2>
						<p className="text-gray-400 text-lg leading-relaxed mb-8">
							In a world dependent on data, accuracy is
							currency. We provide the scientific foundation
							for your critical decisions, from product safety
							to environmental stewardship.
						</p>
						<a
							href="/about"
							className="inline-block border border-gray-600 hover:border-[#FFD166] hover:text-[#FFD166] text-white px-8 py-3 rounded-full transition-colors"
						>
							About Our Company
						</a>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{features.map((feature, idx) => (
							<div
								key={idx}
								className="bg-[#162a36] p-6 rounded-2xl border border-[#1f3642] hover:border-[#772D3C] transition-colors"
							>
								<div className="w-12 h-12 rounded-xl bg-[#0E202A] flex items-center justify-center mb-4 shadow-inner">
									{feature.icon}
								</div>
								<h3 className="text-lg font-bold mb-2 text-white">
									{feature.title}
								</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroText;