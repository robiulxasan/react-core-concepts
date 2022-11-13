import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const person1 = { name: "Md. Robiul Hasan", Profession: "Web Development" };
  const employees = [
    {name:'Robiul Hasan',id:'101', jobstatus:'CEO'},
    {name:'Rakibul Hasan',id:'102', jobstatus:'CS'},
    {name:'Tanvir Hasan',id:'103', jobstatus:'React Developer'},
    {name:'Soriful Alam',id:'104', jobstatus:'Front-End Developer'},
    {name:'Shamim Rahman',id:'105', jobstatus:'Android Developer'},
    {name:'Robiul Hasan',id:'106', jobstatus:'Web Developer'},
    {name:'Saidul Alam',id:'101', jobstatus:'QA'},
  ]

  const products = [
    { name: "Photoshop", price: "$0.99" },
    { name: "Illustrator", price: "$0.90" },
    { name: "Adobe XD", price: "$1.99" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>I am a React Developer....</h2>
        <Count></Count>
        <User></User>
        <Person name={person1.name} Profession={person1.Profession}></Person>
        <Person name="Md. Saddam Hossain" Profession="Business"></Person>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        {
          employees.map(employee=>  <Employee employee= {employee}></Employee>)
        }
       
      </header>
    </div>
  );
}

function Count(){
  const [count, setCount] = useState(0);
  const btnStyle={
    margin: '20px',
    padding: '10px'
  }
  return(
    <div>
      <h2 >Count : {count}</h2>
      <button style={btnStyle} onClick={()=>setCount(count-1)}> Decrease</button>
      <button style={btnStyle} onClick={()=>setCount(count+1)}> Increase</button>
    </div>
  );
}

function User(){
  const [users,setUser]= useState([]);
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[]);
  return(
    <div>
      <h2>Dynamic User: {users.length}</h2>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Person(props) {
  const personStyle = {
    fontFamily: "Serif",
    border: "2px solid white",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    width: "500px",
  };
  return (
    <div style={personStyle}>
      <h1>I am {props.name}</h1>
      <h3 style={{ color: "yellow" }}>My profession is {props.Profession}.</h3>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    backgroundColor: "white",
    height: "auto",
    width: "500px",
    color: "black",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "11px 11px 17px -4px rgba(255,251,246,0.41)"
  };

  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button >Order Now</button>
    </div>
  );
}

function Employee(props){
  const employeeStyle={
    backgroundColor: 'brown',
    fontFamily: "Serif",
    border: "2px solid white",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    width: "400px",
  }
  const {name,id,jobstatus} = props.employee;
  return(
    <div style={employeeStyle}>
      <h3>Employee name: {name}</h3>
      <h3>Employee Id: {id} </h3>
      <h4>Job Status: {jobstatus} </h4>
    </div>

  );
};

export default App;
