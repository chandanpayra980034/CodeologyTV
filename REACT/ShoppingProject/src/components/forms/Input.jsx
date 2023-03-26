import { useEffect, useState } from "react";
import { Icons } from "../../assets/icons/Icons";

export const Input = ({ placeholder, type, onChange }) => {
    const [togglePassword, setTogglePassword] = useState(false)
    const [value, setValue] = useState("")
    useEffect(() => {
        if (onChange && typeof onChange === "function") {
            onChange(value)
        }
    }, [value])
    return (
        <div className="relative">
            <input
                placeholder={placeholder ? placeholder : ""}
                className={"border p-3 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"}
                type={type ? type === "password" ? togglePassword ? "text" : "password" : type : "text"}
                value={value ? value : ""}
                onChange={(event) => { setValue(event.target.value) }}
            />
            {
                type === "password" &&
                <button
                    onClick={() => {
                        setTogglePassword(!togglePassword)
                    }}
                    className="absolute right-2 translate-y-1/2">
                    {
                        togglePassword ?
                            <Icons.Eye /> :
                            <Icons.EyeOff />
                    }
                </button>
            }
        </div>
    );
}