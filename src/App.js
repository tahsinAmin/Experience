import { logDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import './App.css';


function App() {
 const [value, setValue] = useState(0);
 const data = [
  {
    "id": "rec123",
    "title": "Web Developer",
    "dates":"October 2020 – October 2020",
    "description":"The goal of the project was to develop an interactive web-based E-Business application based on the skills PHP, HTML and CSS and should be supported with SQL database as a backend. Consulted with client to ascertain project requirements. It includes Sign In, Sign Out, Login, dashboard, Add to Cart, Shopping Cart and Payment procedure. All data entries from users through the web pages are validated properly.",
    "company":"Freelancing",
  },{
    "id": "rec345",
    "title": "Full Stack Developer",
    "dates":"October 2020 –February 2021",
    "description":"Creating a real-time web application for an Immigration service. My task is to implement an assessment for the users, have a payment system and scrap information from other sources to show in website, working with a lot of data and sending email of the users’ result",
    "company":"Dream Canada",
  },{
    "id": "rec678",
    "title": "UI / UX Designer",
    "dates":"March 2021 - June 2021",
    "description":"A virtual event managing platform where you can plan any event today with flexibility and the comfort of your own home. My role is to create user-flows, site-maps &  consistent design, researching, solving design problems and focusing on how users interact with the product",
    "company":"Ayoojon",
  }
]

  return (
    <div className="mx-auto p-4 max-w-full flex">
      <div className="bg-gray-800 text-gray-300 w-1/6 p-2">
        {
          data.map(
            (record, index) => {
              console.log(index === value);
              return (
                <div
                  className={`cursor-pointer py-2 px-3 my-2 text-gray-400 ${index === value && 'act'}`}
                  onClick={() => setValue(index)}>
                  {record.company}
                </div>
              );
            }
          )
        }
      </div>
      <div className="w-5/6 h-64 bg-gray-800">
        <div className="rounded bg-gray-600 text-white m-4 p-4">
          <div className="flex justify-between">
            <h1 className="text-xl mb-2">{ data[value].title }</h1>
            <p>{ data[value].dates }</p>
          </div>
          <p>{ data[value].description }</p>
        </div>
      </div>
    </div>
  );
}

export default App;
