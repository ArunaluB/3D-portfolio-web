/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// src/components/HeroContent.jsx

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-6 md:px-20 md:mt-20 mt-24 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start grow">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Arunalu Bamunusinghe Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Hi,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            I'm
                        </span>{" "}
                    </span>
                    <div className="text-5xl">
                        <TypeAnimation
                            sequence={[
                                "Arunalu Bamunusinghe",
                                1500,
                                "Teaching",
                                1000,
                                "Full Stack Developer",
                                1000,
                                "Frontend Developer",
                                1000,
                                "Backend Developer",
                                1000,
                                "Mobile App Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a Full Stack Software Engineer with experience in Website,
                    Mobile, and Software development. Check out my projects and skills.
                </motion.p>
                {/* <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn More!
                </motion.a> */}
                <motion.a
                    href="/CV.pdf"
                    download="Arunalu_CV.pdf"
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Download CV
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <img
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={500}
                    width={500}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
