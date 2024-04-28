'use client'

import Image from "next/image"

import Model from './Model';

import  useAddPropertyModel from '@/app/hooks/useAddPropertyModel'
const  AddPropertyModel = () => {
    const addPropertymodel =  useAddPropertyModel();

    return(
        <>
            <Model 
                isOpen={addPropertymodel.isOpen}
                close={addPropertymodel.close}
                label="Add property"
                content={(
                    <p>Yo</p>
                )}
            />
        </>
    ) 
}

export default AddPropertyModel;