'use client'

import { useState } from "react";
import Image from "next/image"

import Model from './Model';

import  useAddPropertyModel from '@/app/hooks/useAddPropertyModel'
import CustomButton from "../forms/CustomButton";

const  AddPropertyModel = () => {
    //  設計新增步驟 int step=1
    const [currentStep, setCurrentStep] = useState(1);
    const addPropertymodel =  useAddPropertyModel();
    const content = (
        <>
            <h2 className="mb-6 text-2xl">Choose category </h2>

            <CustomButton
                label="Next"
                onClick={() => 
                    setCurrentStep(2)
                }
            />
        </>
    )
    return(
        <>
            <Model 
                isOpen={addPropertymodel.isOpen}
                close={addPropertymodel.close}
                label="Add property"
                content={content}
            />
        </>
    ) 
}

export default AddPropertyModel;