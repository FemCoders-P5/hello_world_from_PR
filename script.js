document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const section = header.parentElement;
      const content = section.querySelector(".accordion-content");

      // Cierra las demás secciones
      document.querySelectorAll(".accordion-content").forEach(el => {
        if (el !== content) {
          el.style.maxHeight = null;
          el.parentElement.classList.remove("active");
        }
      });

      // Alterna la actual
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        section.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        section.classList.add("active");
      }
    });
  });
});
