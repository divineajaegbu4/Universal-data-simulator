import axios from "axios";


const[citizensRes, companiesRes, citiesRes, productsRes] = await Promise.all([
    axios.get("https://randomuser.me/api?results=100"),
    axios.get("https://dummyjson.com/users"),
    axios.get("https://countriesnow.space/api/v0.1/countries/population/cities"),
    axios.get("https://fakestoreapi.com/products")
])

const citizens = citizensRes.data;
const companies = companiesRes.data;
const cities = citiesRes.data.data;
const products = productsRes.data;


export { citizens, companies, cities, products };