import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Informacao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start ;
`;

const Objeto = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    width: 600px;
    height: 100px;
    border-left: 8px solid #1976d2;
    margin-top: 20px;
    padding-left: 10px;
    animation: slideInLeft 0.8s ease-in-out;
    @keyframes slideInLeft {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;

const Detalhes = styled.button`
    cursor: pointer;
    background-color: white;
    margin-top: 20px;
    width: 100px;
    height: 100px;
    margin-left: 10px;
    border-radius: 3px;
    border: none;
    animation: slideInLeft 0.8s ease-in-out;
    @keyframes slideInLeft {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const Botao = styled.button`
    padding: 10px;
    border: none;
    background-color: #1976d2;
    cursor: pointer;
`

const Resposta = styled.span `
    margin-left: 10px;
    padding: 10px;
    border-left: 4px solid #16599c;
    background-color: #dfdfdf;
`

export { Container, Informacao, Objeto, Detalhes, Botao, Resposta}
