import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Objeto, Informacao, Resposta } from "./Estilos";

const DetalhesDoAsteroide = () => {
    const { id } = useParams();
    const [asteroide, setAsteroide] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=FuJBYte3l3n9OFWrRqhXK7Vdkmdb0K2cltsSbWPR`
                );
                setAsteroide(response.data);
            } catch (error) {
                console.error("Erro ao buscar detalhes do asteroide:", error);
            }
        };

        fetchData();
    }, [id]);

    if (!asteroide) {
        return null;
    }

    return (
        <>
            <h1 style={{
                textAlign:'center',
                color: '#ffffff',  
                width: '400px',
                fontSize: '30px',
                fontWeight: '200',
                backgroundColor: '#1976d2'
                }}>Detalhes do asteroide</h1>
            <Objeto style={{ marginTop: '30px', width: '1100px', height: '300px' }}>
                <Informacao style={{fontSize:'20px'}}>
                    <p style={{ padding: '15px',}}> <strong>Nome:</strong>
                        <Resposta>
                            {asteroide?.name}
                        </Resposta>
                    </p>
                    <p style={{ padding: '15px'}}><strong>Perigoso:</strong>
                        <Resposta>
                            {asteroide?.is_potentially_hazardous_asteroid ? "Sim" : "Não"}
                        </Resposta>
                    </p>
                    <p style={{ padding: '15px' }}><strong>Velocidade:</strong> 
                        <Resposta>
                            {asteroide.close_approach_data?.[0]?.relative_velocity?.kilometers_per_hour} Km/hr
                        </Resposta>
                    </p>
                    <p style={{ padding: '15px' }}><strong>Magnitude absoluta:</strong> 
                        <Resposta>
                            {asteroide?.absolute_magnitude_h}
                        </Resposta>
                    </p>
                    <p style={{ padding: '15px' }}><strong>Diâmetro estimado:</strong> 
                        <Resposta>
                            {asteroide?.estimated_diameter?.kilometers?.estimated_diameter_max}
                        </Resposta>
                    </p>
                </Informacao>
            </Objeto>
        </>
    );
};

export default DetalhesDoAsteroide;