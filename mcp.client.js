import { Client } from "@modelcontextprotocol/sdk/client";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";
import { Type } from "@sinclair/typebox";

config();

const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
});


const transport = new StdioClientTransport({
    command: "node",
    args: ["./mcp.server.js"]
});

const client = new Client(
    {
        name: "example-client",
        version: "1.0.0"
    });

await client.connect(transport);

client.listTools().then(response => {
    
});
