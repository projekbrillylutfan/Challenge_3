function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let num = 0; num < cars.length; num++) {
    // Periksa apakah mobil memiliki ketersediaan true
    if (cars[num].available === true) {
        result.push(cars[num]);
    }
    else {
      console.log("car is not available");
    }
  }
  
  // tes dlu yekan

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  
  return result;
}
