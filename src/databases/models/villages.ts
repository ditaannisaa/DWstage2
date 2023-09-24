import { DataTypes,  Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/connection";

interface VillageAttributes {
  id?: number,
  village?: string | null,
  districtId?: number,
  createdAt?: Date,
  updatedAt?: Date
}

export interface VillageInput extends Optional<VillageAttributes, 'id'>{ }
export interface VillageOuput extends Required<VillageAttributes>{ }

export default class Village extends Model<VillageAttributes, VillageInput> implements VillageAttributes {
  public id!: number
  public village!: string
  public districtId!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Village.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  village: {
    allowNull: false,
    type: DataTypes.STRING
  },
  districtId: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection
})