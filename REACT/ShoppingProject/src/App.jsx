import { useState } from "react"
import { Button } from "./components/button/Button"
import { Input } from "./components/forms/Input"

function App() {
  const [data, setData] = useState({ "email": "", "password": "" })
  const dataAdd = (v, type) => {
    let prevData = { ...data }
    if (type === "email") {
      prevData["email"] = v
    }
    else if (type === "password") {
      prevData["password"] = v
    }
    setData(prevData)
  }
  const onShowData = () => {
    console.log(data)
  }
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="p-5 shadow-lg bg-white rounded-lg w-96">
        <div className="flex flex-col gap-y-5">
          <Input
            placeholder="Email"
            type="email"
            onChange={(v) => { dataAdd(v, "email") }}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(v) => { dataAdd(v, "password") }}
          />
          <Button text="Login" onClick={() => { onShowData() }} />
        </div>
      </div>
    </div>
  )
}
export default App