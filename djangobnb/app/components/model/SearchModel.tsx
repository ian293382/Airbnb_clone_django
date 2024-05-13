'use client'

import Model from "./Model";
import { useState } from "react";
import  Calendar from '../forms/Calendar'
import { Range } from 'react-date-range';
import CustomButton from "../forms/CustomButton";
import useSearchModel from "@/app/hooks/useSearchModel";
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
    const [dateRange, setDateRange]= useState<Range>(initialDateRange);
    const [country, setCountry]= useState<SelectCountryValue>();
    
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
                    label="Check in date ->"
                    onClick={() =>  searchModel.open('checkin')}
                />

                <CustomButton 
                    label="Detail ->"
                    onClick={() =>  searchModel.open('details')}
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