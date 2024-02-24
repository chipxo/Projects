const getCurYear = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return year;
};

export default getCurYear;
