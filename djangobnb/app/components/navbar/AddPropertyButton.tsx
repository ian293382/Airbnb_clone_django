'use client';
import useAddPropertyModel from "@/app/hooks/useAddPropertyModel";
import useLoginModel from "@/app/hooks/useLoginModel";

// 為了驗證近來資料 要做interface => 下面函數要改成
interface AddPropertyButtonProps {
    userId?: string| null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> =({
    userId
}) => {
    const loginModel = useLoginModel();
    const addPropertyModel = useAddPropertyModel();

    const airbnbYourHome =  () => {
        if (userId) {
            addPropertyModel.open();
        } else {
            loginModel.open();
        }
    
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