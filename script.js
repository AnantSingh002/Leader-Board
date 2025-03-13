let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let country = document.getElementById("country");
let marks = document.getElementById("marks");
let btn = document.getElementById("btn");
let container = document.getElementById("main");

// Array to hold leaderboard entries
let leaderboard = [];

btn.addEventListener('click', () => {
    // Check if any field is empty
    if (!fName.value || !lName.value || !country.value || !marks.value) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a leaderboard entry object
    let entry = {
        name: fName.value + " " + lName.value,
        country: country.value,
        marks: parseInt(marks.value)
    };

    // Push the new entry into the leaderboard array
    leaderboard.push(entry);

    // Sort the leaderboard array by marks in descending order
    leaderboard.sort((a, b) => b.marks - a.marks);

    // Clear the container and re-render the leaderboard
    container.innerHTML = "";

    // Render each sorted entry as a card
    leaderboard.forEach(entry => {
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
        let minus = document.createElement('p');
        minus.textContent = '-5';

        let del = document.createElement('p');
        del.textContent = 'dellete';

        card.appendChild(name);
        card.appendChild(ctry);
        card.appendChild(score);
        card.appendChild(plus);
        card.appendChild(minus);
        card.appendChild(del);

        container.appendChild(card);
    });

    // Clear the form fields after submission
    fName.value = "";
    lName.value = "";
    country.value = "";
    marks.value = "";

    console.log(leaderboard);
});
