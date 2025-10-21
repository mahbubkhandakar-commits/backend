import { model, Schema } from "mongoose";
import { TClient } from "./client.interface";


const clientSchema = new Schema<TClient>(
    {
        clientName: {
            type: String,
            required: [true, 'Client name is required'],    
            trim: true,
        },
        companyName: {  
            type: String,
            required: [true, 'Company name is required'],
            trim: true,
        },
        clientEmail: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
    
    });


export const Client = model<TClient>('Client', clientSchema);