// import React, {useState} from "react";
import { Link } from 'react-router-dom';

export default function About() {

  // const [myStyle, setMyStyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'black',
  //   border: '2px solid black',
  //   borderRadius: '10px'
  // })

  // const enable = (event) => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       border: '2px solid black',
  //       borderRadius: '10px'
  //     })
  //     event.target.innerHTML = "Enable Dark Mode";
  //   }
  //   else {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '2px solid white',
  //       borderRadius: '10px'
  //     })
  //     event.target.innerHTML = "Enable Light Mode";
  //   }
  // }
  // const [active, setactive] = useState("active");
  // const act = ()=>{
  //   if(active === "active")
  //   setactive("");
  //   else
  //   setactive("active")
  // }
  let navitem = document.getElementsByClassName("nav-link");
      let acc = document.getElementsByClassName("accordion");
      const act = (cont)=>{
        for(let item of navitem){
          let e = document.getElementsByClassName(cont)[0];
          if(item == e && item.classList.contains("active")){
            break;
          }
          if(item == e && !(item.classList.contains("active"))){
            item.classList.add("active");
          }
          else{
            item.classList.remove("active");
          }
        }
        for(let content of acc){
          if(content.id == cont && content.classList.contains("act")){
            break;
          }
          if(content.id == cont && !(content.classList.contains("act"))){
            content.classList.add("act");
          }
          else{
            content.classList.remove("act");
          }
        }
      }
  return (
    
    // <div className="container my-3 py-3 px-3" {myStyle}>
    //     <h1>About Us</h1>
    //   <div className="accordion" id="accordionExample">
    //     <div className="accordion-item">
    //       <h2 className="accordion-header" id="headingOne">
    //         <button
    //           className="accordion-button"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseOne"
    //           aria-expanded="true"
    //           aria-controls="collapseOne"
    //           {myStyle}
    //         >
    //           Accordion Item #1
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseOne"
    //         className="accordion-collapse collapse show"
    //         aria-labelledby="headingOne"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body" {myStyle}>
    //           <strong>This is the first item's accordion body.</strong> It is
    //           shown by default, until the collapse plugin adds the appropriate
    //           classNamees that we use to style each element. These classNamees control
    //           the overall appearance, as well as the showing and hiding via CSS
    //           transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="accordion-item">
    //       <h2 className="accordion-header" id="headingTwo">
    //         <button
    //           className="accordion-button collapsed"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseTwo"
    //           aria-expanded="false"
    //           aria-controls="collapseTwo"
    //           {myStyle}
    //         >
    //           Accordion Item #2
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseTwo"
    //         className="accordion-collapse collapse"
    //         aria-labelledby="headingTwo"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body" {myStyle}>
    //           <strong>This is the second item's accordion body.</strong> It is
    //           hidden by default, until the collapse plugin adds the appropriate
    //           classNamees that we use to style each element. These classNamees control
    //           the overall appearance, as well as the showing and hiding via CSS
    //           transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="accordion-item">
    //       <h2 className="accordion-header" id="headingThree">
    //         <button
    //           className="accordion-button collapsed"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseThree"
    //           aria-expanded="false"
    //           aria-controls="collapseThree"
    //           {myStyle}
    //         >
    //           Accordion Item #3
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseThree"
    //         className="accordion-collapse collapse"
    //         aria-labelledby="headingThree"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body" {myStyle}>
    //           <strong>This is the third item's accordion body.</strong> It is
    //           hidden by default, until the collapse plugin adds the appropriate
    //           classNamees that we use to style each element. These classNamees control
    //           the overall appearance, as well as the showing and hiding via CSS
    //           transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <button className="btn btn-primary my-3" onClick={enable}>Enable Light Mode</button>
    // </div>
    
    

    <>
      <div className="container">
        <ul className="nav nav-pills ms-5 mt-">
          <li className="nav-item">
            <Link className={`nav-link active me-2 Ongoing`} aria-current="page" href="#" onClick={()=>act('Ongoing')}>Ongoing</Link>
          </li>
          <li className="nav-item me-2">
            <Link className={`nav-link Upcoming`} href="#" onClick={()=>act('Upcoming')}>Upcoming</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link Past" href="#" onClick={()=>act('Past')}>Past</Link>
          </li>
        </ul>
        <div className="accordion m-5 act" id="Ongoing">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="false" aria-controls="collapseOne">
                Event 1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow. <button className="btn btn-link text-decoration-none">Show More</button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Event 2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Event 3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion m-5" id="Upcoming">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="false" aria-controls="collapseOne">
                Event 4
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow. <button className="btn btn-link text-decoration-none">Show More</button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Event 5
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Event 6
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion m-5" id="Past">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="false" aria-controls="collapseOne">
                Event 7
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow. <button className="btn btn-link text-decoration-none">Show More</button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Event 8
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Event 9
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

