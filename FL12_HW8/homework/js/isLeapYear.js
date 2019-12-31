let isLeap = year => {
  let finalResult = new Date(year).getFullYear();

  if (isNaN(finalResult)) {
    return 'Invalid Date';
  } else {
    return (finalResult % 4 === 0 && finalResult % 100 !== 0) ||
      finalResult % 400 === 0
      ? `${finalResult} is a leap year`
      : `${finalResult} is not a leap year`;
  }
};
isLeap('2026-01-15 13:00:00');
