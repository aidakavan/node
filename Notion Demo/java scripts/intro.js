let $=document;

// selecting our html tags

let introSection = $.querySelector(".introSection")
let introBtn = $.querySelector(".introButton")
let notePadSection = $.querySelector(".notePadSection")


introBtn.addEventListener("click" , function RemovingSection() {
    introSection.style.display = "none"
    notePadSection.style.display = "flex"
})



