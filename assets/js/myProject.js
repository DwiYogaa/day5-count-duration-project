let myProject = []
let checkedValue = [];

function postProject(event) {
    event.preventDefault()
    let titleProject = document.getElementById('titleProject').value
    let startProject = document.getElementById('startDateProject').value
    let endProject = document.getElementById('endDateProject').value
    let descriptionProject = document.getElementById('descriptionProject').value
    let imagesProject = document.getElementById('inputImageProject').files[0]

    imagesProject = URL.createObjectURL(imagesProject)

    let technologyProject = document.getElementsByName('checkboxProject');

    checkedValue = [];
    for (var i = 0; i < technologyProject.length; i++) {
        if (technologyProject[i].checked == true) {
            checkedValue.push(technologyProject[i].value)
        }
    }

    let blog = {
        titleProject,
        startProject,
        endProject,
        descriptionProject,
        checkedValue,
        imagesProject,
    }
    myProject.push(blog)
    renderProject()

    console.log(myProject);
}


let renderProject = () => {
    let renderCardProject = document.getElementById('cardProjectRender')
    let data = checkedValue.length

    renderCardProject.innerHTML = ""
    for (i = 0; i < myProject.length; i++) {
        renderCardProject.innerHTML += `<div class="cardProjectRender">
        <div class="projectImgWrapper">
            <img src="${myProject[i].imagesProject}" alt="">
        </div>
        <div class="projectContentWrapper">
            <a href="detail-project.html" class="titleCardProject">${myProject[i].titleProject}</a>
            <p class="distanceCardProject">Duration : ${getDuration(myProject[i].startProject, myProject[i].endProject)}</p>
            <p class="descCardProject">${myProject[i].descriptionProject}</p>
            <div class="iconCardProject">
                ${(function icon() {
                let string = ""
                for (let j = 0; j < data; j++) {
                    string += `<div class="itemIconProject">
                            <i class="fa-brands fa-${myProject[i].checkedValue[j]}"></i>
                        </div>`
                }
                return string
            })()}
            </div>
            <div class="cardProjectAction">
                <a href="#" class="cardEditAction">EDIT</a>
                <a href="#" class="cardDeleteAction">DELETE</a>
            </div>
        </div>
    </div>`
    }
    alert("Your project successfully added!")
}

//========= Duration Project =============


function getDuration(start, end) {
    let proStart = new Date(start)
    let proEnd = new Date(end)

    let distance = proEnd - proStart

    let yearDistance = Math.floor(distance / ( 365 * 30 * 24 * 60 * 60 * 1000))
    if (yearDistance != 0) {
        return yearDistance + ' year'
    } else {
        let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
        if (monthDistance != 0) {
            return monthDistance + ' month'
        }else {
        let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
        if (weekDistance != 0) {
            return weekDistance + ' weeks'
        } else {
            let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
            if (daysDistance != 0) {
                return daysDistance + ' Days'
            } 
        }
    }
}

}
