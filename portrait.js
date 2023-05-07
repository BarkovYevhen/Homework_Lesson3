const birthYear = prompt("Введіть ваш рік народження:");

if (birthYear) {
  const age = new Date().getFullYear() - birthYear;
  alert(`Вам ${age} років`);
} else {
  alert("Шкода, що Ви не захотіли ввести свій рік народження");
}

const city = prompt("В якому місті ви живете?");

if (city === null) {
  alert("Шкода, що Ви не захотіли ввести своє місто.");
} else {
  if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
    switch (city) {
      case "Київ":
        alert(`Ви живите у столиці України.`);
        break;
      case "Вашингтон":
        alert(`Ви живите у столиці США.`);
        break;
      case "Лондон":
        alert(`Ви живите у столиці Великої Британії.`);
        break;
    }
  } else {
    alert(`Ви живите у місті ${city}.`);
  }
}

const sport = prompt("Який Ваш улюблений вид спорту?");

if (sport === null) {
  alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
} else {
  if (sport === "футбол" || sport === "бокс" || sport === "кроссфіт") {
    switch (sport) {
      case "футбол":
        alert(`Круто! Хочете стати, як Андрій Шевченко?`);
        break;
      case "бокс":
        alert(`Круто! Хочете стати, як Олександр Усик?`);
        break;
      case "кроссфіт":
        alert(`Круто! Хочете стати, як Мет Фрейзер?`);
        break;
    }
  } else {
    alert(`Ваш улюблений вид спорту ${sport}`)
  }
}
