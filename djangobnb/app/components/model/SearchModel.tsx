'use client'

import Model from "./Model";
import useSearchModel from "@/app/hooks/useSearchModel";

const SearchModel = () => {
    let content = (<></>);
    const searchModel = useSearchModel();

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