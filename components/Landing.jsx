'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
				className="grid md:grid-cols-1 gap-8 items-center mt-10"
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.25 }}
			>
				<div>
					<motion.h1
						variants={item}
						whileHover={{ scale: 1.02 }}
						className="md:text-[2.9rem] text-[2.1rem] w-full md:w-[70%] font-[600] md:font-[400] leading-[2.8rem] md:leading-[3.6rem] text-[#0E202A]"
					>
						Innovative Chemical Solutions for a Smarter,
						<br />
						Sustainable Future.
					</motion.h1>

					<motion.p
						variants={item}
						className="text-[#949494] md:w-[50%] w-full mt-5 text-2xl leading-[2rem] md:leading-[2.3rem] font-light"
					>
						At Alpha Analytica, we combine advanced
						analytical techniques with scientific expertise
						to deliver precise insights.
					</motion.p>

					<motion.div
						variants={item}
						className="mt-6 flex gap-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						<button className="px-5 py-3 rounded-2xl bg-[#772D3C] text-white font-medium shadow-sm hover:scale-[1.01] transition-transform">
							Learn more
						</button>
						<button className="px-5 py-3 rounded-2xl border border-[#E6E6E6] text-[#0E202A] font-medium hover:bg-[#F7F7F7] transition-colors">
							Contact us
						</button>
					</motion.div>
				</div>

				
			</motion.div>
		</section>
	);
}
