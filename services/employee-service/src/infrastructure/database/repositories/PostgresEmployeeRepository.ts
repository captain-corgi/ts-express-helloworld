import { EmployeeRepository } from '../../../domain/repositories/EmployeeRepository';
import { Employee, EmployeeStatus } from '../../../domain/entities/Employee';
import { Sequelize, Model, DataTypes } from 'sequelize';
import { initEmployeeModel, EmployeeModel } from '../models/EmployeeModel';

export class PostgresEmployeeRepository implements EmployeeRepository {
  private sequelize: Sequelize;
  constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
    initEmployeeModel(sequelize);
  }

  async findById(id: string): Promise<Employee | null> {
    const emp = await EmployeeModel.findByPk(id);
    return emp ? this.toDomain(emp) : null;
  }

  async findByEmail(email: string): Promise<Employee | null> {
    const emp = await EmployeeModel.findOne({ where: { email } });
    return emp ? this.toDomain(emp) : null;
  }

  async save(employee: Employee): Promise<void> {
    await EmployeeModel.create(this.toPersistence(employee));
  }

  async update(employee: Employee): Promise<void> {
    await EmployeeModel.update(this.toPersistence(employee), { where: { id: employee.id } });
  }

  async delete(id: string): Promise<void> {
    await EmployeeModel.destroy({ where: { id } });
  }

  private toDomain(emp: any): Employee {
    return new Employee(
      emp.id,
      emp.name,
      emp.email,
      emp.startDate,
      emp.status as EmployeeStatus
    );
  }

  private toPersistence(employee: Employee): any {
    return {
      id: employee.id,
      name: employee.name,
      email: employee.email,
      startDate: employee.startDate,
      status: employee.status,
    };
  }
}
