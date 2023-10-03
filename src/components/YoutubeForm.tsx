import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'

let renderCount = 0

type FormValues  = {
  username: string 
  email: string 
  channel: string
}

const YoutubeForm = () => {

  const form = useForm<FormValues>();
  const {register, control, handleSubmit} = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data)
  }

  renderCount ++
  return (
    <div>
      <h1>YoutubeForm renderCount {renderCount/2}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' {...register("username")} /><br/>

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' {...register("email")}  /><br/>

        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' {...register("channel")} /><br/>

        <button> Submit</button>
      </form>
      <DevTool control={control} /> 
    </div>
  )
}

export default YoutubeForm