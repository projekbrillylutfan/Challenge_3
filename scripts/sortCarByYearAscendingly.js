function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  // const cloneArray = result.slice();

  // Tulis code-mu disini
  result.sort((ngeng1, ngeng2) => ngeng1.year - ngeng2.year);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
