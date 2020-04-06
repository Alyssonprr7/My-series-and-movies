import React, {useState, useEffect} from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

const NovaSerie = () => {
    const [sucess, setSucess] = useState(false);
    const [form, setForm] = useState({name:""});
    const [genres, setGenres] = useState([])
    const [genreId, setGenreId] = useState("")



   const onChange = field => (event) => {
        setForm({
            ... form,
            [field]: event.target.value//Key dinameico 
        }); //Mantive os valores de form e só setei o nome
    } 

    useEffect(() => {
        axios
            .get("/api/genres")
            .then(res => {
                setGenres(res.data.data)
            })
    });

    const onChangeGenre = event=> {
        setGenreId(event.target.value)

    }
    const seleciona = value => () => {
        setForm({
            ...form,
            status:value
        })
    }

    const save = () => {
        console.log(form.name);
        
        axios.post("/api/series", {
            ...form,
            genre_id:genreId
        }).then(res => {
            setSucess(true);
            
        })
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
                <input type="text" value={form.name} className="form-control" onChange={onChange("name")} id="name" placeholder="Nome da série" />
            </div>
            <div className="form-group">
                <label htmlFor="comments">Comentários</label>
                <input type="text" value={form.comments} className="form-control" onChange={onChange("comments")} id="comments" placeholder="Comentários" />
            </div>
            <div className="form-group">
                <label htmlFor="generos">Gênero</label>
                <select className="form-control" onChange={onChangeGenre} value = {genreId}>
                {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="status" id="assistido" checked={form.status ==="ASSISTIDO"} value="ASSISTIDO" onChange={seleciona("ASSISTIDO")} />
                    <label className="form-check-label" htmlFor="assistido">
                        Assistido
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio"  name="status" id="paraAssistir" checked={form.status ==="PARA_ASSISTIR"} value="PARA_ASSISTIR"  onChange={seleciona("PARA_ASSISTIR")} />
                    <label className="form-check-label" htmlFor="paraAssistir">
                        Para Assistir
                    </label>
            </div>
            <div>
                <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
                <button type="button" onClick={setSucess} className="btn btn-primary">Voltar </button>
            </div>

        </form>
    </div>
    )
}

export default NovaSerie;