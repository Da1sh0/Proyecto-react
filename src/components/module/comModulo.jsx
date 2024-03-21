import React, { Component } from 'react';
import style from './styles/comModulo.style.css'
import diego from './styles/image/mapache.jpg'
import vanessa from './styles/image/vane.jpg'
import helmut from './styles/image/viejo.jpeg'
import instagram from './styles/image/logoInsta.png'
import styled from 'styled-components'

class ComModulo extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const Titulo = styled.h1`
        text-align: center;
        font-size: 50px;
        color: var(--colorText);
        -webkit-text-stroke: 2px black;`
        
        const Contenedor = styled.div`
        display: flex;
        flex-direction: row;
        padding: 50px;`

        const Diego = styled.h1`
        color: var(--colorDiiego);
        -webkit-text-stroke: 2px black;
        font-size: 40px;`
        const DiegoT = styled.h2`
        color: var(--colorDiiego);
        -webkit-text-stroke: 2px black;
        font-size: 30px;`

        const Vanessa = styled.h1`
        color: var(--colorVanessa);
        -webkit-text-stroke: 2px black;
        font-size: 40px;`
        const VanessaT = styled.h2`
        color: var(--colorVanessa);
        -webkit-text-stroke: 2px black;
        font-size: 30px;`

        const Helmut = styled.h1`
        color: var(--colorHelmut);
        -webkit-text-stroke: 2px black;
        font-size: 40px;`
        const HelmutT = styled.h2`
        color: var(--colorHelmut);
        -webkit-text-stroke: 2px black;
        font-size: 30px;`

        return (
            <>
            <Titulo>Presentacion de grupo</Titulo>
            <Contenedor>
                <div className='tarjeta'>
                    <img className='imagen' src={diego} alt="Diego" />
                    <div className='nombre'>
                        <Diego>Diiego Camiino</Diego>
                        <DiegoT>Hola, soy Diego, Estudiante de ADSO y me gustan los Mapaches </DiegoT>
                    </div>
                    <div className='instagram'>
                        <img className='logo' src={instagram} alt="instagram" />
                        <a href='https://www.instagram.com/diiego_camiino/'>Diiego_Camiino</a>
                    </div>
                </div>

                <div className='tarjeta'>
                    <img className='imagen' src={vanessa} alt="Vanessa" />
                    <div className='nombre'>
                        <Vanessa>Vanessa Garcia</Vanessa>
                        <VanessaT>Hola, soy Vanessa, Estudiante de ADSO y me gustan los girasoles </VanessaT>
                    </div>
                    <div className='instagram'>
                        <img className='logo' src={instagram} alt="instagram" />
                        <a href='https://www.instagram.com/vanessa_garcia8/'>Vanessa_Garcia</a>
                    </div>
                </div>

                <div className='tarjeta'>
                    <img className='imagen' src={helmut} alt="Helmut" />
                    <div className='nombre'>
                        <Helmut>Helmut Romero</Helmut>
                        <HelmutT>Hola, soy Helmut, Estudiante de ADSO y me gustan programar</HelmutT>
                    </div>
                    <div className='instagram'>
                        <img className='logo' src={instagram} alt="instagram" />
                        <a className={style.a} href='https://www.instagram.com/helmut._romero/'>Helmut Romero</a>
                    </div>
                </div>
            </Contenedor>
            </>
         );
    }
}
 
export default ComModulo;