'use client';

import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import blogPosts from '../../../blog';

export default function BlogPost({ params }) {
	const { slug } = params;
	const post = blogPosts.find((p) => p.slug === slug);

	if (!post) {
		notFound(); // Renders Next.js 404 page if slug not found
	}

	return (
		<div className="max-w-3xl mx-auto px-4 py-10">
			{/* Blog Image */}
			<div className="relative w-full h-64 md:h-96 mb-6">
				<Image
					src={post.image}
					alt={post.title}
					fill
					className="object-cover rounded-2xl shadow-lg"
				/>
			</div>

			{/* Title & Meta */}
			<h1 className="text-3xl leading-[3rem] md:text-5xl font-bold mb-4">
				{post.title}
			</h1>
			<p className="text-gray-500 text-sm mb-8">
				By {post.author}
			</p>

			{/* Content */}
			<div className="prose prose-lg text-gray-700 max-w-none">
				{post.content
					.split('\n\n')
					.map((paragraph, index) => (
						<p key={index} className="mb-4 leading-[2.3rem]">
							{paragraph.split('\n').map((line, i, arr) => (
								<React.Fragment key={i}>
									{line}
									{i < arr.length - 1 && <br />}
								</React.Fragment>
							))}
						</p>
					))}
			</div>
		</div>
	);
}
