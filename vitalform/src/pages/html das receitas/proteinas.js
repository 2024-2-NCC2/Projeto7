import React from 'react';
import { Link } from 'react-router-dom'; 

function ReceitasDeProteinas() {
    return (
        <div>
            <h1>Receitas de Proteínas</h1>
            <hr />
            
            <h2>1. Omelete de Espinafre e Queijo</h2>
            <h3>Ingredientes:</h3>
            <ul>
                <li>2 ovos</li>
                <li>1 xícara de espinafre fresco</li>
                <li>1/4 de xícara de queijo (como feta ou queijo minas)</li>
                <li>Sal e pimenta a gosto</li>
                <li>Azeite ou manteiga para untar</li>
            </ul>

            <h3>Modo de Preparo:</h3>
            <ol>
                <li>Em uma tigela, bata os ovos com sal e pimenta.</li>
                <li>Aqueça uma frigideira com um pouco de azeite ou manteiga.</li>
                <li>Adicione o espinafre e cozinhe até murchar.</li>
                <li>Despeje os ovos batidos e cozinhe em fogo baixo.</li>
                <li>Quando a omelete estiver quase pronta, adicione o queijo e dobre ao meio. Cozinhe até o queijo derreter.</li>
            </ol>

            <h2>2. Filé de Peixe Grelhado com Quinoa</h2>
            <h3>Ingredientes:</h3>
            <ul>
                <li>1 filé de peixe (como tilápia, salmão ou linguado)</li>
                <li>1/2 xícara de quinoa</li>
                <li>1 xícara de água</li>
                <li>Temperos a gosto (sal, pimenta, limão, ervas)</li>
                <li>Azeite</li>
            </ul>

            <h3>Modo de Preparo:</h3>
            <ol>
                <li>Tempere o filé de peixe com sal, pimenta e limão.</li>
                <li>Grelhe o peixe em uma frigideira com um pouco de azeite até que esteja cozido (cerca de 3-5 minutos de cada lado, dependendo da espessura).</li>
                <li>Enquanto isso, cozinhe a quinoa em água fervente por cerca de 15 minutos, até que absorva toda a água.</li>
                <li>Sirva o peixe com a quinoa como acompanhamento.</li>
            </ol>

            <h2>3. Smoothie de Proteína</h2>
            <h3>Ingredientes:</h3>
            <ul>
                <li>1 banana</li>
                <li>1 colher de sopa de manteiga de amendoim</li>
                <li>1 scoop de proteína em pó (whey ou vegetal)</li>
                <li>1 xícara de leite (ou leite vegetal)</li>
                <li>Gelo a gosto</li>
            </ul>

            <h3>Modo de Preparo:</h3>
            <ol>
                <li>Coloque todos os ingredientes no liquidificador.</li>
                <li>Bata até ficar homogêneo.</li>
                <li>Sirva gelado.</li>
            </ol>

            <h2>4. Salada de Grão-de-Bico</h2>
            <h3>Ingredientes:</h3>
            <ul>
                <li>1 lata de grão-de-bico, escorrido e lavado</li>
                <li>1/2 cebola roxa, picada</li>
                <li>1 tomate, picado</li>
                <li>1/2 pepino, picado</li>
                <li>Salsinha picada a gosto</li>
                <li>Azeite, limão, sal e pimenta a gosto</li>
            </ul>

            <h3>Modo de Preparo:</h3>
            <ol>
                <li>Misture todos os ingredientes em uma tigela grande.</li>
                <li>Tempere com azeite, limão, sal e pimenta.</li>
                <li>Sirva fresca.</li>
            </ol>


            <Link to="../Nutrição/nutrição.html">
                <button style={{ backgroundColor: 'chartreuse', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                    Voltar
                </button>
            </Link>
        </div>
    );
}

export default ReceitasDeProteinas;


            