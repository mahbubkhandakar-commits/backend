import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ClientService } from "./client.service";
import sendResponse from "../../utils/sendResponse";
import { HttpStatus } from "http-status-ts";

const createClient = catchAsync(async (req:Request, res:Response) => {
    const result = await ClientService.createClientInToDB(req.body);
    sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: 'Client created successfully',
    data: result,
  });

})

const getAllClients = catchAsync(async (req:Request, res:Response) => {
    const result = await ClientService.getAllClientsFromDB();
    sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: 'Clients fetched successfully',
    data: result,
  });
})

const updateClient = catchAsync(async (req: Request, res: Response) => {
    const clientId = req.params.id;
    const updateData = req.body;
    const result = await ClientService.updateClientInDb(clientId, updateData);
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Client updated successfully',
        data: result,
    });
});
const deleteClient = catchAsync(async (req: Request, res: Response) => {
    const clientId = req.params.id;
    const result = await ClientService.deleteClientFromDb(clientId);
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Client deleted successfully',
        data: result,
    });
});

export const clientController = {
    createClient,
    getAllClients,
    updateClient,
    deleteClient
}

