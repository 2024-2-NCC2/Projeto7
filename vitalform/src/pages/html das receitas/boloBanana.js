import React from 'react';

const BoloDeBanana = () => {
  return (
    <div>
      <h1>Bolo de Banana</h1>

      <h3>Ingredientes:</h3>
      <ul>
        <li>3 bananas maduras</li>
        <li>2 ovos</li>
        <li>1/2 xícara de óleo</li>
        <li>1 xícara de açúcar</li>
        <li>2 xícaras de farinha de trigo</li>
        <li>1 colher de sopa de fermento em pó</li>
        <li>1 pitada de sal</li>
        <li>Canela em pó a gosto (opcional)</li>
      </ul>

      <h3>Modo de Preparo:</h3>
      <ol>
        <li>Preaqueça o forno a 180°C.</li>
        <li>Em um recipiente, amasse as bananas com um garfo.</li>
        <li>Adicione os ovos, o óleo e o açúcar às bananas amassadas e misture bem.</li>
        <li>Em outro recipiente, peneire a farinha, o fermento e o sal.</li>
        <li>Incorpore os ingredientes secos à mistura de banana até ficar homogêneo. Adicione canela, se desejar.</li>
        <li>Despeje a massa em uma forma untada.</li>
        <li>Asse por cerca de 40-50 minutos, ou até que um palito inserido no centro saia limpo.</li>
        <li>Deixe esfriar antes de desenformar e sirva.</li>
      </ol>

      <a href="../Nutrição/nutrição.html">
        <button style={{ backgroundColor: 'chartreuse' }}>Voltar</button>
      </a>
    </div>
  );
};

export default BoloDeBanana;
