import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

export const customStyles = {
    headCells: {
      style: {
        color: "#464646",
        fontSize: "16px",
        fontWeight: "600",
        borderTop: `1px solid #ebe9f1`,
        borderRight: `1px solid #ebe9f1`,
        borderLeft: `1px solid #ebe9f1`
      }
    },
    cells: {
      style: {
        fontSize: "14px",
        border: `1px solid #ebe9f1`,
        color: "#464646",
        borderTop: `none`,
        borderBottom: '1px solid #ebe9f1'
      }
    }
}

export const navbarList = [
  {
    navLink: "/dashboard/",
    name: "Dashboard",
    icon: <FaHome  size={20} />
  },
  {
    navLink: "/projects/",
    name: "Projects",
    icon: <GoProjectSymlink size={20} />
  },
  {
    navLink: "/annexure/",
    name: "Annexure",
    icon: <GoProjectSymlink size={20} />
  },
  {
    navLink: "/supplimentary/",
    name: "Supplimentary",
    icon: <GoProjectSymlink size={20} />
  }
]