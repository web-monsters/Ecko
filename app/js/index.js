"use strict";

let list = document.querySelector(".services__description-list");

function renderContent(textTitle, textDescription) {
  let content = document.querySelector("services__description-list.item");
  content.innerHTML = "";

  let mainContent = document.createElement("li");
  let contentTitle = document.document.createElement("p");
  let contentDescription = document.document.createElement("p");
  contentTitle.textContent = textTitle;
  contentDescription.textContent = textDescription;
  contentTitle.classList.add("item__title");
  contentTitle.classList.add("item__description");

  mainContent.classList.add("item");
  mainContent.appendChild(contentTitle);
  mainContent.appendChild(contentDescription);

  content.appendChild(mainContent);
}

let buttons = Array.from(list.children);

buttons.forEach((item, index, array) => {
  item.addEventListener("click", function(event) {
    buttons.forEach(item => item.classList.remove("active"));

    event.target.classList.add("active"); 

    if (event.target.classList.contains("Investments")) {
      renderContent(
        "Инвестиции",
        "Они умеют повторно использовать то тепло, что выходит из помещения, извлекая пользу из теплопотерь. В случае переезда система легко собирается и переустанавливается на новом месте. "
      );
    } else if (event.target.classList.contains("energy-service")) {
      renderContent(
        "Энергосервис",
        "ООО Энергосервис ПМК на протяжении нескольких плодотворных лет работает на рынке электромонтажных работ, предоставляя такие услуги, как: разработка проекта электроснабжения; электромонтажные работы различной сложности в т.ч. на объектах с повышенными требованиями к электроснабжению;"
      );
    } else if (event.target.classList.contains("audit")) {
      renderContent(
        "Аудит",
        "Качество выполнения и документального оформления задач по аудиту и внутренняя система контроля качества подтверждена HLB International путем присвоения 2-го уровня качества (высшего для компаний сети)."
      );
    }
  });
});
