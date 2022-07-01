import React from 'react'
import "./pricing.css"
import Slider from '../SlideAnimation/Slider'

const data =[
    {
        id: 1,
        title: "Basic",
        pricing: '$10.00/ mo',
        dates: 'Dates',
        password: "Discord Password",
        locations: "Discreet Location",
        events: "Participate in Events"
    },
    {
        id: 2,
        title: "Better",
        pricing: '$20.00/ mo',
        dates: 'Dates',
        password: "Discord password",
        locations: "Discreet location",
        events: "Participate in events",
        photos: "Personal photographer and editor available"
    },
    {
        id: 3,
        title: "Best",
        pricing: '$30.00/ mo',
        dates: 'Dates',
        password: "Discord password",
        locations: "Discreet location",
        events: "Participate in events",
        photos: "Personal photographer and editor available",
        shout: "Shout out on our instagram page",
        gifts: "Exclusive items gifted every month"
    }
]

const Pricing = () => {
    return (
        <section id="Pricing">
                <Slider name="PRICING"/>
            <div className="container">
                {data.map(({id, title, pricing, dates, password, locations, events, photos, shout, gifts}) => {
                    return(
                        <article key ={id} className="">
                            <div>
                                <h3>{title}</h3>
                                <p>{pricing}</p>
                                <div className="description">
                                    <ul>
                                        <li>{dates}</li>
                                        <li>{password}</li>
                                        <li>{locations}</li>
                                        <li>{events}</li>
                                        <li>{photos}</li>
                                        <li>{shout}</li>
                                        <li>{gifts}</li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>



        </section>
    )
}

export default Pricing;