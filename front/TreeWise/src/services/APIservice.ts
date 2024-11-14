import axios from "axios";

const api = axios.create({
  baseURL: "https://treewise.onrender.com/"
})

export const getName = async () => {
  const result = await api.get("getName")
  return result.data
}

export const genNewPlayer = async (nickname: string) => {
  const result = await api.post(`genPlayer?nick=${nickname}`)
  return result.data
}

export const updatePlayer = async (nick: string, points: number) => {
  const result = await api.put("updateUser", {playerNick: nick, newPoints: points})
  return result.data
}