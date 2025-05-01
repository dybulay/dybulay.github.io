answeredQuestions = []

questions = [
    "Alveoli would not be characterized as",
    "The destruction of the cilia lining the respiratory tract would result in",
    "The structure that increases thoracic volume when it contracts is",
    "The product of the reaction between Hb and O<sub>2</sub> is",
    "Carbaminohemoglobin is formed in the",
    "Most hemoglobin becomes reduced inside a(n)",
    "Consider the following reaction:<br>CO<sub>2</sub> + H<sub>2</sub>O --> H<sub>2</sub>CO<sub>3</sub><br>An enzyme found in red blood cells that catalyzes this reaction is",
    "As the blood becomes more acidic in muscle tissues, hemoglobin will carry less",
    "The formation of carbaminohemoglobin occurs in the",
    "Air pressure is reduced inside the thoracic cavity when",
    "The level of CO<sub>2</sub> in the blood is monitored by the",
    "Inhalation is caused by",
    "Most hemoglobin becomes reduced inside a(n)",
    "The exchange of oxygen and carbon dioxide in external respiration occurs by",
    "Which of the following reactions occurs in a capillary of the leg?",
    "Which of the following substances would be found at its highest concentration in blood leaving the capillaries shown in the diagram?",
    "The graph above shows the temperature of oxyhemoglobin in the blood as it moves from point A to point B in the body. The shaded area on the graph would represent the",
    "Blood entering the systemic circulation carries high concentrations of",
    "What is the correct sequence of structures through which an oxygen molecule passes from the nostrils to the alveolus?",
    "Mucus is moved alone the respiratory stract by",
    "Which of the following would cause a decrease in the pH of the blood during internal respiration?",
    "Where does oxygen diffuse into the blood?",
    "An increase in the rate of contractions of the diaphragm and rib muscles would result in",
    "Most of the carbon dioxide produced by tissues is carried back to the lungs as",
    "The diaphragm assists breathing by",
    "Internal respiration is the exchange of",
    "Which of the following have the highest concentrations of both carbonate ions and reduced hemoglobin?",
    "A function of the structure labelled X is to",
    "Which of the following would cause the effect shown?"
]

answers = [
    ["muscular", "thin-walled", "vascularized", "secreting a lipoprotein"], 
    ["increased debris in the airways", "decreased breathing rate", "decreased mucus production", "increased temperature in the lungs"],
    ["Z", "W", "Y", "X"],
    ["oxyhemoglobin", "bicarbonate", "hemoglobin", "carbaminohemoglobin"],
    ["capillary for the transport of carbon dioxide", "large intestine by E. Coli", "alveolus when excess oxygen is present", "nephron from the breakdown of amino acids"],
    ["capillary", "artery", "venule", "arteriole"],
    ["carbonic anhydrase", "dehydrogenase", "peptidase", "nuclease"],
    ["oxygen", "hydrogen ion", "carbon dioxide", "bicarbonate ion"],
    ["capillaries", "veins", "arteries", "arterioles"],
    ["the rib cage moves up and out", "the rib muscles relax", "the diaphragm moves up", "the pleural membranes collapse"],
    ["medulla oblongata", "cerebellum", "hypothalamus", "cerebral cortex"],
    ["the diaphragm moving down and the ribs moving out", "the diaphragm moving up and the ribs moving in", "the diaphragm moving up and the ribs moving out", "the diaphragm moving down and the ribs moving in"],
    ["capillary", "artery", "venule", "arteriole"],
    ["diffusion", "osmosis", "active transport", "facilitated diffusion"],
    ["Hb + H<sup>+</sup> --> HHb", "HbCO<sub>2</sub> --> Hb + CO<sub>2</sub>", "Hb + O<sub>2</sub> --> HbO<sub>2</sub>", "H<sup>+</sup> + HCO<sub>3</sub><sup>-</sup> --> H<sub>2</sub>CO<sub>3</sub>"],
    ["oxyhemoglobin", "bicarbonate ions", "reduced hemoglobin", "carbaminohemoglobin"],
    ["alveolar capillaries", "trachea", "body tissues", "pulmonary arteries"],
    ["oxyhemoglobin", "bicarbonate ions", "reduced hemoglobin", "carbaminohemoglobin"],
    ["larynx, trachea, right bronchus, bronchioles", "larynx, right bronchus, trachea, bronchioles", "right bronchus, larynx, bronchioles, trachea", "trachea, larynx, bronchioles, right bronchus"],
    ["cilia", "flagella", "peristalsis", "active transport"],
    ["running for ten minutes", "digestion of an acidic food", "taking in several deep breaths", "prolonged period of inactivity"],
    ["alveoli", "trachea", "bronchioles", "pleural membranes"],
    ["increased concentration of bicarbonate ion in the blood", "decreased hydrogen ion concentration", "decreased reduced hemoglobin in the blood", "increased concentration of oxyhemoglobin in the blood"],
    ["bicarbonate ions", "reduced hemoglobin", "carbaminohemoglobin", "a gas dissolved in plasma"],
    ["changing the volume of the thoracic cavity", "moving the ribs up", "stimulating the lungs to absorb oxygen", "allowing the lungs to move freely in the thoracic cavity"],
    ["oxygen and carbon dioxide between the blood and tissue fluid", "glucose and hydrogen ions between the air and the blood", "oxygen and carbon dioxide between the air and the blood", "glucose and hydrogen ions between the blood and tissue fluid"],
    ["an iliac vein", "a carotid artery", "a coronary artery", "a pulmonary vein"],
    ["carry air into and out of the lung", "produce sound", "exchange gases", "stimulate the breathing centre in the brain"],
    ["increased oxygen in the blood", "increased numbers of red blood cells", "increased carbon dioxide in the blood", "decreased concentration of hydrogen ions"]
]

