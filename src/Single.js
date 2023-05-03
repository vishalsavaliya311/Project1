import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Single(){
    const [val, setval] = useState([]);
    const count = useSelector((state) => state.counter.value)
    const dispath = useDispatch();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${count}`)
        .then(function (response) {
        setval(response.data)
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    
    },[]);

    return(
        <>
            <div className="row">
                <img src={val.image} className='w-100'></img>
            </div>
            <div className="col-8">
                
            </div>
        </>
    )

}

export default Single;