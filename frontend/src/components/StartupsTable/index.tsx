import React from 'react'
import { columns } from "./columns"
import { DataTable } from "./data-table"
import type { StartupType } from "@/types"

type Props = {
    data: StartupType[]
}

const StratupsTable: React.FC<Props> = ({ data }) => {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default StratupsTable