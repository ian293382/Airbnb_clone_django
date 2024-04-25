'use client'

import Model from "./Model"

import { useState } from "react"
import useLoginModel from "@/app/hooks/useLoginModel"
import CustomButton from "../forms/CustomButton"

const LoginModel = () => {
    const loginModel = useLoginModel()

    const  content = (
        <>
          
            <form action="" className="space-y-4">
                 <input placeholder="your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                 <input placeholder="your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

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
            label="Log in"
            content={content}
            isOpen={loginModel.isOpen}
            close={loginModel.close}
        />
    )
}

export default LoginModel;