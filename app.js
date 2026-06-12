const sections = [];

function render() {


const container =
    document.getElementById("content");

container.innerHTML =
    sections.map(section => `

        <div class="section">

            <div class="section-title">
                ${section.icon} ${section.title}
            </div>

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

        </div>

    `).join("");


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

async function loadData() {


const hr =
    await import("./data/hr.js");

sections.push(hr.default);

render();


}

loadData();
