import React from "react";
import Image from "next/image";
import LogoWR from "../../public/assets/webrodent_logo.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24" id="contact">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoWR className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Webrodent</strong> - Din digitale leverandør
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a href="https://github.com/WebRodent" target="_blank" rel="noopener noreferrer">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
                <Image
                  src="/assets/icon/github.svg"
                  width={45}
                  height={45}
                  alt="Github Icon"
                />
              </div>
            </a>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Webrodent</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
