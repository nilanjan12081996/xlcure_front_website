import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import hospital_banner from "../../assets/imagesource/hospital_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import hospital_01 from "../../assets/imagesource/hospital_01.png";
import crm_img from "../../assets/imagesource/crm_img.png";

import crm_img_01 from "../../assets/imagesource/crm_img_01.png";
import crm_img_02 from "../../assets/imagesource/crm_img_02.png";
import crm_img_03 from "../../assets/imagesource/crm_img_03.png";
import crm_img_04 from "../../assets/imagesource/crm_img_04.png";
import crm_img_05 from "../../assets/imagesource/crm_img_05.png";
import crm_img_06 from "../../assets/imagesource/crm_img_06.png";
import crm_img_07 from "../../assets/imagesource/crm_img_07.png";
import crm_img_08 from "../../assets/imagesource/crm_img_08.png";

import { BiCheck } from "react-icons/bi";

import { GoArrowUpRight } from "react-icons/go";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BiSolidUniversalAccess } from "react-icons/bi";
import { PiDevicesFill } from "react-icons/pi";
import { BiSolidCustomize } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

const page = () => {
  return (
    <div>
        {/* Banner section start here */}
        <div className='banner_area py-0 lg:p-0'>
            <div className="inner_banner_area relative lg:mx-[30px] mx-4 my-5 lg:my-0">
                <Image src={hospital_banner} alt='hospital_banner' className="" />
                <div className="banner_content_area absolute w-full h-full left-0 top-0">
                    <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                        <div className="w-full px-0 pt-0 lg:pt-0">
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Privacy <span className='text-[#FF0016]'>Policy</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}

        {/* wrapper section start here */}
        <div className='wrapper_section mb-10 px-4 lg:px-0'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <div className='w-full'>
                    <div>
                        <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-2 lg:pb-8 text-black font-bold text-center">
                            Privacy Policy <span className="text-[#ff0016]">xcelcuré™</span>
                        </h2>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                            When you use xcelcuré mobile app, some personal information is collected from and about you. We are committed to protecting the 
                            security of this information and safeguarding your privacy. This privacy policy sets out the details of the personal information 
                            collected, the manner in which it is collected, by whom as well as the purposes for which it is used. At registration you accepted 
                            the terms of this Privacy Policy and your use of the App signifies your continued acceptance thereof. This Privacy Policy may be 
                            revised from time to time and you will be notified of all such changes. In order to use the App, you will be required to consent 
                            to both the terms of the Privacy Policy and the xcelcure Hospital Management System integrated with Mobile appData Access and 
                            Knowledge Sharing Protocol as revised from time to time.
                        </p>
                        <div className='mb-4'>
                           <p className="text-[#ff0016] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                               <strong>1. INFORMATION COLLECTED AND MANNER OF COLLECTION</strong>
                            </p>
                            <div className='bg-white border border-[#dfdfdf] rounded-[10px] p-3'>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                    When you register on the App, the following information is collected from you and stored securely on a server operated 
                                    and managed by the cloud datacenter (Microsoft/Digital Ocean/AWS) –
                                </p>
                                <ul className='mb-4 pl-5'>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">name</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">phone number</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">age</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">sex</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">postal address</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">email address and</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">same details of your family members (optional)</li>
                                </ul>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    This information will be stored on the Server and a unique digital id (DiD) will be pushed to your App. The DiD will 
                                    thereafter be used to identify you in all subsequent App related transactions and will be associated with any data or 
                                    information uploaded from the App to the Server. At registration, your location details are also captured and uploaded to the Server.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    When any of your family members are admitted in hospital, their billing summary, clinical information will be shared 
                                    with you only. This information will be stored on the Server and a unique digital id (DiD) will be pushed to your App. 
                                    The DiD will thereafter be used to identify you in all subsequent App related transactions and will be associated with any 
                                    data or information uploaded from the App to the Server. At registration, your location details are also captured and uploaded to the Server.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    The App collects your location data and stores it securely on your mobile device.This information will 
                                    only be uploaded to the Server along with your DiD.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    App has provision to upload your medical records – prescriptions, images, diagnostic records and medicines.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                   The App has provision of online doctor consultation, appointment booking, upload and sharing of medical 
                                   records with doctor. Payment is done through a secured payment gateway by UPI, debit or credit card,
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                   The App shall facilitate the verification of the User identity through the Aadhaar Number of the user for the 
                                   purpose of registration. The Aadhaar number shall not be stored by iPurna App.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* wrapper section ends here */}

    </div>
  )
}

export default page