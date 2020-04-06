import React, {useState} from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

const NovaSerie = () => {
    const [name,setName] = useState("");
    const [sucess, setSucess] = useState(false);
    const onChange = (event) => {
        setName(event.target.value);
    }
    const save = () => {
        axios.post("/api/series", {
            name:name 
        }).then(res => {
            setSucess(true);
            
        })
    }
    const back = () => {
        return <Redirect to = "/series" />

        
    }

    if(sucess){
        return <Redirect to = "/series" />
    }

    return (
    <div className = "container">
        <h1>NOVA SÉRIE</h1>
        <form>
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" value={name} className="form-control" onChange={onChange} id="name" placeholder="Nome da série" />
            </div>
            <div>
                <button type="submit" onClick={save} className="btn btn-primary">Salvar</button>
                <button type="button" onClick={setSucess} className="btn btn-primary">Voltar </button>
            </div>
        </form>
    </div>
    )
}

export default NovaSerie;