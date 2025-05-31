document.addEventListener("DOMContentLoaded", function () {
  const contatoBtn = document.getElementById("contato");
  const formContainer = document.getElementById("form-container");
  const form = document.getElementById("contact-form");

  contatoBtn.addEventListener("click", function () {
    formContainer.classList.toggle("show");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    formContainer.classList.remove("show");
  });
});
