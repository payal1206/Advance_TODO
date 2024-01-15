let count = 0;
var xValues = [];
var yValues = [];
var barColors = [];
var barColor = ["#b91d47",

    "#00aba9",

    "#2b5797",

    "#e8c3b9",

    "#1e7145"];

var a = 0;
var allTasks = [];

function addTask() {

    let ele = document.getElementById('input1');

    let ele11 = document.getElementById('task');

    x = document.createElement("div");

    x.setAttribute("id", "colorr")

    allTasks.push(ele.value);

 

    if (count == 1)

        document.getElementById('tasks').innerText = "These are your Tasks....";

 

    // if (ele.value == "")

    //     return;

 

    // count++;

    // x.innerHTML = count + "-" + ele.value;

    // xValues.push(ele.value);

    // yValues.push(50);

    // barColors.push(barColor[a]);

    // a++;

    // a = a % 5;

    // pie();

    // ele11.appendChild(x);

 

    // y = document.createElement("div");

    // y.setAttribute("class", "icons")

 

    // var img = document.createElement("img");

    // img.src = "./delete.png";

    // img.setAttribute("width", "30px");

    // img.setAttribute("class", "img-delete");

    // y.appendChild(img);

 

    // var img1 = document.createElement("img");

    // img1.src = "./edit.png";

    // img1.setAttribute("width", "30px");

    // img1.setAttribute("class", "img-delete");

    // y.appendChild(img1);

    // x.appendChild(y);

    ele.value = "";

}

function deleteTask() {

 

}

function pie() {

    new Chart("myChart", {

        type: "pie",

        data: {

            labels: xValues,

            datasets: [{

                backgroundColor: barColors,

                data: yValues

            }]

        },

        options: {

            title: {

                display: true,

                text: "My Progress"

            }

        }

    });
}

 




 


