const btn = document.querySelector(".btn-calcular");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const salida1 = document.querySelector(".salida1");
const salida2 = document.querySelector(".salida2");
const salida3 = document.querySelector(".salida3");
const dayError = document.querySelector("#day");
const monthError = document.querySelector("#month");
const yearError = document.querySelector("#year");
const infoLabel = document.querySelectorAll(".info-entrada");
const infoInput = document.querySelectorAll(".entrada-datos");

const calcular = () => {
  let fechaActual = new Date();
  let anioActual = fechaActual.getFullYear();
  mesActual = fechaActual.getUTCMonth() + 1;
  let diaActual = fechaActual.getDate();
  let dia;
  let mes;
  let anio;
  let continuar = true;

  const diaCorrecto = () => {
    anio = anioActual - year.value;
    if (mesActual <= month.value) {
      mes = mesActual + 12 - month.value;
      anio -= 1;
    } else {
      mes = mesActual - month.value;
    }

    if (mes == 12) {
      mes = 0;
      anio += 1;
    }

    if (diaActual <= day.value) {
      dia = diaActual + 30 - day.value;
    } else {
      dia = diaActual - day.value;
    }

    salida1.innerText = anio;
    salida2.innerText = mes;
    salida3.innerText = dia;
  };

  if (day.value == "") {
    continuar = false;
    dayError.classList.add("error-incomplete");
    dayError.textContent = "This field is required";
    for (let i = 0; i < infoLabel.length; i++) {
      infoLabel[i].style.color = "red";
    }
  } else {
    continuar = true;
    dayError.classList.remove("error-incomplete");
    dayError.textContent = "";
  }
  if (month.value == "") {
    continuar = false;
    monthError.classList.add("error-incomplete");
    monthError.textContent = "This field is required";
  } else {
    continuar = true;
    monthError.classList.remove("error-incomplete");
    monthError.textContent = "";
  }

  if (year.value == "") {
    continuar = false;
    yearError.classList.add("error-incomplete");
    yearError.textContent = "This field is required";
  } else {
    continuar = true;
    yearError.classList.remove("error-incomplete");
    yearError.textContent = "";
  }

  if (day.value != "" && month.value != "" && year.value != "") {
    anioActual = fechaActual.getFullYear();
    mesActual = fechaActual.getUTCMonth() + 1;
    diaActual = fechaActual.getDate();

    if (parseInt(year.value) > anioActual) {
      continuar = false;
      yearError.classList.add("error-message");
      yearError.textContent = "Must be in the past";
    } else {
      continuar = true;
      yearError.classList.remove("error-message");
      yearError.textContent = "";
    }

    if (month <= 0 || month.value >= 13) {
      continuar = false;
      monthError.classList.add("error-message");
      monthError.textContent = "Must be a valid month";
    } else {
      continuar = true;
      monthError.classList.remove("error-message");
      monthError.textContent = "";
    }

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
          continuar = true;
          dayError.classList.remove("error-message");
          dayError.textContent = "";
          diaCorrecto();
        } else if (day.value < 1 || day.value > 31) {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid day";
        } else {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid date";
        }
      } else if (month.value == 2) {
        if (day.value >= 1 && day.value <= 29) {
          continuar = true;
          dayError.classList.remove("error-message");
          dayError.textContent = "";
          diaCorrecto();
        } else if (day.value < 1 || day.value > 31) {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid day";
        } else {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid date";
        }
      } else {
        if (day.value >= 1 && day.value <= 30) {
          continuar = true;
          dayError.classList.remove("error-message");
          dayError.textContent = "";
          diaCorrecto();
        } else if (day.value < 1 || day.value > 31) {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid day";
        } else {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid date";
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
          continuar = true;
          dayError.classList.remove("error-message");
          dayError.textContent = "";
          diaCorrecto();
        } else if (day.value < 1 || day.value > 31) {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid day";
        } else {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid date";
        }
      } else if (month.value == 2) {
        if (day.value >= 1 && day.value <= 28) {
          continuar = true;
          dayError.classList.remove("error-message");
          dayError.textContent = "";
          diaCorrecto();
        } else if (day.value < 1 || day.value > 31) {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid day";
        } else {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid date";
        }
      } else {
        if (day.value >= 1 && day.value <= 30) {
          continuar = true;
          dayError.classList.remove("error-message");
          dayError.textContent = "";
          diaCorrecto();
        } else {
          continuar = false;
          dayError.classList.add("error-message");
          dayError.classList.add("error-message");
          dayError.textContent = "Must be a valid day";
        }
      }
    }
  }
  if (continuar) {
    for (let i = 0; i < infoLabel.length; i++) {
      infoLabel[i].style.color = "var(--Smokey-grey)";
    }
    for (let j = 0; j < infoInput.length; j++) {
      infoInput[j].style.border = "0.1rem solid var(--Smokey-grey)";
    }
  } else {
    for (let i = 0; i < infoInput.length; i++) {
      infoLabel[i].style.color = "var(--Light-red)";
    }
    for (let j = 0; j < infoInput.length; j++) {
      infoInput[j].style.border = "0.1rem solid var(--Light-red)";
    }
  }
  /*
  console.log(day.value + " " + month.value + " " + year.value);
  console.log(diaActual + " " + mesActual + " " + anioActual);
  */
};

btn.addEventListener("click", calcular);
