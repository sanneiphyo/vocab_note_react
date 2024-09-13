import React from 'react';
import { SearchOutlined ,PlusOutlined } from '@ant-design/icons';
import { Input, Space} from 'antd';
import AddNewWord from "./AddNewWord";
import Nodata from "../../assets/Images/No data image.png"

const { Search } = Input;

const NewWord = () => {

  const suffix = (
    <SearchOutlined 
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
  };


  return (
    <div className='w-full '>
      <Space direction="vertical">
        <Search
          suffix={suffix}
          placeholder="Search any word"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          className='sm:mx-[10rem] mt-3 flex'



        />
      </Space>
      <img src={Nodata} alt="No data" className='w-[20rem] mt-5 ml-[20rem] h-[16rem]'/>
      <AddNewWord/>
     
    </div>
  );
};

export default NewWord;
