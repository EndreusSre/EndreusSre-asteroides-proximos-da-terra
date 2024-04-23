import { Objeto, Container } from "./Estilos"
import foto from "./assets/fotosobre.jpg"

const Sobre = () => {
    return (
        <>
            <h1 style={{
                textAlign:'center',
                color: '#ffffff',
                width: '500px',
                fontSize: '30px',
                fontWeight: '200',
                backgroundColor: '#1976d2',
            }}>Sobre Endreus Valério Parente Filho</h1>
            <Container style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Objeto style={{
                    height: '515px',
                    padding:'20px',
                    display:'flex',
                    flexDirection:'column',
                    textAlign:'left',
                    fontSize: '20px',
                }}>
                    <p>Comecei no final de 2022 a trabalhar como garçom em outra cidade, logo após terminar o ensino médio e enquanto estava decidindo o que queria estudar. Foi quando me deparei com esse curso de frontend. Ele abriu meus olhos e reavivou minha vontade de estudar programação, mas desta vez como algo concreto</p>
                    <br />
                    <p>Depois de 1 ano fora e uns meses de curso, decidi pedir demissão e focar 100% nos estudos (<span>isso só foi possível graças ao apoio dos meus tios</span>). Com isso aprendi coisas que nunca imaginei que aprenderia, tecnologias incríveis que me fizeram me apaixonar ainda mais pela área.</p>
                    <br />
                    <p>Tecnologias aprendidas:</p>
                    <ul>
                        <li>HTML5s</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </Objeto>
                <img src={foto} alt="" style={{
                    height:'500px',
                    width:'500px',
                    marginTop: '20px',
                    marginLeft: '100px',
                }}/>
            </Container>
        </>
    )
}

export default Sobre
