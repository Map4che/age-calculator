const btn = document.querySelector(".btn-calcular");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const salida1 = document.querySelector(".salida1");
const salida2 = document.querySelector(".salida2");
const salida3 = document.querySelector(".salida3");
const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();
const mesActual = fechaActual.getUTCMonth();
const diaActual = fechaActual.getDate();
let dia;
let mes;
let anio;

const diaCorrecto = () => {
  anio = anioActual - year.value;
  if (mesActual <= month.value) {
    mes = mesActual + 12 - month.value;
    anio -= 1;
  } else {
    mes = mesActual - month.value;
  }
  if (diaActual <= day.value) {
    dia = diaActual + 30 - day.value;
  } else {
    dia = diaActual - day.value;
  }
  console.log(anio + " - " + mes + " - " + dia);

  salida1.innerText = anio;
  salida2.innerText = mes;
  salida3.innerText = dia;
};

const calcular = () => {
  console.log(day.value + " " + month.value + " " + year.value);
  console.log(diaActual + " " + mesActual + " " + anioActual);

  if (year.value > anioActual) {
    console.log("Fecha invalida");
  } else {
    if (month <= 0 || month.value >= 13) {
      console.log("Mes invalido");
    } else {
      if (year.value % 4 == 0) {
        if (
          month.value == 1 ||
          month.value == 3 ||
          month.value == 5 ||
          month.value == 7 ||
          month.value == 8 ||
          month.value == 10 ||
          month.value == 12
        ) {
          if (day.value >= 1 && day.value <= 31) {
            diaCorrecto();
          } else {
            console.log("Día invalido");
          }
        } else if (month.value == 2) {
          if (day.value >= 1 && day.value <= 29) {
            diaCorrecto();
          } else {
            console.log("Día invalido");
          }
        } else {
          if (day.value >= 1 && day.value <= 30) {
            diaCorrecto();
          } else {
            console.log("Día invalido");
          }
        }
      } else {
        if (
          month.value == 1 ||
          month.value == 3 ||
          month.value == 5 ||
          month.value == 7 ||
          month.value == 8 ||
          month.value == 10 ||
          month.value == 12
        ) {
          if (day.value >= 1 && day.value <= 31) {
            diaCorrecto();
          } else {
            console.log("Día invalido");
          }
        } else if (month.value == 2) {
          if (day.value >= 1 && day.value <= 28) {
            diaCorrecto();
          } else {
            console.log("Día invalido");
          }
        } else {
          if (day.value >= 1 && day.value <= 30) {
            diaCorrecto();
          } else {
            console.log("Día invalido");
          }
        }
      }
    }
  }

  if (month.value == mesActual) {
    console.log("sirve");
  }
};

btn.addEventListener("click", calcular);
