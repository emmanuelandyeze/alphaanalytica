import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer className="bg-[#1E3A8A] text-white py-10">
			<div className="max-w-[85rem] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
				{/* Brand Section */}
				<div>
					<h3 className="text-2xl text-center md:text-left font-bold">
						Alpha Analytica
					</h3>
					<p className="mt-2 text-sm">
						Your trusted partner in analytical chemistry.
					</p>
				</div>

				{/* Contact Section */}
				<div className="text-center md:text-left">
					<p className="text-sm mb-2">
						<span className="font-semibold">Email:</span>{' '}
						info@aals.com.ng
					</p>
					<p className="text-sm">
						<span className="font-semibold">Phone:</span>{' '}
						+234 812 4914 834
					</p>
				</div>

				{/* Social Media Section */}
				<div className="flex space-x-4">
					<a
						href="#"
						className="text-white hover:text-gray-300"
						aria-label="Facebook"
					>
						<FaFacebook size={24} />
					</a>
					<a
						href="#"
						className="text-white hover:text-gray-300"
						aria-label="Twitter"
					>
						<FaXTwitter size={24} />
					</a>
					<a
						href="#"
						className="text-white hover:text-gray-300"
						aria-label="LinkedIn"
					>
						<FaLinkedin size={24} />
					</a>
					<a
						href="#"
						className="text-white hover:text-gray-300"
						aria-label="Instagram"
					>
						<FaInstagram size={24} />
					</a>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
				<p>© 2025 Alpha Analytica. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
