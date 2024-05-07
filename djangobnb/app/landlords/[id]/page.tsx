import Image from "next/image";

import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";
const LandlordDetailPage = async({ params }: {params: {id: string }}) => {
    // 可以重後端去拿landlord拿資料 呼叫api async await
    const landlord = await apiService.get(`/api/auth/${params.id}`)
    const  userId = await getUserId(); 

    return (
        <div className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                   <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                    <Image 
                        priority={true} 
                        src={landlord.avatar_url}
                        width={200}
                        height={200}
                        className="rounded-full "
                        alt="Landlord name"
                    />

                    <h1 className="mt-6 text-2xl">Landlord name</h1>
                    {userId != params.id && (
                        <ContactButton />
                    )}
                      
                   </div>
                </aside>

                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertyList
                            landlord_id={landlord.id}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LandlordDetailPage;