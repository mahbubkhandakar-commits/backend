import { TClient } from "./client.interface";
import { Client } from "./client.model";

const createClientInToDB = async (payload: TClient) => {
  const result = await Client.create(payload);
  return result;
};

const getAllClientsFromDB = async () => {
    const result = await Client.find().exec();
    return result;
}

const updateClientInDb = async(clientId: string, updateData: Partial<TClient>) => {
    const result = await Client.findByIdAndUpdate(clientId, updateData, { new: true }).exec();
    return result;
}

const deleteClientFromDb = async(clientId: string) => {

    const result = await Client.findByIdAndDelete(clientId).exec();
    return result;
}



export const ClientService = {
    createClientInToDB,
    getAllClientsFromDB,
    updateClientInDb,
    deleteClientFromDb
}