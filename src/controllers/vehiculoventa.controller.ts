import { Request, Response } from 'express';
import { VehiculoVenta, VehiculoVentaI } from '../models/VehiculoVenta';

export class VehiculoVentaController{
    public async getAllVehiculoVenta(req: Request, res: Response){
        try{
            const vehiculoventa: VehiculoVentaI[] = await VehiculoVenta.findAll(
                {
                    where: {activo : true}
                }
            )  //select * from usuarios;
            res.status(200).json({vehiculoventa})
        } catch(error){

        }
    }

    public async createVehiculoVenta(req: Request, res: Response){
        const {
            VehiculoId,
            VentaId,
            activo
        } = req.body;
        try{
            let body:VehiculoVentaI = {
                VehiculoId,
                VentaId,
                activo
            }

            const vehiculoventa = await VehiculoVenta.create({...body});
            res.status(200).json({vehiculoventa})
        } catch(error){

        }
    }
}