document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js carregado e DOMContentLoaded disparado.")

  // Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (navToggle && navMenu) {
    console.log("Elementos de navegação (nav-toggle e nav-menu) encontrados.")
    const toggleMenu = () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
      console.log("Menu alternado. Menu ativo:", navMenu.classList.contains("active"))
    }
    navToggle.addEventListener("click", toggleMenu)

    // Close menu when a nav link is clicked
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
        console.log("Link de navegação clicado. Menu fechado.")
      })
    })
  } else {
    console.log("Erro: Elementos nav-toggle ou nav-menu não encontrados.")
  }

  // Intersection Observer for Scroll Animations
  const animateOnScrollElements = document.querySelectorAll(".animate-on-scroll")

  if (animateOnScrollElements.length > 0) {
    console.log(`Encontrados ${animateOnScrollElements.length} elementos para animação de rolagem.`)
  }

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Number.parseInt(entry.target.dataset.delay || "0")
        setTimeout(() => {
          entry.target.classList.add("is-visible")
        }, delay)
        observer.unobserve(entry.target) // Stop observing once animated
      }
    })
  }, observerOptions)

  animateOnScrollElements.forEach((element) => {
    observer.observe(element)
  })
})
