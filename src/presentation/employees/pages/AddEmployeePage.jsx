import Layout from '../../shared/components/Layout/Layout';
import AddEmployeeForm from '../components/AddEmployeeForm';

const AddEmployeePage = () => {
  return (
    <Layout>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <AddEmployeeForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddEmployeePage; 