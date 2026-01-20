import axios from "axios";

const API_URL = "https://fakestoreapi.com";

// Obtener datos
export async function fetchProducts() {
    const { data } = await axios.get(`${API_URL}/products`);
    return data;
}

// Obtener productos por categoria
export function productsByCategory(products) {
    return products.reduce((acc, product) => {
        const category = product.category
        acc[category] = (acc[category] || 0) + 1
        return acc
    }, {})
}

// Promedio de precio por categoria
export function avgPriceByCategory(products) {
    const grouped = {}

    // forEach: Recorrer elementos que son parte de un arreglo
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

// Contar productos por categoria
export function countProductsByCategory(products) {
  return products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1
    return acc
  }, {})
}