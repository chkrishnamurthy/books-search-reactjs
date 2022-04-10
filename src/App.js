// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from './Card'


function App() {
  const [booksData,setBooksdata] = useState([]);

  useEffect(()=>{
    axios.get("https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAut5tpcxNMvOcBFLFN_D3zKhjh4uwf7-U")
    .then((data)=>{
      console.log(data.data.items);
      setBooksdata(data.data.items);
    }).catch((err)=>{
      console.log("errkrishna",err);
    })
  },[]);


  return (
    <div className="App">
      <header className="App-header">
       Krishna
       <Card books={booksData} />
      </header>
    </div>
  );
}

export default App;
