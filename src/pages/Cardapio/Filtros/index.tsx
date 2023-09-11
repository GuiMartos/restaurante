import styles from './Filtros.module.scss';
import filtros from './filtros.json';

type IOpcao = typeof filtros[0]
/*interface IOpcao{
    id:number;
    label: string
}*/

export default function Filtros(){

    return(

        <div>
            {filtros.map((opcao) =>(
                <button key={opcao.id}>
                    {opcao.label}
                </button>
            ))}
        </div>

    );

}