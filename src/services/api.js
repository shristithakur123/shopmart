/*
const BASE_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  return data;
}

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const data = await response.json();

  return data;
} */

const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
}

export async function getProduct(id) {
  const response = await fetch(
    `${API_URL}/${id}`
  );

  const data = await response.json();

  return data;
}