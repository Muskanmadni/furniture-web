"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var clerkMiddleware_1 = require("../node_modules/@clerk/nextjs/dist/types/server/clerkMiddleware");
exports.default = (0, clerkMiddleware_1.clerkMiddleware)({});
exports.config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/",
        "/(api|trpc)(.*)"
    ]
};
