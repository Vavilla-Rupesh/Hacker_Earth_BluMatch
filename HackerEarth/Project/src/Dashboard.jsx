import React, { useEffect, useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import axios from "axios";
function Dashboard() {
  const [data2, setData] = useState([]);
  useEffect(() => {
    handle();
  }, []);
  async function handle() {
    try {
      const result = await axios.get("http://localhost:3000/get-details");
      console.log(result.data);
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="overallContainerDashboard">
      <DashboardHeader />
      {data2.map((d) => (
        <div className="card">
          <div className="card_content">
            <img src="https://picsum.photos/200/300" alt="" />
            <h1>{d.name}</h1>
            <h1>{d.location}</h1>
            <h1>{d.contact}</h1>
            {/* <h1>{d.image}</h1> */}
            <h1>{d.qualityAssurance}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
