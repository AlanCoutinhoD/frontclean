import Layout from '../../shared/components/Layout/Layout';
import AddProductForm from '../components/AddProductForm';

const AddProductPage = () => {
  return (
    <Layout>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <AddProductForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProductPage; 