function randomize(list) {
    answer = list[0]
    randomList = []

    for (let i = 0; i < 4; i++) {
        index = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        while (randomList.includes(list[index-1])) {
            index = (Math.floor(Math.random() * (4 - 1 + 1) + 1));
        }
        randomList.push(list[index-1])
    }

    for (let i = 0; i < 4; i++) {
        if (randomList[i] === answer) {
            if (i === 0) {
                multipleChoiceAnswer = 'a'
            }
            else if (i === 1) {
                multipleChoiceAnswer = 'b'
            }
            else if (i === 2) {
                multipleChoiceAnswer = 'c'
            }
            else if (i === 3) {
                multipleChoiceAnswer = 'd'
            }
            console.log("Correct answer: " + answer)
            break
        }
    }
}

function generateQuestion() {
    indexMultipleChoiceQuestion = Math.floor(Math.random() * (28 - 1 + 1) + 1);
    while (answeredQuestions.includes(indexMultipleChoiceQuestion-1)) {
        indexMultipleChoiceQuestion = Math.floor(Math.random() * (28 - 1 + 1) + 1);
    }
    randomize(answers[indexMultipleChoiceQuestion-1])

    document.getElementById("questionid").innerHTML = "Question Number: " + parseInt(indexMultipleChoiceQuestion+1)
    document.getElementById("questionMultipleChoice").innerHTML = questions[indexMultipleChoiceQuestion-1]
    document.getElementById("answerOne").innerHTML = "A. " + randomList[0]
    document.getElementById("answerTwo").innerHTML = "B. " + randomList[1]
    document.getElementById("answerThree").innerHTML = "C. " + randomList[2]
    document.getElementById("answerFour").innerHTML = "D. " + randomList[3] 
}

function checkAnswerMultipleChoice() {
    if (multipleChoiceAnswer === document.getElementById("answerMultipleChoice").value.toLowerCase()) {
        document.getElementById("feedbackMultipleChoice").innerHTML = "Correct! Try a new question."
        answeredQuestions.push[indexMultipleChoiceQuestion-1]
        console.log("Answered Questions: " + answeredQuestions)
    }
    else {
        document.getElementById("feedbackMultipleChoice").innerHTML = "Incorrect, try again."
        document.getElementById("answerMultipleChoice").value = ''
    }
}