'use client';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import key_features_01 from "../../assets/imagesource/key_features_01.png";
import key_features_02 from "../../assets/imagesource/key_features_02.png";
import key_features_03 from "../../assets/imagesource/key_features_03.png";
import key_features_04 from "../../assets/imagesource/key_features_04.png";
import key_features_05 from "../../assets/imagesource/key_features_05.png";
import key_features_06 from "../../assets/imagesource/key_features_06.png";
import Image from 'next/image';

const KeyFeaturesTab = () => {
  return (
    <div className='KeyFeaturesTab_area'>
        <Tabs>

            <div className="">
                <TabList>
                    <Tab>Workflow & Operations</Tab>
                    <Tab>Financials, Analytics & Compliance</Tab>
                    <Tab>Communication & Integration</Tab>
                </TabList>
            </div>

            <div className="">
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_01} alt='key_features_01' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Sample Processing</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>Organize entire sample collection and retention process with detail records of collection, 
                            test type, retention period. Barcode, unique labelling and sorting feature facilitates sampling 
                            management more efficiently.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_02} alt='key_features_02' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Automated Reporting</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>Report is delivered in portable document format with digital signature and secured with password. 
                            In-patient test results are viewable to doctors and nurses with increased security measure in 
                            application as well as in mobile app. Color code and prominent signs in dashboard is available 
                            to identify test completion status, report delivery status.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_03} alt='key_features_03' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Automated In-patient Report Delivery</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Report for admitted patient is automatically attached with the digital bed note (Feature is integrated 
                            with the xcelcuré Hospital management System)
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_04} alt='key_features_04' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Time Tracking, Traceability & Workflows</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Application validated TAT by tracking processing and handling times to complete test and deliver report. 
                            Audit trail is available to track a sample, a batch of samples, or a "lot" of batches through its lifecycle.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_05} alt='key_features_05' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Dashboard with Latest Updates</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Single dashboard covering latest information on number of bookings, sample collections, 
                            Test completion and Report delivered
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_06} alt='key_features_06' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Remote Imaging (DICOM viewer)</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Inbuilt DICOM viewer facilitates doctors to take decision remotely through app. 
                            It integrates with PACS and helps doctors to take quicker decision.
                          </p>
                       </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_01} alt='key_features_01' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Sample Processing</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>Organize entire sample collection and retention process with detail records of collection, 
                            test type, retention period. Barcode, unique labelling and sorting feature facilitates sampling 
                            management more efficiently.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_02} alt='key_features_02' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Automated Reporting</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>Report is delivered in portable document format with digital signature and secured with password. 
                            In-patient test results are viewable to doctors and nurses with increased security measure in 
                            application as well as in mobile app. Color code and prominent signs in dashboard is available 
                            to identify test completion status, report delivery status.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_03} alt='key_features_03' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Automated In-patient Report Delivery</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Report for admitted patient is automatically attached with the digital bed note (Feature is integrated 
                            with the xcelcuré Hospital management System)
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_04} alt='key_features_04' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Time Tracking, Traceability & Workflows</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Application validated TAT by tracking processing and handling times to complete test and deliver report. 
                            Audit trail is available to track a sample, a batch of samples, or a "lot" of batches through its lifecycle.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_05} alt='key_features_05' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Dashboard with Latest Updates</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Single dashboard covering latest information on number of bookings, sample collections, 
                            Test completion and Report delivered
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_06} alt='key_features_06' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Remote Imaging (DICOM viewer)</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Inbuilt DICOM viewer facilitates doctors to take decision remotely through app. 
                            It integrates with PACS and helps doctors to take quicker decision.
                          </p>
                       </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_01} alt='key_features_01' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Sample Processing</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>Organize entire sample collection and retention process with detail records of collection, 
                            test type, retention period. Barcode, unique labelling and sorting feature facilitates sampling 
                            management more efficiently.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_02} alt='key_features_02' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Automated Reporting</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>Report is delivered in portable document format with digital signature and secured with password. 
                            In-patient test results are viewable to doctors and nurses with increased security measure in 
                            application as well as in mobile app. Color code and prominent signs in dashboard is available 
                            to identify test completion status, report delivery status.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_03} alt='key_features_03' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Automated In-patient Report Delivery</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Report for admitted patient is automatically attached with the digital bed note (Feature is integrated 
                            with the xcelcuré Hospital management System)
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_04} alt='key_features_04' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Time Tracking, Traceability & Workflows</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Application validated TAT by tracking processing and handling times to complete test and deliver report. 
                            Audit trail is available to track a sample, a batch of samples, or a "lot" of batches through its lifecycle.
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_05} alt='key_features_05' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Dashboard with Latest Updates</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Single dashboard covering latest information on number of bookings, sample collections, 
                            Test completion and Report delivered
                          </p>
                       </div>
                       <div className='bg-white rounded-[40px] p-4 lg:p-8 h-[360px] text-center KeyFeaturesBox'>
                          <div className='flex justify-center items-center mb-5'>
                            <Image src={key_features_06} alt='key_features_06' className="" />
                          </div>
                          <h3 className='text-[16px] leading-[20px] lg:text-[20px] lg:leading-[28px] font-bold pb-2 lg:pb-4 text-[#454545]'>Remote Imaging (DICOM viewer)</h3>
                          <p className='text-[15px] font-medium text-[#949494]'>
                            Inbuilt DICOM viewer facilitates doctors to take decision remotely through app. 
                            It integrates with PACS and helps doctors to take quicker decision.
                          </p>
                       </div>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    </div>
  )
}

export default KeyFeaturesTab