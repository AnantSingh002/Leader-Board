// let fName = document.getElementById("fName");
// let lName = document.getElementById("lName");
// let country = document.getElementById("country");
// let marks = document.getElementById("marks");
// let btn = document.getElementById("btn");
// let container = document.getElementById("main");

// // Array to hold leaderboard entries
// let leaderboard = [];

// btn.addEventListener('click', () => {
//     // Check if any field is empty
//     if (!fName.value || !lName.value || !country.value || !marks.value) {
//         alert("Please fill out all fields.");
//         return;
//     }

//     // Create leaderboard entry object
//     let entry = {
//         name: fName.value + " " + lName.value,
//         country: country.value,
//         marks: parseInt(marks.value)
//     };

//     leaderboard.push(entry);

    

//     leaderboard.sort((a, b) => b.marks - a.marks);

//     container.innerHTML = "";

//     // Render each sorted entry as a card
//     leaderboard.forEach(entry => {
//         let card = document.createElement("div");
//         card.classList.add("card");

//         let name = document.createElement('h1');
//         name.textContent = entry.name;

//         let ctry = document.createElement('h3');
//         ctry.textContent = entry.country;

        
//         let score = document.createElement('p');
//         score.textContent = entry.marks;
        
//         let plus = document.createElement('p');
//         plus.textContent = '+5';
//         plus.addEventListener('click',() =>{
//             entry.marks += parseInt(5);
//         })


//         let minus = document.createElement('p');
//         minus.textContent = '-5';

//         let del = document.createElement('p');
//         del.textContent = 'delete';

//         card.appendChild(name);
//         card.appendChild(ctry);
//         card.appendChild(score);
//         card.appendChild(plus);
//         card.appendChild(minus);
//         card.appendChild(del);

//         container.appendChild(card);
//     });

//     // Clear the form fields after submission
//     fName.value = "";
//     lName.value = "";
//     country.value = "";
//     marks.value = "";

//     console.log(leaderboard);
// });

let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let country = document.getElementById("country");
let marks = document.getElementById("marks");
let btn = document.getElementById("btn");
let container = document.getElementById("main");

// Arr to store 
let leaderboard = [];

btn.addEventListener('click', () => {
    if (!fName.value || !lName.value || !country.value || !marks.value) {
        alert("Please fill out all fields.");
        return;
    }
 // obj 
    let entry = {
        name: fName.value + " " + lName.value,
        country: country.value,
        marks: parseInt(marks.value)
    };

    leaderboard.push(entry);

    renderLeaderboard();

    fName.value = "";
    lName.value = "";
    country.value = "";
    marks.value = "";
});

function renderLeaderboard() {
// Sort
    leaderboard.sort((a, b) => b.marks - a.marks);

    // Clear container before rendering
    container.innerHTML = "";

    leaderboard.forEach((entry, index) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let name = document.createElement('h1');
        name.textContent = entry.name;

        let ctry = document.createElement('h3');
        ctry.textContent = entry.country;

        let score = document.createElement('p');
        score.textContent = entry.marks;

        let plus = document.createElement('p');
        plus.textContent = '+5';
        plus.addEventListener('click', () => {
            entry.marks += 5;
            renderLeaderboard(); //  to update UI
        });

        let minus = document.createElement('p');
        minus.textContent = '-5';
        minus.addEventListener('click', () => {
            entry.marks -= 5;
            renderLeaderboard(); 
        });

        let del = document.createElement('p');
        del.textContent = 'Delete';
        del.addEventListener('click', () => {
            leaderboard.splice(index, 1); // Remove entry from array
            renderLeaderboard();
        });

        card.appendChild(name);
        card.appendChild(ctry);
        card.appendChild(score);
        card.appendChild(plus);
        card.appendChild(minus);
        card.appendChild(del);

        container.appendChild(card);
    });

    console.log(leaderboard);
}

