import Image from 'next/image'
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
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div
                    onClick={()=> setCategory('Arctic')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Arctic' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
            <Image
             src="/category_arctic.jpeg"
             alt = "Category - Arctic"
             width={20}
             height={20}
            />

            <span className="text-xs">Arctic</span>

                </div>

                <div 
                    onClick={() => setCategory('Domes')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Domes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                    >
                    <Image
                    src="/category_domes.jpeg"
                    alt = "Category - Domes"
                    width={20}
                    height={20}
                    />

                    <span className="text-xs">Domes</span>

                </div>

                <div 
                    onClick={() => setCategory('Camping')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Camping' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                    >
                    <Image
                    src="/category_camping.jpeg"
                    alt = "Category - Camping"
                    width={20}
                    height={20}
                    />

                    <span className="text-xs">Camping</span>

                </div>

                <div 
                    onClick={() => setCategory('Top city')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Top city' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                    >
                    <Image
                        src="/category_top_city.jpeg"
                        alt = "Category - Top City"
                        width={20}
                        height={20}
                    />

                    <span className="text-xs">Top city</span>

                </div>

                <div 
                    onClick={() => setCategory('Beachfront')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Beachfront' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                    >
                    <Image
                        src="/category_beachfront.jpeg"
                        alt = "Category - Beachfront"
                        width={20}
                        height={20}
                    />

                    <span className="text-xs">Beachfront</span>

                </div>
            </div>
        </>
    )
}

export default Categories;