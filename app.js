`use strict`

// global variables
const body = document.body; 

const headerNav = document.querySelector(`header nav`);
const headerNavUl = document.querySelector(`header nav ul`);
const headerListAnchors = document.querySelectorAll(`.list-item`)


const headerBurgerIcon = document.querySelector(`header .toggle-menu`);
const headerSearchForm = document.querySelector(`.form`);
const headerSearchInput = document.querySelector(`.form input`);
const headerSearchIcon = document.querySelector(`#search-icon`);
const closeSearchIcon = document.querySelector(`#closeSearch`);

// hero section
const landingSection = document.querySelector(`.landing`)
const heroLeft = document.querySelector(`.hero-left`)
const heroRight = document.querySelector(`.hero-right`)
const heroCircles = document.querySelectorAll(`.bullets li`)


const serviceBox = document.querySelectorAll(`.srv-box`)
const serviceBoxIcon = document.querySelectorAll(`.srv-box i`)

const imagesBox = document.querySelectorAll(`.portfolio .imgs-container .box`); 
const imagesBoxFirstLi = document.querySelector(`.portfolio .shuffle li`); //with no All it selects first one only
const imagesBoxLi = document.querySelectorAll(`.portfolio .shuffle li`);

const skills = document.querySelector(`.our-skills .skills`);

  // targetring the whole ul at once
const galleryContainers = document.querySelector(`.portfolio .shuffle`);

const galleryBoxes = document.querySelectorAll(`.portfolio .imgs-container .box`);

const progHolderSpan = document.querySelectorAll(`.prog-holder span`);

// stats 
const stats = document.querySelector(`.stats`);
const statsBoxes = document.querySelectorAll(`.stats .container .box`);
const statsBoxesIcon = document.querySelectorAll(`.stats .container .box i`);
const statsOverlay = document.querySelector(`.stats .container .overlay `);
const statsWindow = document.querySelectorAll(`.stats-window`);
const statsWindowIcon = document.querySelectorAll(`.stats-window i`);
/////

const statsNumbers = document.querySelectorAll(`.number`);

const sections = document.querySelectorAll(`.section`)
const btnUp = document.querySelector(`#up`)







//****************************************************************//
//$$$$$$ revealing active state for menu list items 


const addActiveClass = function (event) {
     const target = event.target
    
    // exclude the other components of the nav
    if (target.classList.contains(`list-item`)) {
        
        headerListAnchors.forEach( la => {
            la.classList.remove(`active`);
        })
        target.classList.add(`active`)
    }
           
}
headerNav.addEventListener(`click`, addActiveClass )

///////////////////////////////////////////////////////
//$$$$$ reveal search 
const revealSearch = function () {
    // when clicking the search icon open the search bar 
    if (!headerSearchForm.classList.contains(`formNewStyle`)) {
          // reveal the form division
    
    headerSearchForm.classList.add(`formNewStyle`)
     // reveal the search input  
    headerSearchInput.classList.remove(`displayNone`)
     // reveal the search closing button
    closeSearchIcon.classList.remove(`displayNone`)
    // then if the seqrch bar is opened give the search icon another function, make it do searching 
     } else {
    }
}
headerSearchIcon.addEventListener(`click`, revealSearch )


//$$$$$ close search
const closeSearch = function () {
    headerSearchForm.classList.remove(`formNewStyle`)
   // console.log(`close-search icon clicked`)
    headerSearchInput.classList.add(`displayNone`)
     closeSearchIcon.classList.add(`displayNone`)
}
closeSearchIcon.addEventListener(`click`, closeSearch )

//****************************************************************//
//$$$$ herp section 

let photoNu = 0;
const moveRight = function () {
  if (photoNu >= 0 & photoNu < 2 ) {
      
    
  photoNu++
 
  // remove all the backgrounds
  landingSection.classList.remove(`landing-0-sec`);
  landingSection.classList.remove(`landing-1-sec`);
  landingSection.classList.remove(`landing-2-sec`);
  // add only ine background styling with particular photo 
  landingSection.classList.add(`landing-${photoNu}-sec`);
  // remove the active class from all the circles
  heroCircles.forEach( hc => {
    hc.classList.remove(`active`)
  })
      
  } else {
     const disabledAttribute = document.createAttribute(`disabled`);
      heroRight.setAttribute(disabledAttribute);
  }
  
  
  // add it only to the current one with the same number like the bg
  document.querySelector(`#hero-${photoNu}-circle`).classList.add(`active`);
}
// when clicking the right arrow call the above function
heroRight.addEventListener(`click`, moveRight )

