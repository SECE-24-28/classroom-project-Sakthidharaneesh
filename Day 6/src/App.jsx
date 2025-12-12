import Parent from './components/Parent'  
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
      <hr></hr> 
     {/*  <Parent propsname={name}/> */}
      <h1>Product List</h1>
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

export default App 
/* import { useState } from 'react'


function App() {
  const [name, setName] = useState(); 
  const handleName = (e) => { setName(e.target.value); }

  return (
    <div>
      <input type="text" placeholder="Enter text here" 
      value = {name} onChange = {handleName}/>
      <p>Typed : {name}</p>
      </div>
  )
}

export default App */