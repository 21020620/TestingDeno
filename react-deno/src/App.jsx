import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} type='text' placeholder='Email' />
        <input {...register('password')} type='password' placeholder='Password' />
        <button type='submit'></button>
      </form>
    )
}

export default App
