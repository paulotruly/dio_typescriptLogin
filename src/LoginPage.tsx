import InputContainer from "./InputContainer"
import { Link } from "react-router-dom"

function LoginPage() {

  return (

    <div className="flex bg-red-300 w-full h-screen">
      <div className="w-1/2 h-screen bg-white">

      </div>

      <div className="flex w-1/2 h-screen justify-center bg-blue-600 p-10">

          <div className="flex flex-col gap-5 w-2/3 items-center p-5">

            <h1 className="mr-auto font-bold text-[60px] text-white mb-12"> Welcome! </h1>
          
            <InputContainer
            icon="user"
            htmlTo="userInput"
            placeholderText="You're name"
            >
            </InputContainer>

            <InputContainer
            icon="password"
            htmlTo="passwordInput"
            placeholderText="You're password"
            >
            </InputContainer>

            <div className="flex flex-col gap-5 mt-5 font-semibold md:flex-row lg:flex-row">
              <button
              
              className="bg-gradient-to-r text-blue-600 from-yellow-300 to-orange-400 
              text-md  rounded-full w-auto px-10 py-2 shadow-lg hover:scale-105 hover:transition-transform">
                Entrar
              </button>

              <Link
              className="border-2 border-white text-white text-md rounded-full w-auto px-10 py-2 shadow-lg hover:bg-white hover:text-blue-600
              hover:transition-colors ease-in-out duration-300"
              to="/register">
              Registrar-se 
              </Link>
            </div>

          </div>

      </div>
        
    </div>
  )
}

export default LoginPage
