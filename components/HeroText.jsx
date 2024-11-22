import React from 'react'

const HeroText = () => {
  return (
		<div className="max-w-5xl mx-auto flex flex-col justify-center items-center px-4 md:px-0 py-20">
			<h1 className="text-center text-xl md:text-4xl md:leading-[3.4rem]">
				At Alpha Analytica, we are dedicated to delivering
				precise and reliable chemical insights. With
				cutting-edge technology and a team of experienced
				scientists, we empower industries and researchers to
				achieve groundbreaking results.
			</h1>
			<button className="bg-transparent text-[#121212] border border-[#121212] py-4 mt-6 px-6 rounded-lg hover:bg-primary hover:text-[#ffff] hover:border-primary transition">
				Get in Touch
			</button>
		</div>
	);
}

export default HeroText