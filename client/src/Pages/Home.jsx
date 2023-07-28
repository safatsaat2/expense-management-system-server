import { Form, Input, Modal, Select, Table, message, DatePicker } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import moment from "moment";
import { Icon } from "@iconify/react";
import Analytics from "../Components/Analytics";
const { RangePicker } = DatePicker;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTransection, setAllTransection] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState([]);
  const [viewData, setViewData] = useState('table')
  const [editable, setEditable] = useState(null)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Table Data

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Refrence",
      dataIndex: "refrence",
    },
    {
      title: "Action",
      render: (text, record) =>(
        <div>
          <Icon icon="material-symbols:edit-outline" onClick={() =>{
            setEditable(record)
            setIsModalOpen(true)
          }}/>
          <Icon icon="material-symbols:delete-outline" className="mx-2" />
        </div>
      )
    },
  ];

  // useEffect hook

  useEffect(() => {
    // get all transaction
    const getAllTransections = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        const res = await axios.post(
          "http://localhost:8080/api/v1/transections/get-transection",
          { userid: user._id, frequency, selectedDate, type }
        );
        setLoading(false);
        setAllTransection(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
        message.error("Issue with transaction");
      }
    };
    getAllTransections();
  }, [frequency, selectedDate, type]);

  //   Form handling

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      await axios.post(
        "http://localhost:8080/api/v1/transections/add-transection",
        { ...values, userid: user._id }
      );
      setLoading(false);
      message.success("Transaction added successfully");
      setIsModalOpen(false);
      setEditable(null)
    } catch (error) {
      setLoading(false);
      message.error("Failed to add transaction");
    }
  };

  return (
    <>
      <div className="filters d-flex align-items-center justify-content-between px-5 py-2">
        {loading && <Spinner />}
        <div>
          <h6>Select Frequency</h6>
          <Select value={frequency} onChange={(values) => setFrequency(values)}>
            <Select.Option value="7">Last 1 week</Select.Option>
            <Select.Option value="30">Last 1 Month</Select.Option>
            <Select.Option value="365">Last 1 Year</Select.Option>
            <Select.Option value="custom">custom</Select.Option>
          </Select>
          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedDate(values)}
            />
          )}
        </div>
        <div>
          <h6>Select Type</h6>
          <Select value={type} defaultActiveFirstOption={true} onChange={(values) => setType(values)}>
            <Select.Option  value="all">ALL</Select.Option>
            <Select.Option value="income">INCOME</Select.Option>
            <Select.Option value="expense">EXPENSE</Select.Option>
          </Select>
          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedDate(values)}
            />
          )}
        </div>
        <div>
          <Icon className={`mx-2 fs-5 anticon ${viewData === 'table' ? "active-icon" : 'inactive-icon'}`} icon="uiw:menu" onClick={()=> setViewData('table')} />
          <Icon className={`mx-2 fs-5 anticon ${viewData === 'analytics' ? "active-icon" : 'inactive-icon'}`} icon="teenyicons:area-chart-outline" onClick={()=> setViewData('analytics')} />
        </div>
        <div>
          <button className="btn btn-primary" onClick={showModal}>
            Add New
          </button>
        </div>
      </div>
      <div className="content">
        {
          viewData === "table" ? 
          <Table columns={columns} dataSource={allTransection} />
          : <Analytics allTransection={allTransection}/>
        }
      </div>
      <Modal
        title={editable ? "Edit Transection" : "Add Transection"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit} initialValues={editable}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">Tip</Select.Option>
              <Select.Option value="project">Project</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
              <Select.Option value="movie">Movie</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="fee">Fee</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Refrence" name="refrence">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              SAVE
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Home;
