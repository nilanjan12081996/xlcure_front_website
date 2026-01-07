'use client';
import { configureStore } from '@reduxjs/toolkit';
import EstimateSlice from '../Reducer/EstimateSlice'
import ContactUsSlice from '../Reducer/ContactUsSlice'
import PartnerSlice from '../Reducer/PartnerSlice'
const store=configureStore(
    {
        reducer:{
            estimate:EstimateSlice,
            contact:ContactUsSlice,
            partner:PartnerSlice
        },
        devTools: process.env.NODE_ENV
    }
)
export default store