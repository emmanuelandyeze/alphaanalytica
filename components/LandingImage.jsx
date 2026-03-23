'use client';

import Image from 'next/image';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.08,
		},
	},
};

const cardVariant = {
	hidden: { opacity: 0, y: 12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 110,
			damping: 18,
		},
	},
};

export default function LandingImage({ content }) {
	const defaultContent = {
		image: '/images/landing.jpg',
		cards: [
			{
				title: 'Analytical Testing Services',
				description: 'Harness the power of our advanced instrumentation and experienced scientists for precise and reliable analytical testing.'
			},
			{
				title: 'Laboratory Equipment Sales and Rentals',
				description: 'Explore our extensive selection of laboratory equipment, including medical and chemical instrumentation.'
			},
			{
				title: 'Professional and Consultancy Services',
				description: 'At Alpha Analytica, we go beyond traditional analytical services to offer innovative methodologies and customized solutions.'
			}
		]
	};

	const data = content || defaultContent;

	return (
		<motion.div
			className="bg-[#beeee2] pt-0 rounded-t-3xl mt-10 md:bg-white"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			viewport={{ once: true }}
		>
			<div className="px-0 md:px-0">
				<div className="max-w-[85rem] mx-auto mt-10 relative h-[50vh] md:h-[70vh] md:rounded-3xl overflow-hidden border-gray-300">
					{/* Image */}
					<motion.div
						className="absolute inset-0"
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<motion.div
							animate={{ y: [0, -8, 0] }}
							transition={{
								repeat: Infinity,
								duration: 6,
								ease: 'easeInOut',
							}}
							className="absolute inset-0"
						>
							<Image
								src={data.image}
								alt="Landing"
								fill
								style={{ objectFit: 'cover' }}
								quality={100}
								className="filter brightness-100"
							/>
						</motion.div>
					</motion.div>
				</div>

				<div className="bg-[#beeee2] pb-20 -mt-56 md:-mt-52">
					<motion.div
						className="max-w-[85rem] px-5 mx-auto flex flex-col md:flex-row justify-center gap-5 items-center pt-72"
						variants={containerVariants}
					>
						{data.cards.map((card, idx) => (
							<motion.div
								key={idx}
								className="relative w-full md:w-[33%] bg-white shadow-sm pt-14 pb-10 px-8 rounded-lg min-h-[320px] flex flex-col justify-between"
								variants={cardVariant}
								whileHover={{ scale: 1.015 }}
							>
								<div className="relative z-10 text-[#121212]">
									<h1 className="text-xl font-bold mb-4">
										{card.title}
									</h1>
									<p className="mb-6 font-light">
										{card.description}
									</p>
								</div>
								<div className="flex flex-row justify-end relative z-10 text-[#121212]">
									<motion.button
										whileHover={{ x: 4 }}
										className="justify-end text-[#121212] flex flex-row gap-1 items-center pt-5"
									>
										<p>Learn more</p>
										<GoArrowUpRight size={22} />
									</motion.button>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
