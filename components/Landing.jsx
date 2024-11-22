import Image from 'next/image';

export default function Landing() {
	return (
		<div className="max-w-[85rem] px-4 md:px-0 mx-auto">
			<h1 className="md:text-[2.9rem] text-[2rem] w-full md:w-[70%] font-[600] md:font-[400] leading-[2.8rem] md:leading-[3.6rem] text-[#0E202A] mt-10">
				Innovative Chemical Solutions for a Smarter,
				Sustainable Future.
			</h1>
			<p className="text-[#949494] md:w-[50%] w-full mt-5 leading-[1.5rem] md:leading-[1.8rem] font-light">
				At Alpha Analytica, we combine advanced analytical
				techniques with scientific expertise to deliver
				precise insights.
			</p>
		</div>
	);
}
