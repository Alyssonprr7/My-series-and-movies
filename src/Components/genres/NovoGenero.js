import React, {useState} from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

const NovoGenero = () => {
    const [name,setName] = useState("");
    const [sucess, setSucess] = useState(false);
    const onChange = (event) => {
        setName(event.target.value);
    }
    const save = () => {
        axios.post("/api/genres", {
            name:name 
        }).then(res => {
            setSucess(true);
        })
    }

    if(sucess){
        return <Redirect to ="/generos" />
    }

    return (
    <div className = "container">
        <h1>NOVO GÊNERO</h1>
        <form>
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" value={name} className="form-control" onChange={onChange} id="name" placeholder="Nome do gênero" />
            </div>
            <div>
                <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
                <button type="button" onClick={setSucess} className="btn btn-primary">Voltar </button>
            </div>
        </form>
    </div>
    )
}

export default NovoGenero;