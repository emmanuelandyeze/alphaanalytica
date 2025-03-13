import Image from 'next/image';
import React from 'react'

const Blog = () => {
    const articles = [
			{
				id: 1,
				image: '/images/equipment.jpeg',
				category: 'Research',
				title:
					'Exploring the Future of Analytical Chemistry',
				author: 'Dr. Jane Doe',
				date: 'November 20, 2024',
			},
			{
				id: 2,
				image: '/images/testing.jpeg',
				category: 'Innovation',
				title:
					'How Advanced Instrumentation is Changing the Industry',
				author: 'John Smith',
				date: 'November 18, 2024',
			},
			{
				id: 3,
				image: '/images/landing.jpg',
				category: 'Insights',
				title: 'Top 5 Trends in Chemical Testing for 2024',
				author: 'Prof. Alan Brown',
				date: 'November 15, 2024',
			},
			{
				id: 3,
				image: '/images/landing.jpg',
				category: 'Insights',
				title: 'Top 5 Trends in Chemical Testing for 2024',
				author: 'Prof. Alan Brown',
				date: 'November 15, 2024',
			},
			{
				id: 1,
				image: '/images/equipment.jpeg',
				category: 'Research',
				title:
					'Exploring the Future of Analytical Chemistry',
				author: 'Dr. Jane Doe',
				date: 'November 20, 2024',
			},
			{
				id: 2,
				image: '/images/testing.jpeg',
				category: 'Innovation',
				title:
					'How Advanced Instrumentation is Changing the Industry',
				author: 'John Smith',
				date: 'November 18, 2024',
			},
		];
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
                            <div
                                key={article.id}
                                className="bg-white rounded-lg cursor-pointer overflow-hidden"
                            >
                                {/* Article Image */}
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-cover rounded-3xl"
                                    />
                                </div>
                                {/* Article Content */}
                                <div className="py-6">
                                    <span className="text-xs bg-[#8A7FA2] text-[#f1f1f1] px-4 py-1 rounded-full font-medium">
                                        {article.category}
                                    </span>
                                    <h3 className="text-xl font-semibold mt-2 mb-4">
                                        {article.title}
                                    </h3>
                                    <div className="text-gray-500 text-sm">
                                        <span>By {article.author}</span> •{' '}
                                        <span>{article.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex flex-col justify-center items-center py-5">
                        <button className="bg-transparent text-[#121212] border border-[#121212] py-4 mt-0 px-6 rounded-lg hover:bg-primary hover:text-[#ffff] hover:border-primary transition">
                            Read more
                        </button>
                    </div> */}
                </section>
    </div>
  )
}

export default Blog