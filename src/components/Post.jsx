import axios from 'axios';
import React from 'react'
const Post = () => { 
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name: 'Vikku', age: 18 })
    //   })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
  //   //     .catch(error => console.error(error));
      
  //  async function getData(){
  // const response= await  fetch('https://jsonplaceholder.typicode.com/posts', {
  //      method:'Post',
  //      headers:{'Content-Type':'application/json'},
  //      body:JSON.stringify({ name: 'Vikku', age: 18 })
  //     })



async function getSqlQueryResponse(question) {
  try {
    // Send the POST request to the API with the necessary headers and data
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
      method: "post",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",  // Replace with your actual API key
        "Content-Type": "application/json",      // This specifies you're sending JSON data
      },
      data: {
        contents: [
          {
            parts: [
              {
                text: "only return sql query in response by optimizing it if it is fully optimized then return same here " + question
              }
            ]
          }
        ]
      }
    });

    // Log the response from the API
    console.log("Response from API:", response.data);

  } catch (error) {
    // Handle any errors (like network issues or wrong API keys)
    console.error("Error while making the request:", error);
  }
}

// Example question
const question = "How can I select all records from the users table where age is greater than 25?";

// Call the function with the question
getSqlQueryResponse(question);

  
     
     
  //     const data = await response.json();
  //     console.log(data)
  //  }
  //  getData();
  return (
    <div>
      
    </div>
  )
}

export default Post
