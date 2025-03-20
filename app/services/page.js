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
				</div>
			</section>
		</div>
	);
}

export default Page