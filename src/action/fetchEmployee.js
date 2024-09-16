import axios from "axios";

export const fetchEmployeeDetails = async (id) => {
  try {
    const res = await axios.get(
      "http://api.placementplaza.com/api/employees/getEmployee",
      {
        params: { id },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error, "Frontend error in fetching Employee Details");
  }
};
