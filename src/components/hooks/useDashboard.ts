import axios from "axios";
import { useState, useEffect } from "react";
// interface type {}
export const useDashboard = () => {
  const [data, setData] = useState([]);
  const [onlineDevice, setOnlineDevice] = useState(Number);
  const [failedDevice, setFailedDevice] = useState(Number);
  const [loading, setLoading] = useState(false);
  const headers = {
    Authorization: `Bearer ade74927-f3df-4718-8f85-d10bab443b1c`,
  };
  useEffect(() => {
    if (data.length > 0) {
      const onlineDevices = data.filter(
        (obj: any) => obj.connectionStatus === "Online"
      );
      // PERCENTAGE OF ONLINE DEVICES
      const percentageOnlineDevices =
        (onlineDevices.length / data.length) * 100;
      setOnlineDevice(percentageOnlineDevices);
      // PERCENTAGE OF FAILED DEVICES
      const failedDevices = data.filter((obj: any) => obj.status === "Failed");
      const percentageFailedDevices =
        (failedDevices.length / data.length) * 100;
      setFailedDevice(percentageFailedDevices);
    }
  }, [data]);
  const getProductData = () => {
    setLoading(true);
    axios
      .get("https://vstechtest.azurewebsites.net/api/GetData", { headers })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch(() => setLoading(false));
  };
  return {
    data,
    failedDevice,
    onlineDevice,
    getProductData,
    loading,
  };
};
