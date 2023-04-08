import React, { useState } from "react";
import Volunteers from "./Volunteers";
import Doctors from "./Doctors";
const AllSlots = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white my-4">
          All Workers
        </h1>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <button
              onClick={() => setPage(1)}
              className={
                page === 1
                  ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            >
              Volunteers
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setPage(2)}
              className={
                page === 2
                  ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
              aria-current="page"
            >
              Doctors
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setPage(3)}
              className={
                page === 3
                  ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            >
              Staff
            </button>
          </li>
        </ul>
      </div>

      
      <div>
        {page === 1 && <Volunteers />}
        {page === 2 && <Doctors />}
        {page === 3 && <Volunteers />}
      </div>

    </div>
  );
};

export default AllSlots;
