import { createContext, useState, type ReactNode } from "react"
import type { StartupType } from "@/types"

export const StartupContext = createContext<{
    Startups: StartupType[] | null,
    OnSelectStartups: (startups: StartupType[]) => void
}>({
    Startups: null,
    OnSelectStartups: () => { }
})

type Props = {
    children: ReactNode
}

export const StartupContextProvider = ({ children }: Props) => {
    const [startups, setstartups] = useState<null | StartupType[]>(null)

    const OnSelectStartups = (startups: StartupType[]) => {
        setstartups(startups)
    }

    return <StartupContext.Provider value={{ Startups: startups, OnSelectStartups }}>
        {children}
    </StartupContext.Provider>
}