import { UsuarioRoutes } from './user';
import { VentaRoutes } from './venta';
import { MarcaRoutes } from './marca';
import { TipoVehiculoRoutes } from './tipovehiculo';
import { VehiculoRoutes } from './vehiculo';
import { VehiculoVentaRoutes } from './vehiculoventa';

export class Routes {
    public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public marcaRoutes: MarcaRoutes = new MarcaRoutes();
    public tipoVehiculoRoutes: TipoVehiculoRoutes = new TipoVehiculoRoutes();
    public vehiculoRoutes: VehiculoRoutes = new VehiculoRoutes();
    public vehiculoventaRoutes: VehiculoVentaRoutes = new VehiculoVentaRoutes();
}