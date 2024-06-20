import React, { useEffect } from "react";
import axios from "axios";
function Welcome() {
    useEffect(() => {
        handle()
    }, [])    
    const handle =async ()=>{
      await  axios.get("http://localhost:3000/business-dashboard")
    }

  return (
    <div>
      <h1>Welcome Businessman</h1>
    </div>
  );
}

export default Welcome;