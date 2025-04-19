import { Account, AppwriteException, Client } from "appwrite"


export const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('aura')
    // .setKey(process.env.APPWRITE_API_KEY);