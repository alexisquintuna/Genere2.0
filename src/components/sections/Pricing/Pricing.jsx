import React from "react";
import {AiOutlineCheck} from "react-icons/ai"
import "./pricing.css";
import Slider from "../SlideAnimation/Slider";

// const data =[
//     {
//         id: 1,
//         title: "Basic",
//         pricing: '$10.00/ mo',
//         dates: 'Dates',
//         password: "Discord Password",
//         locations: "Discreet Location",
//         events: "Participate in Events"
//     },
//     {
//         id: 2,
//         title: "Better",
//         pricing: '$20.00/ mo',
//         dates: 'Dates',
//         password: "Discord password",
//         locations: "Discreet location",
//         events: "Participate in events",
//         photos: "Personal photographer and editor available"
//     },
//     {
//         id: 3,
//         title: "Best",
//         pricing: '$30.00/ mo',
//         dates: 'Dates',
//         password: "Discord password",
//         locations: "Discreet location",
//         events: "Participate in events",
//         photos: "Personal photographer and editor available",
//         shout: "Shout out on our instagram page",
//         gifts: "Exclusive items gifted every month"
//     }
// ]

const Pricing = () => {
  return (
    <section id="Pricing">

      <Slider name="PRICING" />

      <div className="container pricing__container">

        <article className="pricing__borderbox basic__borderbox">
          <div className="fast_box">
            <div className="title">
              <h3 className="fast__title">BASIC</h3>
            </div>
            <p className="price">
              $10.00/<span className="monthly">month</span>
            </p>
            <div>
              <ul>
                <li><AiOutlineCheck /> <span className="pricing__list" >Dates</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Discord password</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Discreet location</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Participate in events</span> </li>
              </ul>
            </div>
            <div className="button__div">
              <button className="button__basic">LET'S RACE</button>
            </div>
          </div>
        </article>

        <article className="pricing__borderbox better__borderbox">
          <div className="fast_box">
            <div className="pricing__title">
              <h3 className="fast__title">BETTER</h3>
            </div>
            <p className="price">
              $25.00/<span className="monthly">month</span>
            </p>
            <div>
              <ul>
                <li><AiOutlineCheck /> <span className="pricing__list" >Dates</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Discord password</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Discreet location</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Participate in events</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Personal photographer and editor</span> </li>
              </ul>
            </div>
            <div className="button__div">
              <button className="button__better">LET'S RACE</button>
            </div>
          </div>
        </article>

        <article className="pricing__borderbox best__borderbox">
          <div className="fast_box">
            <div className="title">
              <h3 className="fast__title">BEST</h3>
            </div>
            <p className="price">
              $40.00/<span className="monthly">month</span>
            </p>
            <div>
              <ul>
                <li><AiOutlineCheck /> <span className="pricing__list" >Dates</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Discord password</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Discreet location</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Participate in events</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Personal photographer and editor</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Shoutout on our social media</span> </li>
                <li><AiOutlineCheck /> <span className="pricing__list" >Exclusive items gifted each month</span> </li>
              </ul>
            </div>
            <div className="button__div">
              <button className="button__best">LET'S RACE</button>
            </div>
          </div>
        </article>

      </div>

    </section>
  );
};

export default Pricing;

// FIGURE THIS OUT ON HOW TO USE AND APPLY STYLE COMPONENTS TOO

// {data.map(({id, title, pricing, dates, password, locations, events, photos, shout, gifts}) => {
//     return(
//         <article key ={id} className="">
//             <div>
//                 <h3>{title}</h3>
//                 <p>{pricing}</p>
//                 <div className="description">
//                     <ul>
//                         <li>{dates}</li>
//                         <li>{password}</li>
//                         <li>{locations}</li>
//                         <li>{events}</li>
//                         <li>{photos}</li>
//                         <li>{shout}</li>
//                         <li>{gifts}</li>
//                     </ul>
//                 </div>
//             </div>
//         </article>
//     )
// })}
