# Accordion

## Overview

This is a React application that provides a simple FAQ (Frequently Asked Questions) interface. Users can view questions, toggle answers, and switch between Single and Multiple Select modes.

## Website Link
[Website Link](https://illustrious-sfogliatella-a438bb.netlify.app/)

## Features

- Display a list of FAQ items.
- Toggle between Single Select and Multiple Select modes.
- Click on a question to toggle the visibility of its answer.

## Project Structure

The project consists of two main components:

1. **AccordianT Component:**
   - Responsible for rendering the FAQ items.
   - Uses the provided data (`faqData`) to display questions and answers.
   - Supports Single Select and Multiple Select modes.

   ```jsx
   import React, { useState } from 'react';
   import faqData from "../data";

   function AccordianT({ SingleSelect, setSingleSelect, id, setId }) {
     const HandleSelection = (elementId) => {
       if (SingleSelect) {
         if (id.indexOf(elementId) !== -1) {
           setId([elementId]);
         } else {
           setId([]);
         }
       } else {
         if (id.indexOf(elementId) !== -1) {
           setId(id.filter((item) => item !== elementId));
         } else {
           setId([...id, elementId]);
         }
       }
     };

     return (
       <div>
         <div>
           {faqData.map((element) => (
             <div key={element.id} id={element.id} onClick={() => HandleSelection(element.id)}>
               <h2 style={{ color: "orange", marginBottom: "-10px" }}>{element.question}</h2>
               {id.indexOf(element.id) !== -1 ? <p>Hide Answer -</p> : <p>Show Answer +</p>}
               {id.indexOf(element.id) !== -1 ? (
                 <p style={{ color: "green" }}>{element.answer}</p>
               ) : (
                 <span></span>
               )}
               {console.log(id)}
             </div>
           ))}
         </div>
       </div>
     );
   }

   export default AccordianT;
   ```

2. **Button Component:**
   - Provides a button to switch between Single Select and Multiple Select modes.
   - Resets the selected IDs when switching modes.

   ```jsx
   import React from 'react';

   function Button({ SingleSelect, setSingleSelect, id, setId }) {
     return (
       <div style={{ border: "solid", padding: "10px" }} onClick={() => { setSingleSelect(!SingleSelect), setId([]) }}>
         {!SingleSelect ? "Change to Single Select" : "Change to Multiple Select"}
         {console.log(SingleSelect)}
       </div>
     );
   }

   export default Button;
   ```

## How to Use

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Open your browser and navigate to `http://localhost:3000`.
5. Explore the FAQ items, toggle answers, and switch between Single and Multiple Select modes.

Feel free to customize and extend the project as needed for your application.

---

Feel free to add more details about the application, such as how to install dependencies, run tests, or deploy the application. Customize the README based on your specific project requirements and features.
