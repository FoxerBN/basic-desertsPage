import axios from "axios";

let hoverTimeout;
let currentTooltip;

/**
 * @param {string} id
 * @param {HTMLElement} target
 * @param {Array} desserts
 */
export async function handleHover(id, target, desserts) {
  if (window.innerWidth <= 1024) return;

 
  const product = desserts.find(dessert => dessert.idMeal === id);

  hoverTimeout = setTimeout(async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const details = data.meals[0];

      const ingredients = Array.from({ length: 20 }, (_, i) => {
        const ingredient = details[`strIngredient${i + 1}`];
        const measure = details[`strMeasure${i + 1}`];
        return ingredient?.trim() ? `${measure} ${ingredient}`.trim() : null;
      }).filter(Boolean);

      currentTooltip = document.createElement("div");
      currentTooltip.classList.add("hover-tooltip");
      currentTooltip.innerHTML = `
        <h3>${details.strMeal}</h3>
        <img src="${details.strMealThumb}" alt="${details.strMeal}" style="width: 100%; border-radius: 5px;" />
        <p><strong>Category:</strong> ${details.strCategory}</p>
        <p><strong>Area:</strong> ${details.strArea}</p>
        <p><strong>Price:</strong> €${product.price}</p> 
        <p><strong>Ingredients:</strong></p>
        <ul>${ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
      `;
      document.body.appendChild(currentTooltip);

      const rect = target.getBoundingClientRect();
      Object.assign(currentTooltip.style, {
        left: `${rect.right + 10}px`,
        top: `${rect.top + window.scrollY}px`,
        transform: "scale(0)",
        transition: "transform 0.3s ease",
      });

      requestAnimationFrame(() => (currentTooltip.style.transform = "scale(1)"));
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
