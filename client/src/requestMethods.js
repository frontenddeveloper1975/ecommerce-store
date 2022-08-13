import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWJhZWFjYTc3OTMwNGJjZjE5N2U3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDk5NjYxOCwiZXhwIjoxNjU1MjU1ODE4fQ.ToaS1bt1Cq6HqKYPnErHj0yp0AcO73zYM8lsXjgmGr8";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN }`}
})