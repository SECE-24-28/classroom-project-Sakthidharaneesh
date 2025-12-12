/* import Parent from './components/Parent'  
import Child from './components/Child'
import Footer from './components/Footer'
import { useState } from 'react'
import Logo from './assets/Logo.jpeg'   
function App() {
  const [count, setCount] = useState(5);
  const [color, setColor] = useState("Black");
  const [isOn, setIsOn] = useState(false);
  const [a, setA] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [b, setB] = useState({ name: "Sakthi" });
  const [opinion, setOpinion] = useState(0);
  const [opinion1, setOpinion1] = useState(0);
  const name="Sakthidharaneesh";
  const productlist=["Fruit","Vegetables","Dairy","Bakery","Meat","Beverages"];
  const productdetails=[{
    name:"Laptop",
    price:50000,
    brand:"Dell"
  },
  {
    name:"Mobile",
    price:20000,
    brand:"Oneplus"
  },
  {
    name:"Headphones",
    price:3000,
    brand:"Boat"
  }]
  return (
    <>
    
      <h1>WELCOME TO REACT</h1>
       <img src={Logo} alt="Logo" />
       <hr></hr>
       <h1>Component Structure</h1>
       <Parent />
     <hr></hr>
     <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add one +</button>
      <button onClick={() => setCount(count - 1)}>Subtract one -</button>
      <br></br>
      <hr></hr>
      <h1>Change of Colour</h1>
      <h2>Color: {color}</h2>
      <h2 style={{color:color}}>Color: {color} </h2>
      <h2 style={{backgroundColor:color}}>Color: {color} </h2>
      <button onClick={() => setColor("Red")} >Red</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Black")}>Black</button>
      <hr></hr>
      <h1>Toggle Button</h1>
      <h1 style={{color: isOn ? 'green' : 'red'}}>
        {isOn ? 'ON' : 'OFF'}
      </h1>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <hr></hr>
      <h1>Array State Management</h1>
      <h2>Array : {a}</h2>
      <button onClick={() => setA([a.length])}>Length</button>
      <button onClick={() => setA([...a, a.length])}>Add Element</button>
      <button onClick={() => setA(a.slice(0, -1))}>Remove Last Element</button>
      <button onClick={() => setA([])}>Clear Array</button>
      <hr></hr>
      <h1>Array Management Strings</h1>
      <h2>Name : {b.name}</h2>
      <button onClick={()=> setB({name:"Sakthidharaneesh"})}>Change Name</button>
      <hr></hr>
      <h1>Opnion</h1>
      <h2>Likes 👍: {opinion}</h2>
      <h2>Dislikes 👎: {opinion1}</h2>
      <button onClick={() => setOpinion(opinion + 1)}>Like 👍</button>
      <button onClick={() => setOpinion1(opinion1 + 1)}>Dislike 👎</button>
      <hr></hr> */
     {/*  <Parent propsname={name}/> */}
    /*  <h1>Product List</h1>
     {productlist.map((item, index) => (
      <h2 key={index}>{item}</h2>
     ))} 
     <hr></hr>
      <h1>Product Details</h1>
      {productdetails.map((item, index) => (
        <div key={index}>
          <h3>Product Name: {item.name}</h3>
          <h3>Price: {item.price}</h3>
          <h3>Brand: {item.brand}</h3>
          <hr></hr>
        </div>
      ))}   
    </>
  )
}

export default App */
/* import { useState } from 'react'


function App() {
  const [name, setName] = useState();
  const [Aname, setAname] = useState();
  const handleName = (e) => { setName(e.target.value); }
  const handlesubmit = (e) => {
    e.preventDefault();
    setAname(name);
    console.log("Form Submitted", name);
 
  }

  return (
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder="Enter text here" 
       onChange = {handleName}/>
      <p>Typed : {name}</p>
      <button type='submit'>Submit</button>
      <p>Submitted Name 
        : {Aname}</p>
      </form>
  )
}

export default App */
/* import { useState, useRef } from 'react'
function App() {
  const[name,setName]=useState();
  const[age,setAge]=useState();
  const[email,setEmail]=useState();
  const[phone,setPhone]=useState();

  const inRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleClick=()=>{
    setName(inRef.current.value);
    setAge(ageRef.current.value);
    setEmail(emailRef.current.value);
    setPhone(phoneRef.current.value);
  }

  return (
    <div>
    <input type="text" ref={inRef} placeholder="Enter your name"/>
    <br/>
    <input type="number" ref={ageRef} placeholder="Enter your age"/>
    <br/>
    <input type="email" ref={emailRef} placeholder="Enter your email"/>
    <br/>
    <input type="tel" ref={phoneRef} placeholder="Enter your phone number"/>
    <br/>
    <button onClick={handleClick}>Submit</button>
    <p>Your name is: {name}</p> 
    <p>Your age is: {age}</p> 
    <p>Your email is: {email}</p> 
    <p>Your phone is: {phone}</p> 
    </div>
  )
}

export default App */
/* import { useEffect, useState } from "react"


function App() {
  const [count, setCount] = useState(10);
  useEffect(()=>{console.log('Redering'); 
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => console.log(json))}, [])
  return (
    <>
    <p>Count: {count}</p>
    <button type = "submit" onClick ={() => {setCount(count + 1)}}>Click</button>
    </>  
  )
}
export default App */
/* import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState([])
  const [type, setType] = useState("photos");
  useEffect(()=>{console.log('Redering'); 
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))}, [type])
  
  return (
    <>
    <p>Type: {type}</p>
    <button type = "submit" onClick ={() => {setType("albums")}}>Albums</button>
    <button type = "submit" onClick ={() => {setType("photos")}}>Photos</button>
    {
      data.map((item, index) => (<p key = {index}>{item.title}</p>))
    }
    </>
  )
}
export default App */
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Product from './components/Product.jsx'; 
function App() {
  return (
    <>
    <h2>Welcome to React</h2>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/product/10">Product 10</Link> | {" "}
        <Link to="/product/20">Product 20</Link> | {" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />

        
      </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App
