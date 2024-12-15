
var  accordionTitles = document.querySelectorAll('.accordion-title');
accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            document.querySelectorAll('.accordion-content').forEach(otherContent => {
                otherContent.style.display = 'none';
            });
            content.style.display = 'block';
        }
    });
});
const questions = [
    {
        question: "Quel est mon langage de programmation préféré ?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript",
    },
    {
        question: "Quelle technologie est utilisée pour mes projets IoT ?",
        options: ["Arduino", "Raspberry Pi", "ESP32", "BeagleBone"],
        answer: "Arduino",
    },
    {
        question: "Dans quel domaine ai-je étudié ?",
        options: ["Génie Informatique", "Marketing", "Médecine", "Architecture"],
        answer: "Génie Informatique",
    },
];

let userAnswers = [];

function calculateResult() {
    userAnswers = [];
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            if (selectedOption.value === q.answer) {
                score++;
            }
        } else {
            userAnswers.push(null); // Si aucune réponse n'est sélectionnée
        }
    });

    displayCustomMessage(score);
}

function displayCustomMessage(score) {
    const totalQuestions = questions.length;

    if (userAnswers.includes(null)) {
        alert("Veuillez répondre à toutes les questions avant de soumettre !");
        return;
    }

    const message = prompt(`Vous avez obtenu ${score} réponses correctes sur ${totalQuestions}.` +
        `\nLaissez un message pour exprimer vos pensées sur le quiz :`);

    if (message) {
        alert(`Merci pour votre message : "${message}". Nous espérons que vous avez apprécié le quiz !`);
    }
}
document.getElementById("submit-quiz").style.display = "block";
document.getElementById("submit-quiz").addEventListener("click", calculateResult);