import './App.css';
import {useState, useEffect} from "react"
import {Link, useLocation} from "react-router-dom"

function ShopDetail({match}) {

  const usePathname = () =>{
    const location = useLocation();
    //return location.pathname;
    //console.log(location.pathname);
    const sliced = location.pathname.slice(6)
    //console.log(sliced);
    return sliced
  }
  const dataId = usePathname()

    const [data, setData] = useState({})

    useEffect(()=>{
        takeData()
        //console.log('====================================');

    },[])

    const takeData = async () => {

        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${dataId}`)

        const items = await data.json()
        setData(items.data)
        console.log('====================================');
        console.log(items.data);
        console.log('====================================');

        
    }
  return (
    <div>
        <h1>{data.item?.name}</h1>
        <h3>{data.item?.description}</h3>
        <img style={{maxHeight:600}} src={data.item?.images.information} />
        
    </div>
  );
}

export default ShopDetail;
