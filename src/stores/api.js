import axios from "axios";

const API_URL = "https://fakestoreapi.com";

// Obtener datos
export async function fetchProducts() {
    const { data } = await axios.get(`${API_URL}/products`);
    return data;
}

export function productsByCategory(products) {
    return products.reduce((acc, product) => {
        const category = product.category
        acc[category] = (acc[category] || 0) + 1
        return acc
    }, {})
}

export function avgPriceByCategory(products) {
    const grouped = {}

    products.forEach(p => {
    if (!grouped[p.category]) {
        grouped[p.category] = {
        total: 0,
        count: 0
        }
    }

    grouped[p.category].total += p.price
    grouped[p.category].count += 1
    })

    // devolver { category: avgPrice }
    return Object.fromEntries(
    Object.entries(grouped).map(([category, data]) => [
        category,
        Number((data.total / data.count).toFixed(2))
    ])
    )
}

export function countProductsByCategory(products) {
  return products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1
    return acc
  }, {})
}