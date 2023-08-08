import createClient from "@sanity/client"

export default createClient({
    projectId: "5w9wd3qu",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-09-14",
} )