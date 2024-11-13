import axios from "axios";

const api = axios.create({
  baseURL: "https://treewise.onrender.com/"
})

export const getName = async () => {
  const result = await api.get("getName")
  return result.data
}