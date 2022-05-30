import { Request, Response, Application } from 'express';

import { VehiculoController } from '../controllers/vehiculo.controller';

export class VehiculoRoutes{
    public vehiculoController: VehiculoController = new VehiculoController();

    public routes(app: Application): void{
        app.route("/vehiculos").get(this.vehiculoController.getAllVehiculo)
        app.route("/vehiculo/:id").get(this.vehiculoController.getOneVehiculo)
        app.route("/vehiculos").post(this.vehiculoController.createVehiculo)
        // app.route("/ventas").patch(this.ventaController.updateVenta)
        //app.route("/ventas").delete(this.ventaController.deleteVenta)
    }
}