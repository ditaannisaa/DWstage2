import { DataTypes,  Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/connection";

interface RegencyAttributes {
  id?: number,
  regency?: string | null,
  provinceId?: number,
  createdAt?: Date,
  updatedAt?: Date
}

export interface RegencyInput extends Optional<RegencyAttributes, 'id'>{ }
export interface RegencyOuput extends Required<RegencyAttributes>{ }

export default class Regency extends Model<RegencyAttributes, RegencyInput> implements RegencyAttributes {
  public id!: number
  public regency!: string
  public provinceId!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Regency.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  regency: {
    allowNull: false,
    type: DataTypes.STRING
  },
  provinceId: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection
})