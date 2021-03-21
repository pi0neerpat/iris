import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

const LoginPage = () => {
  const [isLoggingIn, setIsLoggingIn] = React.useState(false)
  const { logIn, logOut, isAuthenticated, loading } = useAuth()
  const { redirectTo } = useParams()

  const onLogIn = async () => {
    setIsLoggingIn(true)
    await logIn()
    setIsLoggingIn(false)
    navigate(redirectTo || routes.home())
  }

  const onLoginWalletConnect = async () => {
    setIsLoggingIn(true)
    await logIn('walletConnect')
    setIsLoggingIn(false)
    navigate(redirectTo || routes.home())
  }

  const onLogOut = async () => {
    setIsLoggingIn(true)
    await logOut()
    setIsLoggingIn(false)
    navigate(redirectTo || routes.home())
  }

  return (
    <>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-l tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Login
        </h1>
        <p className="mt-4">
          Use the button below to authenticate your account
        </p>
        <div className="mt-8">
          <button
            disabled={isLoggingIn}
            onClick={onLogIn}
            className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {isLoggingIn ? 'Logging in...' : 'MetaMask'}
          </button>
        </div>
        <div className="mt-8">
          <button
            onClick={onLoginWalletConnect}
            className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {isLoggingIn ? 'Logging in...' : 'WalletConnect'}
          </button>
        </div>
        <br />
        <button
          disabled={isLoggingIn}
          onClick={onLogOut}
          className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border  rounded-md shadow-sm text-base font-medium text-black bg-black-600 hover:bg-black-700"
        >
          {isLoggingIn ? 'Loading...' : 'Log out'}
        </button>
      </div>
    </>
  )
}

export default LoginPage
