const daySection = document.querySelectorAll(".schedule_section")

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
