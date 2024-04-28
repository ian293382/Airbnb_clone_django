'use client'

import Model from "./Model"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import useLoginModel from "@/app/hooks/useLoginModel"
import CustomButton from "../forms/CustomButton"

import { handleLogin } from "@/app/lib/actions";
import apiService from "@/app/services/apiService"

const LoginModel = () => {
    const loginModel = useLoginModel()
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    const submitLogin = async () => {
        const formDate = {
            email: email,
            password: password
        }

        const response = await apiService.post('/api/auth/login/', JSON.stringify(formDate));   

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh);

            loginModel.close();
            
            router.push('/')

        } else {
            setErrors(response.non_field_errors);
        }
    }

    const  content = (
        <>
          
            <form   action={submitLogin}
                    className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} placeholder="your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                {errors.map((error, index)=> {
                    return (
                        <div
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                                {error}
                        </div>
                    )
                })}
               
                <CustomButton 
                    label='Submit'
                    onClick={submitLogin}
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