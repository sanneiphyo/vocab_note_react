import React, { useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Space, Card, message, Modal } from 'antd';
import axios from 'axios';

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
      vocab.title.toLowerCase().includes(value.toLowerCase())
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

      <div className='mt-14 w-[35rem] mx-[8rem] overflow-y-auto h-[20rem]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {filteredVocabularies.map((vocab) => (
            <Card
              key={vocab.id}
              style={{ marginBottom: '1rem' }}
              className='border border-blue-500 h-[6rem] shadow-lg cursor-pointer'
              onClick={() => showModal(vocab)} // Show modal on card click
            >
              <p className='font-bold text-md ml-[4rem] mt-2'>{vocab.definition}</p>
            </Card>
          ))}
        </div>
      </div>

      <Modal
        title={selectedVocab?.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} 
      >
        {selectedVocab && (
          <div>
            <p><strong>Definition:</strong> {selectedVocab.definition}</p>
            <p><strong>Part of Speech:</strong> {selectedVocab.type}</p>
            <p><strong>Synonyms:</strong> {selectedVocab.synonyms}</p>
            <p><strong>Antonyms:</strong> {selectedVocab.antonyms}</p>
            <p><strong>Example Sentence:</strong> {selectedVocab.example}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Flashcard;
