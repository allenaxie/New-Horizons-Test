import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { useState } from "react";
import {Form, Input, Button, Modal} from 'antd';


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
  

  return (
    <div className="App">
      <header className="App-header">
       <Button type="primary" onClick={showModal}>
         Click Me!
       </Button>
       <Modal title="Submit Expense" visible={isModalVisible} onOk={closeModal} onCancel={closeModal}>
        <Form>
          hey
        </Form>
       </Modal>
      </header>
    </div>
  );
}

export default App;
