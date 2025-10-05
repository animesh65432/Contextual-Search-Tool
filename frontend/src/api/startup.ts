import { Call } from "@/services/call"


export const GetallStartup = () => Call({
    path: "/startups",
    method: "GET"
})

export const search = (query: string) => Call({
    path: `/search?query=${query}`,
    method: "GET",

})