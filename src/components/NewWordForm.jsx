import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select; 

const NewWordForm = () => {
  return (
    <Form>
      {/* Input Fields */}
      <div className='flex gap-[2rem]'>
        <div className='w-full'>
          <p>Vocab</p>
          <Input placeholder='Any Vocabulary' />
        </div>

        <div className='w-full'>
          <p>Speech</p>
          <Input placeholder='Example-N' />
        </div>
      </div>

      <div className='flex gap-[2rem] mt-5 '>
        <div className='w-full'>
          <p>Synonyms</p>
          <Input />
        </div>

        <div className='w-full'>
          <p>Antonyms</p>
          <Input />
        </div>
      </div>

      <div className='flex gap-[2rem] mt-5 '>
        <div className='w-full'>
          <p>Def/Meaning</p>
          <Input
          className ="py-4"
          />
        </div>

        <div className='w-full'>
          <p>Example Sentence</p>
          <Input
           className ="py-4"
          />
        </div>
      </div>


    

    </Form>
  );
}

export default NewWordForm;
