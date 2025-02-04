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
    token: 'sk4oYWMr7rTlY8s74H6OV7hCOFB9xYVgpPVJDKXJM2ZkrfxEFATy3qcmV8sYIz6oX7hJxZOCvitpXoyaGZfflhBwK37a6Mc2pdqJhOM50GLKHsQPg1cuvsUiCJj22oSvmAIO7zTMKlDNhYxk5RhCvSLa9pqMJued90Gd4H6fIZBaY05WpmMF', // API token for private datasets
    useCdn: false, // Disable CDN for real-time updates
});
