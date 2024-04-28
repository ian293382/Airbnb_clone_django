'use client';
import useAddPropertyModel from "@/app/hooks/useAddPropertyModel";

const AddPropertyButton = () => {
    const addPropertyModel = useAddPropertyModel();

    const airbnbYourHome =  () => {
        addPropertyModel.open()
    }
    return (
        <div 
            onClick={airbnbYourHome}  
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bd-gray-200"
        
        >
            Django bnb your home
        </div>
    )
}

export default AddPropertyButton;