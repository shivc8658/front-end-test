import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDashboard } from "../hooks/useDashboard";

const Dashboard = () => {
  const { getProductData, data, onlineDevice, failedDevice, loading } =
    useDashboard();
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="d-flex px-4 py-3 overflow-hidden flex-grow-1">
      <div>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            <h6>Total number of devices: {data.length} </h6>
            <h6>Percentage of devices online: {onlineDevice.toFixed(2)}% </h6>
            <h6>Percentage of devices failed: {failedDevice.toFixed(2)}% </h6>
          </>
        )}
      </div>
      {/* <div className="w-100 table-responsive">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div> */}
    </div>
  );
};

export default Dashboard;
