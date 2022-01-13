import React, { useContext } from 'react';
import './Login.css';
import LogoLogin from '../../assets/13.png';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../shared/Providers/Providers';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(GlobalContext);
    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault();
        setUser(true);

        const login = {
            email: email,
            password: password
        }

        axios.post(`/auth/login`, login)
            .then(response => {
                const token = response.data.token;
                const id = response.data.user.id;
                console.log(id)
                localStorage.setItem('userID', id)
                localStorage.setItem('token', token)
                console.log(response)
            })
        navigate("/products/all");
    }

    return (
        <>
            <div class="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <img className="imglog" alt="" src={LogoLogin} />
                    </div>

                    <div class="form-group">
                        <input type="text" required onChange={event => setEmail(event.target.value)} class="form-control item" id="email" placeholder="E-mail" />
                    </div>
                    <div class="form-group">
                        <input type="password" required onChange={event => setPassword(event.target.value)} class="form-control item" id="password" placeholder="Senha" />
                    </div>

                    <div class="form-group">
                        <button type='submit' value='Entrar' class="btn btn-block create-account">Login</button>
                    </div>
                    <div class="form-group">
                        <a href="/" class="forgot">Esqueceu Sua Senha?</a>
                    </div>
                    <div class="form-group">
                        <a href="/cadastro/pf" class="forgot">Cadastre-se</a>
                    </div>
                </form>
                <div class="social-media">
                    <h5>Cadastre-se com sua mídia social</h5>
                    <div class="social-icons">
                        <a href="/"><i class="icon-social-google" title="Google"></i></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;