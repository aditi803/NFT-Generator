import {useState, createContext, useContext } from "react";

const LayerContext = createContext();

export const LayerProvider = ({children}) => {
    const [layerId, setLayerId] =useState('');
    const [collectionId, setCollectionId] =useState('');
    const [loader, setLoader] = useState(false) 
    const value = {layerId, setLayerId, collectionId, setCollectionId, loader, setLoader}

    return <LayerContext.Provider value={value}>{children}</LayerContext.Provider>
}

export function useLayer() {
    return useContext(LayerContext)
}
