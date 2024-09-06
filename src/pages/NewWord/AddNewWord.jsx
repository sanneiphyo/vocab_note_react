import React, { useState } from 'react';
import { Modal, Button, Card ,message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Form from "../../components/NewWordForm"; 

const AddNewWord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [words, setWords] = useState([]); 
  const [newWord, setNewWord] = useState(''); 

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleAddNewWord = () => {
    if (newWord) {
      setWords([...words, newWord]); 
      setNewWord(''); 
      setIsModalOpen(false); 
      message.success("New Word successfully added")

    }else {
      message.error("error happened while you sumit" )
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='mx-[15rem]'>
      <Button
        type="primary"
        onClick={showModal}
        className='rounded-md bg-gray-100 text-black py-3 sm:ml-[25rem] mt-3'
      >
        Add New Word <PlusOutlined />
      </Button>

      <Modal
        title="Add New Word"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel} className ="px-[2rem] py-5  w-[13rem] mr-[2rem] mt-3 ">
            CANCLE
          </Button>,
          <Button key="add"  onClick={handleAddNewWord} className='bg-gray-400 font-bold mr-2 px-[2rem] py-5 w-[13rem] '>
            ADD 
          </Button>,
        ]}
      >
        <Form setNewWord={setNewWord} /> 
      </Modal>

      {/* Render cards for each word */}
      <div className="mt-5 grid grid-cols-1 gap-4">
        {words.map((word, index) => (
          <Card key={index} title={`Word ${index + 1}`} className="shadow-lg">
            <p>{word}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AddNewWord;
