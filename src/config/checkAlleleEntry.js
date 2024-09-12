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

  // Validação das características
  if (!Array.isArray(caracteristicas) || (caracteristicas.length !== 2 && caracteristicas.length !== 4)) {
    showAlert('Certifique-se de que há duas características.', 'error');
    return;
  }

  const [caracteristica1, caracteristica2] = caracteristicas;

  if (caracteristica1 === '' || caracteristica2 === '') {
    showAlert('Certifique-se de que ambas as características estão preenchidas.', 'error');
    return;
  }

  if (caracteristica1.length < 4 || caracteristica2.length < 4) {
    showAlert('Cada característica deve ter pelo menos 4 caracteres.', 'warning');
    return;
  }

  const areAllCaracteristicaValid = (caractere) => /^[a-zA-Z]+$/.test(caractere);
  const allValidCaracteristica = areAllCaracteristicaValid(caracteristica1) && areAllCaracteristicaValid(caracteristica2);

  if (!allValidCaracteristica) {
    showAlert('Ops! Todas as características devem ser letras maiúsculas ou minúsculas.', 'warning');
    return;
  }

  // Se todas as validações passaram
  setParentsValid(true);
  countAlleles(parents);
};
