import React,{useState} from 'react'

import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/passord-reset/PasswordReset.comp';

import './entry.style.css';


export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [frmLoad, setFrmLoad] = useState('login')

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            
            default:
                break;
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        if (!email || ! password){
           return  alert(" Fill all the Fields");
        }

        //TODO call the api to submit form
        console.log(email,password)


    }
    const handleResetSubmit = e => {
        e.preventDefault();

        if (!email ){
           return  alert(" Fill all the Fields");
        }

        //TODO call the api to submit form
        console.log(email);


    }

    const formSwitcher = formtype => {
        setFrmLoad(formtype)
    }

  return (
    <div className='entry-page bg-info'>
    <div className='jumbotron form-box'>
        { frmLoad === 'login' && (<LoginForm 
        handleOnChange={handleOnChange}
        email={email}
        password={password}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        >
        </LoginForm>)}
        
        { frmLoad === 'reset' && (<ResetPassword
            handleOnChange={handleOnChange}
            email={email}
            handleResetSubmit={handleResetSubmit}
            frmLoad={frmLoad}
            formSwitcher={formSwitcher}
        >
        </ResetPassword>)}
    </div>
       
    </div>
  )
}
