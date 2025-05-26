answeredQuestions = []
previousQuestion = 0
indexMultipleChoiceQuestion = 0

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
    "Which of the following would cause the effect shown?",
    "Which of the following structures has rings of cartilage surrounding it?",
    "Which structure isl ined with cilia?",
    "Which of the following creates an increase in air pressure in the thoracic cavity?",
    "What is the characteristic of the blood in vessel Y if the vessel is carrying blood to X?",
    "What is the characteristic of the blood in vessel Y if the vessel is carrying blood away from X?",
    "A characteristic of structure X that helps its function is",
    "How does the body respond to a decrease pH in blood?",
    "What structure closes the trachea when a person swallows?",
    "Which of the following occurs during exhalation?",
    "Which of the following occurs during inhalation?",
    "What part of the brain controls inhalation?",
    "Which of the following decreases as carbon dioxide enters the blood during internal respiration?",
    "Where are the chemoreceptors found that detect [CO<sub>2</sub>] and H<sup>+</sup>] in the cerebrospinal fluid?",
    "Which of the following describes how gas exchange occurs in the alveoli?",
    "Which of the following structure would have the least amount of cartilage and the thinnest walls?",
    "When trying to simulate breathing, it is better to give a mixture of CO<sub>2</sub> and O<sub>2</sub>, then to give O<sub>2</sub> alone because:",
    "The vocal chords are located in the:",
    "The rate of release of oxygen from oxyhemoglobin will increase under which of the following conditions?",
    "The function of the cilia lining the respiratory tract is to:",
    "The exchange of gases between red blood cells and tissues is called:",
    "The enzyme carbonic anhydrase speeds up the reaction between:",
    "Oxygen is carried in the blood as:",
    "Most of the carbon dioxide transported in the plasma is in the form of:",
    "After a head trauma, a person's ability to breathe was impaired. Where was the most likely location of the damage?",
    "A healthy person takes several successive, rapid, deep breaths forcing air out of the lungs after each breath. There will be a long pause before normal breathing movements return because:",
    "As temperature increases beyond 36°C, the amount of oxugen carried by hemoglobin will:",
    "By what route does CO<sub>2</sub> leave the body?",
    "Under what conditions will oxygen readily be released from red blood cells?"
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
    ["increased oxygen in the blood", "increased numbers of red blood cells", "increased carbon dioxide in the blood", "decreased concentration of hydrogen ions"],
    ["trachea", "alveoli", "capillaries", "pharynx"],
    ["nasal cavity", "trachea", "epiglottis", "pleural membranes"],
    ["the diaphragm retains its dome shape", "the rib cage moves up and out", "the diaphragm flattens", "the medulla oblongata detects an increase in [CO<sub>2</sub>]"],
    ["the concentration of carbaminohemoglobin is high", "the concentration of oxyhemoglobin is high", "the concentration of reduced hemoglobin is low", "the concentration of bicarbonate ions is low"],
    ["the concentration of bicarbonate ions is low", "the concentration of oxyhemoglobin is low", "the concentration of reduced hemoglobin is high", "the concentration of carbinohemoglobin is high"],
    ["surrounded by capillaries to help in gas exchange", "a sugar protein complex that prevents it from collapsing", "a two cell thick wall that aids in diffusion", "a decreased surface area to volume ratio to help in gas exchange"],
    ["nerve impulses to the diaphragm increases", "activity in the medulla oblongata decreases", "rate of contraction to the rib muscles decreases", "secretion of the hypothalamus increases"],
    ["epiglottis", "glottis", "larynx", "pharynx"],
    ["intercostal muscles and diaphragm relaxes", "intercostal muscles and diaphragm contracts", "intercostal muscles relax and diaphragm contracts", "intercostal muscles contract and diaphragm relaxes"],
    ["intercostal muscles and diaphragm relaxes", "intercostal muscles and diaphragm contracts", "intercostal muscles relax and diaphragm contracts", "intercostal muscles contract and diaphragm relaxes"],
    ["medulla oblongata", "cerebellum", "cerebrum", "thalamus"],
    ["water", "hydrogen ions", "bicarbonate ions", "reduced hemoglobin"],
    ["central chemoreceptor", "carotid bodies", "aortic bodies", "subclavian bodies"],
    ["diffusion", "active transport", "facilitated transport", "osmosis"],
    ["bronchioles", "trachea", "larynx", "bronchi"],
    ["CO<sub>2</sub> buildup will cause you to breathe too rapidly", "pure oxygen will cause you to breathe too rapidly", "CO<sub>2</sub> and O<sub>2</sub> together will exert a greater amount of pressure than an equal amount of O<sub>2</sub>", "O<sub>2</sub> causes lactic acid buildup and the change in pH prevents breathing"],
    ["larynx", "pharynx", "glottis", "vocal chords"],
    ["decrease in pH", "decrease in body temperature", "increase in CO<sub>2</sub> concentration", "high concentration in the tissues"],
    ["move dust and mucus up the trachea", "secrete mucus", "move air in and out of the lungs", "increase the surface area for gas exchange"],
    ["internal respiration", "cellular respiration", "external respiration", "capillary respiration"],
    ["carbon dioxide and water", "oxygen and hemoglobin", "bicarbonate ions and water", "carbon dioxide and hemoglobin"],
    ["oxyhemoglobin", "carbaminohemogloin", "oxygen", "bicarbonate ions"],
    ["bicarbonate ions", "carbaminohemoglobin", "carbon dioxide", "reduced hemoglobin"],
    ["medulla oblongata", "cerebrum", "cerebellum", "corpus collasum"],
    ["insufficient carbon dioxide in the blood", "an accumulation of lactic acid", "temporary fatigue in the rib muscles", "the time it takes nerve impulses to reach the diaphragm"],
    ["decrease", "increase", "remain the same", "double"],
    ["pulmonary artery -> alveolus -> bronchiole -> bronchus -> trachea -> larynx -> pharynx", "pulmonary artery -> alveolus -> bronchus -> bronchiole -> trachea -> pharynx -> larynx", "pulmonary vein -> bronciole -> alveolus -> bronchus -> trachea -> pharynx -> larynx", "pulmonary vein -> alveolus -> bronchus -> bronchiole -> trachea -> larynx -> pharynx"],
    ["warm and acidic", "cool and basic", "cool and acidic", "warm and basic"]
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
            break
        }
    }
}

