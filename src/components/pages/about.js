import React from 'react'
import './page.css'

function About() {
    return (
        <div className='about'>
            <h1 >About</h1>
            <div className='mainAbout'>

                <h2 className='mainAboutH'>we help people in medical emergency by providing them help within minutes physically and within seconds virtually</h2>
                <img src="/photos/emergxv31.png" alt="" />
                  
            </div>
            <h1>how it works ?</h1>
            <p className='about-txt'> The project is a complete cloud-native project which will use cloud services from computing to databases provided by Azure like storage and computing moreover it will be using geolocation API provided by google and Practo's API for information of doctors also we will be building an API from scratch which will provide the information of the nearby hospitals doctors and private clinic. 

Whenever a user try to search for a doctor after specifying his/her emergency the result will be fetch from Practo's API and our In-built API the location of the User will be shared to the Doctor or the Hospital on his/her demand through Google’s geolocation then the patient will also have an option for video calling when the distance is too far or the patient belongs to remote area where there is no nearby hospitals it will be done through Azure which provides chat, video sharing services. 

With the help of internet, which is now available easily, video-calling feature can be easily availed and can be used to take help from doctor. 

The patient’s profile can be maintained with all the previous medical history and ongoing treatments. 

Doctor’s profile will help the doctors access all previous treatment given, and measuring serving points. 

Both the profiles have the feature of accessing leaders-board to see the performance for rest of the doctors under specified radius.   </p> 
                
            
        </div>
    )
}

export default About
