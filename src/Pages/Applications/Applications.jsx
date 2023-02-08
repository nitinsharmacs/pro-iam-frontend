import React from 'react';
import './Applications.scss';

import ApplicationItem from '../../Components/ApplicationItem/ApplicationItem';
import SearchBar from '../../Components/SearchBar/SearchBar';

const applications = [
  {
    name: 'flipkart',
    id: 'flipkart-34353-dgg',
    image:
      'https://cdn.icon-icons.com/icons2/729/PNG/512/flipkart_icon-icons.com_62718.png',
  },
  {
    name: 'amazon',
    id: 'amazon-24453535-dgdgd',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png',
  },
  {
    name: 'flipkart',
    id: 'flipkart-34353-dgg',
    image:
      'https://cdn.icon-icons.com/icons2/729/PNG/512/flipkart_icon-icons.com_62718.png',
  },
  {
    name: 'amazon',
    id: 'amazon-24453535-dgdgd',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png',
  },
];
const Applications = (props) => {
  return (
    <div className='applications-container'>
      <SearchBar
        title='Application Search Bar'
        placeholder='Search Applications'
        onChange={(text) => {
          console.log(text);
        }}
        focus
      />
      <div className='applications-list'>
        {applications.map((application, index) => (
          <ApplicationItem key={application.id + index} {...application} />
        ))}
      </div>
    </div>
  );
};

export default Applications;
