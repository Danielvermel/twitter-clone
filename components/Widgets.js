import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import News from '../components/News'

export default function Widgets({ newsResults, randomUsersResults }) {
  const [articleNumber, setArticleNumber] = useState(3)
  const [randomUserNumber, setRandomUserNumber] = useState(3)
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white p-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <SearchIcon className="h-5 z-50 text-grey-500 " />
          <input
            className="absolute inset-0 rounded-full pl-11 border-grey-500 text-gray-700 focus:shadow-lg focus:bg-white bg-grey-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        {newsResults.slice(0, articleNumber).map((article, index) => (
          <News key={index} article={article} />
        ))}
        <button
          onClick={() => setArticleNumber(articleNumber + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
      <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {randomUsersResults
          .slice(0, randomUserNumber)
          .map((randomUser, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200 transition duration-500 ease-out"
            >
              <img
                width="40"
                className="rounded-full"
                src={randomUser.picture.thumbnail}
              ></img>
              <div className="truncate ml-4 leading-5">
                <h4 className="font-bold hover:underline text-[14px] truncate">
                  {randomUser.login.username}
                </h4>
                <h5 className="text-[13px] text-gray-500 truncate">
                  {randomUser.name.first + ' ' + randomUser.name.last}
                </h5>
              </div>
              <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                Follow
              </button>
            </div>
          ))}
        <button
          onClick={() => setRandomUserNumber(randomUserNumber + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
    </div>
  )
}
