import styles from './Perfil.module.css';
// import './perfil.css';

// Com JSON.stringfy(objeto) permite transformar um
// objeto em uma string

// Para criar props, passamos um argumento como parametro da função
const Perfil = ({ nomeUsuario }) => {
    // É possível fazer a desestruturação das props
    // Também é possível desestruturar dentro do () da função
    // const {avatar, nome} = props;

    return(
        <header className={styles.header}>
            {/*
            Qunado for adicionar conteúdo JSX em um valor de atributo 
            deve-se usar {} ao invés das "", e quando é dentro da tag
            HTML também.
            */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Foto do perfil do Usuário" />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;