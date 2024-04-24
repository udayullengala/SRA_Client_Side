import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { get, post } from "../utils";
import DataTableComponent from "../components/DataTable";
import ApiLoader from "../components/ApiLoader";
import { toast } from "react-toastify";
import moment from "moment";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    project_name: "",
    location: "",
  });
  const [tableData, setTableData] = useState([]);
  const [isApiLoader, setIsApiLoader] = useState(false);
  
  const updateData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getData = () => {
    get("/core_admin/api/v1/project/")
      .then((resp) => {
        console.log(resp);
        setTableData(resp.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProject = () => {
    setIsApiLoader(true);
    const form_data = new FormData();
    Object.entries(data).map(([key, value]) => form_data.append(key, value));
    post(`/core_admin/api/v1/project/`, form_data)
      .then((resp) => {
        console.log(resp);
        toast.success("Project added successfully");
        getData();
        setOpen(!open);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsApiLoader(false);
      });
  };

  const searchKey = ["project_name", "location"]

  const columns = [
    {
      name: "Name",
      selector: (row) => row.project_name,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Created at",
      selector: (row) => moment(row.created_at).format("MMMM Do YYYY"),
    },
    // {
    //   name: "Action",
    //   cell: (row) => {
    //     return (
    //       <>
    //         <Link to={`/add_annexure/?project_id=${row.id}`} className="btn btn-sm btn-primary">Add Annexure</Link>
    //       </>
    //     )
    //   },
    // },
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
                  <h4>Project</h4>
                </div>
                <div className="search">
                  <Link
                    onClick={() => setOpen(!open)}
                    className="btn btn-sm btn-outline-secondary d-flex justify-content-center align-items-center gap-1"
                  >
                    Add Project <FaPlus size={14} />
                  </Link>
                </div>
              </div>
            </div>
            <DataTableComponent columns={columns} data={tableData} searchKey={searchKey} />
          </div>
        </div>
      </div>
      <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader className="m-0" toggle={() => setOpen(!open)}>
          Add Project
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="form-group mb-3">
              <label>Project Name</label>
              <input
                className="form-control"
                name="project_name"
                value={data?.project_name}
                onChange={(e) => updateData(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label>Location</label>
              <input
                className="form-control"
                name="location"
                value={data?.location}
                onChange={(e) => updateData(e)}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Link className="btn btn-primary" onClick={() => addProject()}>
            Save & Close
          </Link>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Projects;
