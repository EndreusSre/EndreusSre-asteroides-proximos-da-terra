import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Informacao, Detalhes, Objeto, Botao } from "./Estilos";
import { CampoData, DataSelecionada } from "./CampoData";

const PaginaInicial = () => {
    const [listaAsteroides, setListaAsteroides] = useState([]);
    const [dataAtual, setDataAtual] = useState(getDataAtual());
    const [botaoClicado, setBotaoClicado] = useState(false);
    const [filtro, setFiltro] = useState("todos");

    useEffect(() => {
        fetchData();
    }, [dataAtual, filtro]);

    function fetchData() {
        try {
            axios.get(
                `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtual}&end_date=${dataAtual}&api_key=FuJBYte3l3n9OFWrRqhXK7Vdkmdb0K2cltsSbWPR`
            )
                .then(response => {
                    const asteroides = response.data.near_earth_objects[dataAtual];
                    let asteroidesFiltrados = [];
                    if (filtro === "nao-perigoso") {
                        asteroidesFiltrados = asteroides.filter(asteroide => !asteroide.is_potentially_hazardous_asteroid);
                    } else if (filtro === "perigoso") {
                        asteroidesFiltrados = asteroides.filter(asteroide => asteroide.is_potentially_hazardous_asteroid);
                    } else {
                        asteroidesFiltrados = asteroides;
                    }
                    setListaAsteroides(asteroidesFiltrados);
                })
                .catch(error => {
                    console.error("Erro ao buscar asteroides:", error);
                });
        } catch (error) {
            console.error("Erro ao buscar asteroides:", error);
        }
    }

    function getDataAtual() {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
        const dia = hoje.getDate().toString().padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }

    const identificarData = (event) => {
        setDataAtual(event.target.value);
    };

    const clicarButao = () => {
        setBotaoClicado(true);
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', color: '#ffffff' }}>
                <CampoData>
                    <label htmlFor="data">Selecione a data:</label>
                    <DataSelecionada
                        type="date"
                        id="data"
                        value={dataAtual}
                        onChange={identificarData}
                    />
                    <Botao style={{
                        width: '100%',
                    }} onClick={clicarButao}>Atualizar Data</Botao>
                </CampoData>
                <h1 style={{
                    textAlign: 'center',
                    width: '400px',
                    height: '50px',
                    fontSize: '30px',
                    fontWeight: '200',
                    backgroundColor: '#1976d2'
                }}>Asteroides próximos da terra</h1>
                <div style={{
                    backgroundColor:'#1976d2', 
                    height:'40px', 
                    fontWeight:'200',
                    padding:'10px'
                    }}>
                    <label style={{padding:'10px'}}>
                        <input
                            type="radio"
                            name="filtro"
                            value="todos"
                            checked={filtro === "todos"}
                            onChange={() => setFiltro("todos")}
                        />
                        Todos
                    </label>
                    <label style={{padding:'10px'}}>
                        <input
                            type="radio"
                            name="filtro"
                            value="nao-perigoso"
                            checked={filtro === "nao-perigoso"}
                            onChange={() => setFiltro("nao-perigoso")}
                        />
                        Somente não perigosos
                    </label>
                    <label style={{padding:'10px'}}>
                        <input
                            type="radio"
                            name="filtro"
                            value="perigoso"
                            checked={filtro === "perigoso"}
                            onChange={() => setFiltro("perigoso")}
                        />
                        Somente perigosos
                    </label>
                </div>

            </div>

            <Container>
                <Informacao>
                    {listaAsteroides.map((asteroide) => (
                        <div key={asteroide.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                            <Objeto>
                                <Informacao>
                                    <p style={{ fontSize: '20px' }}><strong>Nome:</strong>{asteroide?.name}</p>
                                    <p style={{ fontSize: '20px' }}><strong>Perigoso:</strong> {asteroide?.is_potentially_hazardous_asteroid ? "Sim" : "Não"}</p>
                                </Informacao>
                            </Objeto>
                            <Link to={`/detalhes-asteroide/${asteroide.id}`}>
                                <Detalhes>
                                    <p style={{ fontSize: '20px' }}>Detalhes</p>
                                </Detalhes>
                            </Link>
                        </div>
                    ))}
                </Informacao>
            </Container>
        </>
    );
};

export default PaginaInicial;
