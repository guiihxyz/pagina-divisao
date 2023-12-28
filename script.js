const itens = document.querySelectorAll(".item");

itens.forEach(item => {
    item.addEventListener('click', () => {
        itens.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
})

const home = document.querySelector(".home")
const homeItem = document.querySelector(".homeItem")
const membros = document.querySelector(".membros")
const membrosItem = document.querySelector(".membrosItem")
const documentos = document.querySelector(".documentos")
const documentosItem = document.querySelector(".documentosItem")
const justificativas = document.querySelector(".justificativas")
const justificativasItem = document.querySelector(".justificativasItem")
const buttonPesquisa = document.querySelector(".container-membros-button")
const resultadoPesquisa = document.querySelector(".container-membros-pesquisa")
const escolha = document.querySelector(".membros-escolha")
const consulta = document.querySelector(".consulta-de-membros")

homeItem.addEventListener("click", () => {
    home.style.display = "flex"
    membros.style.display = "none"
    documentos.style.display = "none"
    justificativas.style.display = "none"
})

membrosItem.addEventListener("click", () => {
    home.style.display = "none"
    membros.style.display = "flex"
    documentos.style.display = "none"
    justificativas.style.display = "none"
    escolha.style.display = "block"
    consulta.style.display = "none"
    resultadoPesquisa.style.opacity = 0

})

documentosItem.addEventListener("click", () => {
    home.style.display = "none"
    membros.style.display = "none"
    documentos.style.display = "flex"
    justificativas.style.display = "none"
})

justificativasItem.addEventListener("click", () => {
    home.style.display = "none"
    membros.style.display = "none"
    documentos.style.display = "none"
    justificativas.style.display = "flex"
})

const buttonConsulta = document.querySelector(".button-consulta")

buttonConsulta.addEventListener("click", () => {
    escolha.style.display = "none"
    consulta.style.display = "block"
})

buttonPesquisa.addEventListener("click", () => {
    const textoBuscar = document.querySelector("#itexto-buscar")
    textoBuscar.value = ""
    textoBuscar.focus()
    resultadoPesquisa.style.opacity = 1
})

