import { Request, Response, Application } from 'express';

import { MarcaController } from '../controllers/marca.controller';

export class MarcaRoutes{
    public marcaController: MarcaController = new MarcaController();

    public routes(app: Application): void{
        app.route("/marcas").get(this.marcaController.getAllMarca)
        app.route("/marca").get(this.marcaController.getOneMarca)
        app.route("/marcas").post(this.marcaController.createMarca)
        // app.route("/ventas").patch(this.ventaController.updateVenta)
        //app.route("/ventas").delete(this.ventaController.deleteVenta)
    }
}