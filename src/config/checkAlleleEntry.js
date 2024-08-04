export const CheckAlleleEntry = (
    parents,
    maxAlelo,
    setParentsValid,
    countAlleles,
    setAlertMessage,
    setAlertStatus,
    setIsVisibleAlert
  ) => {
    const isValidAllele = (allele) => /^[a-zA-Z]+$/.test(allele);
  
    if (Array.isArray(parents) && parents.length === 2 && parents[0].length && parents[1].length) {
      const allValid = parents.every(parent => parent.every(isValidAllele));
      if (parents[0].length % 2 !== 0 &&  parents[1].length % 2 !== 0) {
        setAlertMessage('Ops! os alelos têm que ser pares.');
        setAlertStatus('error');
        setIsVisibleAlert(true);
        setParentsValid(false);
      }else{
        if (!allValid) {
          setAlertMessage('Ops! Todos os alelos devem ser letras maiúsculas ou minúsculas.');
          setAlertStatus('error');
          setIsVisibleAlert(true);
          setParentsValid(false);
          return;
        }
    
        if (parents[0].length === parents[1].length) {
          if (parents[0].length <= maxAlelo && parents[1].length <= maxAlelo) {
            setParentsValid(true);
            countAlleles(parents);
          } else {
            setAlertMessage(`Ops! Parece que a quantidade de alelos ultrapassou. A quantidade máxima é ${maxAlelo}`);
            setAlertStatus('warning');
            setIsVisibleAlert(true);
            setParentsValid(false);
          }
        } else {
          setAlertMessage('Ops! Parece que a quantidade de alelos da mãe e do pai não são iguais');
          setAlertStatus('error');
          setIsVisibleAlert(true);
          setParentsValid(false);
        }
      }
      
    } else {
      setParentsValid(false);
    }
  };
  