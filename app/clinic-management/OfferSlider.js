'use client';

import React from 'react'

import Slider from "react-slick";


import Image from 'next/image';

import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BiClinic } from "react-icons/bi";

import offer_slider_01 from "../../assets/imagesource/offer_slider_01.png";
import offer_slider_02 from "../../assets/imagesource/offer_slider_02.png";
import offer_slider_03 from "../../assets/imagesource/offer_slider_03.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const OfferSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
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

            <div className='px-2 p-0'>
                <Image src={offer_slider_01} alt='offer_slider_01' className='mb-0' />
            </div>
            <div className='px-2 p-0'>
                <Image src={offer_slider_02} alt='offer_slider_02' className='mb-0' />
            </div>
            <div className='px-2 p-0'>
                <Image src={offer_slider_03} alt='offer_slider_03' className='mb-0' />
            </div>
            <div className='px-2 p-0'>
                <Image src={offer_slider_01} alt='offer_slider_01' className='mb-0' />
            </div>
            <div className='px-2 p-0'>
                <Image src={offer_slider_02} alt='offer_slider_02' className='mb-0' />
            </div>
            <div className='px-2 p-0'>
                <Image src={offer_slider_03} alt='offer_slider_03' className='mb-0' />
            </div>


        </Slider>
    </div>
  )
}

export default OfferSlider