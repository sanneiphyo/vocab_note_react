import React, { useState, useEffect } from 'react';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Input, Space, Card, message, Modal, Button } from 'antd';
import axios from 'axios';
import Balloon from "../../assets/Images/Balloon.png";

const { Search } = Input;

const Flashcard = () => {
  const [vocabularies, setVocabularies] = useState([]);
  const [filteredVocabularies, setFilteredVocabularies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVocab, setSelectedVocab] = useState(null);

  useEffect(() => {
    const fetchVocabularies = async () => {
      try {
        const apiUrl = 'http://localhost:3000/vocabularies';
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setVocabularies(response.data);
        setFilteredVocabularies(response.data);
      } catch (error) {
        message.error('Failed to fetch vocabularies');
        console.error('Error fetching vocabularies:', error);
      }
    };

    fetchVocabularies();
  }, []);

  const onSearch = (value) => {
    const filtered = vocabularies.filter(vocab =>
      vocab.definition.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredVocabularies(filtered);
  };

  const showModal = (vocab) => {
    setSelectedVocab(vocab);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedVocab(null);
  };

  // const handleUpdate = async () => {
  //   if (!selectedVocab) return;

  //   try {
  //     const apiUrl = `http://localhost:3000/vocabularies/${selectedVocab.id}`;
  //     const updatedData = { ...selectedVocab }; 
  //     await axios.put(apiUrl, updatedData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     message.success('Vocabulary updated successfully');
  //     setIsModalVisible(false);
  //     setVocabularies(); 
  //   } catch (error) {
  //     message.error('Failed to update vocabulary');
  //     console.error('Error updating vocabulary:', error);
  //   }
  // };

  const handleDelete = async () => {
    if (!selectedVocab) return;

    try {
      const apiUrl = `http://localhost:3000/vocabularies/${selectedVocab.id}`;
      await axios.delete(apiUrl);
      message.success('Vocabulary deleted successfully');
      setIsModalVisible(false);
      setVocabularies(); 
    } catch (error) {
      message.error('Failed to delete vocabulary');
      console.error('Error deleting vocabulary:', error);
    }
  };

  return (
    <div className='w-full'>
      <Space direction="vertical" className='w-[35rem] sm:mx-[8rem]'>
        <Search
          suffix={<SearchOutlined style={{ fontSize: 16, color: '#1677ff' }} />}
          placeholder="Search any word"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          className='mt-3 flex'
        />
      </Space>

      <div className="custom-scrollbar mt-14 w-[35rem] mx-[8rem] overflow-y-auto h-[20rem]">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {filteredVocabularies.map((vocab) => (
            <Card
              key={vocab.id}
              style={{ marginBottom: '1rem' }}
              className='border border-blue-500 overflow-hidden h-[7rem] shadow-lg cursor-pointer'
              onClick={() => showModal(vocab)} 
            >
              <div className='flex w-full'>
                <p className='font-bold'>{vocab.definition}</p>
                <p><img src={Balloon} alt='balloon' className='w-[9rem] h-[6rem] ml-[6rem]' /></p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className='w-[3rem]'
      >
        {selectedVocab && (
          <div>
            <div className="flex gap-3 ml-[25rem]">
              {/* <Button
                type="primary"
                className="rounded-full text-orange-400 bg-yellow-200"
                onClick={handleUpdate}
              >
                <EditOutlined />
              </Button> */}
              <Button
                type="primary"
                className="rounded-full text-red-500 bg-red-200"
                onClick={handleDelete}
              >
                <DeleteOutlined />
              </Button>
            </div>
            <div className='mt-3'>
              <p className='font-bold text-lg'>Def/Meaning:</p>
              <p className='mt-2'>{selectedVocab.definition}</p>
            </div>
            <div>
              <p className='font-bold text-lg mt-[1rem]'>Synonyms:</p>
              <p>{selectedVocab.synonyms}</p>
            </div>
            <div>
              <p className='font-bold text-lg mt-[1rem]'>Antonyms:</p>
              <p>{selectedVocab.antonyms}</p>
            </div>
            <div>
              <p className='font-bold text-lg mt-[1rem]'>Example Sentence:</p>
              <p>{selectedVocab.example}</p>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className='font-bold mb-3 bg-blue-600 py-5 ml-[5rem] text-md mt-5 w-[15rem]'
            >
              Add to Review Word
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Flashcard;
