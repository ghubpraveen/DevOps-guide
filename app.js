const sections = [];

function render() {


const container =
    document.getElementById("content");

container.innerHTML =
    ${section.questions.map((q, idx) => `

    <div class="question">

        <div
            class="question-title"
            onclick="toggleAnswer('${section.title}-${idx}')"
        >
            ❓ ${q.question}
        </div>

        <div
            id="${section.title}-${idx}"
            class="answer"
            style="display:none;"
        >
            ${q.answer}
        </div>

    </div>

    `).join("")}


}

window.toggleAnswer = function(id) {

    const el =
        document.getElementById(id);

    if (el.style.display === "none") {

        el.style.display = "block";

    } else {

        el.style.display = "none";
    }
};

.question-title {

    font-weight: bold;

    cursor: pointer;

    padding: 12px;

    background: #fff;

    border-top: 1px solid #e5e7eb;
}

.question-title:hover {

    background: #f8fafc;
}

.answer {

    padding: 15px;

    line-height: 1.8;

    white-space: pre-line;

    background: #fafafa;
}

async function loadData() {


const hr =
    await import("./data/hr.js");

sections.push(hr.default);

render();


}

loadData();
