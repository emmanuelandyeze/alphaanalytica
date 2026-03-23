import connectToDatabase from '../lib/mongodb';
import PageContent from '../models/PageContent';
import BlogModel from '../models/Blog';
import About from '../components/About';
import HeroText from '../components/HeroText';
import Landing from '../components/Landing';
import LandingImage from '../components/LandingImage';
import NewsAndArticles from '../components/NewsAndArticles';
import Services from '../components/Services';
import Process from '../components/Process';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function Home() {
	await connectToDatabase();
	const homeData = await PageContent.find({ page: 'home' });
	const latestBlogs = await BlogModel.find({ published: true })
		.sort({ createdAt: -1 })
		.limit(3);
	
	const content = homeData.reduce((acc, item) => {
		acc[item.section] = item.content;
		return acc;
	}, {});

	return (
		<main className="font-sans">
			<Landing content={content.landing} />
			<LandingImage content={content.landingImage} />
			<Services content={content.industries} />
			<HeroText content={content.heroText} />
			<Process content={content.process} />
			<NewsAndArticles articles={JSON.parse(JSON.stringify(latestBlogs))} />
		</main>
	);
}
