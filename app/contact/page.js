import Image from 'next/image';

export default function Contact() {
	return (
		<div className="">
			{/* Hero Section */}
			<section
				className="relative bg-[#772D3C] text-white py-16 md:py-24"
				style={{
					backgroundImage: "url('/images/contact.jpg')", // Replace with your image path
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
								Contact Us
							</h1>
							<p className="text-lg text-gray-300">
								We’d love to hear from you! Reach out for
								inquiries, collaborations, or feedback.
							</p>
						</section>
					</div>
				</div>
			</section>

			<div className="max-w-5xl mx-auto px-5">
				{/* Contact Form and Details */}
				<section className="my-12 grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div>
						<h2 className="text-3xl mb-6">
							Send Us a Message
						</h2>
						<form className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-700"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									required
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									required
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
								></textarea>
							</div>
							<div>
								<button
									type="submit"
									className="w-full bg-[#195243] text-white px-6 py-3 rounded-md hover:bg-[#195243] focus:outline-none focus:ring-2 focus:ring-[#195243]"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>

					{/* Contact Details */}
					<div>
						<h2 className="text-3xl mb-6">
							Our Contact Information
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-semibold">
									Phone
								</h3>
								<p className="text-gray-600">
									+1 (123) 456-7890
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold">
									Email
								</h3>
								<p className="text-gray-600">
									info@alphaanalytica.com
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold">
									Address
								</h3>
								<p className="text-gray-600">
									123 Science Park Drive, <br />
									Innovation City, CA 90210, <br />
									USA
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
