import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../hocs/styles";
import { EarthCanvas } from "../../components/Canvas";
import { slideIn } from "../../ultils/motion";
import { InputField, Button } from '../../components'
import {apiLogin, apiResgister } from "../../apis/user";
import Swal from 'sweetalert2'
import { useNavigate ,Link} from "react-router-dom";
import path from '../../ultils/path'
import { login} from '../../store/user/userSlice'
import { useDispatch } from "react-redux";
import  {validate}  from '../../ultils/helper'
import Loading from '../../components/Loading'
import {ShowModal} from '../../store/app/appSlice'
import {ForgotPasswordModel} from '../../components'



const Login = () => {
  const navigate =useNavigate()
  const dispatch=useDispatch()
 
  const [loading, setLoading]=useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [invalidFields, setInvalidFields]=useState([])
  const resetPayload = () => {
    setPayload({
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      phone: '',
    })
  }
  const [payload, setPayload] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
  })
    
  useEffect(()=>{
    resetPayload()
  },[isRegister])
  const handleSubmit = useCallback(async () => {

    const { firstname, lastname, phone, ...data } = payload
    const invalids=isRegister  ? validate(payload,setInvalidFields) : validate(data,setInvalidFields)
    if(invalids ===0){
      if (isRegister) {
        setLoading(true)
        const response = await apiResgister(payload);
        setLoading(false)
        if(response.success){
          Swal.fire('Congratulation', response.mes, 'success').then(() => {
            setIsRegister(false)
            resetPayload() 
          })
        }else{
          Swal.fire('Oops!',response.mes,'error')
        }
       
      } else {
        const rs = await apiLogin(data)
        if(rs.success){
              dispatch(login({
                isLoggedIn: true,
                token:rs.accessToken,
                userData:rs.userData
              }))
              navigate(`/${path.HOME}`)
        }else  Swal.fire('Oops!',rs.mes,'error')
        
      }
    }
  }, [payload, isRegister])

  const handleForgotPassWord=()=>{
    dispatch(ShowModal({
      isShowModal:true, 
      modalChildren:<ForgotPasswordModel/>
  }))
  }

  return (
    <div
      className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-blue-300 h-[706px] relative`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 px-8 rounded-2xl justify-center items-center text-center'
      >
        <h3 className={styles.sectionHeadText}>{isRegister ? 'Register' : 'Login'}</h3>
        <form
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col gap-5'>
            {isRegister &&
              <div className="flex  gap-2">
                <InputField
                  value={payload.firstname}
                  setValue={setPayload}
                  nameKey='firstname'
                  invalidFields={invalidFields}
                  setInvalidFieds={setInvalidFields}
                />
                <InputField
                  value={payload.lastname}
                  setValue={setPayload}
                  nameKey='lastname'
                  invalidFields={invalidFields}
                  setInvalidFieds={setInvalidFields}
                />
              </div>
            }
            <InputField
              value={payload.email}
              setValue={setPayload}
              nameKey='email'
              invalidFields={invalidFields}
              setInvalidFieds={setInvalidFields}
            />
            {isRegister &&
              <InputField
                value={payload.phone}
                setValue={setPayload}
                nameKey='phone'
                invalidFields={invalidFields}
                setInvalidFieds={setInvalidFields}
              />
            }
            <InputField
              value={payload.password}
              setValue={setPayload}
              nameKey='password'
              type='password'
              invalidFields={invalidFields}
              setInvalidFieds={setInvalidFields}
            />
          </label>

          <Button
            children={isRegister ? ' Register ' : ' Login '}
            handleOnClick={handleSubmit}
          />

          <div className="flex items-center justify-between my-2">
            {!isRegister &&
              <span  onClick={handleForgotPassWord}  className="text-gray-700 hover:underline">Forgot your password ?</span>
            }
            {!isRegister &&
              <span onClick={() => setIsRegister(true)} className="text-gray-700 hover:underline">Create account ?</span>
            }
            {
              isRegister &&
              <span onClick={() => setIsRegister(false)} className="text-gray-700 hover:underline w-full text-center">Go Login ?</span>
            }
            <Link to={`/${path.HOME}`}>
                <span className="hover:underline text-gray-700 ">Go home?</span>
            </Link>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      {loading && <Loading/>}
    </div>
  )
}

export default Login