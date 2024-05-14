'use client'

import Model from "./Model";
import { useState } from "react";
import  Calendar from '../forms/Calendar'
import { Range } from 'react-date-range';
import CustomButton from "../forms/CustomButton";
import useSearchModel, { SearchQuery } from "@/app/hooks/useSearchModel";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import DatePicker from "../forms/Calendar";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

const SearchModel = () => {
    let content = (<></>);
    const searchModel = useSearchModel();
    const [numGuests, setNumGuests] = useState<string>('1');
    const [numBedrooms, setNumBedrooms] = useState<string>('0');
    const [numBathrooms, setNumBathrooms] = useState<string>('0');
    const [dateRange, setDateRange]= useState<Range>(initialDateRange);
    const [country, setCountry]= useState<SelectCountryValue>();
    
    //
    //

    const closeAndSearch = () => {
        const newSearchQuery: SearchQuery = {
            country: country?.label,
            checkIn: dateRange.startDate,
            checkOut: dateRange.endDate,
            guests: parseInt(numGuests),
            bedrooms: parseInt(numBedrooms),
            bathrooms: parseInt(numBathrooms),
            category: ''
        }
        // 下面這行函數來自 interface interface SearchModelStore....
        searchModel.setQuery(newSearchQuery)  

        searchModel.close();
    }
    
    //
    // Set date range

    const _setDateRange = (selection: Range) => {
        if (searchModel.step === 'checkin') {
            searchModel.open('checkout')
        } else if (searchModel.step === 'checkout') {
            searchModel.open('details')
        }

        setDateRange(selection);
    }
    
    //
    // Contents

    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Where do you want to go ?</h2>

            <SelectCountry 
                value={country}
                onChange={(value) => setCountry(value)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="Check in date ->"
                    onClick={() =>  searchModel.open('checkin')}
                />

            </div>
        </>
    )

    const contentCheckin = (
        <>
            <h2 className="mb-6 text-2xl">When do you want to check in?</h2>
            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="<- location"
                    onClick={() =>  searchModel.open('location')}
                />

                <CustomButton 
                    label="Check out date ->"
                    onClick={() =>  searchModel.open('checkout')}
                />

            </div>

        </>
    )
    
    const contentCheckout = (
        <>
            <h2 className="mb-6 text-2xl">When do you want to check out?</h2>
            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="<- Check in date"
                    onClick={() =>  searchModel.open('checkin')}
                />

                <CustomButton 
                    label="Detail ->"
                    onClick={() =>  searchModel.open('details')}
                />

            </div>

        </>
    )

    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Details</h2>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label htmlFor="">Number of guests:</label>
                    <input 
                        type="number"
                        min='1'
                        value={numGuests}
                        onChange={(e) => setNumGuests(e.target.value)}
                        placeholder="Number of guests..."
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label htmlFor="">Number of bedrooms:</label>
                    <input 
                        type="number"
                        min='0'
                        value={numBedrooms}
                        onChange={(e) => setNumBedrooms(e.target.value)}
                        placeholder="Number of bedrooms..."
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label htmlFor="">Number of Bathrooms:</label>
                    <input 
                        type="number"
                        min='0'
                        value={numBathrooms}
                        onChange={(e) => setNumBathrooms(e.target.value)}
                        placeholder="Number of bathrooms..."
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
            </div>

          
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="<- Check out date "
                    onClick={() =>  searchModel.open('checkout')}
                />

                <CustomButton 
                    label="Search ->"
                    onClick={closeAndSearch}
                />

            </div>

        </>
    )

    if (searchModel.step == 'location') {
        content = contentLocation;
    }  else if (searchModel.step == 'checkin') {
        content = contentCheckin;
    }  else if (searchModel.step == 'checkout') {
        content = contentCheckout;
    } else if (searchModel.step == 'details') {
        content = contentDetails;
    }

    return (
        <Model
            label="Search"
            content={content}
            isOpen={searchModel.isOpen}
            close={searchModel.close}
            />
    )
}

export default SearchModel