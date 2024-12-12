const workoutPanelOne = document.getElementById('workout1')
const workoutPanelTwo = document.getElementById('workout2')
const workoutPanelThree = document.getElementById('workout3')

function onMouseLeave () {
  // this function runs whenever the mouse leaves an accordian item
  workoutPanelOne.style.flex = 1
  workoutPanelTwo.style.flex = 1
  workoutPanelThree.style.flex = 2
  document.querySelector('#workout3 i').style.opacity = 0.0
  document.querySelector('#workout1 i').style.opacity = 0.0
  document.querySelector('#workout2 i').style.opacity = 0.0
}

// when mouse cursor enters first component
workoutPanelOne.addEventListener('mouseenter', event => {
  workoutPanelOne.style.flex = 2
  workoutPanelThree.style.flex = 1
  document.querySelector('#workout1 i').style.opacity = 1.0
})

// when mouse cursor enters second component
workoutPanelTwo.addEventListener('mouseenter', event => {
  workoutPanelTwo.style.flex = 2
  workoutPanelThree.style.flex = 1
  document.querySelector('#workout2 i').style.opacity = 1.0
})

// when mouse cursor enters third component
workoutPanelThree.addEventListener('mouseenter', event => {
  workoutPanelThree.style.flex = 2
  workoutPanelTwo.style.flex = 1
  document.querySelector('#workout3 i').style.opacity = 1.0
})

workoutPanelOne.addEventListener('mouseleave', onMouseLeave)
workoutPanelTwo.addEventListener('mouseleave', onMouseLeave)
workoutPanelThree.addEventListener('mouseleave', onMouseLeave)
