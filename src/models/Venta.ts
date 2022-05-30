import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Usuario } from "./Usuario";


export class Venta extends Model {
    public id!: number;
    public fechaVenta!: Date;
    public valorTotal!: number;
    public tipoPago!: string;
    public UsuarioId!: number;
    public activo!: Boolean;

}

export interface VentaI {
    fechaVenta: Date;
    valorTotal: number;
    tipoPago: string;
    UsuarioId: number;
    activo: Boolean;
}

Venta.init(
    {
        fechaVenta: {
            type: DataTypes.DATE,
            allowNull: false
        },
        valorTotal: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        tipoPago: {
            type: DataTypes.ENUM('Efectivo', 'Credito'),
            allowNull: false
        }, 
        UsuarioId: {
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
        tableName: "ventas",
        sequelize: database,
        timestamps: false
    }
    
)

Usuario.hasMany(Venta);
Venta.belongsTo(Usuario);