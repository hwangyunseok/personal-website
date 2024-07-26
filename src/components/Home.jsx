import React from 'react';
import HeroIcon from'../assets/heroIcon.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black
        via-black to-gray-800"
    >
        <div className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I'm a Software Engineer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                I am an aspiring Software Engineer with a strong background in software development and a keen interest in artificial intelligence and machine learning.
                My experience includes frontend development and visual design, with a career focus on full-stack development and leveraging AI to create innovative solutions.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25}
                            className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroIcon}
                alt="my profile"
                className="flex rounded-3xl mx-auto w-1/2"
                />
            </div>
        </div>
    </div>
  )
}

export default Home;