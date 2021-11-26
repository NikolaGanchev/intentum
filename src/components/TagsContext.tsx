import React, { useRef } from "react";
import Tags from "../utils/TagLoader";

const TagsContext = React.createContext<React.MutableRefObject<Tags>>({ current: new Tags() });

function TagsProvider({ children }: any) {
    const tags = useRef(new Tags());

    return <TagsContext.Provider value={tags}>{children}</TagsContext.Provider>
}

export { TagsContext, TagsProvider };