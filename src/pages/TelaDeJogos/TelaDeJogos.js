import style from './TelaDeJogos.module.css'
import {Link} from 'react-router-dom'

function TelaDeJogos() {
    return(
        
        <section className={style.jogos}>
            <div className={style.l1}>
                
                <Link to="/jogo-da-memoria">
                    <div className={style.jg1}>
                        <h1>Jogo da Memória</h1>
                        <img src="../img/jogos/jogo-da-memoria.png" alt= "" />
                    </div>
                </Link>

                <Link to="/joga-da-velha">
                    <div className={style.jg2}>
                        <h1>Jogo da Velha</h1>
                        <img src="../img/jogos/jogo-da-velha.png" alt="" />
                    </div>
                </Link>

                <Link to="/quiz">
                    <div className={style.jg3}>
                        <h1>Quiz</h1>
                        <img src="../img/jogos/quiz.png" alt="" />
                    </div>
                </Link>
            </div>

            <div className={style.l2}>
                <Link to="/sudoku">
                    <div className={style.jg4}>
                        <h1>Sudoku</h1>
                        <img src="../img/jogos/sudoku.png" alt="" />
                    </div>
                </Link>
                <Link to="/jogo-da-forca">
                    <div className={style.jg5}>
                        <h1>Jogo da Forca</h1>
                        <img src="../img/jogos/jogo-da-forca.png" alt="" />
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default TelaDeJogos