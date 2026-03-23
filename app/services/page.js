import React from 'react';
import connectToDatabase from '../../lib/mongodb';
import PageContent from '../../models/PageContent';
import ClientServices from '../../components/ClientServices';

export const dynamic = 'force-dynamic';

export default async function Page() {
	await connectToDatabase();
	const servicesData = await PageContent.find({ page: 'services' });
	
	const content = servicesData.reduce((acc, item) => {
		acc[item.section] = item.content;
		return acc;
	}, {});

	const hero = content.hero || { 
		title: 'World-Class Analytical Services', 
		description: 'From environmental compliance to pharmaceutical R&D — precision, innovation, and regulatory insight to drive your business forward.' 
	};
	
	const stats = content.stats?.items || [
		{ id: 1, value: '+1k', label: 'Samples Processed' },
		{ id: 2, value: '+150', label: 'Validated Methods' },
		{ id: 3, value: '+50', label: 'Partner Institutions' }
	];

	const categories = content.categories?.items || [];
	const faq = content.faq?.items || [];

	return (
		<div className="text-gray-800 font-sans">
			{/* HERO */}
			<section
				className="relative bg-[#772D3C] text-white pt-32 pb-24 md:pt-40 md:pb-32"
				style={{
					backgroundImage: "url('/images/services2.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
				<div className="relative max-w-[85rem] mx-auto px-6 text-center">
					<div className="max-w-3xl mx-auto space-y-6">
						<h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
							{hero.title}
						</h1>
						<p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center w-full">
							{hero.description}
						</p>
					</div>
				</div>
			</section>

			{/* Overview stats */}
			<section className="py-12 bg-white border-b border-gray-100">
				<div className="max-w-[85rem] mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
						{stats.map((s, idx) => (
							<div key={idx} className="pt-4 md:pt-0 px-4">
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

			<ClientServices categories={categories} faq={faq} />

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
