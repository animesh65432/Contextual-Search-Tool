export type StartupType = {
    id: number,
    name: string,
    sector: "Artificial Intelligence" | "CleanTech" | "HealthTech" | "FinTech" | "EdTech" | "Food & Beverage" | "Cybersecurity" | "IoT" | "SaaS" | "Biotechnology" | "E-commerce" | "Logistics" | "Gaming" | "AgriTech" | "Entertainment" | "Quantum Computing" | "Pet Services" | "Blockchain" | "Travel" | "Construction" | "Materials Science" | "Fitness" | "LegalTech" | "Aerospace" | "InsurTech" | "PropTech" | "Music Tech" | "Energy Storage" | "Retail Tech" | "Water Technology" | "Cloud Computing" | "Neurotechnology" | "Automotive" | "Social Media" | "Chemical Technology" | "HR Tech" | "Media Tech" | "Marine Technology" | "Industrial IoT" | "Voice Technology",
    location: string,
    funding_stage: string,
    description: string,
    founded: string,
    team_size: number
}

export type SearchStartupType = {
    startup: StartupType
}