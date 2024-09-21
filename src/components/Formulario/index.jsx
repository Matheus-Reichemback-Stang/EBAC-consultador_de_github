// HOOKS - São chamado assim, pois ligam o estado do React e o HTML(DOM)
import { useEffect } from "react";
import { useState } from "react";

const Formulario = () => {
    // Para criar um estado no React, usamos a função
    // useState(valorInicial), quando se usa o useState()
    // ele retorna o 'valor' e uma 'função para alterar o valor'
    // do estado atual; Abaixo está uso do useState com uma desestruturação
    // de array
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('');

    // Com useEffect() é possível acionar um evento/código
    // após a mudança de Estado
    useEffect(() => {
        console.log('O Nome mudou')
        // Para condicionar o useEffect() adicionamos um array de dependências
        // após a função/arrowFunction | Nesse caso é o estado do Nome e se não
        // tivesse esse array, o useEffect seria acionado a qualquer mudança na página
    }, [nome])
    useEffect(() => {
        console.log('Alguma matéria mudou')
    }, [materiaA, materiaB, materiaC])
    // Esse useEffect só vai ser acionado na montagem dos componentes
    // pois ele possuí um array, no entanto ele está vazio
    useEffect(() => {
        console.log('o componente inciou')

        // Com o return dentro dessa função, é possível
        // adicionar um efeito quando o componente é desmontado
        return () => {
            console.log('O componente finalizou')
        }
    }, [])

    const alteraNome = (evento) => {
        setNome(evento.target.value)
        // É possível recuperar o estado anterior do valor
        // passando uma função com 1 parametro dentro o setNome 
        // setNome(estadoAnterior => {
        //     console.log(estadoAnterior)

        //     return evento.target.value
        // })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7) {
            // É possível retornar elementos HTML dentro de funções
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
        } else {
            return(
                <p>Ola {nome}, você foi reprovado!</p>
            )
        }
    }

    return(
        <form>
            <ul>
                {/* Para renderizar um Array utilizamos o map, pois o map faz o retorno */}
                {/* Para quebrar mais linhas, ou adicionar mais elementos HTML com um fragmento é preciso adicionar os () */}
                {[1, 2, 3, 4, 5].map(item => (
                // O React utiliza o Virtual DOM para manipular os objetos
                // então, cada objeto de uma lista precisa de uma key que
                // contenha um valor único, para evitar repetições, alterações
                // em mais de um item, e exclusões erroneas
                <li key={item}>{item}</li>
                ))}
            </ul>
            {/* Nesse caso não foi preciso adicionar um arrow funciton, pois a função alteraNome */}
            {/* já contém um argumento para manipular o "evento" */}
            <input type="text" onChange={alteraNome} />
            {/* Acessando o evento onChange diretamente nas tags e parssando o set par alterar o valor do estado */}
            {/* O parseInt foi passado pois o onChange estava retornando o valor em formato de String */}
            <input type="number" placeholder="Nota Matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {/* tem que usar os () senão não funciona */}
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;