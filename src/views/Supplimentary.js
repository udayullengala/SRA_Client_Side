import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { get } from "../utils";
import DataTableComponent from "../components/DataTable";
import ApiLoader from "../components/ApiLoader";
import moment from "moment";

const Supplimentary = () => {

  const [tableData, setTableData] = useState([]);
  const [isApiLoader, setIsApiLoader] = useState(false);

  const getData = () => {
    get("/core_admin/api/v1/supplimentary/")
      .then((resp) => {
        console.log(resp);
        setTableData(resp.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchKey = []

  const columns = [
    {
      name: "Annexure",
      width: "150px",
      selector: (row) => row.annexure.annexure_number,
    },
    {
        name: "Appeal Received",
        width: "150px",
        selector: (row) => row.appeal_received,
    },
    {
        name: "Aadhar Number",
        selector: (row) => row.aadhar_number,
    },
    {
        name: "Pan Number",
        selector: (row) => row.pan_number,
    },
    {
        name: "New Voter ID",
        selector: (row) => row.new_voter_id,
    },
    {
        name: "Old Voter ID",
        selector: (row) => row.old_voter_id,
    },
    {
        name: "New Electricity Bill",
        selector: (row) => row.new_electricity_bill,
    },
    {
        name: "Old Electricity Bill",
        selector: (row) => row.old_electricity_bill,
    },
    {
        name: "New Gumasta",
        selector: (row) => row.new_gumasta,
    },
    {
        name: "Old Gumasta",
        selector: (row) => row.old_gumasta,
    },
    {
        name: "SA 1",
        selector: (row) => row.sa_1,
    },
    {
        name: "SA 2",
        selector: (row) => row.sa_2,
    },
    {
        name: "First Party ER",
        selector: (row) => row.first_party_er,
    },
    {
        name: "Current Party ER",
        selector: (row) => row.current_party_er,
    },
    {
        name: "Appeal Submitted",
        selector: (row) => row.appeal_submitted,
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
                  <h4>Supplimentary</h4>
                </div>
                <div className="search">
                  <Link
                    to={"/add_supplimentary/"}
                    className="btn btn-sm btn-outline-secondary d-flex justify-content-center align-items-center gap-1"
                  >
                    Add Supplimentary <FaPlus size={14} />
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

export default Supplimentary;