// same logic for the left arrow
const moveLeft = function () {
  if (photoNu > 0 & photoNu <= 2 )
  photoNu--
 // console.log(`arrow left clicked`)
 // console.log(photoNu)
  landingSection.classList.remove(`landing-0-sec`);
  landingSection.classList.remove(`landing-1-sec`);
  landingSection.classList.remove(`landing-2-sec`);
  landingSection.classList.add(`landing-${photoNu}-sec`);
  heroCircles.forEach( hc => {
    hc.classList.remove(`active`)
  })
  document.querySelector(`#hero-${photoNu}-circle`).classList.add(`active`);
}
heroLeft.addEventListener(`click`, moveLeft )

////////////////////////////////

// when clicking the circle show the corresponding photo 
heroCircles.forEach( hc => {
  hc.addEventListener(`click`, function() {
    const circleNu = hc.getAttribute(`data-circle`);
    // remove all the photos 
    landingSection.classList.remove(`landing-0-sec`);
    landingSection.classList.remove(`landing-1-sec`);
    landingSection.classList.remove(`landing-2-sec`);
    // get only one 
    landingSection.classList.add(`landing-${circleNu}-sec`);
    heroCircles.forEach( hc => {
      hc.classList.remove(`active`)
    })
    document.querySelector(`#hero-${circleNu}-circle`).classList.add(`active`);
    })


  })

//****************************************************************//



//default active class on the first li
// const imagesBoxFirstLi = document.querySelector(`.portfolio .shuffle li`); //with no All it selects first one only

imagesBoxFirstLi.classList.add(`active`)

//\\ implementing  active class to the list item //


// add active class by hovering 

imagesBoxLi.forEach( li => {
    // when hovering 
    // li.addEventListener(`mouseover`, function() {
        //     li.style.background = " var(--main-color); "
        // })
        
        // clicking
        li.addEventListener(`click`, function() {
            if (!li.classList.contains(`active`)) {
                // first remove the class from all the list items 
            imagesBoxLi.forEach( inert => {
                inert.classList.remove(`active`);
                
            })
            // then add it to the clicked one 
            li.classList.add(`active`)
            
        } else {
            li.classList.remove(`active`)
        }
    })
    
})
 // omages border

const images= document.querySelectorAll(`.portfolio .imgs-container .box /* img */`);

images.forEach( i => {
  
        i.addEventListener(`click`, function() {
            if (!i.classList.contains(`active-img-border`)) {
                // first remove the class from all the list items 
            images.forEach( inertImg => {
                inertImg.classList.remove(`active-img-border`);
                
            })
            // then add it to the clicked one 
            i.classList.add(`active-img-border`)
            
        } else {
            i.classList.remove(`active-img-border`)
        }
    })
    
})
// you  can easly do it by ::hover in css OMG. still performing this process using Js is privileged    cause...
//- the item with the class active will always has the background but i need it to be remove when i hover out 




//****************************************************************//



       
    
//$$$$$ scrolling to section 




    //even delegation
    headerNav.addEventListener(`click`, function(e) {
  // if the clicked target is a listitem
  if(e.target.classList.contains(`list-item`)) {
       const liTarget = e.target;
       const listItemId = liTarget.id
       const targetSection = document.querySelector(`#section-${listItemId}`);
       // compute the space between the page top to section's top
     const sectionTop = targetSection.getBoundingClientRect().top;
       // then scroll down this distance
       window.scrollTo({
           top : sectionTop,
           behavior: "smooth"
                  })
   } 
    })
    
    
    //****************************************************************//
    
    


// event delegation 

  galleryContainers.addEventListener(`click`, function(e) {
  
   //container all , reveal all
   
  if (e.target.classList.contains(`all`)) {
  galleryBoxes.forEach( gb => {
      gb.classList.remove(`displayNone`)
  })
    
  }
  
 //container 
  if (e.target.classList.contains(`app`)) {
    galleryBoxes.forEach( gb => {
       //first reveal all the images hidden before
       gb.classList.remove(`displayNone`)
       if(!gb.classList.contains(`box-one`)) {
            //then hide all expet those are excluded
            gb.classList.add(`displayNone`)
       } 
     })   
  }
  
   //container photo
  if (e.target.classList.contains(`photo`)) {
    galleryBoxes.forEach( gb => {
       //first reveal all the images hidden before
       gb.classList.remove(`displayNone`)
       if(!gb.classList.contains(`box-one`) &
          !gb.classList.contains(`box-two`) & 
          !gb.classList.contains(`box-three`) &
          !gb.classList.contains(`box-eight`)) {
            //then hide all expet those are excluded
            gb.classList.add(`hide-boxes`)
       } 
     })   
  }
   //container 
  if (e.target.classList.contains(`web`)) {
    galleryBoxes.forEach( gb => {
       //first reveal all the images hidden before
       gb.classList.remove(`hide-boxes`)
       if(!gb.classList.contains(`displayNone`) &
          !gb.classList.contains(`box-two`) & 
          !gb.classList.contains(`box-six`) &
          !gb.classList.contains(`box-three`) &
          !gb.classList.contains(`box-eight`)) {
            //then hide all expet those are excluded
            gb.classList.add(`hide-boxes`)
       } 
     })   
  }
  
   //container 
  if (e.target.classList.contains(`print`)) {
    galleryBoxes.forEach( gb => {
  
       //first reveal all the images hidden before
       gb.classList.remove(`displayNone`)
       if(!gb.classList.contains(`box-one`) &
          !gb.classList.contains(`box-two`) & 
          !gb.classList.contains(`box-three`) &
          !gb.classList.contains(`box-four`) & 
          !gb.classList.contains(`box-six`) &
          !gb.classList.contains(`box-eight`)) {
            //then hide all expet those are excluded
            gb.classList.add(`displayNone`)
       } 
     })   
  }
                     
  })  




 
 
 
 //****************************************************************//
 


