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
import BuscarVariacao from "../BuscarVariacao";
import Chart2 from "../Chart2";

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

    useEffect(() => {
        buscar();
        buscarVariacao();
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

    /********** */
    const [graphSwitch, setGraphSwitch] = useState(false);
    const [Values, setValues] = useState([]);
    const [Dates, setDates] = useState([]);

    const handleclick = async () => {
        graphSwitch ? setGraphSwitch(false) : setGraphSwitch(true);
        console.log("click");
        console.log(graphSwitch);
        if (!graphSwitch) {
            const data = await BuscarVariacao(30, "USD");
            setValues(data.values);
            setDates(data.dates);
            console.log("okoko");
        } else {
            const data = await BuscarVariacao(15, "USD");
            setValues(data.values);
            setDates(data.dates);
            console.log("kkk");
        }
    };
    const buscarVariacao = async () => {
        const data = await BuscarVariacao(15, "USD");
            setValues(data.values);
            setDates(data.dates);
    };
    /********************** */

    const dolarComercial = useRef(null);
    const goToDC = () =>
        window.scrollTo({
            top: dolarComercial.current.offsetTop,
            behavior: "smooth",
        });

    return (
        <Fragment>
            <ScrollToTop />
            <section className="dollar-main">
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
                        <a href="#grafico">Gráfico</a>
                    </li>
                    <li>
                        <a href="#dolarcomercial" onClick={goToDC}>
                            Dólar Comercial
                        </a>
                    </li>
                    <li>
                        <a href="#">Dólar Turismo</a>
                    </li>
                    <li>
                        <a href="#">Sobre o Dólar</a>
                    </li>
                </ul>
            </nav>

            <section className="dolar-info">
                <div className="dolarcomercial-info" ref={dolarComercial}>
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
                    <h3>Dólar Ptax</h3>
                    <p>
                        Fixada pelo Banco Central, o dólar Ptax é a taxa de
                        câmbio calculada que equivale a média de todas as
                        operações realizadas pelo mercado durante o dia.
                    </p>
                </div>
                <Grafico
                    className="grafico"
                    moeda="USD"
                    title="Cotações na ultima semana"
                    label="Variação Dolar x Real"
                    color1="#7C4DFF"
                    color2="#448AFF"
                    color3="#00BCD4"
                    color4="#1DE9B6"
                    
                />
                {/* <Chart2
                    className="grafico"
                    moeda="USD"
                    title="Cotações na ultima semana"
                    label="Variação Dolar x Real"
                    color1="#7C4DFF"
                    color2="#448AFF"
                    color3="#00BCD4"
                    color4="#1DE9B6"
                    
                /> */}
                <div className="dolarturismo-info">
                    <h2>Dolar Turismo</h2>
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

                    <h3>Dólar Paralelo</h3>
                </div>
                <div className="sobreodolar-info">
                    <h2>Sobre o Dólar</h2>
                    <p>
                        {` O dólar dos Estados Unidos (US Dollar, USD, US$) é a
                        moeda emitida pelos Estados Unidos através da Reserva
                        Federal dos Estados Unidos.<br></br>
                        Ele possui moedas de 1, 5, 10, 25, 50 cents e 1 dólar.
                        As notas que circulam hoje são de 1, 5, 10, 20, 50 e 100
                        dólares.<br></br>
                        Ele também é a moeda oficial do Timor-Leste, Equador, El
                        Salvador, Panamá e Porto Rico. Também é usado
                        não-oficialmente nas Ilhas Virgens Britânicas, Ilhas
                        Marshall, Estados Federados da Micronésia, Palau, Turks
                        e Cacos e Zimbabwe.`}
                    </p>
                </div>
            </section>
        </Fragment>
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
