import { Client } from "appwrite"


const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('aura')
    // .setKey(process.env.APPWRITE_API_KEY);