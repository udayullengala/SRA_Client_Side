import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { get } from "../utils";
import DataTableComponent from "../components/DataTable";
import ApiLoader from "../components/ApiLoader";
import moment from "moment";

const Annexure = () => {

  const [tableData, setTableData] = useState([]);
  const [isApiLoader, setIsApiLoader] = useState(false);

  const getData = () => {
    get("/core_admin/api/v1/annexure/")
      .then((resp) => {
        console.log(resp);
        setTableData(resp.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchKey = ["project_name", "location"]

  const columns = [
    {
      name: "Project",
      selector: (row) => row.project.project_name,
    },
    {
      name: "Annexure No.",
      width: "150px",
      selector: (row) => row.annexure_number,
    },
    {
        name: "Name",
        width: "150px",
        selector: (row) => row.name,
    },
    {
        name: "User Type",
        selector: (row) => row.user_type,
    },
    {
        name: "Type",
        selector: (row) => row.type,
    },
    {
        name: "Status",
        selector: (row) => row.status,
    },
    {
      name: "Created at",
      selector: (row) => moment(row.created_at).format("MMMM Do YYYY"),
    }
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isApiLoader ? <ApiLoader /> : ""}
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="title">
                  <h4>Annexure</h4>
                </div>
                <div className="search">
                  <Link
                    to={"/add_annexure/"}
                    className="btn btn-sm btn-outline-secondary d-flex justify-content-center align-items-center gap-1"
                  >
                    Add Annexure <FaPlus size={14} />
                  </Link>
                </div>
              </div>
            </div>
            <DataTableComponent columns={columns} data={tableData} searchKey={searchKey} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Annexure;
