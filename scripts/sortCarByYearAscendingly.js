function sortCarByYearAscendingly(cars) {

  /**
   * pseudo code untuk sorting mobil berdasarkan tahun tertua
   * pertama adalah mengclone array agar menghindari side effect
   * kedua adalah mengurutkan array berdasarkan tahun tertua menggunakan fungsi bawaan short
   * ketiga adalah mengembalikan array hasil sorting (array yang sudah di clone)
   * selesai
   */

  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  // dikarenakn array sudah diclone menggunakan (..) jadi saya mencoba menggunakan slice untuk clone array
  // const cloneArray = result.slice();

  // Tulis code-mu disini
  // hasil pengurangan dari array dengan mekanisme jika hasil positif maka ngeng1 akan ditempatkan sebelum ngeng
  // result.sort((ngeng1, ngeng2) => ngeng1.year - ngeng2.year);

  // // Rubah code ini dengan array hasil sorting secara ascending
  // return result;

  for (let i = 0; i < result.length - 1; i++) {
    // Dua loop for bersarang digunakan untuk mengiterasi melalui array result. Loop luar (i) 
    // digunakan untuk mengontrol berapa kali proses pengurutan diulang, dan loop dalam (j) 
    // digunakan untuk membandingkan dan menukar elemen-elemen yang diperlukan.
    for (let j = 0; j < result.length - i - 1; j++) {
      // Pada setiap iterasi dalam loop luar, loop dalam akan membandingkan dua 
      // elemen berturut-turut (elemen ke-j dan elemen ke-j+1) 
      // berdasarkan properti year.
      if (result[j].year > result[j + 1].year) {
        // Jika elemen ke-j memiliki nilai year yang lebih besar dari elemen ke-j+1, 
        // maka elemen-elemen ini akan ditukar. Ini dilakukan dengan menggunakan 
        // variabel sementara temp untuk menyimpan elemen result[j], 
        // kemudian result[j] diperbarui dengan result[j+1], dan result[j+1] diperbarui dengan nilai temp.
        const temporary = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temporary;
      }
    }
  }

  return result;
}
