
import axios from 'axios'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { productid } from '../app/reducer/counterSlice';

function Product() {
  const [val, setval] = useState([]);
  const count = useSelector((state) => state.counter.value)
  const dispath = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);



    const [data,setdata] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(function (response){
        console.log(response.data);
        setdata(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    
    },[]);

    return(
 <>
 <nav class="navbar navbar-expand-lg vishal">
        <div class="container-fluid">
          <a class="navbar-brand"><img src={require('../image/1.jpg')} className='img1'></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fw-bold text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="#">Sell</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="#">Mobiles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="#">Electronic</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="#">Prime</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="#">New Releases</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className='container'>
            <div className='row'>
                {
                    
                    data.map((x)=>{
                        return(
                            <>
                                <div className='col-3 my-3'>
                                  <Link to="single" onClick={()=> dispath(productid(x.id))}>
                                  </Link>
                                    <img className='w-100 h-100 py-4 my-1' src={x.image}></img>
                                </div>
                                <div className='col-6 text-start my-3'>
                                <h3 className=''>{x.id}</h3>
                                <h5 className='d-block category'>{x.category}</h5>
                                    <h6 className='d-block h5'>{x.title}</h6>
                                   
                                    <span className='d-block'>{x.description}</span><hr></hr><br></br>
            
                                </div>
                                <div className='col-3 my'>
                                    <span className='d-block h3'>₹{x.price}</span>
                                    <Button variant="warning">Add To Cart</Button>{' '}
                                    <Button variant="danger">Buy Now</Button><br></br><br></br>
                                    <Button variant="outline-primary">Free Delivery</Button>{' '}
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
 </>       
      
    )    
}

export default Product;