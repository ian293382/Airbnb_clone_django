'use client'

import Image from "next/image"

import Model from './Model';

import  useAddPropertyModel from '@/app/hooks/useAddPropertyModel'
const  AddPropertyModel = () => {
    const addPropertymodel =  useAddPropertyModel();
    const content = (
        <>
            <h2 className="mb-6 text-2xl">Choose category </h2>
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