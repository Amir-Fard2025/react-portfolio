export default function Card({ projectName, desc, href, actualImage }) {
  return (
    <div className="flex flex-col mt-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img className="rounded-t-lg" src={actualImage} alt="" />
      </a>
      <div className="p-6 justify-end bg-gray-100 mt-5">
        <a href={href} target="_blank" rel="noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white text-lg">
            {projectName}
          </h5>
        </a>
        <p className="mb-3 justify-end font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex self-end inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
