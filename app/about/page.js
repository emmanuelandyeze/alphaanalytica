import Image from 'next/image';

export default function About() {
	return (
		<div className="">
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
								About Alpha Analytica
							</h1>
							<p className="text-lg text-gray-300">
								Your trusted partner in analytical chemistry
								solutions.
							</p>
						</section>
					</div>
				</div>
			</section>
			{/* Hero Section */}

			<div className="px-5 md:px-0 max-w-5xl mx-auto">
				{/* Company Overview */}
				<section className="mt-20">
					<div className="flex flex-col md:flex-row items-start gap-12">
						{/* Image */}
						<div className="w-full md:w-1/2">
							<Image
								src="/images/about2.jpg" // Replace with your image path
								alt="Services"
								width={600}
								height={400}
								className="rounded-lg shadow-sm object-cover"
							/>
						</div>

						{/* Services List */}
						<div className="w-full md:w-1/2">
							<h2 className="text-left text-4xl md:text-4xl  mb-5">
								Who We Are
							</h2>

							<p className="text-left text-lg md:text-xl font-light mb-5">
								Alpha Analytica is a leading analytical
								chemistry company dedicated to providing
								cutting-edge solutions for industries
								ranging from pharmaceuticals to
								environmental sciences. With a team of
								highly skilled scientists and
								state-of-the-art technology, we deliver
								accurate, reliable, and timely results to
								our clients.
							</p>
							{/* <h2 className="text-left text-lg md:text-xl font-light mb-5">
								Whether it's analytical testing, advanced
								instrumentation, or expert consultation, we
								provide solutions tailored to meet the
								unique demands of every client.
							</h2> */}

							<button className="bg-[#772D3C] text-[#fff] border border-[#fff] py-4 mt-0 px-6 rounded-lg hover:bg-[#772d3cee] hover:text-[#ffff] hover:border-[#772d3cee] transition">
								Get in Touch
							</button>
						</div>
					</div>
				</section>

				{/* Core Values */}
				<section className=" bg-[#C1E7C2] items-center py-8 mt-20 px-3 rounded-3xl">
					<h2 className="text-center text-4xl md:text-4xl  mb-8">
						Our Core Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<Image
								src="/images/integrity.png"
								alt="Integrity Icon"
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-xl font-semibold mt-4">
								Integrity
							</h3>
							<p className="text-gray-600 mt-2">
								We uphold the highest ethical standards in
								all our work.
							</p>
						</div>
						<div className="text-center">
							<Image
								src="/images/innovation.png"
								alt="Innovation Icon"
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-xl font-semibold mt-4">
								Innovation
							</h3>
							<p className="text-gray-600 mt-2">
								We embrace new technologies and
								methodologies to drive progress.
							</p>
						</div>
						<div className="text-center">
							<Image
								src="/images/excellence.png"
								alt="Excellence Icon"
								width={80}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-xl font-semibold mt-4">
								Excellence
							</h3>
							<p className="text-gray-600 mt-2">
								We strive for precision and accuracy in
								every analysis.
							</p>
						</div>
					</div>
				</section>

				<div className="max-w-5xl mx-auto flex flex-col justify-center items-center px-4 md:px-0 py-20">
					<h2 className="text-left text-4xl md:text-4xl mb-5">
						Our Vision
					</h2>
					<h1 className="text-center text-xl md:text-4xl md:leading-[3.4rem]">
						At Alpha Analytica, we envision a future where
						analytical chemistry drives innovation and
						sustainability across industries. We aim to be
						the global leader in providing reliable and
						innovative analytical solutions that empower our
						clients to make informed decisions.
					</h1>
					<button className="bg-transparent text-[#121212] border border-[#121212] py-4 mt-6 px-6 rounded-lg hover:bg-primary hover:text-[#ffff] hover:border-primary transition">
						Get in Touch
					</button>
				</div>
			</div>
		</div>
	);
}
