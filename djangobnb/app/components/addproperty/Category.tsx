interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return(
        <>
            <div className="pt-3 cursor-pointer pt-6 flex item-center space-x-12">
                asdf
            </div>
        </>
    )
}

export default Categories;