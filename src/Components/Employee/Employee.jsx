import React, { useEffect, useState } from "react";
import "./Employee.scss";
import { useParams } from "react-router-dom";
import { fetchEmployeeDetails } from "../../action/fetchEmployee.js";
import axios from "axios";
function Employee() {
  const [data, setData] = useState([]);
  const [roleId, setRoleId] = useState("");
  const [designation, setDesignation] = useState("");
  const { id } = useParams();

  // Mathching the data from backend

  useEffect(() => {
    const getEmployee = async () => {
      const res = await fetchEmployeeDetails(id);
      setData(res);
    };
    getEmployee();
  }, []);

  useEffect(() => {
    setData(data);
    setRoleId(data.role_id);
  }, [data]);

  const getRoleById = async () => {
    try {
      const res = await axios.get(
        "http://api.placementplaza.com/api/orgStructure/jobRoles/getRoleById",
        {
          params: { roleId },
        }
      );
      return res.data.role;
    } catch (error) {
      console.log(error, "Frontend error in fetching role by id");
    }
  };

  useEffect(() => {
    const setDesig = async () => {
      const res = await getRoleById();
      setDesignation(res);
    };
    setDesig();
  }, [data]);

  console.log(data);

  return (
    <div className="employee">
      {data.length != 0 ? (
        <div className="fix-bg">
          <div className="left">
            <h3>Employee Information</h3>
            {window.innerWidth > 900 ? (
              <h4>
                Name : <span style={{ fontWeight: "500" }}>{data.name}</span>{" "}
              </h4>
            ) : (
              <h4
                style={{
                  width: "100%",
                  fontSize: "1.2rem",
                  textAlign: "center",
                  marginTop: "-1rem",
                  marginBottom: "2rem",
                }}
              >
                {data.name}
              </h4>
            )}
            <h4>
              Designation :{" "}
              <span style={{ fontWeight: "500" }}>{designation}</span>
            </h4>
            <h4>
              Employee ID :{" "}
              <span style={{ fontWeight: "500" }}>{data.emp_id}</span>
            </h4>
            <h4>Phone No. : {data.phNumber}</h4>
            <h4>Email : {data.email}</h4>
          </div>

          <div className="right">
            <div className="back-bg"></div>
            <div className="front-bg">
              <img
                src={`/EmpDetails/${id}.png`}
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop in case .jpeg is also missing
                  e.target.src = `/EmpDetails/${id}.jpeg`;
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        " No Data Found "
      )}
    </div>
  );
}

export default Employee;
