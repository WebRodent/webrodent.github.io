import React, { useMemo } from "react";
import Image from "next/image";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
      style={{background: 'linear-gradient(90deg, #1a1a30, #010124)'}}
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-500 leading-relaxed"
            >
              Våre priser
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-white-500"
            >
              Se gjennom pakkene vi tilbyr.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/icon/singlepage.svg"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-white-500 font-medium capitalize my-2 sm:my-7">
                  Enkel nettside
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    "Single-page" nettside
                  </li>
                  <li className="relative check custom-list my-2">
                    Responsivt design
                  </li>
                  <li className="relative check custom-list my-2">
                    Optimalisert for PC og Mobil
                  </li>
                  <li className="relative check custom-list my-2">
                    Skreddersydd etter dine ønsker
                  </li>
                  <li className="relative check custom-list my-2">
                    Vi hjelper deg med å finne hosting
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <a href="mailto:sales@webrodent.com" className="text-2xl text-white-500 text-center mb-4">
                    Kontakt salg
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/icon/dualpage.svg"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-white-500 font-medium capitalize my-2 sm:my-7">
                Flerside-Nettside
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Nettside med navigasjon
                </li>
                <li className="relative check custom-list my-2">
                  Responsivt design
                </li>
                <li className="relative check custom-list my-2">
                  Optimalisert for PC og Mobil
                </li>
                <li className="relative check custom-list my-2">
                  Skreddersydd etter dine ønsker
                </li>
                <li className="relative check custom-list my-2">
                  Vi hjelper deg med å finne hosting
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <a href="mailto:sales@webrodent.com" className="text-2xl text-white-500 text-center mb-4">
                  Kontakt salg
                </a>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/icon/chip2.svg"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-white-500 font-medium capitalize my-2 sm:my-7">
                CHIP - AI for Slack
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Transformer hvordan ditt team jobber
                </li>
                <li className="relative check custom-list my-2">
                  Integrer sømløst med Slack
                </li>
                <li className="relative check custom-list my-2">
                  AI spesialisert for deg og din bedrift
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-white-500 text-center mb-4 ">
                  Kommer snart!<span className="text-white-500"></span>
                </p>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-500 leading-relaxed  mx-auto">
              Gjør deg og din bedrift synlig for hele verden
            </motion.h3>
            <motion.p className="leading-normal text-white-500 mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              Ved å synligjøre deg og din bedrift digitalt øker du horisonten for nye kunder.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Kontakt vårt team
                  </h5><br />
                    <h5 className="text-black-600 text-lg sm:text-1xl lg:text-2xl leading-relaxed font-medium">
                      <a href="mailto:oyvind@webrodent.com">
                        Daglig leder: Øyvind
                      </a>
                    </h5>
                    <h5 className="text-black-600 text-lg sm:text-1xl lg:text-2xl leading-relaxed font-medium">
                      <a href="mailto:mats@webrodent.com">
                        Finans: Mats
                      </a>
                    </h5>
                    <h5 className="text-black-600 text-lg sm:text-1xl lg:text-2xl leading-relaxed font-medium">
                      <a href="mailto:ruben@webrodent.com">
                        Teknisk: Ruben
                      </a>
                    </h5>
                    <h5 className="text-black-600 text-lg sm:text-1xl lg:text-2xl leading-relaxed font-medium">
                      <a href="mailto:post@webrodent.com">
                        Generell: post
                      </a>
                    </h5>
                </div>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
