import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert';

import {signup} from './Api';

function Signup() {
    const [redirect, setRedirect] = useState(false);
    const passwordRef = useRef();
    const [inputValues, setInputValues] = useState({
        alias: "",
        email: "",
        password: ""
    });
    const[showPassword, setShowPassword] = useState(false);
    const alert = useAlert();
    const { alias, email, password } = inputValues;

    const handleChange = name => event => {
        setInputValues({ ...inputValues, [name]: event.target.value });
    }

    const setPasswordType = () => {
        if(showPassword){
            passwordRef.current.type = "password";
            setShowPassword(false);
        }
        else{
            passwordRef.current.type = "text";
            setShowPassword(true);
        }
    }

    const onSubmit = event => {
        event.preventDefault();
        signup({ alias, email, password })
            .then(data => {
                if (data.error) {
                    alert.error(data.error);
                }
                if (data.success) {
                    setInputValues({
                        alias: "",
                        email: "",
                        password: ""
                    });
                    alert.success(data.success);
                }
            });
    }

    const form = () => (
        <form>
            <div className="con">
                <header className="head-form">
                    <h2>Sign Up</h2>
                    <p>Sign up here using your alias, email and password</p>
                </header>
                <br />
                <div className="field-set">
                    <span className="input-item">
                        <i className="fa fa-user-circle"></i>
                    </span>
                    <input className="form-input" id="txt-input" type="text"
                        placeholder="Alias" value={alias} onChange={handleChange("alias")} required />
                    <br />
                    <span className="input-item">
                        <i className="fa fa-envelope"></i>
                    </span>
                    <input className="form-input" id="txt-input1" type="email"
                        placeholder="Email" value={email} onChange={handleChange("email")} required />
                    <br />
                    <span className="input-item">
                        <i className="fa fa-key"></i>
                    </span>
                    <input className="form-input" id="pwd" type="password" placeholder="Password" ref={passwordRef}
                        name="password" value={password} onChange={handleChange("password")} required />
                    <span onClick={setPasswordType}>
                        <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
                    </span>
                    <br />
                    <button className="btn log-in" onClick={onSubmit}> Sign up </button>
                </div>

                <div className="other">
                    <button type="button" className="btn submits frgt-pass">Forgot Password</button>
                    <button type="button" className="btn submits sign-up" onClick={() => setRedirect(true)}>
                        Login&nbsp;&nbsp;
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </form>
    )

    return (
        <div className="overlay">
            {form()}
            {redirect &&
                <Redirect to={{
                    pathname: "/"
                }} />}
        </div>
    )
}

export default Signup
