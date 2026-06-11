const sections = [];

function render() {
    const container = document.getElementById("content");

    container.innerHTML = sections.map(section => `
        <div class="section">
            <div class="section-title">
                ${section.icon} ${section.title}
            </div>

            ${section.questions.map(q => `
                <div class="question">
                    <h4>${q.question}</h4>
                    <div class="answer">${q.answer}</div>
                </div>
            `).join("")}
        </div>
    `).join("");
}

async function loadData() {

    const modules = await Promise.all([
        import("./data/hr.js"),
        import("./data/jenkins.js"),
        import("./data/kubernetes.js"),
        import("./data/kubernetesTroubleshooting.js"),
        import("./data/terraform.js")
    ]);

    sections.push(...modules.map(m => m.default));

    render();
}

loadData();