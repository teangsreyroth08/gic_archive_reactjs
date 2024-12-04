import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import ManageAdminsTable from "../../../components/ManageAdminsTable";

const ManageAllAdmins = () => {
  return (
    <div className="p-3 grid grid-cols-1 w-[100vw] px-[10vw] gap-8">
      <Breadcrumbs size='lg' className="mt-2">
        <BreadcrumbItem>
          <Link to={'/adminDashboard'}>
            Dashboard
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          Manage Admins
        </BreadcrumbItem>
      </Breadcrumbs>
      <ManageAdminsTable />
    </div>
  );
}

export default ManageAllAdmins;