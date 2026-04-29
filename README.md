# 🌍 Country Info Explorer

A modern, responsive React web application that allows users to explore detailed information about countries worldwide. Users can search for specific countries, filter them by region, and view comprehensive details including population, capital, languages, currencies, and bordering countries. 

This project was built using **React 19**, **Vite**, and **React Router v7**, fetching real-time data from the powerful [REST Countries API](https://restcountries.com/).

### 🚀 [Live Demo - Click Here](YOUR_HOSTED_LINK_HERE) 
*(Note: Please replace `YOUR_HOSTED_LINK_HERE` with your actual live deployment URL!)*

---

## ✨ Features

- **Global Country List:** View a beautifully designed grid of countries with their flags and basic details.
- **Real-time Search:** Instantly search for any country by its common name.
- **Region Filter:** Seamlessly filter countries by specific regions (e.g., Africa, Americas, Asia, Europe, Oceania).
- **Pagination:** Smooth and efficient pagination to easily navigate through the large dataset of countries.
- **Detailed Country View:** Click on any country card to see an in-depth view, including native names, subregions, top-level domains, currencies, languages, and bordering countries.
- **Fully Responsive:** Optimized for a great user experience across mobile, tablet, and desktop screens.
- **Fast & Modern:** Built with Vite and the latest React features (including `useTransition`) for a lightning-fast UI.

---

## 🛠️ Technologies Used

- **Frontend Library:** React (v19)
- **Build Tool:** Vite
- **Routing:** React Router DOM (v7)
- **Data Fetching / HTTP Client:** Axios
- **Icons:** React Icons
- **External API:** [REST Countries API v3.1](https://restcountries.com/)

---

## 💻 Getting Started (Local Setup)

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd React_Final_Project_Country_Info
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(or if you use yarn: `yarn install`, bun: `bun install`)*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Navigate to `http://localhost:5173` (or the port provided in your terminal) to view the app.

---

## 📂 Project Structure

```text
src/
├── api/             # Axios configuration and API endpoint methods (postAPI.jsx)
├── assets/          # Static assets like images and global files
├── components/      # Reusable React components
│   ├── Layout/      # Complex layouts (AppLayout, CountryCard, CountryDetails)
│   └── UI/          # Reusable UI elements (HeroSection, Loader, Pagination, SearchFilter)
├── pages/           # Route/Page components (Home, About, Country, Contact, ErrorPage)
├── App.jsx          # Main application component containing the Router setup
├── App.css          # Global CSS styles and component styling
└── main.jsx         # React application entry point
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the MIT License.

## 🌟 Show Your Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!

<p align="center">
  <strong>Built By</strong>
  <a href="https://github.com/jaypatel-tech116">Jay Patel</a>
  </p>


