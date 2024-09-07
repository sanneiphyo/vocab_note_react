import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Card, message, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import NewWordForm from "../../components/NewWordForm";

export default function AddNewWord() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const lastCardRef = useRef(null);

  useEffect(() => {
    if (lastCardRef.current) {
      lastCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [words]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (newWord) => {
    if (newWord) {
      setIsLoading(true);
      try {
        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setWords(prevWords => [...prevWords, newWord]);
        setIsModalOpen(false);
        message.success("New word successfully added");
      } catch (error) {
        message.error("Error occurred while submitting");
      } finally {
        setIsLoading(false);
      }
    } else {
      message.error("Error occurred while submitting");
    }
  };

  return (
    <div className="container  px-4 py-8">
        
      <div className=" text-gray-500   mx-[15rem] ">You don't have any word added yet.Starting building your vocabulary by </div>
      <div className=" text-gray-500   mx-[25rem] "> adding your new word!</div>

      <Button
        type="primary"
        onClick={showModal}
        className="mb-8 bg-blue-700 mx-[25rem] mt-3 hover:bg-blue-500 border-blue-500 hover:border-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add New Word <PlusOutlined />
      </Button>
    
      <Modal
        title="Add New Word"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <NewWordForm onSubmit={handleFormSubmit} />
      </Modal>

    </div>
  );
}