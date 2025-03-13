import Image from 'next/image';

export default function About() {
	return (
		<div className="container mx-auto px-4 py-8">
			{/* Hero Section */}
			<section className="text-center py-16 bg-gray-100">
				<h1 className="text-4xl font-bold mb-4">
					About Alpha Analytica
				</h1>
				<p className="text-lg text-gray-600">
					Your trusted partner in analytical chemistry
					solutions.
				</p>
			</section>

			{/* Company Overview */}
			<section className="my-12">
				<h2 className="text-3xl font-bold mb-6">
					Who We Are
				</h2>
				<p className="text-gray-700 leading-relaxed">
					Alpha Analytica is a leading analytical chemistry
					company dedicated to providing cutting-edge
					solutions for industries ranging from
					pharmaceuticals to environmental sciences. With a
					team of highly skilled scientists and
					state-of-the-art technology, we deliver accurate,
					reliable, and timely results to our clients.
				</p>
			</section>

			{/* Team Section */}
			<section className="my-12">
				<h2 className="text-3xl font-bold mb-6">
					Our Team
				</h2>
				<div className="flex justify-center my-8">
					<Image
						src="/images/team-photo.jpg"
						alt="Alpha Analytica Team"
						width={800}
						height={450}
						className="rounded-lg shadow-lg"
					/>
				</div>
				<p className="text-gray-700 leading-relaxed">
					Our team consists of experienced chemists,
					researchers, and industry experts who are
					passionate about solving complex analytical
					challenges. We believe in collaboration,
					innovation, and continuous learning to stay ahead
					in the field.
				</p>
			</section>

			{/* Core Values */}
			<section className="my-12">
				<h2 className="text-3xl font-bold mb-6">
					Our Core Values
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="text-center">
						<Image
							src="/images/core-values-icon.png"
							alt="Integrity Icon"
							width={100}
							height={100}
							className="mx-auto"
						/>
						<h3 className="text-xl font-semibold mt-4">
							Integrity
						</h3>
						<p className="text-gray-600 mt-2">
							We uphold the highest ethical standards in all
							our work.
						</p>
					</div>
					<div className="text-center">
						<Image
							src="/images/core-values-icon.png"
							alt="Innovation Icon"
							width={100}
							height={100}
							className="mx-auto"
						/>
						<h3 className="text-xl font-semibold mt-4">
							Innovation
						</h3>
						<p className="text-gray-600 mt-2">
							We embrace new technologies and methodologies
							to drive progress.
						</p>
					</div>
					<div className="text-center">
						<Image
							src="/images/core-values-icon.png"
							alt="Excellence Icon"
							width={100}
							height={100}
							className="mx-auto"
						/>
						<h3 className="text-xl font-semibold mt-4">
							Excellence
						</h3>
						<p className="text-gray-600 mt-2">
							We strive for precision and accuracy in every
							analysis.
						</p>
					</div>
				</div>
			</section>

			{/* Company Milestones */}
			<section className="my-12">
				<h2 className="text-3xl font-bold mb-6">
					Our Milestones
				</h2>
				<div className="flex justify-center my-8">
					<Image
						src="/images/company-milestones.png"
						alt="Company Milestones"
						width={800}
						height={400}
						className="rounded-lg shadow-lg"
					/>
				</div>
				<ul className="list-none space-y-4">
					<li className="text-gray-700">
						<strong>2015:</strong> Founded Alpha Analytica
						with a focus on pharmaceutical analysis.
					</li>
					<li className="text-gray-700">
						<strong>2018:</strong> Expanded services to
						include environmental testing.
					</li>
					<li className="text-gray-700">
						<strong>2020:</strong> Achieved ISO 9001
						certification for quality management.
					</li>
					<li className="text-gray-700">
						<strong>2023:</strong> Launched advanced
						spectroscopy and chromatography services.
					</li>
				</ul>
			</section>

			{/* Vision Section */}
			<section className="my-12">
				<h2 className="text-3xl font-bold mb-6">
					Our Vision
				</h2>
				<p className="text-gray-700 leading-relaxed">
					At Alpha Analytica, we envision a future where
					analytical chemistry drives innovation and
					sustainability across industries. We aim to be the
					global leader in providing reliable and innovative
					analytical solutions that empower our clients to
					make informed decisions.
				</p>
			</section>
		</div>
	);
}
