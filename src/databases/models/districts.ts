import { DataTypes,  Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/connection";

interface DistrictAttributes {
  id?: number,
  district?: string | null,
  regencyId?: number,
  createdAt?: Date,
  updatedAt?: Date
}

export interface DistrictInput extends Optional<DistrictAttributes, 'id'>{ }
export interface DistrictOuput extends Required<DistrictAttributes>{ }

export default class District extends Model<DistrictAttributes, DistrictInput> implements DistrictAttributes {
  public id!: number
  public district!: string
  public regencyId!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

District.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  district: {
    allowNull: false,
    type: DataTypes.STRING
  },
  regencyId: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection
})