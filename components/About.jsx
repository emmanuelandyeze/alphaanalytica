import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<section className="max-w-[85rem] mx-auto px-6 py-16 md:py-24">
			<div className="flex flex-col md:flex-row items-center gap-12">
				{/* Image */}
				<div className="w-full md:w-1/2">
					<Image
						src="/images/landing2.jpg" // Replace with your image path
						alt="About Us"
						width={500}
						height={400}
						className="rounded-lg shadow-lg object-cover"
					/>
				</div>

				{/* Text Content */}
				<div className="w-full md:w-1/2">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
						About Us
					</h2>
					
					<p className="text-lg text-gray-600 mb-6 leading-relaxed">
						Whether it's analytical testing, advanced
						instrumentation, or expert consultation, we
						provide solutions tailored to meet the unique
						demands of every client.
					</p>

					{/* CTA */}
					<button className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark transition">
						Get in Touch
					</button>
				</div>
			</div>
		</section>
	);
};

export default About;
