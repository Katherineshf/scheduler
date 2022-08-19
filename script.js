var scheduleHour = document.querySelector(".time");
var scheduleContent = document.querySelector(".todolist");



function getMoment() {
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#current").html(currentDate);
}



$(".saveBtn").on("click", function () {
    var textArea = $(this).siblings(".todolist").val();
    console.log(textArea)
    var timeKey = $(this).attr("data-time")
    console.log(timeKey)
    localStorage.setItem(timeKey, textArea)
});


function loadData() {
    var data8 = localStorage.getItem("8")
    $("#c8").children(".todolist").val(data8)

    var data9 = localStorage.getItem("9")
    $("#c9").children(".todolist").val(data9)

    var data10 = localStorage.getItem("10")
    $("#c10").children(".todolist").val(data10)

    var data11 = localStorage.getItem("11")
    $("#c11").children(".todolist").val(data11)

    var data12 = localStorage.getItem("12")
    $("#c12").children(".todolist").val(data12)

    var data13 = localStorage.getItem("13")
    $("#c1").children(".todolist").val(data13)

    var data14 = localStorage.getItem("14")
    $("#c2").children(".todolist").val(data14)

    var data15 = localStorage.getItem("15")
    $("#c3").children(".todolist").val(data15)

    var data16 = localStorage.getItem("16")
    $("#c4").children(".todolist").val(data16)

    var data17 = localStorage.getItem("17")
    $("#c5").children(".todolist").val(data17)
}
loadData()


setInterval(getMoment, 1000);




function colorChange() {

    var presentTime = moment().hour();


    $(".time-block").each(function () {
        var timeBlock = $(this).attr("class").split("time")[1];


        if (timeBlock < presentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlock > presentTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
    })
}


