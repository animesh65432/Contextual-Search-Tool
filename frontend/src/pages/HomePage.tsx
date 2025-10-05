import React, { useEffect, useContext } from 'react'
import { StartupContext } from "@/context/StartupProvider"
import { GetallStartup } from "@/api/startup"
import type { StartupType } from "@/types"
import SearchInput from '@/components/SearchInput'
import StratupsTable from '@/components/StartupsTable'

const HomePage: React.FC = () => {
    const { OnSelectStartups, Startups } = useContext(StartupContext)

    const fetch = async () => {
        const response = await GetallStartup() as {
            startups: StartupType[]
        }
        OnSelectStartups(response.startups)
    }

    useEffect(() => {
        fetch()
    }, [])

    if (!Startups || Startups.length == 0) {
        return null
    }

    return (
        <div className='pt-10'>
            <SearchInput />
            <StratupsTable data={Startups} />
        </div>
    )
}

export default HomePage