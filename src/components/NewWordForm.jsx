import React from 'react';
import { Form, Input, Button, message, Switch } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use this at the top level

export default function NewWordForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Call useNavigate here
  const token = localStorage.getItem('token')

  const onFinish = async (values) => {
    const formattedValues = {
      title: values.vocab,
      definition: values.definition,
      synonyms: values.synonyms,
      antonyms: values.antonyms,
      type: values.speech,
      example: values.exampleSentence,
      is_revised: values.isRevised,
    };

    try {
      const apiUrl = 'http://localhost:8000/api'; 
      console.log('Sending request to:', `${apiUrl}/vocabularies`);
      console.log('Request payload:', formattedValues);

      const response = await axios.post(`${apiUrl}/vocabularies`, formattedValues, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      message.success('Vocabulary submitted successfully');
      console.log('Server response:', response.data);
      form.resetFields();
        
      setTimeout(() => {
        navigate(0)
      }, 1000);
    } catch (error) {
      message.error('Failed to submit the vocabulary');
      console.error('Error submitting form:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >
      <div className="flex gap-8">
        <Form.Item
          label="Vocab (Title)"
          name="vocab"
          rules={[{ required: true, message: 'Please input the vocabulary!' }]}
          className="flex-1"
        >
          <Input placeholder='Any Vocabulary' />
        </Form.Item>

        <Form.Item
          label="Speech (Type)"
          name="speech"
          rules={[{ required: true, message: 'Please input the part of speech!' }]}
          className="flex-1"
        >
          <Input placeholder='Example - nouns' />
        </Form.Item>
      </div>

      <div className="flex gap-8 mt-2">
        <Form.Item
          label="Synonyms"
          name="synonyms"
          rules={[{ required: false }]}
          className="flex-1"
        >
          <Input placeholder='Enter synonyms (comma-separated)' />
        </Form.Item>

        <Form.Item
          label="Antonyms"
          name="antonyms"
          rules={[{ required: false }]}
          className="flex-1"
        >
          <Input placeholder='Enter antonyms (comma-separated)' />
        </Form.Item>
      </div>

      <div className="flex gap-8 mt-2">
        <Form.Item
          label="Definition"
          name="definition"
          rules={[{ required: true, message: 'Please input the definition!' }]}
          className="flex-1"
        >
          <Input.TextArea placeholder='Enter definition' autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>

        <Form.Item
          label="Example Sentence"
          name="exampleSentence"
          rules={[{ required: true, message: 'Please input an example sentence!' }]}
          className="flex-1"
        >
          <Input.TextArea placeholder='Enter an example sentence' autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
      </div>

      <Form.Item
        name="isRevised"
        valuePropName="checked"
        initialValue={false}
      >
        <Switch checkedChildren="Revised" unCheckedChildren="Not Revised" defaultChecked />
      </Form.Item>

      <div className="flex gap-3 font-bold">
        <Form.Item className="mt-5 bg-white">
          <Button type="primary" htmlType="cancel" className=' bg-white border border-gray-500 text-black w-[14rem]'>
            CANCEL
          </Button>
        </Form.Item>

        <Form.Item className="mt-5">
          <Button type="primary" htmlType="submit" className='text-black bg-gray-300 w-[14rem]'>
            ADD
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
