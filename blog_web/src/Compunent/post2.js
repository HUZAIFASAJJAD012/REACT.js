import { useState } from "react";

function Post2() {


    const [data, setData] = useState([
        { title: "weight lose", shortdis: "sadasdasdasdasdasdasdasdasddasd", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGsSVfsdwGgqiXeqrKsyc16X-q4Xyfh2dUg&usqp=CAU" },
        { title: "weight lose", shortdis: "fksnfijasifjiasjfjfjsdnfnsdfsffsdfasdasd  ", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXh2dodXTC6MHaDOuInWFFQvwE6fYblTEIQ&usqp=CAU" },
        { title: "weight lose", shortdis: "fksnfijasifjiasjfjfjsdnfnsdfsfdasdas", pic: "data:image/jpeg;base64,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" }
      ]);
    return ( <div>






{data.map((item, index) => (

<div class="card mb-3" style={{maxwidth: "440px",width:"70%",marginLeft:"10%",marginTop:"5%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={item.pic} class="img-fluid rounded-start" style={{width:"100%"}}alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

))}











    </div> );
}

export default Post2;