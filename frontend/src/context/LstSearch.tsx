"use client"

import React, { createContext, useState, type ReactNode } from "react"

export const LstSearchContext = createContext<{
    Lstsearches: string[],
    Onsetlstsearch: (search: string) => void
}>({
    Lstsearches: [],
    Onsetlstsearch: () => { }
})

type Props = {
    children: ReactNode
}


const getInitialLstsearches = (): string[] => {
    if (typeof window === "undefined") return []

    const stored = localStorage.getItem("Lstsearches")
    if (!stored) return []

    const parsed: string[] = JSON.parse(stored)

    return parsed.length > 5 ? parsed.slice(parsed.length - 5) : parsed
}


export const LstSearchProvider: React.FC<Props> = ({ children }) => {
    const [Lstsearches, SetLstSearches] = useState<string[]>(getInitialLstsearches)

    const Onsetlstsearch = (search: string) => {
        SetLstSearches((prev) => {
            let updated = [...prev, search]
            if (updated.length > 5) {
                updated = updated.slice(updated.length - 5)
            }
            localStorage.setItem("Lstsearches", JSON.stringify(updated))
            return updated
        })
    }


    return (
        <LstSearchContext.Provider value={{ Lstsearches, Onsetlstsearch }}>
            {children}
        </LstSearchContext.Provider>
    )
}

export default LstSearchProvider
