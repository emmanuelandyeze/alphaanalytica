import Image from 'next/image';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const LandingImage = () => {
	return (
		<div className="bg-[#beeee2] pt-0 rounded-t-3xl mt-10 md:bg-white">
			<div className="px-0 md:px-0">
				<div className="max-w-[85rem] mx-auto mt-10 relative h-[50vh] md:h-[70vh] md:rounded-3xl overflow-hidden border-gray-300">
					{/* Image */}
					<Image
						src="/images/landing.jpg" // Replace with your image path
						alt="Landing"
						layout="fill" // Ensures the image fills the container
						objectFit="cover" // Makes the image cover the entire container
						quality={100}
						className="filter brightness-100" // Darkens the image
					/>
				</div>
				<div className="bg-[#beeee2] pb-20 -mt-56 md:-mt-52">
					<div className="max-w-[85rem] px-5 mx-auto flex flex-col md:flex-row justify-center gap-5 items-center pt-72">
						<div className="relative w-full md:w-[33%] bg-white shadow-sm pt-20 pb-12 px-8 rounded-lg">
							<div className="absolute inset-0"></div>
							<div className="relative z-10 text-[#121212]">
								<h1 className="text-xl font-bold mb-4">
									Analytical Testing Services
								</h1>
								<p className="mb-6 font-light">
									Harness the power of our advanced
									instrumentation and experienced scientists
									for precise and reliable analytical
									testing.
								</p>
								<div className="flex flex-row justify-end">
									<button className="justify-end text-[#121212] flex flex-row gap-1 items-center pt-5">
										<p>Learn more</p>{' '}
										<GoArrowUpRight size={22} />
									</button>
								</div>
							</div>
						</div>

						<div className="relative w-full md:w-[33%] bg-white shadow-sm pt-14 pb-10 px-8 rounded-lg">
							<div className="absolute inset-0"></div>
							<div className="relative z-10 text-[#121212]">
								<h1 className="text-xl font-bold mb-4">
									Laboratory Equipment Sales and Rentals
								</h1>
								<p className="mb-6 font-light">
									Explore our extensive selection of
									laboratory equipment, including medical
									and chemical instrumentation.
								</p>
								<div className="flex flex-row justify-end">
									<button className="justify-end text-[#121212] flex flex-row gap-1 items-center  pt-5">
										<p>Learn more</p>{' '}
										<GoArrowUpRight size={22} />
									</button>
								</div>
							</div>
						</div>
						<div className="relative w-full md:w-[33%] bg-white shadow-sm pt-14 pb-10 px-8 rounded-lg">
							<div className="absolute inset-0"></div>
							<div className="relative z-10 text-[#121212]">
								<h1 className="text-xl font-bold mb-4">
									Professional and Consultancy Services
								</h1>
								<p className="mb-6 font-light">
									At Alpha Analytica, we go beyond
									traditional analytical services to offer
									innovative methodologies and customized
									solutions.
								</p>
								<div className="flex flex-row justify-end">
									<button className="justify-end text-[#121212] flex flex-row gap-1 items-center  pt-5">
										<p>Learn more</p>{' '}
										<GoArrowUpRight size={22} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingImage;
