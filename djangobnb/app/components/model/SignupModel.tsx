'use client'

import Model from "./Model"

import { useState } from "react"
import { useRouter } from "next/navigation"
import useSignupModel from "@/app/hooks/useSignupModel"
import CustomButton from "../forms/CustomButton"
import apiService from "@/app/services/apiService"

const SignupModel = () => {
    //
    // Variables

    const router = useRouter();
    const SignupModel = useSignupModel()
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    //
    // Submit functionality
    const sumbitSignup = async () => {
        const formData ={
            email: email,
            password1: password1,
            password2: password2,
        }
        const response = await apiService.post('/api/auth/register/', formData)
       if (response.access){
        // handleLogin
        SignupModel.close();

        router.push('/')
       } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })
            setErrors(tmpErrors);
       }
    }

    const  content = (
        <>
          
            <form
                action={sumbitSignup}
                className="space-y-4"
            >
                 <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                 <input onChange={(e) =>setPassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                 <input  onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                {errors.map((error, index) => {
                    return (
                        <div
                            key= {`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        
                        >
                            {error}
                        </div>
                    )
                })}
             
                <CustomButton 
                    label='Submit'
                    onClick={sumbitSignup}
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