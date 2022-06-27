import axios from "axios";

export const productRequest = async () => {
  try {
    const data = await axios.get("/products");
    return data;
  } catch (error) {
    throw error;
  }
};
