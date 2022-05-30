import { Request, Response, Application } from 'express';

import { TipoVehiculoController } from '../controllers/tipovehiculo.controller';

export class TipoVehiculoRoutes{
    public tipoVehiculoController: TipoVehiculoController = new TipoVehiculoController();

    public routes(app: Application): void{
        app.route("/tipovehiculos").get(this.tipoVehiculoController.getAllTipoVehiculo)
        app.route("/tipovehiculo/:id").get(this.tipoVehiculoController.getOneTipoVehiculo)
        app.route("/tipovehiculos").post(this.tipoVehiculoController.createTipoVehiculo)
        // app.route("/ventas").patch(this.ventaController.updateVenta)
        //app.route("/ventas").delete(this.ventaController.deleteVenta)
    }
}