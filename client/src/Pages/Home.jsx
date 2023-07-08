import { Form, Input, Modal, Select } from "antd";
import { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

//   Form handling

const handleSubmit = (values) => {
    console.log(values)
}

  return (
    <>
      <div className="filters d-flex align-items-center justify-content-between px-5 py-2">
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
            <Form.Item label="Date" name='amount'>
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
