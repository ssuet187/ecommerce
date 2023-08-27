import { createClient } from "next-sanity";

import { apiVersion,dataset,projectId,useCdn } from "sanity/env";

export const client = createClient(
    {
        apiVersion:"2023-08-24",
        dataset:"production",
        projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        token:process.env.Access_Token,
        useCdn:true
    }
)


await client.fetch