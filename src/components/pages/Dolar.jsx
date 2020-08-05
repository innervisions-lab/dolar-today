import React, { useState, useEffect, Fragment } from "react";
import "../../styles/css/Dolar.css";
import buscarCambio from "../BuscarCambio";
import Conversor from "../Conversor";
import Grafico from "../Grafico";
import Banner_Flag from "../../assets/icons/us-flat.png";
import Origem_Flag_Icon from "../../assets/icons/us.png";
import Destino_Flag_Icon from "../../assets/icons/br.png";
import ScrollToTop from "../ScrollToTop";
import { useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import dollarum from "../../assets/moedas/Moedas americanas/1dollar.jpg";
import dollarumv from "../../assets/moedas/Moedas americanas/1dollarV.jpg";
import dollardois from "../../assets/moedas/Moedas americanas/2dollar.jpg";
import dollardoisv from "../../assets/moedas/Moedas americanas/2dollarV.jpg";
import dollarcinco from "../../assets/moedas/Moedas americanas/5dollar.jpg";
import dollarcincov from "../../assets/moedas/Moedas americanas/5dollarV.jpg";
import dollardez from "../../assets/moedas/Moedas americanas/10dollar.jpg";
import dollardezv from "../../assets/moedas/Moedas americanas/10dollarV.jpg";
import dollarvinte from "../../assets/moedas/Moedas americanas/20dollar.jpg";
import dollarvintev from "../../assets/moedas/Moedas americanas/20dollarV.jpg";
import dollarcinquenta from "../../assets/moedas/Moedas americanas/50dollar.jpg";
import dollarcinquentav from "../../assets/moedas/Moedas americanas/50dollarV.jpg";
import dollarcem from "../../assets/moedas/Moedas americanas/100dollar.jpg";
import dollarcemv from "../../assets/moedas/Moedas americanas/100dollarV.jpg";
import dollarcentum from "../../assets/moedas/Moedas americanas/1cent.png";
import dollarcentumv from "../../assets/moedas/Moedas americanas/1centV.png";
import dollarcentcinco from "../../assets/moedas/Moedas americanas/5cent.png";
import dollarcentcincov from "../../assets/moedas/Moedas americanas/5centV.png";
import dollarcentdez from "../../assets/moedas/Moedas americanas/10cent.png";
import dollarcentdezv from "../../assets/moedas/Moedas americanas/10centV.png";
import dollarcent25 from "../../assets/moedas/Moedas americanas/25cent.png";
import dollarcent25v from "../../assets/moedas/Moedas americanas/25centV.jpg";
import dollarcent50 from "../../assets/moedas/Moedas americanas/50cent.png";
import dollarcent50v from "../../assets/moedas/Moedas americanas/50centV.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Container from 'react-bootstrap-carousel'


export default (params) => {
    const [Cambio, setCambio] = useState("");
    const [Valor, setaValor] = useState((1.0).toFixed(2));
    const [origemInput, setaorigemInput] = useState("origem");
    let valorOrigem, valorDestino;

    if (origemInput === "origem") {
        valorOrigem = Valor;
        valorDestino = valorOrigem * Cambio;
    } else if (origemInput === "destino") {
        valorDestino = Valor;
        valorOrigem = valorDestino / Cambio;
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        buscar();
    }, []);

    const buscar = async () => {
        const API_Data = await buscarCambio("USD");
        console.log(API_Data);
        setCambio(API_Data.USD.ask);
    };

    const atualizarValorOrigem = (e) => {
        let value = e.target.value.split(",").join("");
        setaValor(value);
        setaorigemInput("origem");
    };
    const atualizarValorDestino = (e) => {
        let value = e.target.value.split(",").join("");
        setaValor(value);
        setaorigemInput("destino");
    };

    const dolarComercial = useRef(null);
    const goToDC = () =>
        window.scrollTo({
            top: dolarComercial.current.offsetTop,
            behavior: "smooth",
        });

    const truee = true;

    return (


        <Fragment>



            <ScrollToTop />
            <section className="Dolar">
                <div className="main-banner">
                    <img src={Banner_Flag} alt="" />
                    <h1>Dólar Hoje</h1>
                </div>
                <div className="conversor-container">
                    <Conversor
                        flag={Origem_Flag_Icon}
                        cifrao="US$"
                        sigla="USD"
                        valor={valorOrigem}
                        mudarValor={atualizarValorOrigem}
                    />
                    <div className="Arrow">&#11138;</div>
                    <Conversor
                        flag={Destino_Flag_Icon}
                        cifrao="R$"
                        sigla="BRL"
                        valor={valorDestino}
                        mudarValor={atualizarValorDestino}
                    />
                </div>
            </section>

            <nav className="dollar-scroll-header">
                <ul className="dollar-menu">
                    <li>
                        <AnchorLink href='#grafico'>Gráfico</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#dolarC'>Dólar Comercial</AnchorLink>
                    </li>
                    <li>

                        <AnchorLink href='#dolart'>Dólar Turismo</AnchorLink>

                    </li>
                    <li>
                        <AnchorLink href='#sobre'>Sobre o Dólar</AnchorLink>
                    </li>
                </ul>
            </nav>

            <section className="dolar-info">
                <div className="dolarcomercial-info" id="dolarC">
                    <h2>Dólar Comercial</h2>

                    <p>
                        Utilizado para definir as taxas de mercado, e como
                        parâmetro em grandes movimentações de
                        importação/exportação, o dolár comercial se refere às
                        transações comerciais entre grandes empresas e
                        instituições financeiras.
                    </p>
                    <p>
                        O dolár comercial possui cotação variável (confira no
                        gráfico) que é negociada entre bancos e empresas sob
                        interferência do Banco Central do Brasil; que visa
                        evitar a subida ou a descida excessiva da taxa de
                        câmbio, evitando a desvalorização do real e minimizando
                        os efeitos sobre as exportações, mantendo um valor
                        viável para balança comercial brasileira.
                    </p>
                    <p>Dólar Ptax</p>
                    <p>
                        Fixada pelo Banco Central, o dólar Ptax é a taxa de
                        câmbio calculada que equivale a média de todas as
                        operações realizadas pelo mercado durante o dia.
                    </p>
                </div>

                <h2 id="grafico">Cotações na ultima semana</h2>

                <Grafico

                    className="grafico"
                    moeda="USD"
                    label="Variação Dolar x Real"
                />

                <div className="dolarturismo-info" id="dolart">
                    <h2 >Dolar Turismo</h2>
                    <p>
                        Utilizado por pessoas físicas em viagens ao exterior e
                        para a compra de bens e serviços em sites
                        internacionais.
                    </p>
                    <p>
                        Negóciado em casas de câmbio, tendo a sua cotação
                        baseada no valor do dólar comercial, acrescentado de
                        impostos governamentais e custos operacionais como
                        segurança e transporte da moeda até as casas de câmbio.
                    </p>
                    <p>Sendo assim mais caro que o dólar comercial</p>

                    <p>Dólar Paralelo</p>
                </div>

                <div className="sobreodolar-info" id="sobre">

                    <h2 >Notas Atuais</h2>

                    <Carousel className="Carousel">
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-img"
                                src={dollarum}
                                alt="Nota de 1 Dolar"
                            />

                            <img
                                className="carousel-imgV"
                                src={dollarumv}
                                alt="Nota de 1 Dolar"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: George Washington</p>
                                <p>Desenho no inverso: Illuminati</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-img"
                                src={dollardois}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgV"
                                src={dollardoisv}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Thomas Jefferson</p>
                                <p>Desenho no inverso: Declaração da Independência</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-img"
                                src={dollarcinco}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgV"
                                src={dollarcincov}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Abraham Lincoln	</p>
                                <p>Desenho no inverso: Lincoln Memorial</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-img"
                                src={dollardez}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgV"
                                src={dollardezv}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Alexander Hamilton</p>
                                <p>Desenho no inverso: Prédio do Tesouro</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-img"
                                src={dollarvinte}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgV"
                                src={dollarvintev}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Andrew Jackson</p>
                                <p>Desenho no inverso: Casa Branca</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-img"
                                src={dollarcinquenta}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgV"
                                src={dollarcinquentav}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Ulysses S. Grant</p>
                                <p>Desenho no inverso: Capitólio</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-img"
                                src={dollarcem}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgV"
                                src={dollarcemv}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Benjamin Franklin</p>
                                <p>Desenho no inverso: 	Independence Hall</p>
                            </Carousel.Caption>
                        </Carousel.Item>



                    </Carousel>

                    <h2>Moedas Atuais</h2>

                    <Carousel className="Carousel">

                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-imgM"
                                src={dollarcentum}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgVM"
                                src={dollarcentumv}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Abraham Lincoln</p>
                                <p>Desenho no inverso: Escudo da União</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-imgM"
                                src={dollarcentcinco}
                                alt="Third slide"
                            />


                            <img
                                className="carousel-imgVM"
                                src={dollarcentcincov}
                                alt="Nota de 1 Dolar"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Thomas Jefferson</p>
                                <p>Desenho no inverso: Monticello</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-imgM"
                                src={dollarcentdez}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgVM"
                                src={dollarcentdezv}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: Franklin D. Roosevelt</p>
                                <p>Desenho no inverso: Tocha, ramo de carvalho, ramo de oliva</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-imgM"
                                src={dollarcent25}
                                alt="Third slide"
                            />


                            <img
                                className="carousel-imgVM"
                                src={dollarcent25v}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: George Washington</p>
                                <p>Desenho no inverso: Illuminati</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="carousel-imgM"
                                src={dollarcent50}
                                alt="Third slide"
                            />

                            <img
                                className="carousel-imgVM"
                                src={dollarcent50v}
                                alt="Nota de 1 Dolar"
                            />

                            <Carousel.Caption className="carousel-caption">
                                <p>Desenho no anverso: George Washington</p>
                                <p>Desenho no inverso: Illuminati</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                  
                </div>
            </section>
        </Fragment >
    );
};

/********Banners Old********* */
{
    /* <div className="valor-comercial">
    <span className="titulo">Dólar Comercial</span>
    <span className="cambio"> {`R$ ${cambio}`}</span>
    <p>
    Usado em transações com exportação/importação entre bancos,
    instituições financeiras e empresas.
    </p>
    </div>
 
            <div className="valor-turismo">
                <span className="titulo">{`Dólar Turismo`}</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, nostrum?
                </p>
            </div> */
}
