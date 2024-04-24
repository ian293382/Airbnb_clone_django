import Image from "next/image";


const Categories = () => {
    return (
      <div className="pt-3 cursor-pointer pd-6 flex items-center space-x-12">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/air_category_01.jpeg"
             alt = "Category - Arctic"
             width={20}
             height={20}
            />

            <span className="text-xs">Arctic</span>

        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_domes.jpeg"
             alt = "Category - Domes"
             width={20}
             height={20}
            />

            <span className="text-xs">Domes</span>

        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_camping.jpeg"
             alt = "Category - Camping"
             width={20}
             height={20}
            />

            <span className="text-xs">Camping</span>

        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_top_city.jpeg"
             alt = "Category - Top City"
             width={20}
             height={20}
            />

            <span className="text-xs">Top city</span>

        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_beachfront.jpeg"
             alt = "Category - Beachfront"
             width={20}
             height={20}
            />

            <span className="text-xs">Beachfront</span>

        </div>
      </div>
    )
}

export default Categories;