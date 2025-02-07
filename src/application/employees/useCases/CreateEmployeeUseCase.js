export class CreateEmployeeUseCase {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(name) {
    return await this.employeeRepository.createEmployee(name);
  }
} 