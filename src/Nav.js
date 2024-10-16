import React from "react";
import "./Nav.css";

import collabFinder from "./assets/Collab_Finder.png"
import Spotstar from "./assets/Spotstar.png"
import StudentCourseManagementApp from "./assets/StudentCourseManagementApp.jpg"
import MailApp from "./assets/MailApp.png"
import Google from "./assets/Google.png"
import Zomato from "./assets/Zomato.png"


const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md bg fixed-top">
        <div class="container-fluid ">
          <a class="navbar-brand cl" href="#">
          Pradeep V
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Design Develope
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item " data-bs-dismiss="offcanvas">
                  <a class="nav-link " aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item " data-bs-dismiss="offcanvas">
                  <a class="nav-link " href="#Work">
                    Works
                  </a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" href="#Skill">
                    Skills
                  </a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* hero---------------------> */}

      <div className="container-fluid d-flex align-items-center justify-content-center  w100">
        <div className="wrapper p-5">
          <h1 className="cl">Hi I'm Pradeep V</h1>

          <h3>
              A engineering graduate with hands-on experience in Java-based technologies such as Spring
              Boot, Hibernate, and MySQL, I bring a strong foundation to contribute effectively to software
              projects. I am eager to apply my skills, collaborate with teams, and make meaningful contributions to
              innovative development initiatives.
          </h3>
          <p className="fullstack">a Fullstack Web Developer</p>

          <a href="https://www.linkedin.com/in/pradeep-v-11b8a8297/">
            {" "}
            <button className="btn btn-dark rob">
              <i className="fa-brands fa-linkedin me-1 "></i>LinkedIn
            </button>
          </a>
          <a target="_blank"  href="https://drive.google.com/file/d/1vZyw1qc7vBTtVEB3v7KrdEJMhUQHUDzf/view?usp=drive_link" >
            {" "}
            <button className=" ms-2 btn btn-outline-dark rounded  ">
              View CV
            </button>
          </a>
        </div>
      </div>

      {/* work <section></section> */}

      <div className="container-fluid bg4" id="Work">
        <h1 className="cl text-center">My Project Works</h1>

        <div className="card-box    ">
          <div className="row flexi ">
          <div className="col-md-4">
              <a href="https://github.com/pradeepdedsec/COLLAB-FINDER">
                {" "}
                <div
                  className="card   md:m-3"
                >
                  <img src={collabFinder} class="card-img-top cimg" alt="..." />
                  <i class=" vicon fa-solid fa-eye"></i>
                  <div className="card-body">
                    <p className="card-text">
                      {" "}
                      <span className="badge badge-primary">React.js</span>{" "}
                      <span className="badge badge-primary">Express.js</span>{" "}
                      <span className="badge badge-primary">MySQL</span>{" "}
                      <span className="badge badge-primary">REST API</span>{" "}
                      <br />
                      <span className="cl">Collab Finder</span>:  A Social Networking Platform for Project Collaboration

                      <a className="ms-2" href="https://github.com/pradeepdedsec/COLLAB-FINDER"><i class="fa-solid fa-link">
                        
                      <span className="cl ms-2">Source Code</span></i> </a>
                    </p>
                    
                  </div>

                </div>
              </a>
            </div>

          <div className="col-md-4">
              <a href="https://github.com/pradeepdedsec/test">
                {" "}
                <div
                  className="card m-3"
                >
                  <img src={Spotstar} class="card-img-top cimg" alt="..." />
                  <i class=" vicon fa-solid fa-eye"></i>
                  <div className="card-body">
                    <p className="card-text">
                      {" "}
                      <span className="badge badge-primary">React.js</span>{" "}
                      <span className="badge badge-primary">Node.js</span>{" "}
                      <br />
                      <span className="cl">Spotstar</span>: An app where you can watch and sing along to your favorite musical movies, immersing yourself in both song and story.

                      <a className="ms-2" href="https://github.com/pradeepdedsec/Spotstar-React-Js"><i class="fa-solid fa-link">
                        
                      <span className="cl ms-2"><br />Source Code</span></i> </a>


                      <a className="ms-2" href="https://peaceful-capybara-786e37.netlify.app/"><i class="fa-solid fa-link">
                        
                      <span className="cl ms-2">Live Page</span></i> </a>
                    </p>
                    
                  </div>

                </div>
              </a>
            </div>

          <div className="col-md-4">
              <a href="https://github.com/pradeepdedsec/Student-Course-Management-System-REST-api-using-Spring-Boot">
                {" "}
                <div
                  className="card m-3"
                >
                  <img src={StudentCourseManagementApp} class="card-img-top cimg" alt="..." />
                  <i class=" vicon fa-solid fa-eye"></i>
                  <div className="card-body">
                    <p className="card-text">
                      {" "}
                      <span className="badge badge-primary">Spring boot</span>{" "}
                      <span className="badge badge-primary">Hibernate</span>{" "}
                      <span className="badge badge-primary">MySQL</span>{" "}
                      <span className="badge badge-primary">REST API</span>{" "}
                      <br />
                      <span className="cl">Student Course Management System </span>:
                      A REST API that streamlines the management of courses, students, enrollments, and academic records.

                      <a className="ms-2" href="https://github.com/pradeepdedsec/Student-Course-Management-System-REST-api-using-Spring-Boot"><i class="fa-solid fa-link">
                        
                      <span className="cl ms-1 ">Source Code</span></i> </a>
                    </p>
                    
                  </div>

                </div>
              </a>
            </div>


            
            <div className="col-md-4">
              <a href="https://github.com/pradeepdedsec/Email-console-application-with-file-handling-in-java">
                {" "}
                <div
                  className="card   md:m-3"
                >
                  <img src={MailApp} class="card-img-top cimg" alt="..." />
                  <i class=" vicon fa-solid fa-eye"></i>
                  <div className="card-body">
                  <p className="card-text">
                      {" "}
                      <span className="badge badge-primary">Java</span>{" "}
                      <span className="badge badge-primary">Object Oriented Programming(OOP)</span>{" "}
                      <br />
                      <span className="cl">MailApp</span>:
                      A console-based email application in Java with user 
                      authentication, email composition, inbox/sent views, and 
                      text file storage using Java I/O  

                      <a className="ms-2" href="https://github.com/pradeepdedsec/Email-console-application-with-file-handling-in-java"><i class="fa-solid fa-link">
                        
                      <span className="cl ms-1">Source Code</span></i> </a>
                    </p>
                    
                  </div>

                </div>
              </a>
            </div>


            
            <div className="col-md-4">
              <a
                className="unstyled"
                href="https://precious-sherbet-2d7f1f.netlify.app/"
              >
                <div
                  className="card m-3"
                >
                  <img src={Zomato} class="card-img-top" alt="not loading.." />
                  <i class=" vicon fa-solid fa-eye"></i>
                  <div className="card-body">
                    <p className="card-text">
                      {" "}
                      <span className="badge badge-primary">
                        HTML
                      </span>{" "}
                      <span className="badge badge-primary">
                      CSS 
                      </span>{" "}
                      
                      <br />
                      <span className="cl">Zomato </span> : 
                      Zomato home page Clone 


                      <a className="ms-2" href="https://precious-sherbet-2d7f1f.netlify.app/"><i class="fa-solid fa-link">
                      <span className="cl ms-1">Live Page</span></i> </a>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://lively-heliotrope-c1be3f.netlify.app/">
                <div
                  className="card m-3"
                >
                  <img src={Google} class="card-img-top" alt="..." />
                  <i class=" vicon fa-solid fa-eye"></i>
                  <div className="card-body">
                  <span className="badge badge-primary">
                        HTML
                      </span>{" "}
                      <span className="badge badge-primary">
                        CSS
                      </span>{" "}
                      <span className="badge badge-primary">
                        Responsive Web Page
                      </span>{" "}
                    <p className="card-text">
                      <span className="cl">Google </span>: Google search page clone


                      <a className="ms-2" href="https://lively-heliotrope-c1be3f.netlify.app/"><i class="fa-solid fa-link">
                      <span className="cl ms-1">Live Page</span></i> </a>
                    </p>
                  </div>
                </div>
              </a>
            </div>
           
          </div>
        </div>
      </div>

      {/* Skill page */}

      <div id="Skill" className="container Skill mt-4">
        <div className="skill-Items">
          <h1 className="text-center cl  ">Skills</h1>
          <div className="skillwrapper  text-center ">
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                HTML <i class="fas fa-code"></i>{" "}
              </span>{" "}
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                CSS <i class="fa-brands fa-css3-alt"></i>{" "}
              </span>{" "}
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                JavaScript <i class="fa-brands fa-js"></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                React.js <i class="fab fa-react"></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Node.js <i class="fab fa-node "></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Express.js <i class="fa-solid fa-server"></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                MySQL <i class="fas fa-database"></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Java <i class="fab fa-bootstrap"></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Object Oriented Programming(OOP) <i class="fab fa-bootstrap"></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Spring Boot <i class="fab fa-bootstrap"></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Hibernate <i class="fas fa-toolbox"></i>{" "}
              </span>
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                REST API   {" "}
              </span>
              
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Postman Tool   {" "}
              </span>
              
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Git   {" "}
              </span>
              
            </h3>
            <h3>
              <span
                class="badge bg-secondary"
              >
                {" "}
                Github   {" "}
              </span>
              
            </h3>
               
             
          </div>
        </div>
      </div>

      {/* Contact page*/}
      <div id="Contact" className="contact w110  ">
        <h1 className="ps-5 cl pt-5 "> Let's Collaborate</h1>
        <div className="container">
          <form className="contact-form mt-5 p-4 ">
            <div className="row">
              <div className="col-md-5 ">
                <form action="https://getform.io/f/nelJj7bK" method="POST">
                  <label  className="label">
                    Name : Pradeep V
                  </label>
                  <br />

                  <label  className="label">
                    Phone Number : 9360196352
                  </label>
                  <br />

                  <label  className="label">
                    Email Address : pradeepdedsec@gmail.com
                  </label>
                  <br />
                  
                </form>
              </div>

              <div
                className="col-md-6 Msg-card "
              >
                <div className="msgwrapper">
                  <h2>Lets Make Some Amazing Projects Together !</h2>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;
