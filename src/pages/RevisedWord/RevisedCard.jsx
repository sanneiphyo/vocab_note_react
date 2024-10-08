import React, { useState, useEffect } from 'react';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Input, Space, Card, message, Modal, Button } from 'antd';
import axios from 'axios';
import Balloon from "../../assets/Images/Balloon.png";

const { Search } = Input;

const RevisedCard = () => {

 
    
  const [vocabularies, setVocabularies] = useState([]);
  const [filteredVocabularies, setFilteredVocabularies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVocab, setSelectedVocab] = useState(null);
  const token = localStorage.getItem('token');

  
  


  useEffect(() => {
    
    const fetchVocabularies = async () => {
      try {
        const apiUrl = 'http://localhost:8000/api/vocabularies?is_revised=true';
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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

  const AddToRevise = async () => {
    if (!selectedVocab) return;

    try {
      const apiUrl = `http://localhost:8000/api/vocabularies/${selectedVocab.id}`;
      const updatedData = { ...selectedVocab }; 
      await axios.put(apiUrl, updatedData, {
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
        },
      });
      message.success('Vocabulary updated successfully');
      setIsModalVisible(false);
      setVocabularies(); 
    } catch (error) {
      message.error('Failed to update vocabulary');
      console.error('Error updating vocabulary:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedVocab) return;

    try {
      console.log(selectedVocab)
      const apiUrl = `http://localhost:8000/api/vocabularies/${selectedVocab.id}`;
      const updatedData = { ...selectedVocab, is_revised : false}; 
      console.log(updatedData)
      await axios.put(apiUrl, updatedData, {
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
        },
      });
      message.success('Vocabulary updated successfully');
      setIsModalVisible(false);
      setVocabularies(); 

      setTimeout(() => {
        navigate(0)
      }, 1000);
    } catch (error) {
      message.error('Failed to update vocabulary');
      console.error('Error updating vocabulary:', error);
    }
  };

  return (
    <div className='w-full'>
  
     <div className="flex justify-center">
     <Space direction="vertical" className='w-[38rem] '>
        <Search
          suffix={<SearchOutlined style={{ fontSize: 16, color: '#1677ff' }} />}
          placeholder="Search any word"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          className='flex mt-3'
        />
      </Space>
     </div>

      <div className="custom-scrollbar mt-[5px] mx-auto   overflow-y-auto h-[400px]">
        <div className='grid gap-3 md:grid-cols-1 sm:grid-cols-2'>
          <div className='mt-14 w-[35rem] mx-auto overflow-y-auto h-[20rem]'>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
              {filteredVocabularies.map((vocab) => (
                <Card
                  key={vocab.id}
                  style={{ marginBottom: '1rem' }}
                  className='border border-blue-500 overflow-hidden h-[7rem] shadow-lg cursor-pointer'
                  onClick={() => showModal(vocab)} 
                >
                  <div className='flex w-full'>
                    <p className='font-bold'>{vocab.title}</p>
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
                 
                  <Button
                    type="primary"
                    className="text-red-500 bg-red-200 rounded-full"
                    onClick={handleDelete}
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
                <div className='mt-3'>
                  <p className='text-lg font-bold'>Def/Meaning:</p>
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

                
                
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default RevisedCard;
