import { createClient, type ClientConfig } from "next-sanity";

const SanityClient: ClientConfig = {
    projectId: "6qsxvofr",
    dataset: "production",
    apiVersion: "2024-12-26",
    useCdn: false
}

export default createClient(SanityClient);