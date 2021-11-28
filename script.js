const daySection = document.querySelectorAll(".schedule_section")

let ratio = 0.35

let allAppnt = {
	monday: ["10:00 jhjkhgfggggfgfghfghfghfgh fghfghfghghfgfghfghfghfgfghfghfghfgfghfhgf", "11:00 fabfb", "12:00 rhekjrhu", "10:00 jhjkh", "11:00 fabfb", "12:00 rhekjrhu", "12:00 rhekjrhu"],
	tuesday: ["09:00 ooo", "09:30 yy", "12:30 oopp"],
	friday: ["09:00 ooertro", "09:30 yrtrty", "12:30 oowwpp"]
}

function addAppointments(){
	for (let u of daySection){
		
		for (let key in allAppnt){
			if (key === u.id){
				for (let r of allAppnt[key]){
					let newUl = document.createElement("ul");
					let newLi = document.createElement("li");
					newLi.innerText = r
					newUl.append(newLi)
					u.append(newUl)
				}
			}
		}
	}
}

function setSize() {
  let scheduleSection = document.querySelectorAll(".schedule_section") //Result fields to set the right Height
  let elementsHeight = new Array(...document.querySelectorAll(".name_day_of_week")) //Elements that need to be substracted from Window height
	let sum = 0

	for (let r of elementsHeight){
		sum += r.clientHeight
	}
  // let sum = elementsHeight.reduce((acc, next) => acc.clientHeight + next.clientHeight) //Get sum of all elements to substract 
  
  //Set height of the result fields
  for (let section of scheduleSection) {
    section.style.height = `${(window.innerHeight - sum - 23) * ratio}px`
		section.style.width = `${(window.innerWidth - 24) / 2}px`
  }
	document.querySelector("#top_line").style.width = `${window.innerWidth - 20 }px`
}

window.addEventListener('resize', () => setSize())


setSize()
addAppointments()
