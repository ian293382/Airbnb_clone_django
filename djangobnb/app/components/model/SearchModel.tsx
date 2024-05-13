'use client'

import Model from "./Model";
import useSearchModel from "@/app/hooks/useSearchModel";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import { useState } from "react";

const SearchModel = () => {
    let content = (<></>);
    const searchModel = useSearchModel();
    const [country, setCountry]= useState<SelectCountryValue>();

    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Where do you want to go ?</h2>

            <SelectCountry 
                value={country}
                onChange={(value) => setCountry(value as SelectCountryValue)}
            />
        </>
    )

    if (searchModel.step == 'location') {
        content = contentLocation;

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