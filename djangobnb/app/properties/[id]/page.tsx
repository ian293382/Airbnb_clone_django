import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import React from "react";
import Link from "next/link";

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";


const PropertyDetailPage = async ({params}: {params: {id: string}}) => {
    const property = await apiService.get(`/api/properties/${params.id}`)
    // 在後端上我是並不是直接回傳一個值 而是回傳一個物件 所以  property =>{ data: {}}
    // 如果你想獲得值 不能寫 property.title 而是 property.data.title

    const userId = await getUserId();
      
    return (
        <main className="max-w-[1500px] max-auto px-6 pb-6">
            <div className="w-[100] h-[100vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src={property.data.image_url}
                    alt="property.image"
                    className="object-cover h-full w-full"

                
                />
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{property.data.title}</h1>

                    <span className='mb-6 block text-lg text-gray-600'>
                    {property.data.guests} guests - {property.data.bathrooms} bathrooms  -{property.data.bedrooms} bedrooms
                    </span>

                    <hr />
                    <Link
                        href={`/landlords/${property.data.landlord.id}`}
                        className="py-6 flex items-center space-x-4"
                    >
                    {property.data.landlord.avatar_url && (
                        <Image 
                            src= {property.data.landlord.avatar_url}
                            width={50}
                            height={50}
                            className="rounded-full "
                            alt="user name"
                        />
                    )}

                        <p><strong> {property.data.landlord.name}</strong> is your host</p>
                    </Link>
                    <hr />

                    <p className="mt-6 text-lg flex justify-start">
                     {property.data.description}
                    </p>
                </div>

           
                <ReservationSidebar
                    property={property.data}
                    userId={userId}
                />
          
            </div>

        </main>
    )
}

export default PropertyDetailPage;