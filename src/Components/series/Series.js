import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

const Series = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get("/api/series")
            .then(res => {
                setData(res.data.data)
            })
    },[]);

    const deleteSerie = (id) => {
        axios.delete("/api/series/" + id)
            .then((res) =>{
                const filtrado = data.filter(item => item.id !== id);
                setData(filtrado);
                

            })
    }

    const renderizaLinha = record => {
        return(
            <tr key ={record.id}>
                <th scope="row">{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => deleteSerie(record.id)}> Remover </button>
                    <Link to={"/series/" + record.id} className="btn btn-warning">INFO</Link>
                </td>
            </tr>
        );
    }

    if(data.length === 0) {
        return(
            <div className="container">
                <h1>SÉRIES</h1>
                <Link to ="/series/novo" className="btn btn-info">Nova Série</Link> 
                <div className="alert alert-warning" role="alert">
                    VOCÊ NÃO POSSUI SÉRIES CRIADAS
                </div>
            </div>
        )
    }

    return(
        <div className = "container">
            <h1>SÉRIES</h1>
            <Link to ="/series/novo" className="btn btn-info">Nova Série</Link>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope ="col"> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizaLinha)}
                 
                </tbody>
                </table>
        </div>

    )
}


export default Series;