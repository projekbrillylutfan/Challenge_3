function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  const cloneArray = result.slice();

  // Tulis code-mu disini
  cloneArray.sort((car1, car2) => car2.year - car1.year);

  // Rubah code ini dengan array hasil sorting secara ascending
  return cloneArray;
}
