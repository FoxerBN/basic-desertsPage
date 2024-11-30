import axios from "axios";

let hoverTimeout;
let currentTooltip;

/**
 * @param {string} id
 * @param {HTMLElement} target
 */
export async function handleHover(id, target) {
  if (window.innerWidth <= 1024) return;

  hoverTimeout = setTimeout(async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const product = data.meals[0];

      const ingredients = Array.from({ length: 20 }, (_, i) => {
        const ingredient = product[`strIngredient${i + 1}`];
        const measure = product[`strMeasure${i + 1}`];
        return ingredient?.trim() ? `${measure} ${ingredient}`.trim() : null;
      }).filter(Boolean);

      const randomPrice = (Math.random() * 10 + 5).toFixed(2);

      currentTooltip = document.createElement("div");
      currentTooltip.classList.add("hover-tooltip");
      currentTooltip.innerHTML = `
        <h3>${product.strMeal}</h3>
        <img src="${product.strMealThumb}" alt="${
        product.strMeal
      }" style="width: 100%; border-radius: 5px;" />
        <p><strong>Category:</strong> ${product.strCategory}</p>
        <p><strong>Area:</strong> ${product.strArea}</p>
        <p><strong>Price:</strong> €${randomPrice}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>${ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
      `;
      document.body.appendChild(currentTooltip);

      // Position tooltip beside the hovered product
      const rect = target.getBoundingClientRect();
      Object.assign(currentTooltip.style, {
        left: `${rect.right + 10}px`,
        top: `${rect.top + window.scrollY}px`,
        transform: "scale(0)",
        transition: "transform 0.3s ease",
      });

      requestAnimationFrame(
        () => (currentTooltip.style.transform = "scale(1)")
      );
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }, 1000);
}

export function clearHover() {
  clearTimeout(hoverTimeout);
  currentTooltip?.remove();
  currentTooltip = null;
}
