import React from 'react'

const Page = () => {
  return (
		<div>
			<section
				className="relative bg-[#772D3C] text-white py-16 md:py-24"
				style={{
					backgroundImage: "url('/images/about.jpg')", // Replace with your image path
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-[#195243]/80"></div>

				{/* Content */}
				<div className="relative max-w-[85rem] mx-auto px-6">
					<div className="flex flex-col items-center gap-12">
						<section className="text-center md:py-10">
							<h1 className="text-4xl md:text-6xl text-center font-bold mb-4">
								Our Services
							</h1>
							<p className="text-lg text-gray-300">
								Your trusted partner in analytical chemistry
								solutions.
							</p>
						</section>
					</div>
					<header
						style={{
							textAlign: 'center',
							marginBottom: '3rem',
						}}
					>
						<h1
							style={{ fontSize: '2.5rem', color: '#333' }}
						>
							Our Services
						</h1>
						<p
							style={{ fontSize: '1.2rem', color: '#666' }}
						>
							At Alpha Analytica, we provide innovative
							chemical solutions combining advanced
							analytical techniques with scientific
							expertise.
						</p>
					</header>

					<section style={{ marginBottom: '3rem' }}>
						<h2
							style={{
								fontSize: '2rem',
								color: '#0070f3',
								marginBottom: '1rem',
							}}
						>
							Analytical Testing Services
						</h2>
						<p
							style={{
								fontSize: '1rem',
								lineHeight: '1.6',
								color: '#444',
							}}
						>
							Our analytical testing services utilize
							advanced instrumentation and a team of
							experienced scientists to deliver precise and
							reliable results. We empower industries and
							researchers with comprehensive insights for
							informed decision-making.
						</p>
					</section>

					<section style={{ marginBottom: '3rem' }}>
						<h2
							style={{
								fontSize: '2rem',
								color: '#0070f3',
								marginBottom: '1rem',
							}}
						>
							Laboratory Equipment Sales and Rentals
						</h2>
						<p
							style={{
								fontSize: '1rem',
								lineHeight: '1.6',
								color: '#444',
							}}
						>
							We offer an extensive selection of laboratory
							equipment, including medical and chemical
							instrumentation. Whether you need to purchase
							or rent, our solutions are tailored to meet
							your specific requirements for efficiency and
							sustainability.
						</p>
					</section>

					<section style={{ marginBottom: '3rem' }}>
						<h2
							style={{
								fontSize: '2rem',
								color: '#0070f3',
								marginBottom: '1rem',
							}}
						>
							Professional and Consultancy Services
						</h2>
						<p
							style={{
								fontSize: '1rem',
								lineHeight: '1.6',
								color: '#444',
							}}
						>
							Beyond traditional services, we provide
							professional consultancy with innovative
							methodologies and customized solutions. Our
							experts offer consultation, industry-specific
							strategies, and advanced instrumentation
							guidance to drive your success.
						</p>
					</section>
				</div>
			</section>
		</div>
	);
}

export default Page