//$$$$$ statistics 

const topStatsFromTop = stats.getBoundingClientRect().top
const bottomStatsFromTop = stats.getBoundingClientRect().bottom

window.addEventListener(`scroll`, function () {
    if ( window.scrollY >= topStatsFromTop - 1000 &
         window.scrollY <= bottomStatsFromTop + 100 ) {
             statsNumbers.forEach( sn => {
  const statsNu = sn.getAttribute(`data-number`);
  sn.textContent = `${statsNu}`
 
  
  })
}
})


//****************************************************************//

const topSkillsFromTop = skills.getBoundingClientRect().top
const bottomSkillsFromTop = skills.getBoundingClientRect().bottom

window.addEventListener(`scroll`, function () {
    if ( window.scrollY >= topSkillsFromTop - 1000 &
         window.scrollY <= bottomSkillsFromTop + 100 ) {
             progHolderSpan.forEach( phs => {
  const phsProgress = phs.getAttribute(`data-progress`);
 // console.log(phsProgress)
  phs.style.width = `${phsProgress}`
  })
}
})


//if (window.scrollY >= topSkillsFromTop - 100 & window.scrollY <= bottomSkillsFromTop) {}
    
 // before the section reaches the top by 100px till the moment it leaves view 



sections.forEach( sec => {
sec.classList.add(`transition`)
sec.classList.add(`hide`)
const topSecFromTop = sec.getBoundingClientRect().top
//console.log (topSecFromTop)
const bottomSecFromTop = sec.getBoundingClientRect().bottom
    window.addEventListener(`scroll`, function () {
        if (window.scrollY >= topSecFromTop - 1000) {
        
        sec.classList.remove(`hide`)
        sec.classList.add(`section-reveal`)
        
    }
    })
})

      
     
  





headerBurgerIcon.addEventListener(`click`, function(){
     headerNavUl.classList.toggle(`show`)

    
}) //// just like that 








// click the box to remive the display none
statsBoxes.forEach(sb => {
    sb.addEventListener(`click`, function () {
    
    const boxData = sb.getAttribute(`data-box`);
    
    //remove all BGs
    statsBoxesIcon.forEach(sbi => {
        sbi.style.backgroundColor = "black";
    })
      
  // target the icon of the clicked element,convert its bg to red ;
    sb.firstElementChild.style.backgroundColor = "red";
    
    
  //  console.log(boxData);
    let getWindow = document.querySelector(`#for-${boxData}`);
   
    statsWindow.forEach( sw => {
      sw.classList.add(`displayNone`)
    })
    getWindow.classList.remove(`displayNone`)
    statsOverlay.classList.remove(`displayNone`)
    statsOverlay.classList.add(`full-width`)
    // also give the box icon a color red ;
    
    

    })
  })
 
   

// click the close button to add the display none
const closeStatsWindow = function () {
statsWindow.forEach( sw => {
    sw.classList.add(`displayNone`)
  //  console.log(` closed is clicked `)
})
    
    statsOverlay.classList.add(`displayNone`)
}


    statsWindowIcon.forEach(swi => {
       swi.addEventListener(`click`, closeStatsWindow ) 
    })
    



//$$$$$ Up Button 


btnUp.classList.add(`displayNone`)
// because the function is of the type function declaration we managed to call it before initialization 
window.addEventListener(`scroll`, btnUpVisibility )

function btnUpVisibility () {
    if ( window.scrollY < 1000) {
    btnUp.classList.add(`displayNone`)
    } else {
        btnUp.classList.remove(`displayNone`)
        //btnUp.textContent = "Up"
    }

}

 function goUp () {
   //btnUp.textContent = "Going Up"
   window.scrollTo({
       top:0,
       behavior: "smooth"
   }) 
}
btnUp.addEventListener(`click`, goUp )


//console.log (btnUp.getBoundingClientRect().top) , may dont update



// all anchors in the fooeter social links  open in new tap
const allAnchors = document.querySelectorAll(`.social-icons a`);

allAnchors.forEach( anchor => {
  anchor.setAttribute(`target`,`_blank`)
});