import React, {useState, useEffect} from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

const EditarGenero = ({match}) => { //Match veio das props 
    const [name,setName] = useState("");
    const [sucess, setSucess] = useState(false);
    
    useEffect(() =>{
        axios.get("/api/genres/" + match.params.id)
            .then(res =>{
                setName(res.data.name)
            })

    }, [match.params.id]) //Entre colchetes quer dizer dependencia, se mudar o id roda de  novo
 
    
    const onChange = (event) => {
        setName(event.target.value);
    }
    
    const save = () => {
        axios.put("/api/genres/"+ match.params.id, {
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
        <h1>EDITAR GÊNERO</h1>
        <form>
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" value={name} className="form-control" onChange={onChange} id="name" placeholder="Nome do gênero" />
            </div>
            <div>
                <button type="submit" onClick={save} className="btn btn-primary">Salvar</button>
                <button type="button" onClick={setSucess} className="btn btn-primary">Voltar </button>
            </div>

        </form>
    </div>
    )
}

export default EditarGenero;