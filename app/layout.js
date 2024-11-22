import localFont from 'next/font/local';
import './globals.css';
import { Sora } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata = {
	title: 'Alpha Analytica',
	description:
		'Your trusted partner in analytical chemistry.',
};

const sora = Sora({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={sora.className}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
