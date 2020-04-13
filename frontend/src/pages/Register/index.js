import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Register() {
    return <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="be the hero" />
                <h1>Cadastro</h1>
                <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontre os casos da sua ONG.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041" />
                Voltar para o logon
            </Link>
            </section>
            <form onSubmit="/">
                <input
                    placeholder="Nome da ONG"
                //value={name}
                //onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                //value={email}
                //onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder="Whatsapp"
                    type="number"
                //value={whatsapp}
                //onChange={e => setWhatsapp(e.target.value)}
                />
                <div className="input-group">
                    <input
                        placeholder="Cidade"
                    //value={city}
                    //onChange={e => setCity(e.target.value)}
                    />
                    <input
                        placeholder="UF"
                        style={{ width: 80 }}
                    //value={uf}
                    //onChange={e => setUf(e.target.value)}
                    />
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>;
}