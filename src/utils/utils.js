import axios from "axios";

export const signUp = async (form) => {
  try {
    const res = await axios.post("http://localhost:5000/user/register", form);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
