import React from 'react';

const Page = () => {
	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div>
			{/* Hero Section */}
			<section
				className="relative bg-[#772D3C] text-white py-16 md:py-24"
				style={{
					backgroundImage: "url('/images/services2.jpg')", // Updated to a services-themed image path
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-[#195243]/80"></div>

				{/* Content */}
				<div className="relative max-w-[85rem] mx-auto px-6">
					<div
						className="flex flex-col items-center gap-12"
						initial="hidden"
						animate="visible"
						variants={variants}
						transition={{ duration: 0.8 }}
					>
						<div className="text-center md:py-10">
							<h1 className="text-4xl md:text-6xl font-bold mb-4">
								Our Services
							</h1>
							<p className="text-lg text-gray-200 max-w-2xl mx-auto">
								Your trusted partner in analytical chemistry
								solutions, delivering precision, innovation,
								and expertise to drive your success.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="bg-white py-16 md:py-24">
				<div className="max-w-[85rem] mx-auto px-6">
					{/* Introduction */}
					<div
						className="text-center mb-12"
						initial="hidden"
						animate="visible"
						variants={variants}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<h2 className="text-3xl font-bold text-[#333] mb-4">
							Comprehensive Solutions for Analytical
							Excellence
						</h2>
						<p className="text-lg text-[#666] max-w-3xl mx-auto">
							At Alpha Analytica, we combine cutting-edge
							technology with deep scientific knowledge to
							offer a full suite of services tailored to
							industries such as pharmaceuticals,
							environmental science, and materials research.
							Our commitment to quality ensures reliable
							results and strategic insights.
						</p>
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Analytical Testing Services */}
						<div
							className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
							initial="hidden"
							animate="visible"
							variants={variants}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<h3 className="text-2xl font-semibold text-[#0070f3] mb-4">
								Analytical Testing Services
							</h3>
							<p className="text-base text-[#444] mb-4">
								Our analytical testing services utilize
								state-of-the-art instrumentation and a team
								of seasoned scientists to provide precise,
								reliable results. We support industries and
								researchers with in-depth insights for
								better decision-making.
							</p>
							<ul className="list-disc list-inside text-[#444] space-y-2">
								<li>
									High-Performance Liquid Chromatography
									(HPLC)
								</li>
								<li>
									Gas Chromatography-Mass Spectrometry
									(GC-MS)
								</li>
								<li>
									Atomic Absorption Spectroscopy (AAS)
								</li>
								<li>
									Environmental and Pharmaceutical Analysis
								</li>
								<li>Custom Method Development</li>
							</ul>
						</div>

						{/* Laboratory Equipment Sales and Rentals */}
						<div
							className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
							initial="hidden"
							animate="visible"
							variants={variants}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<h3 className="text-2xl font-semibold text-[#0070f3] mb-4">
								Laboratory Equipment Sales and Rentals
							</h3>
							<p className="text-base text-[#444] mb-4">
								We provide a wide range of high-quality
								laboratory equipment, including medical and
								chemical instruments. Our flexible purchase
								and rental options are designed for
								efficiency, sustainability, and
								cost-effectiveness.
							</p>
							<ul className="list-disc list-inside text-[#444] space-y-2">
								<li>Spectrophotometers and Centrifuges</li>
								<li>Autoclaves and Incubators</li>
								<li>Flexible Rental Terms</li>
								<li>
									Maintenance and Calibration Services
								</li>
								<li>Eco-Friendly Equipment Options</li>
							</ul>
						</div>

						{/* Professional and Consultancy Services */}
						<div
							className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
							initial="hidden"
							animate="visible"
							variants={variants}
							transition={{ duration: 0.8, delay: 0.8 }}
						>
							<h3 className="text-2xl font-semibold text-[#0070f3] mb-4">
								Professional and Consultancy Services
							</h3>
							<p className="text-base text-[#444] mb-4">
								Our consultancy services go beyond the
								basics, offering innovative methodologies
								and tailored solutions. Our experts provide
								strategic guidance, industry-specific
								strategies, and support for advanced
								instrumentation.
							</p>
							<ul className="list-disc list-inside text-[#444] space-y-2">
								<li>Regulatory Compliance Consulting</li>
								<li>Process Optimization</li>
								<li>Training and Workshops</li>
								<li>Research and Development Support</li>
								<li>Custom Project Management</li>
							</ul>
						</div>
					</div>

					{/* Call to Action */}
					<div
						className="text-center mt-12"
						initial="hidden"
						animate="visible"
						variants={variants}
						transition={{ duration: 0.8, delay: 1.0 }}
					>
						<h3 className="text-2xl font-bold text-[#333] mb-4">
							Ready to Elevate Your Analytical Capabilities?
						</h3>
						<p className="text-lg text-[#666] mb-6">
							Contact us today to discuss how our services
							can meet your needs.
						</p>
						<a
							href="/contact"
							className="inline-block bg-[#0070f3] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#005bb5] transition-colors duration-300"
						>
							Get in Touch
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
