import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react'

const { Search } = Input;

const suffix = (
  <SearchOutlined 
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchInput = () => {
  return (
<>


    <Search
      className='border border-blue-500 rounded-lg'
      placeholder="Search Any Word"
      prefix={<SearchOutlined />}
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
</>
  )
}

export default SearchInput
