import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getQuestions = async () => {
    return await axios.get(VITE_API_URL).then((res) => res.data);
};
