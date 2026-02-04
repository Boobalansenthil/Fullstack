const feedbackArray = [];

const form = document.getElementById("feedbackForm");
const errorMsg = document.getElementById("errorMsg");
const feedbackList = document.getElementById("feedbackList");
const averageRating = document.getElementById("averageRating");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ratingValue = document.getElementById("rating").value;
    const commentText = document.getElementById("comments").value.trim();

    if (name === "" || email === "") {
        showError("Name and Email are mandatory");
        return;
    }

    if (ratingValue === "") {
        showError("Please choose a rating");
        return;
    }

    if (commentText.length < 10) {
        showError("Comment should contain minimum 10 characters");
        return;
    }

    errorMsg.textContent = "";

    feedbackArray.push({
        name: name,
        email: email,
        rating: Number(ratingValue),
        comments: commentText
    });

    renderFeedback();
    updateAverage();
    form.reset();
});

function showError(msg) {
    errorMsg.textContent = msg;
}

function renderFeedback() {
    feedbackList.innerHTML = "";

    feedbackArray.forEach((item, i) => {
        const box = document.createElement("div");
        box.className = "feedback-item";
        box.innerHTML = `
            <strong>${i + 1}. ${item.name}</strong><br>
            Email: ${item.email}<br>
            Rating: ${item.rating}<br>
            Comment: ${item.comments}
        `;
        feedbackList.appendChild(box);
    });
}

function updateAverage() {
    let sum = 0;
    feedbackArray.forEach(f => sum += f.rating);

    const avg = (sum / feedbackArray.length).toFixed(2);
    averageRating.textContent = "Average Rating: " + avg;
}
