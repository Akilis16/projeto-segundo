import style from'./TelaInicial.module.css'
import {Link} from 'react-router-dom'

function TelaInicial() {
    return(
        <section class={style.jogar}>
            <button class={style.btnJogar}>  
                <Link to="/jogos">
                    <img src="img/jogos-logo.png" alt="" />
                    <h1>Jogos</h1>
                </Link>
            </button>
        </section>
    )
}

export default TelaInicial