function generateQuestion() {
    let image = document.getElementById('image')
    image.style = 'display:none'

    if (document.getElementById('customQuestion').value >= 1 && document.getElementById('customQuestion').value <= 56) {
        indexMultipleChoiceQuestion = parseInt(document.getElementById('customQuestion').value)
    }
    else if (document.getElementById('customQuestion').value > 56 || document.getElementById('customQuestion').value < 0 || document.getElementById('customQuestion').value === '') {
        previousQuestion = indexMultipleChoiceQuestion
        indexMultipleChoiceQuestion = Math.floor(Math.random() * (56 - 1 + 1) + 1);
        while (answeredQuestions.includes(indexMultipleChoiceQuestion-1) || previousQuestion === indexMultipleChoiceQuestion) {
            previousQuestion = indexMultipleChoiceQuestion
            indexMultipleChoiceQuestion = Math.floor(Math.random() * (56 - 1 + 1) + 1);
        }
    }
    randomize(answers[indexMultipleChoiceQuestion-1])


    if (indexMultipleChoiceQuestion === 3 || indexMultipleChoiceQuestion === 16 || indexMultipleChoiceQuestion === 17 || indexMultipleChoiceQuestion === 28 || indexMultipleChoiceQuestion === 29 || indexMultipleChoiceQuestion === 33 || indexMultipleChoiceQuestion === 34 || indexMultipleChoiceQuestion === 35) {
        image.style = 'display:block'
        if (indexMultipleChoiceQuestion === 3) {
            image.src = './images/1.png'
        }
        else if (indexMultipleChoiceQuestion === 16) {
            image.src = './images/2.png'
        }
        else if (indexMultipleChoiceQuestion === 17) {
            image.src = './images/3.png'
        }
        else if (indexMultipleChoiceQuestion === 28) {
            image.src = './images/4.png'
        }
        else if (indexMultipleChoiceQuestion === 29) {
            image.src = './images/5.png'
        }
        else if (indexMultipleChoiceQuestion >= 33 && indexMultipleChoiceQuestion <= 35) {
            image.src = './images/6.png'
        }
    }

    document.getElementById("questionid").innerHTML = "Question Number: " + parseInt(indexMultipleChoiceQuestion)
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