import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import React from "react";


const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] max-auto px-6 pb-6">
            <div className="w-[100vw] h-[180vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src='/arctic_1.jpg'
                    alt="arctic_1"
                    className="object-cover h-full w-full"

                
                />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className='mb-6 block text-lg text-gray-600'>
                        4 gusts - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src="/jerry.jpg"
                            width={50}
                            height={50}
                            className="rounded-full "
                            alt="user name"
                        />

                        <p><strong>John Doe</strong> is your host</p>
                    </div>
                    <hr />

                    <p className="mt-6 text-lg flex justify-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation  
                    </p>
                </div>

           
                <ReservationSidebar />
          
            </div>

        </main>
    )
}

export default PropertyDetailPage;