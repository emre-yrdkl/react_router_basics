import './App.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Shop() {

    const [data, setData] = useState([])

    useEffect(()=>{
        takeData()
    },[])

    const takeData = async () => {

        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")

        const items = await data.json()
        setData(items.data)
        console.log(items.data);
    }
  return (
    <div>
      {data.map(item =>(
        <h2 key={item.item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
            </h2>
      ))}
    </div>
  );
}

export default Shop;
