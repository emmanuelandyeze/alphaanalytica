'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Tailwind's Heroicons

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Our Services', href: '/services' },
		{ name: 'Contact Us', href: '/contact' },
		{ name: 'Blog', href: '/blog' },
	];

	return (
		<nav className="bg-transparent">
			<div className="max-w-[85rem] mx-auto flex items-center justify-between px-4 md:px-0 py-3 md:py-6">
				{/* Logo */}
				<Link
					href="/"
					// className="text-2xl text-[#A9C5D6] tracking-widest space-x-8 "
				>
					<img
						src="/images/logo1.png"
						alt=""
						className="md:h-20 h-14"
					/>
				</Link>

				{/* Menu Button (Mobile) */}
				<button
					className="block md:hidden"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? (
						<XIcon className="h-6 w-6" />
					) : (
						<MenuIcon className="h-6 w-6" />
					)}
				</button>

				{/* Navigation Links */}
				<div
					className={`absolute top-14 left-0 w-full z-50 bg-white shadow-md md:shadow-none md:static md:block md:w-auto transition-all ${
						isOpen ? 'block' : 'hidden'
					}`}
				>
					<ul className="flex flex-col pl-3 pt-3  pb-3 md:flex-row md:space-x-3">
						{navItems.map((item) => (
							<li key={item.name} className="py-2 md:py-0">
								<Link
									href={item.href}
									onClick={() => setIsOpen(!isOpen)}
									className={`block px-4 py-2 rounded-md md:inline-block ${
										pathname === item.href
											? 'bg-white text-[#772D3C] font-bold underline underline-offset-4'
											: ''
									} hover:bg-white hover:text-[#772D3C] hover:underline hover:underline-offset-4`}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
