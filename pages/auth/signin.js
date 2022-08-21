import { getProviders, signIn } from 'next-auth/react'

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
        alt="twitter image inside a phone"
        className="hidden md:inline-flex object-cover md:w-44 md:h-80 rotate-6"
      />
      <div className="">
        {Object.values(providers).map((provider, index) => (
          <div className="flex flex-col items-center" key={index}>
            <img
              className="w-36 object-cover rounded-full"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGfuZm7dCiVuQ/profile-displayphoto-shrink_800_800/0/1650874180152?e=1665014400&v=beta&t=kPifY9vq-ZtQiN_LZeHdNFHtbl24s_LsuEwPzDdefT0"
              alt=" twitter logo"
            />
            <p className="text-center text-sm italic my-10">
              This app is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
