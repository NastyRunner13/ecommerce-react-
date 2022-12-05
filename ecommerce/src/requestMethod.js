import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2NjOTljZmQ2ODE0ZTFlODg3NGI5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTM4MTM2NiwiZXhwIjoxNjY5NjQwNTY2fQ.b0JlTm0rplJmuaNHkIYsvfN-r1GAh7Zo8BXh7T_F4Ss";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
