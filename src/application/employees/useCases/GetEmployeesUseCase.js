export class GetEmployeesUseCase {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute() {
    return await this.employeeRepository.getAllEmployees();
  }
} 