import type { SearchStartupType, StartupType } from "@/types"
export function revampthearray(startups: SearchStartupType[]): StartupType[] {
    let res: StartupType[] = []

    for (let index = 0; index < startups.length; index++) {
        const element = startups[index].startup;
        res.push(element)
    }

    return res
}