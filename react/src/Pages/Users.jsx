import { api } from "../api/auth";
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
const [data,setData] = useState([])
const [search ,setSearch] = useState("")
const [selectCatalog ,setSelectCatalog] = useState("")
const [dataCatalog,setDataCatalog] = useState([])
const [dataProducts,setDataProducts] = useState([])
const [dataProductsTotal,setDataProductsTotal] = useState([])
const [dataProductsLimit,setDataProductsLimit] = useState(5)
const [dataProductsTotalPage,setDataProductsTotalPage] = useState([])
const [dataProductsPage,setDataProductsPage] = useState(1)
const token = localStorage.getItem("token")

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [city, setCity] = useState("");
const [role, setRole] = useState("user");

const PostUser = async (e) => {
  e.preventDefault();

  try {
    await axios.post(api + "/users",
      {
        name,
        email,
        password,
        role,
        city,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    setName("");
    setEmail("");
    setPassword("");
    setCity("");
    setRole("user");
    GetUser()
  } catch (error) {
    console.log(error);
  }
};
 const GetUser =async ()=>{
  try {
      const {data} = await axios.get(api+"/users",{
        headers:{
          Authorization: "Bearer "+ token
        }
      })
      setData(data)
  } catch (error) {
      console.error(error);
      
  }
}
const GetCatalog =async ()=>{
  try {
      const {data} = await axios.get(api+"/catalogs")
      setDataCatalog(data)
  } catch (error) {
      console.error(error);
      
  }
}
const GetProducts =async ()=>{
  try {
      const {data} = await axios.get(api+`/products?limit=${dataProductsLimit}&page=${dataProductsPage}${search?`&search=${search}`:""}${selectCatalog?`&catalogId=${selectCatalog}`:""}`,{
        headers:{
          Authorization:"Bearer "+token
        }
      })
      setDataProducts(data.data)
      setDataProductsTotal(data.total)
      setDataProductsTotalPage(data.totalPages)
      setDataProductsLimit(data.limit)

  } catch (error) {
      console.error(error);
      
  }
}


  useEffect(()=>{
   GetUser()
   GetCatalog()
   
  },[])
  useEffect(()=>{
    GetProducts()
  },[dataProductsLimit,dataProductsPage,search,selectCatalog])
  return (
    <div>
       <form onSubmit={PostUser}>
  <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
  <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  <input placeholder="City" value={city}onChange={(e) => setCity(e.target.value)}/>
<select value={role} onChange={(e) => setRole(e.target.value)}>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>
  <button type="submit">Add User</button>
</form>
     <div className='border p-5 '>
     <h1 className='text-xl '>Users:</h1>
     <div className='grid grid-cols-4'>
     {
        data.map((e)=>{
          return <div>
            <p>{e.name}</p>
            <p>{e.email}</p>
            <p>{e.city}</p>
            <p>{e.role}</p>
          </div>
        })
      }
     </div>
     </div>
     <div className='border p-5 '>
     <h1 className='text-xl '>Catalogs:</h1>
     <div className='grid grid-cols-4'>
     {
        dataCatalog.map((e)=>{
          return <div>
            <p>{e.name}</p>
            
          </div>
        })
      }
     </div>
     </div>
     <div className='border p-5 '>
      <div className='flex gap-5'>

     <h1 className='text-xl'>Products:</h1> 
     <input className='border px-1 ' type="search"  value={search} onChange={(e)=>setSearch(e.target.value)} />
     <select   onChange={(e)=>setSelectCatalog(e.target.value)} name="" id="">
      
     {
        dataCatalog.map((e)=>{
          return <div>
            <option value={e.id}>{e.name}</option>
          </div>
        })
      }
     </select>
      </div>
     <div className='grid grid-cols-4'>
     {
        dataProducts.map((e)=>{
          return <div className='flex gap-1.5'>
            <p>{e.id}</p>
            <p>{e.name}</p>
          </div>
        })
      }
     </div>
     <select onChange={(e)=>setDataProductsLimit(e.target.value)} name="" id="">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
     </select>
      <div className='flex gap-2'>
        {
          Array.from({length:dataProductsTotalPage}).map((e,i)=>{
            const page = i+1
            return <p onClick={()=>setDataProductsPage(page)} className='border p-2 px-4 rounded-xl cursor-pointer hover:bg-amber-50'>{page}</p>
          })
        }
      </div>
     </div>
    </div>
  )
}

export default Users
