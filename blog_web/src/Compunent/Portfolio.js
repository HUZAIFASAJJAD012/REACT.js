import React from "react";
import"./css/portfo.css";


function Portfolio() {
    return ( <div>



<div class="hero">
		

		<div class="content">
			<h4 style={{color:"white",fontSize:"80px"}}>Hello, my name is</h4>
			<h1 style={{color:"white",fontSize:"60px"}}>Huzaifa <span style={{color:"yellow"}}>Sajjad</span></h1>
			<h3 style={{color:"white",fontSize:"50",fontWeight:"bold"}}> Full STACK DEVELOPER</h3>
			<div class="newslatter">
				
			</div>
		</div>
	</div>

   

	
	<div class="card mb-3" style={{maxwidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={require("./css/img/WhatsApp 12022-10-25 at 09.42.10.jpg")} style={{borderRadius:"80px",width:"80%",height:"80%",marginLeft:"5%",marginTop:"5%"}} class="img-fluid " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body"> 
        <h5 class="card-title" style={{fontSize:"30px"}}>About Me</h5>
		<h5>Full <span>Stack developer</span></h5>
        <p class="card-text">i'm HUZAIFA SAJJAD, 20 years old and I'm an Full-Stack Developer, with a strong attitude and skills in the Agile project management

i have more than 2 years of experience in web/mobile development .
<br/>
<spam style={{fontWeight:"bold"}}>WHY HIRE ME?</spam> <br/>
✓ 20+ website completed<br/>
✓ 5+ mobile apps<br/>
✓ Full Stack 24/7 support<br/>
✓ High quality works with better revision<br/>
✓ Fast turnaround within your deadline</p>
      </div>
    </div>
  </div>
</div>



    </div> );
}

export default Portfolio;