'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Clock } from 'lucide-react';

export default function Landing() {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.08,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 14, scale: 0.995 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 110,
				damping: 18,
			},
		},
	};

	return (
		<section className="max-w-[85rem] px-4 md:px-0 mx-auto">
			<motion.div
				className="grid md:grid-cols-1 gap-8 items-center mt-12 md:mt-20"
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.25 }}
			>
				<div>
					<motion.div
						variants={item}
						className="inline-flex items-center gap-2 bg-[#f4fbf9] border border-[#d6f0e9] rounded-full px-4 py-1.5 mb-6 text-sm font-medium text-[#195243]"
					>
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29bd94] opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-[#195243]"></span>
						</span>
						ISO 17025 Compliant Laboratory
					</motion.div>

					<motion.h1
						variants={item}
						className="md:text-[3.5rem] text-[2.5rem] w-full md:w-[80%] font-bold leading-[1.1] text-[#0E202A] -tracking-[0.03em]"
					>
						Innovative Chemical Solutions for a{' '}
						<span className="text-[#dbb14c]">
							Smarter, Sustainable Future.
						</span>
					</motion.h1>

					<motion.p
						variants={item}
						className="text-gray-500 md:w-[60%] w-full mt-6 text-xl leading-relaxed font-normal"
					>
						At Alpha Analytica, we combine advanced analytical
						techniques with scientific expertise to deliver precise
						insights for industries, researchers, and
						manufacturers.
					</motion.p>

					<motion.div
						variants={item}
						className="mt-8 flex flex-wrap gap-4"
					>
						<a
							href="/contact"
							className="px-8 py-4 rounded-full bg-[#772D3C] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
						>
							Request Analysis
						</a>
						<a
							href="/services"
							className="px-8 py-4 rounded-full bg-white border border-gray-200 text-[#0E202A] font-semibold hover:bg-gray-50 transition-colors"
						>
							Explore Services
						</a>
					</motion.div>

					<motion.div
						variants={item}
						className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-500"
					>
						<div className="flex items-center gap-2">
							<ShieldCheck className="w-5 h-5 text-[#29bd94]" />
							Accredited Results
						</div>
						<div className="flex items-center gap-2">
							<Clock className="w-5 h-5 text-[#29bd94]" />
							Fast Turnaround
						</div>
						<div className="flex items-center gap-2">
							<Star className="w-5 h-5 text-[#29bd94]" />
							Expert Consultation
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
