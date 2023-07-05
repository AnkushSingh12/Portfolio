import React from 'react'
import img1 from '../images/image.jpg';

const Home = () => {
  return (
    <div style={{marginTop:"80px"}}>
      <h1 style={{textAlign:"center", marginBottom:"20px"}}>PROJECTS</h1>
      <div className="container">
            <div className="row">
                
                <div className="col-lg-6" style={{backgroundColor:"whitesmoke"}}>
                    <h3 style={{backgroundColor:"#212529", color:"white",fontWeight:"bold",textAlign:"center"}}>Project details</h3>
                    <h6>Intern, Node JS</h6>
                        Solitare Infosys Private Limited Oct 2022 - Dec 2022
                      <ul style={{margin:"0px"}}>
                        <li>developed user intefaces with HTML5, CSS and modern Javascript frameworks which improves user
                        satisfaction</li><br />
                        <li>developed object-oriented code in Node Js</li><br />
                        <li>Learned multiple design patterns and their imact on application</li><br />
                        <li>designed and developed web application using Javascript and BootStrap framework to increase target
                        audience engagement
                        </li>
                    </ul>
                </div>

                <div className="col-lg-6">
                      <img src={img1} alt="" style={{height:"420px", width:"100%", borderRadius:"50%"}}  />
                </div>
            </div>
      </div>
</div>

  )
}

export default Home;
