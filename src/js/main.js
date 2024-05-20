function carregar() {
  fetch("../../db.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar o arquivo JSON" + response.statusText);
      }

      return response.json();
    })
    .then((buttons) => {
      if (Array.isArray(buttons.links)) {
        buttons.links.forEach((button) => {
          const container = document.querySelector(".section-links");

          const ul = document.createElement("ul");

          const li = document.createElement("li");
          li.classList.add("link");

          const a = document.createElement("a");
          a.href = button.linkTo;
          a.textContent = button.name;

          ul.appendChild(li);
          li.appendChild(a);
          container.appendChild(ul);
        });
      } else {
        console.error("Os dados não contêm um array de botões:", buttons);
      }
    })
    .catch((error) => {
      console.error("Erro ao processar o JSON:", error);
    });
}

carregar();
