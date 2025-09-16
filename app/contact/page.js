'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
	// State to hold form input values
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	// State to manage the submission loading state
	const [isSubmitting, setIsSubmitting] = useState(false);
	// State to track the status of the submission (idle, success, error)
	const [submitStatus, setSubmitStatus] = useState('idle');

	// State to store and display any error messages
	const [errorMessage, setErrorMessage] = useState('');

	// Handles changes to input fields and updates the formData state
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	// Handles the form submission
	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent the default browser form submission
		setIsSubmitting(true); // Set submitting state to true to disable button and show loading text
		setSubmitStatus('idle'); // Reset submission status
		setErrorMessage(''); // Clear any previous error messages

		// Basic client-side validation: check if all fields are filled
		if (
			!formData.name ||
			!formData.email ||
			!formData.subject ||
			!formData.message
		) {
			setSubmitStatus('error');
			setErrorMessage('Please fill in all fields.');
			setIsSubmitting(false); // Re-enable the button
			return; // Stop the submission process
		}

		try {
			// Make a POST request to your Next.js API route
			// This endpoint (which we'll create next) will handle sending the email
			const response = await fetch('/api/contact', {
				method: 'POST', // Use POST method to send data
				headers: {
					'Content-Type': 'application/json', // Specify content type as JSON
				},
				body: JSON.stringify(formData), // Convert form data to JSON string for the request body
			});

			// Check if the server response was not OK (e.g., status 4xx or 5xx)
			if (!response.ok) {
				// Attempt to parse a specific error message from the server response
				const errorData = await response.json();
				throw new Error(
					errorData.message || 'Failed to send message.',
				);
			}

			// If the response is OK, parse the success message
			const result = await response.json();
			console.log(result); // Log the success message from your API route

			setSubmitStatus('success'); // Update submission status to success
			// Clear the form fields after a successful submission
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
		} catch (error) {
			setSubmitStatus('error'); // Update submission status to error
			// Set the error message to display to the user
			setErrorMessage(
				error.message ||
					'Something went wrong. Please try again.',
			);
		} finally {
			setIsSubmitting(false); // Always reset submitting state once the fetch request is complete
		}
	};

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
						<form
							onSubmit={handleSubmit}
							className="space-y-6"
						>
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
									value={formData.name}
									onChange={handleChange}
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
									value={formData.email}
									onChange={handleChange}
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
									value={formData.subject}
									onChange={handleChange}
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
									value={formData.message}
									onChange={handleChange}
									required
									className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
								></textarea>
							</div>
							{submitStatus === 'success' && (
								<motion.p
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-green-600 font-semibold text-center mt-4"
								>
									Message sent successfully! We'll get back
									to you soon.
								</motion.p>
							)}
							{submitStatus === 'error' && (
								<motion.p
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-red-600 font-semibold text-center mt-4"
								>
									{errorMessage ||
										'Failed to send message. Please try again later.'}
								</motion.p>
							)}
							<div>
								<motion.button
									type="submit"
									className="w-full bg-[#195243] text-white px-6 py-3 rounded-md hover:bg-[#195243] focus:outline-none focus:ring-2 focus:ring-[#195243]"
									whileHover={{
										scale: isSubmitting ? 1 : 1.02,
									}}
									whileTap={{
										scale: isSubmitting ? 1 : 0.98,
									}}
									disabled={isSubmitting}
								>
									{isSubmitting
										? 'Sending...'
										: 'Send Message'}
								</motion.button>
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
									+234 812 372 8854
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold">
									Email
								</h3>
								<p className="text-gray-600">
									info@aals.com.ng
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
