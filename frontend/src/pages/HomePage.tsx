import React, { useEffect, useContext, useState } from 'react'
import { StartupContext } from "@/context/StartupProvider"
import { GetallStartup } from "@/api/startup"
import type { StartupType } from "@/types"
import SearchInput from '@/components/SearchInput'
import StratupsTable from '@/components/StartupsTable'
import { LoaderCircle, SplinePointer } from 'lucide-react'

const HomePage: React.FC = () => {
    const { OnSelectStartups, Startups } = useContext(StartupContext)
    const [Isloading, SetIsloading] = useState<boolean>(false)

    const fetch = async () => {
        SetIsloading(true)
        try {
            const response = await GetallStartup() as {
                startups: StartupType[]
            }
            OnSelectStartups(response.startups)
        }
        finally {
            SetIsloading(false)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    if (Isloading) {
        return <div className='flex h-dvh justify-center items-center'>
            <LoaderCircle className='animate-spin' />
        </div>
    }

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