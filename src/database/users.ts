import { client } from './init';
import { Account, AppwriteException } from 'appwrite';


export const getLoggedUser = async () => {
    try {
        const account = new Account(client)
        return account.get()
    } catch (error) {
        const appwriteError = error as AppwriteException;
        throw new Error(appwriteError.message)
    }
}

export const logout = async () => {
    try {
      const account = new Account(client)
      return account.deleteSession('current')
    } catch (error: unknown) {
      const appwriteError = error as AppwriteException;
      throw new Error(appwriteError.message)
    }
  }
    
export const login = async (email: string, password: string) => {
    try {
        const account = new Account(client)
        return account.createEmailPasswordSession(email, password)
    } catch (error) {
        const appwriteError = error as AppwriteException;
        throw new Error(appwriteError.message)
    }
}
 
export const register = async (email: string, password: string) => {
    try {
      const account = new Account(client)
      return account.create('unique()', email, password)
    } catch (error) {
      const appwriteError = error as AppwriteException;
      throw new Error(appwriteError.message)
    }
}