import {useState, createContext, useContext } from "react";

const LayerContext = createContext();

export const LayerProvider = ({children}) => {
    const [layerId, setLayerId] =useState('');
    const value = {layerId, setLayerId}

    return <LayerContext.Provider value={value}>{children}</LayerContext.Provider>
}

export function useLayer() {
    return useContext(LayerContext)
}
