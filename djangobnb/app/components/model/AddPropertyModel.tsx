'use client'

import { ChangeEvent, useState } from "react";
import Image from "next/image"

import Model from './Model';
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperty/Category";

import  useAddPropertyModel from '@/app/hooks/useAddPropertyModel'
import SelectCountry, {  SelectCountryValue } from "../forms/SelectCountry";

// 負責後台傳遞
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation"

const AddPropertyModel = () => {
    //
    // States

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<string[]>([]);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGuests, setDataGuests] = useState('');
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
    const [dataImage, setDataImage] = useState<File | null>(null);

    //
    //

    const addPropertyModel = useAddPropertyModel();
    const router = useRouter();

    //
    // Set datas
    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0];

            setDataImage(tmpImage);
        }
    }

    //
    // SUbmit

    const submitForm = async () => {
        console.log('submitForm');

        if (
            dataCategory &&
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataCountry &&
            dataImage
        ) {
            const formData = new FormData();
            formData.append('category', dataCategory);
            formData.append('title', dataTitle);
            formData.append('description', dataDescription);
            formData.append('price_per_night', dataPrice);
            formData.append('bedrooms', dataBedrooms);
            formData.append('bathrooms', dataBathrooms);
            formData.append('guests', dataGuests);
            formData.append('country', dataCountry.label);
            formData.append('country_code', dataCountry.value);
            formData.append('image', dataImage);

            const response = await apiService.post('/api/properties/create/', formData);

            if (response.success) {
                console.log('SUCCESS :-D');

                router.push('/');

                addPropertyModel.close();
            } else {
                console.log('Error');

                const tmpErrors: string[] = Object.values(response).map((error: any) =>{
                    return error;
                })
                setErrors(tmpErrors);
            }
        }
    }

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

            ): currentStep == 2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Describe your place </h2>
                   
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex-flex-col space-y-2">
                            <label htmlFor="">Title</label>
                            <input
                                type="text"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex-flex-col space-y-2">
                            <label htmlFor="">Description</label>
                            <textarea
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    </div>  
                    <CustomButton
                            label="Previous"
                            className="mb-2 bg-black hover:bg-gray-800"
                            onClick={() => 
                                setCurrentStep(1)
                            }
                        />
                    <CustomButton
                            label="Next"
                            onClick={() => 
                                setCurrentStep(3)
                            }
                        />
                </>

            ): currentStep == 3 ? (
                <>
                    <h2 className="mb-6 text-2xl">Details </h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex-flex-col space-y-2">
                            <label htmlFor="">Price per night</label>
                            <input
                                type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex-flex-col space-y-2">
                            <label htmlFor="">Bedrooms</label>
                            <input
                                type="number"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex-flex-col space-y-2">
                            <label htmlFor="">Bathrooms</label>
                            <input
                                type="number"
                                value={dataBathrooms}
                                onChange={(e) => setDataBathrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex-flex-col space-y-2">
                            <label htmlFor="">Maximum Number of Guests</label>
                            <input
                                type="number    "
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    </div>

                    <CustomButton
                        label="Previous"
                        className="mb-2 bg-black hover:bg-gray-800"
                        onClick={() => 
                        setCurrentStep(2)
                     }
                    />
                    <CustomButton
                        label="Next"
                        onClick={() => 
                            setCurrentStep(4)
                        }
                    />

                </>

         
            ): currentStep == 4 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Location</h2>

                    <div className='pt-3 pb-6 space-y-4'>
                        <SelectCountry 
                            value={dataCountry}
                            onChange={(value) => setDataCountry(value as SelectCountryValue)}
                        />
                    </div>

                    <CustomButton
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(3)}
                    />

                    <CustomButton
                        label='Next'
                        onClick={() => setCurrentStep(5)}
                    />
                </>
            ): currentStep == 5 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Image</h2>

                    <div className='pt-3 pb-6 space-y-4'>
                        <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={setImage}

                            />
                        </div>

                        {dataImage && (
                            <div className="w-[200px] h-[150px] relative">
                                <Image 
                                    fill
                                    alt="Uploaded image"
                                    src={URL.createObjectURL(dataImage)}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        )}
                    </div> 
                    {errors.map((error, index) => {
                        return (
                            <div
                                key={index} 
                                className="p-5 mb-4 bg-airbnb text-white rounded-xl opacity-80">
                                {error}    
                            </div>
                        )
                    })}
                    <CustomButton
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(4)}
                    />

                    <CustomButton
                        label='Submit'
                        onClick={submitForm}
                    />   
                </>
                ):null
            }
        
        </>
    )
    return (
        <>
            <Model
                isOpen={addPropertyModel.isOpen}
                close={addPropertyModel.close}
                label="Add property"
                content={content}
            />
        </>
    )
}

export default AddPropertyModel;