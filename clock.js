// first thing we want to do is to use set the interval because we want to call a certain function every second
// when our project runs this part of javascript is the one that causes the clock to start because it calls setClock() function every thousand mini-seconds
setInterval(setClock, 1000)

// now we define that function

function setClock() {
    // this function is going to get a current date
    // new Date() constructor is going to give the current date which is the exact current time that u r running on

    // const currentDate = new Date()
    // // from here we can get seconds 
    // const secondsRatio = currentDate.getSeconds() / 60
    // // in a minute there are 60 seconds thus we divide by 60
    // // we now do the same thing for our minutes and hour

    // const minutesRatio = currentDate.getMinutes() / 60
    // const hoursRatio = currentDate.getHours() / 60


    // NB.
    // but since we don't want our minutes and hour hand to jump by entire minutes and entire hours  at a time, we want them to slowly and gradually go through we need to use the seconds ratio
    // and this seconds ratio is a percentage of a minute .Its going to be like .5 eg for like 30 seconds, .75 if we are at 45 seconds  and it's going to allow our minute hand to move gradually around the clock


    const currentDate = new Date()
    // from here we can get seconds 
    const secondsRatio = currentDate.getSeconds() / 60
    // in a minute there are 60 seconds thus we divide by 60
    // we now do the same thing for our minutes and hour

    const minutesRatio =(secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
// used 12 and not 60 since there are 12 hours on the clock and not 60

// now what we want to do is to set the values for our rotation of our different hands
// in order to select this value,we add some data attributes into it.Thus we go to our clock.html

setRotation(secondHand, secondsRatio)
setRotation(minuteHand, minutesRatio)
setRotation(hourHand, hoursRatio )

} 


// now we select our hands using the data attributes

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// now we have all our different elements that we need to use in order to set them
// now we create a function that is going to use in order to set them
//  ie. setRotation() which takes the element we need to rotate as well as the rotation we want to rotate





function setRotation(element, rotationRatio) {
    
    // now we get the style of that element and then we set the property
    // the set property method is going to take the property you want to set(which is in the css) and to what u want to set it to

    element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock()

