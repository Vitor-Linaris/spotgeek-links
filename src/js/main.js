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
          const container = document.querySelector(".container-links");

          const li = document.createElement("li");
          li.classList.add("link");

          const a = document.createElement("a");
          a.href = button.linkTo;
          a.textContent = button.name;

          li.appendChild(a);
          container.appendChild(li);
        });
      } else {
        console.error("Os dados não contêm um array de botões:", buttons);
      }
    })
    .catch((error) => {
      console.error("Erro ao processar o JSON:", error);
    });
}

function carregarSocialMidia() {
  fetch("../../db.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("rro ao buscar o arquivo JSON" + response.statusText);
      }

      return response.json();
    })
    .then((socialLinks) => {
      if (Array.isArray(socialLinks.socialLinks)) {
        socialLinks.socialLinks.forEach((socialLink) => {
          const container = document.querySelector(".social-links");

          const li = document.createElement("li");
          li.classList.add("social-link");

          const a = document.createElement("a");
          a.href = socialLink.linkTo;

          const img = document.createElement("img");
          img.src = socialLink.image;
          img.alt = socialLink.name_social;

          li.appendChild(a);
          a.appendChild(img);

          container.appendChild(li);
        });
      } else {
        console.error("Os dados não contêm um array de botões:", socialLinks);
      }
    })
    .catch((error) => {
      console.error("Erro ao processar o JSON:", error);
    });
}

carregar();

carregarSocialMidia();
