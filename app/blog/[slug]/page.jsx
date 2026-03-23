import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import connectToDatabase from '@/lib/mongodb';
import BlogModel from '@/models/Blog';

export async function generateMetadata({ params }) {
	await connectToDatabase();
	const post = await BlogModel.findOne({ slug: params.slug });
	if (!post) return { title: 'Post Not Found' };
	return { title: post.title };
}

export default async function BlogPost({ params }) {
	const { slug } = params;
	await connectToDatabase();
	const post = await BlogModel.findOne({ slug });

	if (!post) {
		notFound();
	}

	return (
		<main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
			{/* Blog Image */}
			<div className="relative w-full h-64 md:h-[30rem] mb-12">
				<Image
					src={post.image}
					alt={post.title}
					fill
					style={{ objectFit: 'cover' }}
					className="object-cover rounded-3xl shadow-xl"
					priority
				/>
			</div>

			{/* Title & Meta */}
			<div className="mb-12">
				<span className="text-xs uppercase tracking-widest font-bold text-[#772D3C] bg-[#772D3C]/5 px-4 py-1.5 rounded-full">
					{post.category}
				</span>
				<h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6 leading-[1.1] tracking-tight text-gray-900">
					{post.title}
				</h1>
				<div className="flex items-center gap-3 text-gray-500 font-medium">
					<span>By {post.author}</span>
					<span className="w-1 h-1 rounded-full bg-gray-300"></span>
					<span>{post.date}</span>
				</div>
			</div>

			{/* Content */}
			<div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-[1.8] max-w-none">
				{post.content
					.split('\n\n')
					.map((paragraph, index) => (
						<p key={index} className="mb-6">
							{paragraph.split('\n').map((line, i, arr) => (
								<React.Fragment key={i}>
									{line}
									{i < arr.length - 1 && <br />}
								</React.Fragment>
							))}
						</p>
					))}
			</div>
		</main>
	);
}
