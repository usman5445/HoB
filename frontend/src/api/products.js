import axios from "axios";


export default function productRequest() {
      axios
        .get("/products")
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    }

   
 
