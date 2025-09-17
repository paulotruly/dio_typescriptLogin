import { use, useState } from "react"
import InputContainer from "./InputContainer"
import { Link } from "react-router-dom"

function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit() {

        if (!username.trim() || !password.trim()) {
            setError("Preencha todos os campos!");
            return;
        }
        
        const userData = {
            username: username,
            password: password
        }

        let userList: any[] = [] // array vazio
        const storedData = localStorage.getItem("userList")
        
        if (storedData !== null) {
            userList = JSON.parse(storedData)
        }

        // verificando se existe
        const exists = userList.some(user => user.username === username)

        if (exists) {
            setError("Nome de usuário não disponível!")
            return
        }

        userList.push(userData)
        localStorage.setItem("userList", JSON.stringify(userList)) // salva no localStorage
        console.log(userList)

        setUsername("")
        setPassword("")
        setError("")
    }


  return (
    <div className="flex bg-red-300 w-full h-screen">
      <div className="w-1/2 h-screen bg-white">

      </div>
    
      <div className="flex w-1/2 h-screen justify-center bg-blue-600 p-10">

          <div className="flex flex-col gap-5 w-2/3 items-center p-5">

            <h1 className="mr-auto font-bold text-[60px] text-white mb-12"> Register </h1>

            {/* se houver erro ele retorna o p */}
            {error && <p className="text-black text-[12px] text-center p-2 bg-red-300 w-full rounded-full">{error}</p>}

            <InputContainer
            type="text"
            icon="user"
            htmlTo="registerUser"
            placeholderText="You're name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            >
            </InputContainer>

            <InputContainer
            type="password"
            icon="password"
            htmlTo="registerPassword"
            placeholderText="You're password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            >
            </InputContainer>

            <div className="flex flex-col gap-5 mt-5 font-semibold md:flex-row lg:flex-row">
              <button
              
              className="bg-gradient-to-r text-blue-600 from-yellow-300 to-orange-400 
              text-md  rounded-full w-auto px-10 py-2 shadow-lg hover:scale-105 hover:transition-transform"
              onClick={handleSubmit}
              >
                Registrar-se
              </button>

              <Link
              className="border-2 border-white text-white text-md rounded-full w-auto px-10 py-2 shadow-lg hover:bg-white hover:text-blue-600
              hover:transition-colors ease-in-out duration-300" to="/">
                Já tenho conta
              </Link>
            </div>

          </div>

      </div>
        
    </div>
  )
}

export default RegisterPage
