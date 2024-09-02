import React, { useEffect, useState } from "react";
import "./Employee.scss";
import EmpDetails from "./EmpDetail.js";
import { useParams } from "react-router-dom";
function Employee() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const filteredData = EmpDetails.find((item) => item.companyId === id);
    setData(filteredData);
  }, []);

  return (
    <div className="employee">
      {data != undefined ? (
        <div className="fix-bg">
          <div className="left">
            <h3>Employee Information</h3>
            {window.innerWidth > 900 ? (
              <h4>Name : {data.name}</h4>
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
            <h4>Phone No. : {data.phNum}</h4>
            <h4>Email : {data.email}</h4>
            <h4>Company ID : {data.companyId}</h4>
            <h4>Designation : {data.post}</h4>
            <h4>
              Qualifications : <br />
              {data.qualifications}
            </h4>
          </div>

          <div className="right">
            <div className="back-bg"></div>
            <div className="front-bg">
              <img src={data.img} alt="" />
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
