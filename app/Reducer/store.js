'use client';
import { configureStore } from '@reduxjs/toolkit';
import EstimateSlice from '../Reducer/EstimateSlice'

const store=configureStore(
    {
        reducer:{
            estimate:EstimateSlice
        },
        devTools: process.env.NODE_ENV
    }
)
export default store