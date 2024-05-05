import { FC, useState } from 'react';
import SimpleBar from 'simplebar-react';

interface SidebarProps {
  setExpand: (value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = () => {
  const username = 'Jean Luc';
  const company = 'Academic bridge';
  const profilePic =
    'https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA';
  const link = '/';

  const [isExpand, setIsExpand] = useState(false);
  const [isExpandOnHover, setIsExpandOnHover] = useState(false);

  const handleHoverExpand = (value: boolean) => {
    if (!isExpand) {
      setIsExpandOnHover(value);
    }
  };

  return (
    <nav
      role="navigation"
      className={[
        'hidden lg:block',
        'bg-white border-r border-slate-50 shadow-sm absolute inset-y-0 left-0',
        'duration-300 ease-in-out md:fixed md:translate-x-0',
        `${
          isExpand
            ? 'bg-slate-50 w-72'
            : isExpandOnHover
              ? 'bg-slate-50/70 w-72 backdrop-blur-md'
              : 'bg-slate-50 w-20'
        }`,
      ].join(' ')}
    >
      <div
        onMouseEnter={() => handleHoverExpand(false)}
        onMouseLeave={() => handleHoverExpand(false)}
        className={`relative h-screen overflow-hidden`}
      >
        <SimpleBar style={{ height: '100%' }} autoHide>
          <div className="text-slate-500">
            <div className="my-8 flex flex-col items-center h-44 overflow-x-hidden">
              <a
                href={link}
                className={`text-center flex flex-col items-center justify-center`}
              >
                <div
                  className={`rounded-full border-4 border-white overflow-hidden duration-300 ${
                    isExpand
                      ? 'h-28 w-28'
                      : isExpandOnHover
                        ? 'h-28 w-28'
                        : 'h-12 w-12'
                  }`}
                >
                  <img src={profilePic} className="block" alt="" />
                </div>
                <div
                  className={`text-base font-semibold text-slate-700 mt-3 truncate duration-300 ${
                    isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0'
                  }`}
                >
                  {username}
                </div>
                <div
                  className={`duration-300 text-sm text-slate-500 truncate ${
                    isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0'
                  }`}
                >
                  {company}
                </div>
              </a>
            </div>

            <div className="mt-3 mb-20  p-2 text-center">
              <ul className="list-none  cursor-pointer text-2xl font-normal px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:stroke-purple-500 hover:fill-purple-500 transition duration-300 ease-in-out group-hover:stroke-purple-500 group-hover:fill-purple-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </ul>

              <ul className="list-none text-2xl cursor-pointer mt-5 mb-5 font-normal px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:stroke-purple-500 hover:fill-purple-500 transition duration-300 ease-in-out group-hover:stroke-purple-500 group-hover:fill-purple-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </ul>

              <ul className="list-none text-2xl cursor-pointer  mt-5 mb-5  font-normal px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:stroke-purple-500 hover:fill-purple-500 transition duration-300 ease-in-out group-hover:stroke-purple-500 group-hover:fill-purple-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </ul>
              <ul className="list-none text-2xl cursor-pointer  mt-5 mb-5  font-normal px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:stroke-purple-500 hover:fill-purple-500 transition duration-300 ease-in-out group-hover:stroke-purple-500 group-hover:fill-purple-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </ul>
              <ul className="list-none text-2xl cursor-pointer  mt-5 mb-5  font-normal px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:stroke-purple-500 hover:fill-purple-500 transition duration-300 ease-in-out group-hover:stroke-purple-500 group-hover:fill-purple-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </ul>
              <div className="fixed bottom-0 left-0 right-0  p-2">
                <ul className="list-none text-2xl  cursor-pointer font-normal px-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:stroke-purple-500 hover:fill-purple-500 transition duration-300 ease-in-out group-hover:stroke-purple-500 group-hover:fill-purple-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </ul>
                <ul className="list-none text-2xl cursor-pointer mt-5 mb-5  font-normal px-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:stroke-purple-500 hover:fill-purple-500 transition duration-300 ease-in-out group-hover:stroke-purple-500 group-hover:fill-purple-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </ul>
              </div>
            </div>
          </div>
        </SimpleBar>
      </div>
    </nav>
  );
};

export default Sidebar;
