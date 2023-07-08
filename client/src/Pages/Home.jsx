import { Form, Input, Modal, Select, message } from "antd";
import { useState } from "react";
import axios from 'axios'
import Spinner from "../Components/Spinner";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

//   Form handling

const handleSubmit = async (values) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        await axios.post('http://localhost:8080/api/v1/transections/add-transection', {...values, userid:user._id},)
        setLoading(false);
        message.success("Transaction added successfully")
        setIsModalOpen(false);
    } catch (error) {
        setLoading(false);
        message.error('Failed to add transaction')
    }
}

  return (
    <>
      <div className="filters d-flex align-items-center justify-content-between px-5 py-2">
        {loading && <Spinner/>}
        <div>Range Filters</div>
        <button className="btn btn-primary" onClick={showModal}>Add New</button>
      </div>
      <div className="content">
        
      </div>
      <Modal
          title="Add Transection"
          open={isModalOpen}
          onCancel={handleCancel}
          footer= {false}
        >
         <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Amount" name='amount'>
                <Input type="text" />
            </Form.Item>
            <Form.Item label="Type" name='type'>
                <Select>
                    <Select.Option value='income'>Income</Select.Option>
                    <Select.Option value='expense'>Expense</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Category" name='category'>
                <Select>
                    <Select.Option value='salary'>Salary</Select.Option>
                    <Select.Option value='tip'>Tip</Select.Option>
                    <Select.Option value='project'>Project</Select.Option>
                    <Select.Option value='food'>Food</Select.Option>
                    <Select.Option value='bills'>Bills</Select.Option>
                    <Select.Option value='movie'>Movie</Select.Option>
                    <Select.Option value='medical'>Medical</Select.Option>
                    <Select.Option value='fee'>Fee</Select.Option>
                    <Select.Option value='tax'>Tax</Select.Option>
                    <Select.Option value='other'>Other</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Date" name='date'>
                <Input type="date" />
            </Form.Item>
            <Form.Item label="Refrence" name='refrence'>
                <Input type="text" />
            </Form.Item>
            <Form.Item label="Description" name='description'>
                <Input type="text" />
            </Form.Item>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">SAVE</button>
            </div>
            </Form> 
        </Modal>
    </>
  );
};

export default Home;
