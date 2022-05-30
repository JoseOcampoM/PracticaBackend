import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Vehiculo } from './Vehiculo';
import { Venta } from './Venta';

export class VehiculoVenta extends Model {
    public VehiculoId!: number;
    public VentaId!: number;
    public activo!: boolean;
}

export interface VehiculoVentaI {
    VehiculoId: number;
    VentaId: number;
    activo: boolean;
}

VehiculoVenta.init(
    {
        VehiculoId: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        VentaId: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        tableName: 'vehiculo_venta',
        sequelize: database,
        timestamps: true
    }
)

Venta.belongsToMany(Vehiculo, {through: VehiculoVenta});
Vehiculo.belongsToMany(Venta, {through: VehiculoVenta});