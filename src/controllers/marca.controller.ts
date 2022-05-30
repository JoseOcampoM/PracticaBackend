import { Request, Response } from 'express';
import { Marca, MarcaI } from '../models/Marca';

export class MarcaController{
    public async getAllMarca(req: Request, res: Response){
        try{
            const marca: MarcaI[] = await Marca.findAll()  //select * from usuarios;
            res.status(200).json({marca})
        } catch(error){

        }
    }

    public async getOneMarca(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const marca: MarcaI | null = await Marca.findOne(
                {
                    where: { id: idParam}
                }
            )

            res.status(200).json(marca)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createMarca(req: Request, res: Response){
        const {
            nombre,
        } = req.body;
        try{
            let body:any = {
                nombre
            }

            const user = await Marca.create(body);
            res.status(200).json({user})
        } catch(error){

        }
    }


}