import React from 'react';
    const Treino = () => {
    
    const downloadTreino = (tipoTreino) => {
      let treinoContent;
  
      
      switch (tipoTreino) {
        case 'peito':
          treinoContent = "Treino de Peito:\n1. Supino Reto - 4x10\n2. Supino Inclinado - 4x10\n3. Crucifixo - 3x12\n4. Crossover - 3x12";
          break;
        case 'costas':
          treinoContent = "Treino de Costas:\n1. Puxada Frontal - 4x10\n2. Remada Curvada - 4x10\n3. Pulldown - 3x12\n4. Levantamento Terra - 3x10";
          break;
        case 'biceps':
          treinoContent = "Treino de Bíceps:\n1. Rosca Direta - 4x10\n2. Rosca Alternada - 4x10\n3. Rosca Martelo - 3x12";
          break;
        case 'triceps':
          treinoContent = "Treino de Tríceps:\n1. Tríceps Pulley - 4x10\n2. Tríceps Testa - 4x10\n3. Mergulho - 3x12";
          break;
        case 'perna':
          treinoContent = "Treino de Perna:\n1. Agachamento Livre - 4x10\n2. Leg Press - 4x10\n3. Cadeira Extensora - 3x12\n4. Cadeira Flexora - 3x12";
          break;
        default:
          treinoContent = '';
      }
  
    
      const blob = new Blob([treinoContent], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${tipoTreino}-treino.txt`;
      link.click();
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Monte seu Treino</h1>
        <p>Selecione o treino desejado para baixar o bloco de notas com o plano</p>
  
        
        <button onClick={() => downloadTreino('peito')}>Treino de Peito</button>
        <button onClick={() => downloadTreino('costas')}>Treino de Costas</button>
        <button onClick={() => downloadTreino('biceps')}>Treino de Bíceps</button>
        <button onClick={() => downloadTreino('triceps')}>Treino de Tríceps</button>
        <button onClick={() => downloadTreino('perna')}>Treino de Perna</button>
      </div>
    );
  }
  
  export default Treino;