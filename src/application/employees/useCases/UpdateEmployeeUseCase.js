export class UpdateEmployeeUseCase {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(id, name) {
    return await this.employeeRepository.updateEmployee(id, name);
  }
} 