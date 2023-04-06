// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
    var hour9 = document.getElementById("hour-9");
    var hour10 = document.getElementById("hour-10");
    var hour11 = document.getElementById("hour-11");
    var hour12 = document.getElementById("hour-12");
    var hour13 = document.getElementById("hour-13");
    var hour14 = document.getElementById("hour-14");
    var hour15 = document.getElementById("hour-15");
    var hour16 = document.getElementById("hour-16");
    var hour17 = document.getElementById("hour-17");
    var today = dayjs();
    var currentHour = today.format("H");
    var hours = [9,10,11,12,13,14,15,16,17];
    // Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    // nope
    // for (let i = 0; i < hours.length; i++) {
    //     var pickedHour = "hour"+hours[i];
    //     pickedHour.addEventListener("click", function(){
    //         localStorage.setItem(pickedHour, pickedHour.children[1].value)
    //     })
    // }


    hour9.addEventListener('click', function() {
        localStorage.setItem("hour9", hour9.children[1].value)
    })
    hour10.addEventListener('click', function() {
        localStorage.setItem("hour10", hour10.children[1].value)
    })
    hour11.addEventListener('click', function() {
        localStorage.setItem("hour11", hour11.children[1].value)
    })
    hour12.addEventListener('click', function() {
        localStorage.setItem("hour12", hour12.children[1].value)
    })
    hour13.addEventListener('click', function() {
        localStorage.setItem("hour13", hour13.children[1].value)
    })
    hour14.addEventListener('click', function() {
        localStorage.setItem("hour14", hour14.children[1].value)
    })
    hour15.addEventListener('click', function() {
        localStorage.setItem("hour15", hour15.children[1].value)
    })
    hour16.addEventListener('click', function() {
        localStorage.setItem("hour16", hour16.children[1].value)
    })
    hour17.addEventListener('click', function() {
        localStorage.setItem("hour17", hour17.children[1].value)
    })

    // Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] < currentHour){
            console.log("past",hours[i]);
            $("#hour-"+hours[i]).addClass("past");
        } 
        else if (hours[i] === currentHour){
            $("#hour-"+hours[i]).addClass("present");
            console.log("present",hours[i]);
        }
        else if (hours[i] > currentHour){
            $("#hour-"+hours[i]).addClass("future");
            console.log("future",hours[i]);
        }
    }

    // Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    function getStorage(){
        var stored17 = localStorage.getItem("hour17")
        hour17.children[1].textContent = stored17
        var stored16 = localStorage.getItem("hour16")
        hour16.children[1].textContent = stored16
        var stored15 = localStorage.getItem("hour15")
        hour15.children[1].textContent = stored15
        var stored14 = localStorage.getItem("hour14")
        hour14.children[1].textContent = stored14
        var stored13 = localStorage.getItem("hour13")
        hour13.children[1].textContent = stored13
        var stored12 = localStorage.getItem("hour12")
        hour12.children[1].textContent = stored12
        var stored11 = localStorage.getItem("hour11")
        hour11.children[1].textContent = stored11
        var stored10 = localStorage.getItem("hour10")
        hour10.children[1].textContent = stored10
        var stored9 = localStorage.getItem("hour9")
        hour9.children[1].textContent = stored9
    }
    getStorage();
    // Add code to display the current date in the header of the page.
    $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
//   });
  