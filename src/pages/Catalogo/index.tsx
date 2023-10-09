import styles from './Catalogo.module.scss';
import logo from 'assets/logo.jpg';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Catalogo(){

    const[busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);

    return(
        <main>
        <br></br>
        <nav className={styles.menu}>
            <img src={logo} alt="Logo" />
        </nav>
        <header className={styles.header}> 
            <div className={styles.header__text}>
            A sua droga você encontra aqui!
            </div>
        </header>
        <section className={styles.catalogo}>
            <h3 className={styles.catalogo__titulo}>Produtos</h3>
            <Buscador busca={busca} setBusca={setBusca}/>

            <div className={styles.catalogo__filtros}>
            <Filtros filtro={filtro} setFiltro={setFiltro}/>
            </div>
        </section>
   </main>

    );
}