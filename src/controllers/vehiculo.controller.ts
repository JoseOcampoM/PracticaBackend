import { Request, Response } from 'express';
import { Vehiculo, VehiculoI } from '../models/Vehiculo';

export class VehiculoController{
    public async getAllVehiculo(req: Request, res: Response){
        try{
            const vehiculo: VehiculoI[] = await Vehiculo.findAll()
            res.status(200).json({vehiculo})
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }


    public async getOneVehiculo(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const vehiculo: VehiculoI | null = await Vehiculo.findOne(
                {
                    where: { id: idParam}
                }
            )

            res.status(200).json(vehiculo)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createVehiculo(req: Request, res: Response){
        const {
            modelo,
            color,
            placa,
            motor,
        } = req.body;
        try{
            let body:any = {
                modelo,
                color,
                placa,
                motor
            }

            const user = await Vehiculo.create(body);
            res.status(200).json({user})
        } catch(error){

        }
    }
}