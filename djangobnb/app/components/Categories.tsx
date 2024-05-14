'use client'

import { useState } from 'react';
import Image from "next/image";
import useSearchModel, { SearchQuery } from '../hooks/useSearchModel';


const Categories = () => {
    const searchModel = useSearchModel();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModel.query.country,
            checkIn: searchModel.query.checkIn,
            checkOut: searchModel.query.checkOut,
            guests: searchModel.query.guests,
            bedrooms: searchModel.query.bedrooms,
            bathrooms: searchModel.query.bathrooms,
            category: _category
        }

        searchModel.setQuery(query);
    }

    return (
      <div className="pt-3 cursor-pointer pd-6 flex items-center space-x-12">
        <div
            onClick={() => _setCategory('')} 
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_arctic.jpg"
             alt = "Category - Arctic"
             width={20}
             height={20}
            />

            <span className="text-xs">All</span>

        </div>
        <div
            onClick={() => _setCategory('arctic')} 
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_arctic.jpeg"
             alt = "Category - Arctic"
             width={20}
             height={20}
            />

            <span className="text-xs">Arctic</span>

        </div>

        <div
            onClick={() => _setCategory('domes')}  
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_domes.jpg"
             alt = "Category - Domes"
             width={20}
             height={20}
            />

            <span className="text-xs">Domes</span>

        </div>

        <div
            onClick={() => _setCategory('camping')}  
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_camping.jpeg"
             alt = "Category - Camping"
             width={20}
             height={20}
            />

            <span className="text-xs">Camping</span>

        </div>

        <div
            onClick={() => _setCategory('top_city')}  
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_top_city.jpg"
             alt = "Category - Top City"
             width={20}
             height={20}
            />

            <span className="text-xs">Top city</span>

        </div>

        <div
            onClick={() => _setCategory('beachfront')}   
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
             src="/category_beachfront.jpg"
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