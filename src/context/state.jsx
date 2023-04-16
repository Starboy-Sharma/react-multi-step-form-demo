import { createContext, useContext, useState } from "react";

export const AppStateContext = createContext({});

export function AppProvider({ children }) {

    const value = useState({});

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    )
}

export function useAppState() {

    const context = useContext(AppStateContext)

    if (!context) {
        throw new Error("usAppState must be within the AppProvider")
    }

    return context
}