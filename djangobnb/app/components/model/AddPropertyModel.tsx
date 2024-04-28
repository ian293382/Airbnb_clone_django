'use client'

import { useState } from "react";
import Image from "next/image"

import Model from './Model';
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperty/Category";

import  useAddPropertyModel from '@/app/hooks/useAddPropertyModel'

const  AddPropertyModel = () => {
    //
    //  State 設計新增步驟 int step=1
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');

    //
    //


    const addPropertymodel =  useAddPropertyModel();
    //
    // Set datas
    const setCategory = (category: string) => {
        setDataCategory(category)
    }


    //
    //


    const content = (
        <>
            {currentStep == 1? (
                <>
                    <h2 className="mb-6 text-2xl">Choose category </h2>
                    <Categories
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />
                    <CustomButton
                        label="Next"
                        onClick={() => 
                            setCurrentStep(2)
                        }
                    />
                </>

            ) : (
                <p>step 2</p>
            )}  
        
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