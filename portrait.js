const birthYear = prompt("Введіть ваш рік народження:");

if (birthYear) {
  const age = new Date().getFullYear() - birthYear;
  alert(`Вам ${age} років`);
} else {
  alert("Шкода, що Ви не захотіли ввести свій рік народження");
}

const city = prompt("В якому місті ви живете?");

if (city) {
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
    default:
      alert(`Ви живите у місті ${city}.`);
  }
} else {
  alert("Шкода, що Ви не захотіли ввести своє місто.");
}

const sport = prompt("Який Ваш улюблений вид спорту?");

if (sport) {
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
    default:
      alert(`Ваш улюблений вид спорту ${sport}`);
  }
} else {
  alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
}
