import React from "react";
import './works.scss'
const skillArray =['Progressive Web Apps','Javascript',
'Web Frontend (UI)','SASS','Bootstrap','Git','ReactJs (with Redux)','Firebase','SASS','Git','Slack','Trello','Github','Pivotal Tracker'];

 
// const Works = () => {
// return(
// <div>
// {const skills = skillArray.map(skill=>{
// return 
// })}
// </div>
// )
function Works() {
    const skills = skillArray.map(skill => (
        <li className="dib mr1 mb2 "><p className=" bg-near-white f6 f5-ns b db pa2  dim dark-gray ba b--black-20">{skill}</p>         
        </li>
        
     )
    )
  return (
      <div>
          <ul class="list ph3 ph5-ns pv4 row">
         {skills}
          </ul>
     </div>
  )  
}
        
  
  


export default Works;
