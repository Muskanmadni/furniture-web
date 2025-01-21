// sanityClient.ts
import {config} from 'dotenv';
import { createClient } from '@sanity/client';


config()
export const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,        // Or your dataset name
  apiVersion: '2025-01-18',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});