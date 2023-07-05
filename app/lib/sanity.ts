import { createClient } from "next-sanity";

const projectId = "0v6j2cro";
const dataset = "production";
const apiVersion = "2023-07-05";

export const client = createClient ({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});