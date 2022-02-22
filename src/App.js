import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { useState } from "react";
import {Form, Input, message, Modal, DatePicker, Select, InputNumber, Button} from 'antd';
import moment from 'moment';

function App() {

  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false)
  function showModal () {
    setIsModalVisible(true)
  }
  function closeModal() {
    setIsModalVisible(false)
  }

  // Form
  function onFinish (values) {
    console.log('success!', values)
    // Notification message
    message.success('Expense submitted successfully.');
    // Close modal
    setIsModalVisible(false);
  }
  function onFinishFailed (errorInfo) {
    console.log('failed...', errorInfo)
  }

  // Select Options
  const {Option} = Select;

  return (
    <body className="main">
      <header className="header">
        {/* Button to open modal */}
       <button type="button" onClick={showModal} className="modal-btn">
        <span className="btn-text">
          Submit Expense
        </span>
       </button>
       {/* Modal */}
       <Modal 
       className="modal"
       title={
        <div className="modal-heading-container">
          <img src="https://i.imgur.com/9aRlfA4.png" className="modal-img"/>
          <span className="modal-heading">
            Submit Expense
          </span>
        </div> 
        }
       visible={isModalVisible} 
       footer = {[
         <Button type="primary" key="cancel" onClick={closeModal}>
           Cancel
         </Button>,
         <Button form="expense-form" key="submit" htmlType="submit">
           Submit
         </Button>,
       ]}
      //  okText="Submit"
      //  onOk={onFinish} 
       onCancel={closeModal}
       >
        <Form
        name="expense-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{span:6}}
        >
          <Form.Item
          label={<span className="form-label">Title</span>}
          name="expense-title"
          rules={[
            {required:true, message: 'Please input a title for your expense.'}
          ]}
          help="Give this expense a title to be easily identified"
          >
            <Input placeholder="Expense Title"/>
          </Form.Item>
          <Form.Item
          className="form-date-container"
          label={<span className="form-label">Purchase Date</span>}
          name="expense-date"
          >
            <DatePicker
            defaultValue={moment()}
            />
          </Form.Item>
          <Form.Item
          label={<span className="form-label">Currency</span>}
          required
          >
            <Select defaultValue="EUR">
              <Option value="EUR">EUR</Option>
              <Option value="USD">USD</Option>
              <Option value="CNY">CNY</Option>
            </Select>
          </Form.Item>
          <Form.Item
          label={<span className="form-label">Amount</span>}
          rules={[
            {required:true, message: 'Please enter an amount.'}
          ]}
          >
            <InputNumber 
            style={{width:'100%'}} 
            placeholder="Total Amount"
            min={1}
            step="10"
            prefix="$"
            precision={2}
            required
            />
          </Form.Item>
        </Form>
       </Modal>
      </header>
    </body>
  );
}

export default App;
