'use client'

import Model from "./Model"

import { useState } from "react"
import useSignupModel from "@/app/hooks/useSignupModel"
import CustomButton from "../forms/CustomButton"

const SignupModel = () => {
    const SignupModel = useSignupModel()

    const  content = (
        <>
          
            <form action="" className="space-y-4">
                 <input placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                 <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                 <input placeholder="Repeat your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    the error message
                </div>
                <CustomButton 
                    label='Submit'
                    onClick={ ()=> { console.log('submit test')}}
                />
            </form>
        </>

    )
    
    return (
        <Model
            label="Sign up"
            content={content}
            isOpen={SignupModel.isOpen}
            close={SignupModel.close}
        />
    )
}

export default SignupModel;