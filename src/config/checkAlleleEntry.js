export const checkAlleleEntry = (
  parents,
  maxAllele,
  setParentsValid,
  countAlleles,
  setAlertMessage,
  setAlertStatus,
  setIsVisibleAlert,
  caracteristicas
) => {
  const isValidNotNumber = (allele) => /^[a-zA-Z]+$/.test(allele);

  const showAlert = (message, status) => {
    setAlertMessage(message);
    setAlertStatus(status);
    setIsVisibleAlert(true);
    setParentsValid(false);
  };

  // Validação dos pais
  if (!Array.isArray(parents) || parents.length !== 2 || !parents[0].length || !parents[1].length) {
    showAlert('Dados inválidos. Certifique-se de que há dois conjuntos de alelos não vazios.', 'error');
    return;
  }

  const [parent1, parent2] = parents;

  if (parent1.length !== parent2.length) {
    showAlert('Ops! A quantidade de alelos da mãe e do pai deve ser igual.', 'error');
    return;
  }

  if (parent1.length > maxAllele || parent2.length > maxAllele) {
    showAlert(`Ops! A quantidade de alelos ultrapassou o máximo permitido de ${maxAllele}.`, 'warning');
    return;
  }

  const areAllAllelesValid = (parent) => parent.every(isValidNotNumber);
  if (!areAllAllelesValid(parent1) || !areAllAllelesValid(parent2)) {
    showAlert('Ops! Todos os alelos devem ser letras maiúsculas ou minúsculas.', 'error');
    return;
  }

  const areLengthsValid = parent1.length % 2 === 0 && parent2.length % 2 === 0;
  if (!areLengthsValid) {
    showAlert('Ops! Os alelos devem estar em pares.', 'error');
    return;
  }

  // Verifica se há 4 alelos para ambos os pais
  const isFourAlleles = parent1.length === 4 && parent2.length === 4;

  if (isFourAlleles) {
    // Verifica se há 4 características
    if (!Array.isArray(caracteristicas) || caracteristicas.length !== 4) {
      showAlert('Certifique-se de que há quatro características.', 'error');
      return;
    }

    const allCaracteristicasValid = caracteristicas.every(caractere => caractere.length > 0 && /^[a-zA-Z ]+$/.test(caractere));
    
    if (!allCaracteristicasValid) {
      showAlert('Certifique-se de que todas as quatro características estão preenchidas e são válidas.', 'error');
      return;
    }

  } else {
    // Verifica se há 2 características
    if (!Array.isArray(caracteristicas) || caracteristicas.length !== 2) {
      showAlert('Certifique-se de que há duas características.', 'error');
      return;
    }

    const allCaracteristicasValid = caracteristicas.every(caractere => caractere.length > 0 && /^[a-zA-Z ]+$/.test(caractere));
    
    if (!allCaracteristicasValid) {
      showAlert('Certifique-se de que ambas as características estão preenchidas e são válidas.', 'error');
      return;
    }
  }

  // Se todas as validações passaram
  setParentsValid(true);
  countAlleles(parents);
};
