import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import { filterData } from "./data";
import { apiUrl } from "./data";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import Spinner from "./component/Spinner"

const App = () => {
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)
  console.log(category);

  async function featchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourse(output.data);
      
    }
    catch{

    }
    setLoading(false);
  }
  useEffect(() => {
    featchData();
  }, [])
  
  

  return (
  <div>
    <div>
       <Navbar></Navbar>
     </div>

    <div>
      <Filter filterData = {filterData} category = {category} setCategory = {setCategory}></Filter>
      
    </div>
    
    <div>
      {
      loading ? (<Spinner/>) : (<Cards courses={courses} category = {category}/>)

      }
    </div>

  </div>
    
  );
  
};

export default App;
