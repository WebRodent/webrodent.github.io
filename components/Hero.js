import React, { useMemo } from "react";
import Image from "next/image";
import {isMobile} from 'react-device-detect';
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  list = [
    {
      name: "Løsninger",
      text: isMobile ? "" : "Skreddersydd for dine behov",
      icon: "/assets/icon/website.svg",
    },
    {
      name: "Hosting",
      text: isMobile ? "" : "Vi hjelper deg med hosting",
      icon: "/assets/icon/server.svg",
    },
    {
      name: "AI-Tjenester",
      text: isMobile ? "" : "CHIP - Din AI-bot",
      icon: "/assets/icon/chip.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="" style={{ background: 'linear-gradient(90deg, #1a1a30, #010124)' }}> {/* Full width background */}
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal">
                Din digitale leverandør
              </h1><br />
              {/*<div className="flex space-x-4 mb-12">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-orange-500 leading-normal">Nettsider</h1>
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-green-500 leading-normal">Hosting</h1>
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-orange-500 leading-normal">AI-Tjenester</h1>
              </div>*/}
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-white-500 leading-normal">
                Ta din plass i det <strong>digitale domenet</strong> idag!
              </h1>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/Illustration1.png"
                  alt="Illustration"
                  quality={100}
                  width={612}
                  height={383}
                  style={{ width: '100%', height: 'auto' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="relative w-full flex">
          <ScrollAnimationWrapper
            className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
            {list.map((list, index) => (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                    <img src={list.icon} className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-bold">
                      {list.name}
                    </p>
                    <p className="text-lg text-black-500">{list.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
