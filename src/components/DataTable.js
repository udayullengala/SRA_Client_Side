import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "./data";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
const DataTableComponent = ({ columns, data, updatedObject }) => {
  const [searchValue, setSearchValue] = useState("")
  const [tableData, setTableData] = useState([])

  const [searchKey, setSearchKey] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSearch = () => {
    if (searchValue === "" || data.length === 0) {
      return
    }

    const filterData = data?.filter((option) => {
      return  Object.entries(updatedObject).map(([key, value]) => {
        option[key]?.toString().toLowerCase()?.startsWith(value.toLowerCase())
      })
    })
    
    setTableData(filterData)

    // const filteredData = data.filter((curElem) => {
    //   let startsWith;
    //   for (var i = 0; i < searchKey.length; i++) {
    //     // console.log(i, "i")
    //     var data = curElem[searchKey[i]]?.toString().toLowerCase()?.startsWith(searchValue.toLowerCase())
    //     if (data) {
    //       startsWith = data
    //       break
    //     }
    //   }
    //   if (startsWith) {
    //     return startsWith
    //   }
    // })
    // setTableData(filteredData)
      // console.log(filteredData, "filteredData")
    
  }

  console.log(searchKey)

  useEffect(() => {
    handleSearch()
  }, [searchValue])

  return (
    <>
     {/* .custom_class {
          position: fixed;
          z-index: 10000000;
          top: 200px;
          right: 0px;
          width: 200px;
        } */}
      <div className="col-12 mt-3">
        <DataTable
        title={
          

        <div className="col-md-12 mt-2">
          
          <div className="d-flex justify-content-end align-items-center">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
              <DropdownToggle caret></DropdownToggle>
              <DropdownMenu className="custom_class">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value={'all'} id={'all'} onChange={(e)=> e.target.checked ? setSearchKey(columns.map((option)=> option?.searchKey)): setSearchKey([])}/>
                  <label class="form-check-label" for={'all'}>
                    All
                  </label>
                </div>
                {
                  columns?.map((curElem) => {
                    return <>

                    {
                      curElem?.searchKey && (
                        <div class="form-check">
                          <input class="form-check-input" checked={searchKey.includes(curElem?.searchKey)} type="checkbox" value={curElem?.searchKey} id={curElem?.searchKey} onChange={(e)=> !searchKey.includes(e.target.value) ? setSearchKey([...searchKey, e.target.value]) : setSearchKey(searchKey.filter((option) => option !== e.target.value)) }/>
                          <label class="form-check-label" for={curElem?.searchKey}>
                            {curElem?.name}
                          </label>
                        </div>
                      )
                    }
                      
                    </>
                  })
                }
                
              </DropdownMenu>
            </Dropdown>
            <input
              className="form-control"
              placeholder="Search..."
              style={{ width: "280px" }}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
      </div>}
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
