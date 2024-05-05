import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <nav className="flex flex-wrap  bg-white rounded-2xl p-1">
      <a
        href="#"
        className={`px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 relative ${
          activeTab === 0 ? 'text-purple-500' : 'text-gray-600'
        }`}
        onClick={() => handleTabClick(0)}
      >
        All Tasks{' '}
        <span
          className={`${
            activeTab === 0
              ? 'bg-purple-100 text-purple-500 text-xs rounded-2xl px-2 p-1'
              : 'bg-transparent'
          }  `}
        >
          23
        </span>
        <span
          className={`absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 ${
            activeTab === 0 ? 'bg-purple-500' : 'bg-transparent'
          }`}
        ></span>
      </a>
      <a
        href="#"
        className={`px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 relative ${
          activeTab === 1 ? 'text-purple-500' : 'text-gray-600'
        }`}
        onClick={() => handleTabClick(1)}
      >
        To do{' '}
        <span
          className={`${
            activeTab === 1
              ? 'bg-purple-100 text-purple-500 text-xs rounded-2xl px-2 p-1'
              : 'bg-transparent'
          }  `}
        >
          23
        </span>
        <span
          className={`absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 ${
            activeTab === 1 ? 'bg-purple-500' : 'bg-transparent'
          }`}
        ></span>
      </a>
      <a
        href="#"
        className={`px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 relative ${
          activeTab === 2 ? 'text-purple-500' : 'text-gray-600'
        }`}
        onClick={() => handleTabClick(2)}
      >
        In progress{' '}
        <span
          className={`${
            activeTab === 2
              ? 'bg-purple-100 text-purple-500 text-xs rounded-2xl px-2 p-1'
              : 'bg-transparent'
          }  `}
        >
          6
        </span>
        <span
          className={`absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 ${
            activeTab === 2 ? 'bg-purple-500' : 'bg-transparent'
          }`}
        ></span>
      </a>

      <a
        href="#"
        className={`px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 relative ${
          activeTab === 3 ? 'text-purple-500' : 'text-gray-600'
        }`}
        onClick={() => handleTabClick(3)}
      >
        Completed{' '}
        <span
          className={`${
            activeTab === 3
              ? 'bg-purple-100 text-purple-500 text-xs rounded-2xl px-2 p-1'
              : 'bg-transparent'
          }  `}
        >
          14
        </span>
        <span
          className={`absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 ${
            activeTab === 3 ? 'bg-purple-500' : 'bg-transparent'
          }`}
        ></span>
      </a>
    </nav>
  );
};

export default Tabs;
