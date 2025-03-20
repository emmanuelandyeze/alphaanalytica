import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/solid';

const Services = () => {
	return (
		<section
			className="relative bg-[#772D3C] text-white py-16 md:py-24"
			style={{
				backgroundImage: "url('/images/services.png')", // Replace with your image path
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Overlay for readability */}
			<div className="absolute inset-0 bg-[#195243]/80"></div>

			{/* Content */}
			<div className="relative max-w-[85rem] mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center gap-12">
					{/* Image */}
					<div className="w-full md:w-1/2">
						<Image
							src="/images/services2.jpg" // Replace with your image path
							alt="Services"
							width={600}
							height={400}
							className="rounded-lg shadow-lg object-cover"
						/>
					</div>

					{/* Services List */}
					<div className="w-full md:w-1/2">
						{/* <h3 className="text-2xl md:text-3xl font-bold mb-6">
							Our Services
						</h3> */}
						{/* Intro Text */}
						<h2 className="text-left text-lg md:text-xl font-light mb-5">
							Whether it's analytical testing, advanced
							instrumentation, or expert consultation, we
							provide solutions tailored to meet the unique
							demands of every client.
						</h2>
						<ul className="space-y-4">
							<li className="flex items-start">
								<CheckIcon className="h-6 w-6 text-green-400 mr-4" />
								<p className="text-lg">
									Comprehensive Analytical Testing
								</p>
							</li>
							<li className="flex items-start">
								<CheckIcon className="h-6 w-6 text-green-400 mr-4" />
								<p className="text-lg">
									Advanced Instrumentation Solutions
								</p>
							</li>
							<li className="flex items-start">
								<CheckIcon className="h-6 w-6 text-green-400 mr-4" />
								<p className="text-lg">
									Consultation with Experienced Scientists
								</p>
							</li>
							<li className="flex items-start">
								<CheckIcon className="h-6 w-6 text-green-400 mr-4" />
								<p className="text-lg">
									Customized Industry-Specific Solutions
								</p>
							</li>
						</ul>
						<button className="bg-transparent text-[#fff] border border-[#fff] py-4 mt-6 px-6 rounded-lg hover:bg-[#fff] hover:text-[#195243] hover:border-[#fff] transition">
							Get in Touch
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
