
import React from "react";
import './projects.scss'
const Obj ={
  name: 'TeamWork',
  description:'lorem',
  link: 'www'
}

 const New= Object.values(Obj).forEach(value=>{
   return(
  <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <h1 class="f4">{value.name}</h1>
    <hr class="mw3 bb bw1 b--black-10"/>
  </div>
  <div className="">
  <p class="lh-copy measure center f6 black-70">
  {value.description}
  </p>
  <a class="f6 link dim br-pill ba ph3 pv2 mb2 dib black" href="#0">{value.link}</a>
  </div>
</article>
   )
});
const Projects =({name, description, link})=>(
<div className="">
  {New}
 
</div>
)
        
  
  


export default Projects;



