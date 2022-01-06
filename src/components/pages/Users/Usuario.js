import "./Usuario.css";
import Cadastro from "../../assets/cadastro.png";
// eslint-disable-next-line
import axios from "axios";
import { useState, React } from "react";
import { useNavigate } from 'react-router-dom'

const CadastroUser = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [birthday, setBirthday] = useState("");
    const [cep, setCep] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        // eslint-disable-next-line
        const data = {
            name: name,
            email: email,
            username: username,
            password: password,
            passwordConfirmation: passwordConfirmation,
            cep: cep,
            cpf: cpf,
            phone: phone,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            birthday: birthday,
        };


        
        const response = await axios.post("/user/registrar", data).then((res) => {
            console.log(res);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        navigate("/products/all");
    };
    
    return (
        <>
            <div class="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <img className="imgcad" alt="" src={Cadastro} />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            require
                            onChange={(event) => setName(event.target.value)}
                            class="form-control item"
                            id="name"
                            placeholder="Nome Completo"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            require
                            onChange={(event) => setUsername(event.target.value)}
                            class="form-control item"
                            id="username"
                            placeholder="Usuário"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            require
                            onChange={(event) => setPassword(event.target.value)}
                            class="form-control item"
                            id="password"
                            placeholder="Senha"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            require
                            onChange={(event) => setPasswordConfirmation(event.target.value)}
                            class="form-control item"
                            id="passwordConfirmation"
                            placeholder="Confirmação de Senha"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            require
                            onChange={(event) => setEmail(event.target.value)}
                            class="form-control item"
                            id="email"
                            placeholder="E-mail"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            require
                            onChange={(event) => setPhone(event.target.value)}
                            class="form-control item"
                            id="phone"
                            placeholder="Nº de Telefone/Whatsapp"
                        />
                    </div>

                    <div class="form-group">
                        <input
                            type="text"
                            require
                            onChange={(event) => setBirthday(event.target.value)}
                            class="form-control item"
                            id="birth-date"
                            placeholder="Data de Nascimento"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            require
                            onChange={(event) => setCpf(event.target.value)}
                            class="form-control item"
                            id="CPF"
                            placeholder="CPF"
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input
                            type="text"
                            require
                            onChange={(event) => setAddress1(event.target.value)}
                            class="form-control"
                            id="address1"
                            placeholder="Dog Street, nº 0"
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Complemento</label>
                        <input
                            type="text"
                            require
                            onChange={(event) => setAddress2(event.target.value)}
                            class="form-control"
                            id="address2"
                            placeholder="Casa, Apto, etc."
                        />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">Cidade</label>
                            <input
                                type="text"
                                require
                                onChange={(event) => setCity(event.target.value)}
                                class="form-control"
                                id="inputCity"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputCity">Estado</label>
                            <input
                                type="text"
                                require
                                onChange={(event) => setState(event.target.value)}
                                class="form-control"
                                id="inputCity"
                            />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputCEP">CEP</label>
                            <input
                                type="text"
                                require
                                onChange={(event) => setCep(event.target.value)}
                                class="form-control"
                                id="inputCEP"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <button
                            type="submit"
                            value="Enviar"
                            class="btn btn-block create-account"
                        >
                            Criar Conta
                        </button> 
                    </div>
                </form>
                <div class="social-media">
                    <h5>Cadastre-se com sua mídia social</h5>
                    <div class="social-icons">
                        <a href="/">
                            <i class="icon-social-google" title="Google"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CadastroUser;
