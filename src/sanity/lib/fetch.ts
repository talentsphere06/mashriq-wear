import { createClient } from "next-sanity";


const client = createClient({
    projectId : "gz7ndgki",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-08-01"
})

export async function sanityFetch({query, params = {}}: {query : string, params ?: Record<string, unknown>}){
    return await client.fetch(query, params)
}