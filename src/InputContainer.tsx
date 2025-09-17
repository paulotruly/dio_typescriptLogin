import UserIcon from "./assets/UserIcon"
import PasswordIcon from "./assets/PasswordIcon"

type InputContainerProps = {
  icon: string
  htmlTo: string
  placeholderText: string
}

function InputContainer({icon, htmlTo, placeholderText}: InputContainerProps) {

    // {color}: {color: string}
    let iconSet;

    if (icon === "user") {
        iconSet = <UserIcon color="stroke-pastel-blue"/>;
    } else if (icon === "password") {
        iconSet = <PasswordIcon color="stroke-pastel-blue"/>;
    } else {
        console.error("Ícone não existe")
    }

  return (
        <div className="flex flex-row w-full bg-white rounded-full border-2 shadow-lg">
            
            <label
            className="flex items-center justify-center ml-5 mr-2"
            htmlFor={htmlTo}>
              {iconSet}
            </label>

            <input className="border-0 focus:outline-none rounded-full p-3 placeholder-pastel-blue"
            type="text"
            name={htmlTo} id={htmlTo}
            placeholder={placeholderText}
            />

        </div>
  )
}

export default InputContainer
