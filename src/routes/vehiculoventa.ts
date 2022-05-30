import { Request, Response, Application } from 'express';

import { VehiculoVentaController } from '../controllers/vehiculoventa.controller';

export class VehiculoVentaRoutes{
    public vehiculoventaController: VehiculoVentaController = new VehiculoVentaController();

    public routes(app: Application): void{
        app.route("/vehiculoventa").get(this.vehiculoventaController.getAllVehiculoVenta)
        app.route("/vehiculoventas").post(this.vehiculoventaController.createVehiculoVenta)
    }
}