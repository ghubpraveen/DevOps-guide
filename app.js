const sections = [];

function render() {

    const container =
        document.getElementById("content");

    container.innerHTML =
        sections.map((section, sectionIndex) => {

            const sectionId =
                `section-${sectionIndex}`;

            return `

                <div class="section">

                    <div
                        class="section-title"
                        onclick="toggleSection('${sectionId}')"
                    >
                        ${section.icon} ${section.title}
                    </div>

                    <div
                        id="${sectionId}"
                        class="section-content"
                    >

                        ${section.questions.map((q, idx) => {

                            const questionId =
                                `${sectionId}-q-${idx}`;

                            return `

                                <div class="question">

                                    <div
                                        class="question-title"
                                        onclick="event.stopPropagation(); toggleAnswer('${questionId}')"
                                    >
                                        <span>
                                            ❓ ${q.question}
                                        </span>

                                        <span>
                                            ▼
                                        </span>
                                    </div>

                                    <div
                                        id="${questionId}"
                                        class="answer"
                                        style="display:none;"
                                    >
                                        ${q.answer}
                                    </div>

                                </div>

                            `;
                        }).join("")}

                    </div>

                </div>

            `;

        }).join("");
}

window.toggleSection = function(id) {

    const el =
        document.getElementById(id);

    if (!el) return;

    const current =
        window.getComputedStyle(el).display;

    el.style.display =
        current === "none"
            ? "block"
            : "none";
};

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
