import { defineCollection } from "astro:content";
import { z } from "astro:content";

// Add movies collection here
const movies = defineCollection({
  schema: z.object({
    title: z.string(),
    directo


export const collections = {
  // export movies collection
};
