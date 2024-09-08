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
    <div className="container flex justify-center py-8">
    
      <Button
        type="primary"
        onClick={showModal}
        className="px-4 py-2 mt-3 mb-8 font-bold text-white bg-blue-700 border-blue-500 rounded hover:bg-blue-500 hover:border-blue-600"
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