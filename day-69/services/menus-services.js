import { pool } from "../config/mysql-config.js";

export async function getParentMenus() {
  const [rows] = await pool.query(
    `select * from menus WHERE parent_id IS NULL`
  );
  return rows;
}

export async function getChildrenMenus(parentId) {
  const [rows] = await pool.query(
    `SELECT * FROM menus WHERE parent_id=${parentId}`
  );
  return rows;
}
