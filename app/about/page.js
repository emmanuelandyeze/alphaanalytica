import Image from 'next/image';
import connectToDatabase from '../../lib/mongodb';
import PageContent from '../../models/PageContent';

export const dynamic = 'force-dynamic';

export default async function About() {
	await connectToDatabase();
	const aboutData = await PageContent.find({ page: 'about' });
	
	const content = aboutData.reduce((acc, item) => {
		acc[item.section] = item.content;
		return acc;
	}, {});

	const hero = content.hero || { 
		title: 'About Alpha Analytica', 
		description: 'Your trusted partner in analytical chemistry solutions.' 
	};
	
	const whoWeAre = content.whoWeAre || {
		title: 'Who We Are',
		description: 'Alpha Analytica is a leading analytical chemistry company dedicated to providing cutting-edge solutions for industries ranging from pharmaceuticals to environmental sciences. With a team of highly skilled scientists and state-of-the-art technology, we deliver accurate, reliable, and timely results to our clients.',
		image: '/images/about2.jpg'
	};

	const coreValues = content.coreValues || {
		title: 'Our Core Values',
		items: [
			{ title: 'Integrity', description: 'We uphold the highest ethical standards in all our work.', icon: '/images/integrity.png' },
			{ title: 'Innovation', description: 'We embrace new technologies and methodologies to drive progress.', icon: '/images/innovation.png' },
			{ title: 'Excellence', description: 'We strive for precision and accuracy in every analysis.', icon: '/images/excellence.png' }
		]
	};

	const vision = content.vision || {
		title: 'Our Vision',
		description: 'At Alpha Analytica, we envision a future where analytical chemistry drives innovation and sustainability across industries. We aim to be the global leader in providing reliable and innovative analytical solutions that empower our clients to make informed decisions.'
	};

	return (
		<div className="">
			<section
				className="relative bg-[#772D3C] text-white py-16 md:py-24"
				style={{
					backgroundImage: "url('/images/about.jpg')",
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
								{hero.title}
							</h1>
							<p className="text-lg text-gray-300">
								{hero.description}
							</p>
						</section>
					</div>
				</div>
			</section>

			<div className="px-5 md:px-0 max-w-5xl mx-auto">
				{/* Company Overview */}
				<section className="mt-20">
					<div className="flex flex-col md:flex-row items-start gap-12">
						{/* Image */}
						<div className="w-full md:w-1/2">
							<Image
								src={whoWeAre.image}
								alt="Services"
								width={600}
								height={400}
								className="rounded-lg shadow-sm object-cover"
							/>
						</div>

						{/* Services List */}
						<div className="w-full md:w-1/2">
							<h2 className="text-left text-4xl md:text-4xl mb-5">
								{whoWeAre.title}
							</h2>
							<p className="text-left text-lg md:text-xl font-light mb-10">
								{whoWeAre.description}
							</p>
							<a href="/contact" className="bg-[#772D3C] text-[#fff] py-4 px-8 rounded-lg hover:bg-[#772d3cee] transition font-bold shadow-md">
								Get in Touch
							</a>
						</div>
					</div>
				</section>

				{/* Core Values */}
				<section className="bg-[#C1E7C2] items-center py-12 mt-20 px-6 rounded-3xl">
					<h2 className="text-center text-4xl md:text-4xl mb-12 font-bold text-gray-800">
						{coreValues.title}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{coreValues.items.map((val, idx) => (
							<div key={idx} className="text-center">
								<div className="relative w-20 h-20 mx-auto mb-4">
									<Image
										src={val.icon}
										alt={val.title}
										fill
										style={{ objectFit: 'contain' }}
									/>
								</div>
								<h3 className="text-xl font-bold mt-4 text-gray-900">
									{val.title}
								</h3>
								<p className="text-gray-600 mt-2 leading-relaxed">
									{val.description}
								</p>
							</div>
						))}
					</div>
				</section>

				<div className="max-w-5xl mx-auto flex flex-col justify-center items-center px-4 md:px-0 py-20">
					<h2 className="text-left text-4xl md:text-4xl mb-8 font-bold text-gray-800">
						{vision.title}
					</h2>
					<p className="text-center text-xl md:text-3xl md:leading-[3rem] text-gray-700 font-light max-w-4xl">
						{vision.description}
					</p>
					<a href="/contact" className="bg-transparent text-[#121212] border border-[#121212] py-4 mt-10 px-10 rounded-lg hover:bg-[#195243] hover:text-[#ffff] hover:border-[#195243] transition font-bold">
						Get in Touch
					</a>
				</div>
			</div>
		</div>
	);
}
