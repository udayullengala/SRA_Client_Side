import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "./data";

const DataTableComponent = ({ columns, data, searchKey }) => {
  const [searchValue, setSearchValue] = useState("")
  const [tableData, setTableData] = useState([])

  const handleSearch = () => {
    if (searchValue === "" || data.length === 0) {
      return
    }

    const filteredData = data.filter((curElem) => {
      let startsWith;
      for (var i = 0; i < searchKey.length; i++) {
        // console.log(i, "i")
        var data = curElem[searchKey[i]]?.toString().toLowerCase()?.startsWith(searchValue.toLowerCase())
        if (data) {
          startsWith = data
          break
        }
      }
      if (startsWith) {
        return startsWith
      }
    })
    setTableData(filteredData)
      // console.log(filteredData, "filteredData")
    
  }

  useEffect(() => {
    handleSearch()
  }, [searchValue])

  return (
    <>
      <div className="col-md-12 mt-2">
        <div className="d-flex justify-content-end align-items-center">
          <input
            className="form-control"
            placeholder="Search..."
            style={{ width: "280px" }}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="col-12 mt-3">
        <DataTable
          columns={columns}
          data={searchValue ? tableData : data}
          customStyles={customStyles}
          pagination
          highlightOnHover
        />
      </div>
    </>
  );
};

export default DataTableComponent;
