'use client';

import React from 'react'

import Slider from "react-slick";


import Image from 'next/image';

import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BiClinic } from "react-icons/bi";

import feature_01 from "../../assets/imagesource/feature_01.png";
import feature_02 from "../../assets/imagesource/feature_02.png";
import feature_03 from "../../assets/imagesource/feature_03.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const FeaturesSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
  };
  return (
    <div>
        <Slider {...settings}>

            <div className='px-2 p-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_01} alt='feature_01' className='mb-8' />
                    <div className="absolute right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[30px] leading-[36px] border-b border-[#E6E6E6] pb-4 pr-10">Email and SMS notification</h3>
                    <p className="text-[15px] text-[#464646] mt-3">
                      Instant alerts sent to patients and staff for appointments, updates, and important actions.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_02} alt='feature_02' className='mb-8' />
                    <div className="absolute right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[30px] leading-[36px] border-b border-[#E6E6E6] pb-4 pr-10">Intra office messaging</h3>
                    <p className="text-[15px] text-[#464646] mt-3">
                      A built-in messaging system that improves coordination and streamlines communication across departments.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_03} alt='feature_03' className='mb-8' />
                    <div className="absolute right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[30px] leading-[36px] border-b border-[#E6E6E6] pb-4 pr-10">Appointment Schedule</h3>
                    <p className="text-[15px] text-[#464646] mt-3">
                      Effortlessly manage and coordinate patient appointments with a clear, organized scheduling system.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_01} alt='feature_01' className='mb-8' />
                    <div className="absolute right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[30px] leading-[36px] border-b border-[#E6E6E6] pb-4 pr-10">Email and SMS notification</h3>
                    <p className="text-[15px] text-[#464646] mt-3">
                      Instant alerts sent to patients and staff for appointments, updates, and important actions.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_02} alt='feature_02' className='mb-8' />
                    <div className="absolute right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[30px] leading-[36px] border-b border-[#E6E6E6] pb-4 pr-10">Intra office messaging</h3>
                    <p className="text-[15px] text-[#464646] mt-3">
                      A built-in messaging system that improves coordination and streamlines communication across departments.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_03} alt='feature_03' className='mb-8' />
                    <div className="absolute right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[30px] leading-[36px] border-b border-[#E6E6E6] pb-4 pr-10">Appointment Schedule</h3>
                    <p className="text-[15px] text-[#464646] mt-3">
                      Effortlessly manage and coordinate patient appointments with a clear, organized scheduling system.
                    </p>
                  </div>
                </div>
            </div>

        </Slider>
    </div>
  )
}

export default FeaturesSlider