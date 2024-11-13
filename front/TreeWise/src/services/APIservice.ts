import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/"
})

export const getName = async () => {
  const result = await api.get("getName")
  return result.data
}