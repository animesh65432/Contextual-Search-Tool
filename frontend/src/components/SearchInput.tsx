import React, { useState, useContext } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { search as searchbykeyboard } from "@/api/startup"
import type { SearchStartupType } from "@/types"
import { StartupContext } from "@/context/StartupProvider"
import { LstSearchContext } from "@/context/LstSearch"
import { revampthearray } from "@/utils"
import { Badge } from "@/components/ui/badge"

const SearchInput: React.FC = () => {
    const [input, setinput] = useState<string>("")
    const { OnSelectStartups } = useContext(StartupContext)
    const { Onsetlstsearch, Lstsearches } = useContext(LstSearchContext)

    const handleserch = async () => {
        try {
            let res = await searchbykeyboard(input) as {
                results: SearchStartupType[]
            }
            const data = revampthearray(res.results)
            OnSelectStartups(data)
            Onsetlstsearch(input)
        } catch (error) {
            OnSelectStartups([])
        }
    }

    const OnselectInputbox = (input: string) => {
        setinput(input)
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='w-[95%] m-auto flex gap-6'>
                <Input className='w-[70%]' value={input} placeholder='Search...' onChange={(e) => setinput(e.target.value)} />
                <Button onClick={handleserch}>Search</Button>
            </div>
            <div className='w-[95%] m-auto'>
                {
                    Lstsearches.map((search, index) => <Badge onClick={() => OnselectInputbox(search)} key={index}>{search}</Badge>)
                }
            </div>
        </div>
    )
}

export default SearchInput