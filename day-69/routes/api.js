import e from "express";
import express from "express";
const apiRouter = express.Router();
import {
  fireEmployee,
  getEmployees,
  getMaxNo,
  hireEmployee,
  updateEmployee,
} from "../services/employee-services.js";
import { getPopularCategories } from "../services/category-services.js";
import {
  getChildrenMenus,
  getParentMenus,
} from "../services/menus-services.js";

apiRouter.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});

apiRouter.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();
  console.log(parentMenus);
  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id);
      parent.children = children;
      return parent;
      // console.log(children);
    })
  );
  response.status(200).send(parentMenus);
});

// emp_router.put("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   response.status(200).send({});
//   const result = await updateEmployee(body.empNo, body.lastName, body.gender);
//   console.log(result);
// });

// emp_router.delete("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await fireEmployee(body.empNo);
//   response.status(200).send({});
// });

// emp_router.post("/employee", async (request, response) => {
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body;
//   const { max } = await getMaxNo();
//   console.log(max);
//   const result = await hireEmployee(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   );
//   console.log(result);
//   response.status(200).send({});
// });
export default apiRouter;
