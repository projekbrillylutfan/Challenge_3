function filterCarByAvailability(cars) {

  
  /**
   * pseudo code untuk filtering mobil berdasarkan ketersediaan (hasil nilai nya adalah true)
   * pertama adalah mendefinisikan const var untuk menampung array mobil
   * kedua adalah memfilter array mobil berdasarkan ketersediaan dengan menggunakan for loop (ingin mencoba menggunakan forecah)
   * ketiga adalah membuat suatu kondisi untuk mengecek apakah mobil memiliki ketersediaan true, jika punya langusng tampung ke array result
   * keempat adalah mengembalikan array hasil filter
   * kelima selesai
   */


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
