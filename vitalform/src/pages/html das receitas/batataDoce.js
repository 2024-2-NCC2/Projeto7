import React from 'react';
import { Link } from 'react-router-dom'; 

const BoloDeBatataDoce = () => {
  return (
    <div>
      <h1>Bolo de Batata Doce</h1>

      <h3>Ingredientes:</h3>
      <ul>
        <li>2 xícaras de purê de batata-doce (aproximadamente 3 batatas-doce médias)</li>
        <li>3 ovos</li>
        <li>1/2 xícara de óleo</li>
        <li>1 xícara de açúcar mascavo</li>
        <li>2 xícaras de farinha de trigo</li>
        <li>1 colher de sopa de fermento em pó</li>
        <li>1 colher de chá de canela em pó (opcional)</li>
        <li>1 pitada de sal</li>
      </ul>

      <h3>Modo de Preparo:</h3>
      <ol>
        <li>Preaqueça o forno a 180°C.</li>
        <li>Coza as batatas-doces até ficarem macias e faça um purê.</li>
        <li>Em um recipiente, misture o purê de batata-doce, os ovos e o óleo até ficar homogêneo.</li>
        <li>Adicione o açúcar mascavo e misture bem.</li>
        <li>Em outro recipiente, peneire a farinha, o fermento, a canela e o sal.</li>
        <li>Incorpore os ingredientes secos à mistura de batata-doce até ficar homogêneo.</li>
        <li>Despeje a massa em uma forma untada.</li>
        <li>Asse por cerca de 40-45 minutos, ou até que um palito inserido no centro saia limpo.</li>
        <li>Deixe esfriar antes de desenformar e sirva.</li>
      </ol>

    
      <Link to="/nutricao"> 
        <button style={{ backgroundColor: 'chartreuse' }}>Voltar</button>
      </Link>
    </div>
  );
}

export default BoloDeBatataDoce;
