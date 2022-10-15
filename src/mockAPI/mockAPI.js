const data = [
  {
    id: 1,
    title: "Arduino UNO",
    img: "https://cdn.pixabay.com/photo/2017/03/23/12/32/arduino-2168193_960_720.png",
    price: 120,
    expired: true,
    detail: "La tarjeta de desarrollo mas famosa del mundo!!",
    stock: 10,
    category: "controladora",
  },
  {
    id: 2,
    title: "Arduino Mega",
    img: "https://cdn.shopify.com/s/files/1/1610/5893/products/ARD-MEGA_570x570_crop_top.jpg?v=1626201061",
    price: 399,
    expired: false,
    detail: "Igual que la clasica, pero MEJOR",
    stock: 8,
    category: "controladora",
  },
  {
    id: 3,
    title: "ESP-8622",
    img: "https://media.master.com.mx/images/prods/AR-ESP8266N.jpg",
    price: 149,
    expired: true,
    detail: "La mejor tarjeta de desarrollo para IoT",
    stock: 7,
    category: "controladora",
  },
  {
    id: 4,
    title: "DTH-11",
    img: "https://http2.mlstatic.com/D_NQ_NP_721609-MLM51426715986_092022-O.webp",
    price: 49,
    expired: true,
    detail: "Los mejores sensores para tus proyectos",
    stock: 10,
    category: "sensor",
  },
  {
    id: 5,
    title: "DS18B20",
    img: "https://chips.mecatronium.com/wp-content/uploads/2018/04/Sensor-Temperatura-Waterproof-DS18b20-temperature-probe-temperature-sensor-18B20-1-1.jpg_640x640-1-1.jpg",
    price:120,
    expired: false,
    detail: "Un sensor de temperatura perfecto para cada ocación",
    stock: 8,
    category: "sensor",
  },
  {
    id: 6,
    title: "LDR",
    img: "https://ryspee.com/wp-content/uploads/2019/09/ssldr34.jpg",
    price: 9,
    expired: false,
    detail: "Sensor LDR clasico",
    stock: 7,
    category: "sensor",
  },
];

export function getCursos() {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 1000);
  });
}

export function getUnCurso(idParams) {
  return new Promise((resolve) => {
    let cursoReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => resolve(cursoReq), 1000);
  });
}

export function getCursosByCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterCourses = data.filter(
      (item) => item.category === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterCourses), 1000);
  });
}
