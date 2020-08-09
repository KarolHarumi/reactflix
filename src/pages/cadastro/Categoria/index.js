import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // chave: nome, descricao, bla, bli
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor'
        })
    }

    function handleChange(infosDoEvento) {
        const { getAttribute, value } = infosDoEvento.target;
        
        setValue(
          infosDoEvento.target.getAttribute('name'),
          value
        );
      }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField 
                    label="Nome da Categoria:"
                    type="text"
                    value={ values.nome }
                    name="nome"
                    onChange={ handleChange }
                />

                <div>    
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <FormField 
                    label="Cor:"
                    type="color"
                    value={ values.cor }
                    name="cor"
                    onChange={ handleChange }
                />

                <button>Cadastrar</button>
            </form>

            <ul>
                { categorias.map((categoria, index) => {
                    return (
                        <li key={ index }>{ categoria.nome }</li>
                    )
                }) }
            </ul>

            <Link to="/">Ir para home</Link>
        </PageDefault>
    );
}

export default CadastroCategoria;