import connectToDatabase from '@/lib/mongodb';
import BlogModel from '@/models/Blog';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function Blog() {
	await connectToDatabase();
	const articles = await BlogModel.find({ published: true }).sort({ createdAt: -1 });

	return (
		<div>
			<section className="max-w-[85rem] mx-auto px-6 py-16 md:py-24">
				<div>
					<h2 className="text-3xl md:text-4xl font-light text-left mb-12">
						News & Articles
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{articles.map((article) => (
						<article
							key={article.slug}
							className="bg-white rounded-lg hover:shadow-sm hover:underline underline-offset-2 cursor-pointer overflow-hidden"
						>
							<Link href={`/blog/${article.slug}`}>
								{/* Article Image */}
								<div className="relative h-[16rem] w-full">
									<Image
										src={article.image}
										alt={article.title}
										fill
										style={{ objectFit: 'cover' }}
										className="object-cover rounded-3xl"
									/>
								</div>
								{/* Article Content */}
								<div className="py-6">
									<span className="text-xs no-underline bg-[#8A7FA2] text-[#f1f1f1] px-4 py-1 rounded-full font-medium">
										{article.category}
									</span>
									<h3 className="text-xl font-semibold mt-2 mb-4 group-hover:underline">
										{article.title}
									</h3>
									<div className="text-gray-500 text-sm">
										<span>By {article.author}</span> •{' '}
										<span>{article.date}</span>
									</div>
								</div>
							</Link>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
