import { DataTypes, Model, Sequelize } from 'sequelize';

export class EmployeeModel extends Model {}

export function initEmployeeModel(sequelize: Sequelize) {
  EmployeeModel.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'start_date',
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'employees',
    timestamps: false,
  });
}
