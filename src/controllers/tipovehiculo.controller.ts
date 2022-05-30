import { Request, Response } from 'express';
import { TipoVehiculo, TipoVehiculoI } from '../models/TipoVehiculo';

export class TipoVehiculoController{
    public async getAllTipoVehiculo(req: Request, res: Response){
        try{
            const tipoVehiculo: TipoVehiculoI[] = await TipoVehiculo.findAll()
            res.status(200).json({tipoVehiculo})
        } catch(error){

        }
    }


    public async getOneTipoVehiculo(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const tipoVehiculo: TipoVehiculoI | null = await TipoVehiculo.findOne(
                {
                    where: { id: idParam}
                }
            )

            res.status(200).json(tipoVehiculo)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createTipoVehiculo(req: Request, res: Response){
        const {
            nombre,
        } = req.body;
        try{
            let body:any = {
                nombre
            }

            const user = await TipoVehiculo.create(body);
            res.status(200).json({user})
        } catch(error){

        }
    }
}