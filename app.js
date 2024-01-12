const firstSectoinEl = document.querySelector(".section1-text");
const buttonTriggerEl = document.querySelector(".call")
const callWindowEl = document.querySelector(".callWindow")
const closeButtonEl = document.querySelector(".close")
const overlaysEl = document.querySelector(".overlay")
const sectionOneEl = document.querySelector("section-1");
const allPartsEl = document.querySelector(".cover");



function callAnimation() {
    buttonTriggerEl.addEventListener("click", function () {
        callWindowEl.classList.add("slide")
        firstSectoinEl.classList.add("shift")
    })
    
    closeButtonEl.addEventListener("click", function () {
        callWindowEl.classList.remove("slide")
        firstSectoinEl.classList.remove("shift")
    })

    closeOutside();

    // document.addEventListener("click", function (event) {
    //     if (!firstSectoinEl.contains(event.target) && !sectionOneEl.contains(event.target)) {
    //         console.log("yes")
    //         console.log(event.target);
    //          callWindowEl.classList.remove("slide")
    //         firstSectoinEl.classList.remove("shift")
    //     } else {
    //         console.log("no");
    //          console.log(event.target);
    //     }
    //   })
}

function closeOutside() {
       window.addEventListener("click", function (event) {
        if (event.target === allPartsEl) {
            console.log("hello");
            callWindowEl.classList.remove("slide");
            firstSectoinEl.classList.remove("shift")
        }
    })
}

callAnimation();

// closeOutside();

