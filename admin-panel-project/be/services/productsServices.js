import { pool } from "../config/mysql-config.js";

export async function getProducts() {
  const [rows] = await pool.query(`select * from product `);
  return rows;
}

export async function addProduct(
  name,
  code,
  quantity,
  price,
  rating,
  category
) {
  const query = `INSERT INTO product (name, code, quantity, price, rating, category_id ) VALUES(?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    name,
    code,
    quantity,
    price,
    rating,
    category,
  ]);
  return rows;
}

export async function updateGetProduct(productId) {
  const query = `SELECT * FROM product WHERE id=${productId}`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function deleteProduct(id) {
  const query = `DELETE FROM product WHERE id = ${id}`;
  const [rows] = await pool.query(query);
  const [row] = await pool.query(`select * from product `);
  return row;
}

export async function updateProduct(
  name,
  code,
  quantity,
  price,
  rating,
  category,
  productId
) {
  const query = `UPDATE product SET name='${name}',code='${code}',quantity='${quantity}',price='${price}',rating='${rating}',category_id='${category}' WHERE id = ${productId}`;
  const [row] = await pool.query(query);

  return row;
}
