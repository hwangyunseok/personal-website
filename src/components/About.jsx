import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
            Hi 👋 My name is Yunseok Hwang from Raleigh, North Carolina and I’m a third-year Computer Science and Statistics student at the <b>University of North Carolina at Chapel Hill</b>. My interest in programming started back in high school after watching a Korean Drama, Start-Up. 
            The main character used coding to develop an app that acted as eyes for the usually impaired. Watching this, I was inspired by the power of technology to transform lives and solve real-world problems, ultimately sparking my curiosity for programming. I became interested in learning more about other areas such as Web Development, 3D Modeling, Visual Design, and Machine Learning.
            Fast forward to today, I've leveraged my passion for technology to work on impactful projects that blend my interests in web development, visual design, and machine learning.
            </p>

            <br />

            <p className="text-xl">
            When I’m not at the computer, I'm usually playing soccer, working out, or just hanging out with friends.
            </p>
        </div>
    </div>
  )
}

export default About