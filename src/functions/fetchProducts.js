import axios from "axios";
export async function fetchDesserts() {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
      const desserts = response.data.meals.slice(0, 50);
      return desserts;
    } catch (error) {
      console.error('Chyba pri získavaní dát:', error);
    }
  }
  