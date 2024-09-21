import React, { useEffect, useState } from "react";
import "./Employee.scss";
import { useParams } from "react-router-dom";
import { fetchEmployeeDetails } from "../../action/fetchEmployee.js";
import axios from "axios";

function Employee() {
  const [data, setData] = useState(null); // Use null to distinguish between loading and no data
  const [roleId, setRoleId] = useState("");
  const [designation, setDesignation] = useState("");
  const { id } = useParams();

  // Fetch employee details
  useEffect(() => {
    const getEmployee = async () => {
      try {
        const res = await fetchEmployeeDetails(id);
        if (res && res.role_id) {
          setData(res);
          setRoleId(res.role_id);
        }
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };
    getEmployee();
  }, [id]);

  // Fetch role details when roleId changes
  useEffect(() => {
    const getRoleById = async () => {
      if (roleId) {
        try {
          const res = await axios.get(
            "http://localhost:5000/api/orgStructure/jobRoles/getRoleById",
            {
              params: { roleId },
            }
          );
          if (res.status === 200) {
            setDesignation(res.data.role);
            console.log(res);
          }
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.error("Invalid Role ID:", error.response.data);
          } else {
            console.error("Error fetching role by id:", error);
          }
        }
      }
    };
    getRoleById();
  }, [roleId]);

  return (
    <div className="employee">
      {data ? (
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
        "No Data Found"
      )}
    </div>
  );
}

export default Employee;
