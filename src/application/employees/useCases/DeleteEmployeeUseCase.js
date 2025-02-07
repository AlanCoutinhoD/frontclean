export class DeleteEmployeeUseCase {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(id) {
    return await this.employeeRepository.deleteEmployee(id);
  }
} 