import Image from 'next/image';

export default function Contact() {
	return (
		<div className="container mx-auto px-4 py-12">
			{/* Hero Section */}
			<section className="text-center py-16 bg-gray-100">
				<h1 className="text-4xl font-bold mb-4">
					Contact Us
				</h1>
				<p className="text-lg text-gray-600">
					We’d love to hear from you! Reach out for
					inquiries, collaborations, or feedback.
				</p>
			</section>

			{/* Contact Form and Details */}
			<section className="my-12 grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Contact Form */}
				<div>
					<h2 className="text-3xl font-bold mb-6">
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
								className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>

				{/* Contact Details */}
				<div>
					<h2 className="text-3xl font-bold mb-6">
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
	);
}
