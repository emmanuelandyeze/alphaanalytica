import About from '../components/About';
import HeroText from '../components/HeroText';
import Landing from '../components/Landing';
import LandingImage from '../components/LandingImage';
import NewsAndArticles from '../components/NewsAndArticles';
import Services from '../components/Services';
import Process from '../components/Process';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="font-sans">
			<Landing />
			<LandingImage />
			<Services />
			<HeroText />
			<Process />
			<NewsAndArticles />
		</div>
	);
}
