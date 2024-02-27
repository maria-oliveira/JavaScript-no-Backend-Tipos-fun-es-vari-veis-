const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
      return true;
    } else {
      return false;
    }
  }
  
  const exibiNome = (nome) => nome;
  console.log(exibiNome('Caroline'));
