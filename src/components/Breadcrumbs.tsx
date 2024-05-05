const Breadcrumbs = () => {
  return (
    <div>
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Workspace
            </a>
          </li>
          <li className="inline-flex items-center">
            <svg
              className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Creative
            </span>
          </li>
          <li className="inline-flex items-center" aria-current="page">
            <svg
              className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Creative Website
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
