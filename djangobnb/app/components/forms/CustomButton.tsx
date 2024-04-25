import React from 'react';

// 定義組件接收的 props 的介面
interface CustomerButtonProps {
    label: string;  // label 屬性必須是一個字符串
    onClick?: () => void;  //  void 就是提示 onClick 屬性必須是一個函式 並且這個函式不返回任何值
    className?: string;

}

// 定義一個 React 函數組件，使用泛型 CustomerButtonProps 指定 props 類型
const CustomButton: React.FC<CustomerButtonProps> = ({
    label,
    onClick,
    className
}) => {
    return (
        
        <div
            onClick = {onClick} 
            className={`w-full  py-4 bg-airbnb hover:bg-airbnb-dark text-white text-center rounded-xl transition cursor-pointer ${className}`}    
        >
            {label} 
        </div>
        
    
    );
}

export default CustomButton;
