import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Tab from '../components/Tab';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="pl-20">
      <div className="pl-5">
        <div className="pt-5">
          <div className="flow-root">
            <p className="float-left">
              {' '}
              <Breadcrumbs />
            </p>
            <p className="float-right mr-5">From 23 April</p>
          </div>
          <div className="flow-root">
            <p className="float-left"></p>

            <p className="float-right mt-3 text-gray-500 font-mono... mr-5 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-sm text-gray-600 font-medium">
                  Updated 12 min ago
                </span>
              </div>
            </p>
          </div>
          <p className="text-3xl">Website Design</p>
          <div className="flex  items-center">
            <div className="flex mt-5 items-center">
              <a
                href="#"
                className="inline-flex  items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Limited access
                <svg
                  className="w-3 ml-2 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
              </a>
              <div className="mx-4 h-6 border-l border-gray-300"></div>
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://tecdn.b-cdn.net/img/new/avatars/6.webp"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://tecdn.b-cdn.net/img/new/avatars/3.webp"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://tecdn.b-cdn.net/img/new/avatars/4.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="flex  ml-auto">
              <div className="justify-end flex mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>

                <div className="mx-4 h-6 border-l border-gray-300"></div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-8 pr-4">
            <Tab />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-5 gap-4 pr-4 pt-5">
            <div>
              {' '}
              <Card title="title" description="lorem" status={'status'} />
            </div>

            <div>
              {' '}
              <Card title="title" description="lorem" status={'status'} />
            </div>
            <div>
              {' '}
              <Card title="title" description="lorem" status={'status'} />
            </div>
            <div>
              {' '}
              <Card title="title" description="lorem" status={'status'} />
            </div>
            <div>
              {' '}
              <Card title="title" description="lorem" status={'status'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
