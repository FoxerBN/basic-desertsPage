# 🛒 Fake Shopping Page

A simple **fake shopping page** featuring **pagination**, **API integration**, and a **shopping basket**. This project is a step into learning React, state management, and interacting with APIs. Although it’s an older project, it showcases a variety of useful concepts for building modern web applications.

---

## ✨ Features

- **🛟️ Product List**: Fetches dessert data from [TheMealDB API](https://www.themealdb.com/) and displays them with pagination.
- **🔄 Pagination**: Dynamically handles large product lists with page navigation.
- **🛒 Basket**:
  - Add/remove products.
  - Update product quantity.
  - Calculate total price.
- **🔍 Hover Tooltips**: Display product details on hover (for larger screens).
- **🌐 Responsive Design**: Works across devices.
- **🛠️ Modular Code**: Organized with components and reusable functions.

---

![Alt text](./public/Snímka obrazovky1.png)


## 📂 Project Structure

```
project-root
├── src
│   ├── components
│   │   ├── Navigation.jsx
│   │   ├── Products.jsx
│   │   ├── Footer.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Basket.jsx
│   │   ├── OneProduct.jsx
│   ├── functions
│   │   ├── fetchProducts.js
│   │   ├── hoverDetails.js
│   ├── App.jsx
│   ├── index.css
├── public
│   ├── logo.png
├── package.json
```

---

## 🛠️ Technologies Used

- **Frontend**:
  - ⚛️ React.js
  - 🚤 React Router for navigation
  - 💅 Framer Motion for animations
  - 🔛 React Paginate for pagination
- **Backend API**:
  - [TheMealDB API](https://www.themealdb.com/)
- **Storage**:
  - 🛒 Basket stored in `localStorage`
- **Icons**:
  - React Icons for visual enhancement

---

## ⚙️ Setup

### ✅ Prerequisites

- Node.js and npm installed on your system.

### ⬇️ Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:5174`.

---

## 🔗 Functionality Overview

### Pages

1. **Home**:

   - Displays products fetched from TheMealDB API.
   - Includes pagination for navigation.
   - Hover on products to see tooltips with details like ingredients and price.

2. **Basket**:

   - Lists products added to the basket.
   - Allows updating quantity or removing items.
   - Displays the total price.

3. **404 Page**:

   - Renders a fallback for invalid URLs.

### Key Functions

#### `fetchProducts.js`

Fetches dessert data from the API:

```javascript
const desserts = response.data.meals.slice(0, 50).map(dessert => ({
  ...dessert,
  price: (Math.random() * 10 + 5).toFixed(2),
}));
```

#### `hoverDetails.js`

Displays a tooltip with product details:

- Ingredients
- Category
- Area
- Price

---

## 📖 Example Usage

1. Visit the **Home Page** to browse products.
2. Hover over products to see details.
3. Add items to your basket by clicking the basket icon.
4. Navigate to the **Basket Page** to manage items and check your total.

---

## 🎯 Future Improvements

- Add **user authentication** for personalized baskets.
- Implement a **real backend** for storing products and orders.
- Refactor for improved **code modularity**.
- Deploy the application for live use.

---

This project was a great opportunity to explore **React features** like state management, routing, and modular components while experimenting with APIs. 🎉

