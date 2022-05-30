import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';
import { Venta, VentaI } from '../models/Venta';

export class VentaController{
    public async getAllVenta(req: Request, res: Response){
        try{
            const venta: VentaI[] = await Venta.findAll(
                {
                    attributes: ["id", "fechaVenta", "valorTotal", "tipoPago"],
                    include:{
                        model:Usuario,
                        attributes: ['nombre']
                    },
                    where: {activo : true}
                }
            ) 
            res.status(200).json({venta})
        } catch(error){

        }
    }

    public async getOneVenta(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const venta: VentaI | null = await Venta.findOne(
                {
                    where: {
                        id: idParam,
                        activo: true

                    }
                }
            )

            res.status(200).json(venta)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createVenta(req: Request, res: Response){
        const {
            fechaVenta,
            valorTotal,
            tipoPago,
            UsuarioId,
            activo,
        } = req.body;
        try{
            let body:VentaI = {
                fechaVenta,
                valorTotal,
                tipoPago,
                UsuarioId,
                activo
            }

            const user = await Venta.create({...body});
            res.status(200).json({user})
        } catch(error){

        }
    }


    public async updateVenta(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            id,
            fechaVenta,
            valorTotal,
            tipoPago,
            UsuarioId,
            activo
        } = req.body

        try{
            let body:VentaI = {
                fechaVenta,
                valorTotal,
                tipoPago,
                UsuarioId,
                activo
            }

            const userExist: VentaI | null = await Venta.findByPk(pk);

            if(!userExist) return res.status(500).json({msg:"El usuario no esiste"})
            await Venta.update(
                body, {
                    where: {id:pk}
                }
            );

        } catch(error){

        }

        const user: VentaI | null = await Venta.findByPk(pk);
        if (user) return res.status(200).json({user})

    }

    public async deleteVenta(req: Request, res: Response){
        const { id:pk } = req.params;
        try{
            const ventaExist: VentaI | null = await Venta.findByPk(pk);
            if(!ventaExist) return  res.status(500).json({msg: "El Registro no exixte en Ventas"})
            await Venta.update(
                {
                    activo: false,
                },
                {
                    where: {id:pk}
                }
            );

            return res.status(200).json({msg: "Registro Eliminado de Ventas"});


        }catch(error){
            
        }
        
    }


}