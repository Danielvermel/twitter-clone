import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import Post from './Post'

export default function Feed() {
  const posts = [
    {
      id: '1',
      name: 'Daniel Leite',
      username: 'danielvermel',
      userImg:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGfuZm7dCiVuQ/profile-displayphoto-shrink_800_800/0/1650874180152?e=1665014400&v=beta&t=kPifY9vq-ZtQiN_LZeHdNFHtbl24s_LsuEwPzDdefT0',
      img: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      text: 'Stunning View!',
      timestamp: '3 days ago',
    },
    {
      id: '2',
      name: 'Daniel Leite',
      username: 'danielvermel',
      userImg:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGfuZm7dCiVuQ/profile-displayphoto-shrink_800_800/0/1650874180152?e=1665014400&v=beta&t=kPifY9vq-ZtQiN_LZeHdNFHtbl24s_LsuEwPzDdefT0',
      img: 'https://images.unsplash.com/photo-1572099606223-6e29045d7de3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      text: 'In love with this country.',
      timestamp: '4 days ago',
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-gray-200 border-r xl-:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post} />
      ))}
    </div>
  )
}
