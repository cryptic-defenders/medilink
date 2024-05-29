import { API_URL } from "@/utils/API_URL"
import axios from "axios"

export const fetchAuthSession = async () => {
    try {
        const response = await axios.get(`${API_URL}/session`);
        return response.data
    } catch (error) {
        return error
    }
}