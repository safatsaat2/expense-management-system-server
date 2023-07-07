import axios from "axios";

export const apiRequest = axios.create({
    baseUrl: "http://localhost:8080/api/v1"
})