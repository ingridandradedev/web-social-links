function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  // substituir img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profileingrid-light.png")
  } else {
    img.setAttribute("src", "./assets/profileingrid.png")
  }
}
