"use client"
import type { ColumnDef } from "@tanstack/react-table"
import type { StartupType } from "@/types/index"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { ArrowDown } from "lucide-react"

export const columns: ColumnDef<StartupType>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "sector",
        header: ({ column }) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">Sector <ArrowDown className="h-1" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 max-h-96 overflow-y-auto">
                    <DropdownMenuRadioGroup value={(column.getFilterValue() as string) ?? ""}
                        onValueChange={(value) => column.setFilterValue(value || undefined)}>
                        <DropdownMenuRadioItem value="Artificial Intelligence">Artificial Intelligence</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="CleanTech">CleanTech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="HealthTech">HealthTech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="FinTech">FinTech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="EdTech">EdTech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Food & Beverage">Food & Beverage</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Cybersecurity">Cybersecurity</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="IoT">IoT</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="SaaS">SaaS</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Biotechnology">Biotechnology</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="E-commerce">E-commerce</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Logistics">Logistics</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Gaming">Gaming</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="AgriTech">AgriTech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Entertainment">Entertainment</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Quantum Computing">Quantum Computing</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Pet Services">Pet Services</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Blockchain">Blockchain</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Travel">Travel</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Construction">Construction</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Materials Science">Materials Science</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Fitness">Fitness</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="LegalTech">LegalTech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Aerospace">Aerospace</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="InsurTech">InsurTech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="PropTech">PropTech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Music Tech">Music Tech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Energy Storage">Energy Storage</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Retail Tech">Retail Tech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Water Technology">Water Technology</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Cloud Computing">Cloud Computing</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Neurotechnology">Neurotechnology</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Automotive">Automotive</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Social Media">Social Media</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Chemical Technology">Chemical Technology</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="HR Tech">HR Tech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Media Tech">Media Tech</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Marine Technology">Marine Technology</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Industrial IoT">Industrial IoT</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Voice Technology">Voice Technology</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Well">Well</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "location",
        header: "Location"
    },
    {
        accessorKey: "team_size",
        header: "Team Size"
    },
    {
        accessorKey: "founded",
        header: "Founded"
    },
    {
        accessorKey: "funding_stage",
        header: "Funding stage"
    }
]