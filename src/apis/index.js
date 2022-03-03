import axios from "axios";
import { ACCESS_TOKEN } from "./../utils/constant";

// Syntax
// export default async function requestAPI(url, method, body) {
//   const urlOrigin = "http://localhost:3000/api/v1";

//   const headers = {
//     "Content-Type": "application/json",
//     // 'Content-Type': 'multipart/form-data',
//     "Access-Control-Allow-Origin": "*",
//     Authorization: `Bearer ${ACCESS_TOKEN()}`,
//   };
//   let objMeta = {
//     method,
//     url: `${urlOrigin}${url}`,
//     headers,
//     data: body,
//   };
//   return await axios(objMeta);
// }
