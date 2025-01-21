"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var dotenv_1 = require("dotenv");
var client_1 = require("@sanity/client");
(0, dotenv_1.config)();
exports.client = (0, client_1.createClient)({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Or your dataset name
    apiVersion: '2025-01-18', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
