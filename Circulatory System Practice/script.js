const foundlist = []
const heartChambers = ["left atrium", "right atrium", "left ventricle", "right ventricle"]
const plasmaProteins = ["albumin", "fibrinogen", "immunoglobulins"]
const bloodVessels = ["arteries", "arterioles", "capillaries", "veins", "venules"]

const heartParts = ["aortic arch", "superior vena cava", "pulmonary artery", "pulmonary vein", "right atrium", "tricuspid valve", "right ventricle", "inferior vena cava", "pulmonary trunk", "pulmonary vein", "left atrium", "mitral valve", "aortic valve", "left ventricle", "descending aorta"]
const foundHeartParts = []

const arteries = ["coronary", "subclavian", "iliac", "carotid", "renal", "hepatic", "mesentric"]
const arteriesAnswers = ["heart", "shoulders/arms", "legs", "head", "kidneys", "liver", "intestines"]

const bloodVessel = ["aorta", "superior vena cava", "inferior vena cava", "hepatic portal system", "hepatic vein", "coronary vein", "coronary artery", "iliac vein", "iliac artery", "renal vein", "renal artery", "pulmonary vein", "pulmonary artery", "subclavian vein", "subclavian artery", "jugular", "carotid", "mesentric artery"]
const fromVessel = ["left ventricle", "upper body", "lower body", "intestines", "liver", "heart", "left ventricle", "legs", "aorta", "kidneys", "aorta", "lungs", "right ventricle", "arms", "aorta", "head", "aorta", "aorta"]
const toVessel = ["body", "right atrium", "right atrium", "liver", "inferior vena cava", "right atrium", "heart", "inferior vena cava", "legs", "inferior vena cava", "kidneys", "left atrium", "lungs", "superior vena cava", "arms", "superior vena cava", "head", "intestines"]

indexHeartGlobal = 0
previousQuestion = 0
arteryAnswerGlobal = 0

multipleChoiceAnswer = ""

answeredQuestions = []
indexMultipleChoiceQuestion = 0

questions = [
    "What is the function of structure X?",
    "Which blood vessel is not shown in the diagram?",
    "Which blood vessels carry blood to and from the legs?",
    "What is the last heart chamber that blood passes through on its way to the systemic system?",
    "Which heart structure is not functioning properly if an electrical device is needed to stimulate the atria to contract?",
    "What is the function of the Purkinje fibres?",
    "What are the functions of each type of cell shown?",
    "What is the blood vessel labelled X?",
    "What causes materials to move from the blood to the tissues at the arterial end of the capillary bed?",
    "Where does lymph enter the circulatory system?",
    "What would be a result ofd structure Y remaining functional after birth?",
    "Which of the following maintains the osmotic pressure of the blood?",
    "An individual has an abnormally high level of fat in the feces. Which structure could be malfunctioning?",
    "How are veins and lymph vessels similar?",
    "Where is blood velocity the slowest?",
    "What structures are shown in the diagram?",
    "Which letter indicates the point at which the ventricles are in systole?",
    "Which of the following occurs at W?",
    "Which of the following describes the net movement of water at the arterial end of a capillary bed?",
    "Which blood vessel can constrict to cause an increase in blood pressure?",
    "Which vessel is a venule?",
    "What is the blood vessel labelled W?",
    "What is the blood vessel labelled Z?",
    "Which blood vessel originates from the left ventricle of the heart?",
    "Which of the following graphs illustrates the changes in the blood pressure between the pulmonary trunk and the left atrium?",
    "Which of the following statements is true?",
    "What blood veessel carries oxygen and nutrients to the heart muscle?",
    "Through how many heart valves must a blood cell pass as it moves from the brain to the lungs?",
    "Which of the labelled structures prevents blood from re-entering the right atrium from the right ventricle?",
    "Through which vessel would blood move most slowly?",
    "Which labelled blood vessel would contain the highest concentrations of oxygen and nutrients?",
    "What would result if the SA node received increased stimulation by the sympathetic nervous system?",
    "Which of the following compares the blood glucose concentration in the hepatic portal vein to that of the hepatic vein after the digestion of carbohydrate-rich food?",
    "The diagrams above illustrate cross-sectional views of three different types of blood vessels. Which of the following correctly describes the characteristics of each blood vessel?",
    "Which of the following describes the location and function of valves found in the circulatory system?",
    "What structures are responsible for collecting excess tissue fluids in the body?",
    "Which of the following is found in greater amounts in the blood of a person with a viral infection?",
    "What two vessels carry blood to the anterior vena cava?",
    "What circulatory pathway carries blood to the lungs?",
    "What structures takes up tissue fluids not absorbed by the blood capillaries?",
    "What heart structure prevents the AV valves from inverting (turning inside out)?",
    "Contraction of which heart chamber forces blood into the aorta?",
    "Which blood vessel carries oxygen and nutrients from the aorta to the heart muscle?",
    "Which blood vessel exchanges nutrients and wastes with the tissues?",
    "Which strucutre carries oxygenated blood from the mother to the fetus?",
    "Which structure allows blood to bypass the lungs?",
    "What vessel carries blood away from the right ventricle?",
    "Which of the labelled structures is the anterior vena cava?",
    "What structure does blood flow through immediately after leaving the right ventricle?",
    "What accounts for the blood pressure recorded at X?",
    "Which of the following describes a correct sequence?<br>1. Atria contract<br>2. Purkinje fibres contract<br>3. SA node stimulates<br>4. AV node stimulates<br>5. Ventricles contract",
    "What is absorbed into the lacteals?",
    "How many of the substances would be found in relatively higher concentrations at point Y when compared to point X?",
    "Which of the following correctly compares the blood in the pulmonary arteries to the blood in the aorta?",
    "What valve opens when the heart chamber producing the highest blood pressure contracts?",
    "The coordinating structure responsible for the intrinsic heart beat is the:",
    "In which structure is the SA node located?",
    "The blood vessel responsible for carrying oxygen and nutrients directly to the cells of the heart is the:",
    "Which blood vessel would contain the greatest concentration of glucose and amino acids after a meal?",
    "The main reason why the walls of the arteries are thick and elastic compared to veins is to:",
    "In which structure does blood contain the greatest amount of oxyhemoglobin?",
    "Which of the following best describes the structure labelled X?",
    "Where are the chordae tendinate found?",
    "A person's blood pressure is 150/80. Which of the following is higher than normal?",
    "Through which of the vessels does blood move from the heart to the lungs?",
    "Which of the following causes blood to move past the semilunar valves?",
    "The contraction of the cardiac muscle is initiated in the:",
    "Which structure contains the greatest amount of metabolic wastes from the fetus?",
    "Which structure contains oxygenated blood from the mother to the baby?",
    "From where does blood exit to enter the interstitial fluid?",
    "Which area has the greatest amount of blood pressure and velocity?",
    "The pulmonary trunk carries blood away from the",
    "Which structure is the diagram portraying?",
    "Blood pressure is highest when:",
    "Which arrow indicates the subclavian artery?",
    "Which point would be the highest blood pressure be measured?",
    "Which arrow indicates the iliac artery?",
    "Which arrow indicates the jugular artery?",
    "Red blood cells are produced in the:",
    "The sequence of structures which the nerve impulse passes to cause contraction of the heart is:",
    "This structure provides blood to the digestive system. At which point does absorption of nutrients occur?",
    "Platelets are formed in the:",
    "Which of the labeled structures contains the highest level of oxyhemoglobin?",
    "Which of the labeled structures contains the highest level of reduced hemoglobin?",
    "Which letter corresponds to the septum?",
    "Which of the following blood vessels would have the lowest blood pressure?",
    "Which of the following blood vessels would have the highest blood pressure?",
    "Which diagram shows the correct graph of blood velocity and area of vessels?",
    "Which blood vessel would contain the greatest amount of carbon dioxide?",
    "A function of the lymph system is to:",
    "A person complains of constant fatigue and lack of energy. The most likely cause of the symptoms is not enough:",
    "Which structure represents the posterior vena cava?",
    "Which structure represents the hepatic portal vein?",
    "Which structure represents the mesentric artery?",
    "How many oxygen molecules can a hemoglobin molecule hold?"
]

answers = [
    ["to return deoxygenated blood to the lungs from the heart", "to carry oxygenated blood to the body from the heart", "to return deoxygenated blood to the heart from the lungs", "to return deoxygenated blood to the heart from the body"],
    ["the posterior vena cava", "the aorta", "the pulmonary artery", "the anterior vena cava"],
    ["iliac arteries and veins", "renal arteries and veins", "hepatic vein and posterior vena cava", "mesentric arteries and hepatic portal vein"],
    ["left ventricle", "left atrium", "right atrium", "right ventricle"],
    ["SA node", "septum", "AV node", "chordae tendineae"],
    ["to conduct impulses from the AV node to the ventricles", "to cause atrial contraction", "to act as a pacemake and initiate the heartbeat", "to prevent the valves from inverting during heartbeat"],
    ["Red Blood Cells: to transport hydrogen ions, White Blood Cells: to engulf bacteria", "Red Blood Cells: to carry oxygen, White Blood Cells: to carry carbon dioxide", "Red Blood Cells: to make antibodies, White Blood Cells: to fight infection", "Red Blood Cells: to fight infection, White Blood Cells: to engulf bacteria"],
    ["the hepatic portal vein", "the renal vein", "the hepatic vein", "the mesentric artery"],
    ["blood pressure", "osmosis", "active transport", "facilitated transport"],
    ["at the subclavian veins", "at the hepatic vein", "at the jugular vein", "at the coronary veins"],
    ["the levels of oxygen in structure Z would be lower than normal", "blood would flow from  the left ventricle to the right ventricle", "the levels of carbon dioxide in structure X would be lower than normal", "blood in the left atrium would have higher concentrations of oxygen than blood in the right atrium"],
    ["protein", "urea", "glycogen", "phospholipids"],
    ["W", "X", "Y", "Z"],
    ["both contain valves", "both return blood to the heart", "both have large amounts of elastic tissue", "both carry blood with a low oxygen concentration"],
    ["in a capillary", "in a vein", "in a venule", "in an artery"],
    ["red blood cells and white blood cells", "platelets and red blood cells", "platelets and white blood cells", "white blood cells and plasma proteins"],
    ["Y", "W", "X", "Z"],
    ["the ventricles are filling with blood", "the semilunar valves are open", "the atrioventricular valves are closed", "the purkinje fibres stimulate the atria to contract"],
    ["net movement of water into the tissues because blood pressure is greater than the osmotic pressure of the blood", "net movement of water into the tissues because blood pressure is less than the osmotic pressure of the blood", "net movement of water into the capillaries because blood pressure is less than the osmotic pressure of the blood", "net movement of water into capillaries because blood pressure is greater than the osmotic pressure of the blood"],
    ["Z", "W", "X", "Y"],
    ["Y", "W", "X", "Z"],
    ["iliac artery", "renal vein", "carotid artery", "hepatic portal vein"],
    ["carotid artery", "aorta", "subclavian vein", "posterior vena cava"],
    ["X", "W", "Y", "Z"],
    ["top left", "top right", "bottom left", "bottom right"],
    ["veins have a larger internal diameter than arteries", "arteries have thinner walls than veins", "veins have greater elasticity than arteries", "arteries have one-way valves and veins do not"],
    ["the coronary artery", "the aorta", "the carotid artery", "the pulmonary artery"],
    ["2", "4", "6", "8"],
    ["W", "X", "Y", "Z"],
    ["Y", "W", "X", "Z"],
    ["W", "X", "Y", "Z"],
    ["blood pressure and blood velocity would increase", "heart rate and blood pressure would decrease", "mesentric arteries and arterioles would dilate", "production of red blood cells and platelets would increase"],
    ["blood glucose concentration is lower in the hepatic vein because glucose is converted to glycogen", "blood glucose concentration is higher in the hepatic vein due ot the actions of insulin", "blood glucose concentration is higher in the hepatic vein because the liver stores excess glucose", "blood glucose concentration is similar in each vein because glucose remains in the bloodstream"],
    ["Vessel X: contraction of skeletal muscle aids blood flow, Vessel Y: smooth muscle allows for contraction, Vessel Z: blood velocity is lowest in this type of vessel", "Vessel X: carries blood to the heart, Vessel Y: contains one-way valves, Vessel Z: contraction of skeletal muscle aids blood flow", "Vessel X: blood velocity is highest in this type of vessel, Vessel Y: carries blood toward the heart, Vessel Z: exchanges gases, nutrients, and wastes with tissue fluids", "Vessel X: smooth muscle allows for contraction, Vessel Y: carries blood from the heart, Vessel Z: carries blood toward the heart"],
    ["found in blood vessels that have low blood pressure and prevent backflow of blood in the heart", "found in capillary beds and regulate the diameter of venules", "found in blood vessels where blood is moving the fastest and control blood entering the capillary beds", "found in blood vessels carrying blood away from the heart and limit high blood pressure in tissues"],
    ["the lymph capillaries", "the venules", "the lymph nodes", "the blood arterioles"],
    ["antibodies", "urea", "platelets", "red blood cells"],
    ["the jugular vein and the subclavian vein", "the jugular vein and the iliac vein", "the hepatic portal vein and the renal vein", "the coronary vein and the pulmonary vein"],
    ["pulmonary", "systemic", "hepatic", "renal"],
    ["lymph vessel", "subclavian artery", "hepatic portal vein", "posterior vena cava"],
    ["chordae tendinae", "SA node", "AV node", "purkinje fibres"],
    ["left ventricle", "left atrium", "right atrium", "right ventricle"],
    ["X", "W", "Z", "Y"],
    ["Z", "W", "X", "Y"],
    ["W", "X", "Y", "Z"],
    ["Y", "W", "X", "Z"],
    ["the pulmonary trunk", "the aorta", "the vena cava", "the pulmonary vein"],
    ["Y", "W", "Z", "X"],
    ["the aorta", "the AV valve", "the pulmolnary vein", "the pulmonary trunk"],
    ["the ventricles are contracting", "the AV valves are opening", "the ventricles are in diastole", "blood is entering the ventricles"],
    ["1 -> 4 -> 2 -> 5", "2 -> 5 -> 4 -> 1", "3 -> 5 -> 4 -> 1", "4 -> 1 -> 2 -> 5"],
    ["lipids", "glucose", "nucleotides", "amino acids"],
    ["2", "1", "3", "4"],
    ["the blood in the pulmonary arteries has less oxyhemoglobin than the blood in the aorta", "the blood in both vessels has low concentrations of oxyhemoglobin", "the blood in both vessels has a high concentration of oxyhemoglobin", "the blood in the pulmonary arteries has more oxyhemoglobin than the blood in the aorta"],
    ["the aortic semi-lunar valve", "the pulmonary semi-lunar valve", "the left atrioventricular valve", "the right atrioventricular valve"],
    ["SA Node", "cerebellum", "chordae tendinae", "sympathetic nervous system"],
    ["X", "W", "Y", "Z"],
    ["coronary artery", "carotid artery", "pulmonary vein", "pulmonary artery"],
    ["hepatic portal vein", "iliac artery", "pulmonary vein", "mesentric artery"],
    ["withstands the pressure of the heart's pressure", "prevent diffusion of plasma", "keep white blood cells from entering", "provide a reserve supply of red blood cells"],
    ["aorta", "right atrium", "pulmonary artery", "anterior vena cava"],
    ["a vein that carries blood that is rich in glucose", "a vein that carries oxygenated blood to the heart", "an arteriole that carries blood to the small intestine", "an artery that carries nutrients to the rest of the body"],
    ["in the ventricles", "in the atria", "in the coronary arteries", "in the semilunar valves"], 
    ["systolic pressure", "diameter of veins", "diastolic pressure", "capillary diameter"],
    ["pulmonary trunk", "aorta", "pulmonary vein", "anterior vena cava"],
    ["ventricular systole", "atrial systole", "atrial diastole", "ventricular diastole"],
    ["sinoatrial node", "purkinje fibers", "chordae tendinae", "atriventricular node"],
    ["X", "W", "Y", "Z"],
    ["W", "X", "Y", "Z"],
    ["W", "X", "Y", "Z"],
    ["X", "W", "Y", "Z"],
    ["right ventricle", "left atrium", "right atrium", "left ventricle"],
    ["lymph vein", "aorta", "renal capillary", "umbilical artery"],
    ["ventricles contract", "atria relax", "atria contracts", 'ventricles relax'],
    ["W", "X", "Y", "Z"],
    ["Y", "W", "X", "Z"],
    ["Z", "W", "X", "Y"],
    ["X", "Y", "Z", "W"],
    ["bone marrow", "kidneys", "thyroid glands", "lymphoid tissue"],
    ["SA node -> AV node -> purkinje fibers", "AV node -> SA node -> purkinje fibers", "purkinje fibers -> AV node -> SA node", "purkinje fibers -> SA node -> AV node"],
    ["Y", "W", "X", "Z"],
    ["bone marrow", "liver", "gallbladder", "lymphoid tissue"],
    ["Y", "W", "X", "Z"],
    ["X", "W", "Z" ,"Y"],
    ["W", "X", "Y", "Z"],
    ["capillary in the lungs", "aorta", "iliac artery", "pulmonary artery"],
    ["aorta", "iliac artery", "pulmonary artery", "capillary in the lungs"],
    ["top left", "top right", "bottom left", "bottom right"],
    ["pulmonary artery", "aorta", "carotid artery", "pulmonary vein"],
    ["fight infection", "transport carbon dioxide", "make white blood cells", "transport amino acids"],
    ["hemoglobin", "fibrin", "calcium", "histamine"],
    ["X", "W", "Y", "Z"],
    ["W", "X", "Y", "Z"],
    ["Z", "W", "X", "Y"],
    ["4", "1", "2", "3"]
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

function hideElements() {
    document.getElementById('listQuestion').style.display = 'none';
    document.getElementById('heartQuestion').style.display = 'none';
    document.getElementById('multipleChoiceQuestion').style.display = 'none';
    document.getElementById('singleQuestion').style.display = 'none';
    document.getElementById('fromAndToQuestion').style.display = 'none';
    document.getElementById('imageMultipleChoice').style.display = 'none'
}

function generateQuestion() {
    hideElements()
    foundlist.length = 0
    foundHeartParts.length = 0
    if (document.getElementById("customQuestion").value < 103 && document.getElementById("customQuestion").value > 0) {
        questionNumber = parseInt(document.getElementById("customQuestion").value)
        console.log("Question number: " + questionNumber)
    }
    else {
        questionNumber = (Math.floor(Math.random() * (102 - 1 + 1)) + 1);
        while (previousQuestion === questionNumber) {
            questionNumber = (Math.floor(Math.random() * (102 - 1 + 1)) + 1);
        }
        previousQuestion = questionNumber
    }
    if (questionNumber === 1 || questionNumber === 2) {
        document.getElementById('listQuestion').style.display = 'block';
        document.getElementById('feedbackList').innerHTML = ""
        document.getElementById("answerList").style.display = 'inline-block';
        document.getElementById("checkAnswerList").style.display = 'inline-block';
        if (questionNumber === 1) {
            question1()
        }
        if (questionNumber === 2) {
            question2()
        }
        if (questionNumber === 7) {
            question7()
        }
    }
    else if (questionNumber === 3) {
        document.getElementById('heartQuestion').style.display = 'block';
        document.getElementById("answerHeart").style.display = 'inline-block';
        document.getElementById("checkAnswerHeart").style.display = 'inline-block';
        document.getElementById("feedbackHeart").style.display = 'block';
        document.getElementById("newNumber").style.display = 'inline-block';
        document.getElementById("feedbackHeart").value = "";
        question3()
    }
    else if (questionNumber === 4 || (questionNumber >= 8 && questionNumber <= 102)) {
        document.getElementById('multipleChoiceQuestion').style.display = 'block';
        document.getElementById("feedbackMultipleChoice").innerHTML = ""
        document.getElementById("answerMultipleChoice").style.display = 'inline-block';
        document.getElementById("checkAnswerMultipleChoice").style.display = 'inline-block';
        if (questionNumber === 4) {
            question4()
        }
        else if (questionNumber >= 8 && questionNumber <= 102) {
            question8()
        }
    }
    else if (questionNumber === 5) {
        document.getElementById('singleQuestion').style.display = 'block';
        document.getElementById("feedbackSingle").innerHTML = ""
        document.getElementById("answerSingle").style.display = 'inline-block';
        document.getElementById("checkAnswerSingle").style.display = 'inline-block';
        if (questionNumber === 5) {
            question5()
        }
    }
    else if (questionNumber === 6) {
        document.getElementById('fromAndToQuestion').style.display = 'block';
        document.getElementById('feedbackFrom').innerHTML = "";
        document.getElementById('feedbackTo').innerHTML = "";
        question6()
    }
}

function question1() {
    document.getElementById("questionid").innerHTML = "Question Number: 1"
    document.getElementById("questionList").innerHTML = "Name a blood vessel (all answers are plural)"
}

function question2() {
    document.getElementById("questionid").innerHTML = "Question Number: 2"
    document.getElementById("questionList").innerHTML = "Name a plasma protein"
}

function question3() {
    document.getElementById("questionid").innerHTML = "Question Number: 3"
    index = (Math.floor(Math.random() * (15 - 1 + 1)) + 1);
    if (foundHeartParts.length === 15) {
        document.getElementById("questionHeart").innerHTML = "You've correctly named all of the parts of the heart! Generate a new question."
        document.getElementById("answerHeart").style.display = 'none';
        document.getElementById("checkAnswerHeart").style.display = 'none';
        document.getElementById("feedbackHeart").style.display = 'none';
        document.getElementById("newNumber").style.display = 'none';
    }
    else {
        while (foundHeartParts.includes(index)) {
            index = (Math.floor(Math.random() * (15 - 1 + 1)) + 1);
        }
        indexHeartGlobal = index
        document.getElementById("questionHeart").innerHTML = "What is " + index + " called? (all answers are singular)"
    }
}

function question4() {
    document.getElementById("questionid").innerHTML = "Question Number: 4"
    multipleChoiceList = []
    multipleChoiceListRandom = []
    indexAnswer = (Math.floor(Math.random() * (7 - 1 + 1)) + 1);
    multipleChoiceList.push(indexAnswer-1)
    multipleChoiceAnswerGlobal = (indexAnswer-1)

    for (let i = 0; i < 3; i++) {
        index = (Math.floor(Math.random() * (7 - 1 + 1)) + 1);
        while (multipleChoiceList.includes(index-1)) {
            index = (Math.floor(Math.random() * (7 - 1 + 1)) + 1);
        }
        multipleChoiceList.push(index-1)
    }

    while (multipleChoiceListRandom.length < 4) {
        randomIndex = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
        if (multipleChoiceListRandom.includes(multipleChoiceList[randomIndex - 1])) {
            randomIndex = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
        }
        else {
            multipleChoiceListRandom.push(multipleChoiceList[randomIndex - 1])
        }
    }

    for (let i = 0; i < 4; i++) {
        if (multipleChoiceListRandom[i] === multipleChoiceAnswerGlobal) {
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

    document.getElementById("questionMultipleChoice").innerHTML = "What does the " + arteries[multipleChoiceAnswerGlobal] + " artery/vein do?"
    document.getElementById("answerOne").innerHTML = "A. Supplies the " + arteriesAnswers[multipleChoiceListRandom[0]] + " with blood"
    document.getElementById("answerTwo").innerHTML = "B. Supplies the " + arteriesAnswers[multipleChoiceListRandom[1]] + " with blood"
    document.getElementById("answerThree").innerHTML = "C. Supplies the " + arteriesAnswers[multipleChoiceListRandom[2]] + " with blood"
    document.getElementById("answerFour").innerHTML = "D. Supplies the " + arteriesAnswers[multipleChoiceListRandom[3]] + " with blood"
}

function question5() {
    document.getElementById("questionid").innerHTML = "Question Number: 5"
    indexAnswer = (Math.floor(Math.random() * (7 - 1 + 1)) + 1);
    arteryAnswerGlobal = (indexAnswer-1)
    document.getElementById("questionSingle").innerHTML = "Fill in the blank. The _______ artery/vein supplies the " + arteriesAnswers[indexAnswer-1] + " with blood."
}

function question6() {
    document.getElementById("questionid").innerHTML = "Question Number: 6"
    indexAnswer = (Math.floor(Math.random() * (18 - 1 + 1)) + 1);
    bloodVesselIndexGlobal = (indexAnswer-1)
    document.getElementById("questionFromAndTo").innerHTML = "The " + bloodVessel[bloodVesselIndexGlobal] + " brings blood from the _______ to the _______"
}


function question7() {
    document.getElementById("questionid").innerHTML = "Question Number: 7"
    document.getElementById("questionList").innerHTML = "Name one of the chambers of the heart"
}

function question8() {
    let image = document.getElementById('imageMultipleChoice')
    indexMultipleChoiceQuestion = (questionNumber-7)

    randomize(answers[indexMultipleChoiceQuestion-1])

    if (indexMultipleChoiceQuestion === 1 || indexMultipleChoiceQuestion === 8 || indexMultipleChoiceQuestion === 11 || indexMultipleChoiceQuestion === 13 || (indexMultipleChoiceQuestion >= 16 && indexMultipleChoiceQuestion <= 18) || (indexMultipleChoiceQuestion >= 20 && indexMultipleChoiceQuestion <= 25) || (indexMultipleChoiceQuestion >= 29 && indexMultipleChoiceQuestion <= 31) || indexMultipleChoiceQuestion === 34 || (indexMultipleChoiceQuestion >= 43 && indexMultipleChoiceQuestion <= 46) || indexMultipleChoiceQuestion === 48 || indexMultipleChoiceQuestion === 50 || indexMultipleChoiceQuestion === 53 || indexMultipleChoiceQuestion === 56 || indexMultipleChoiceQuestion === 62 || (indexMultipleChoiceQuestion >= 68 && indexMultipleChoiceQuestion <= 72) || (indexMultipleChoiceQuestion >= 75 && indexMultipleChoiceQuestion <= 78) || indexMultipleChoiceQuestion === 81 || (indexMultipleChoiceQuestion >= 83 && indexMultipleChoiceQuestion <= 85) || indexMultipleChoiceQuestion === 88 || (indexMultipleChoiceQuestion >= 92 && indexMultipleChoiceQuestion <= 94)) {
        image.style = 'display:block'
        if (indexMultipleChoiceQuestion === 1) {
            image.width = 400
            image.height = 300
            image.src = './images/1.png'
        }
        else if (indexMultipleChoiceQuestion === 8) {
            image.width = 300
            image.height = 300
            image.src = './images/2.png'
        }
        else if (indexMultipleChoiceQuestion === 11) {
            image.width = 400
            image.height = 300
            image.src = './images/3.png'
        }
        else if (indexMultipleChoiceQuestion === 13) {
            image.width = 450
            image.height = 300
            image.src = './images/4.png'
        }
        else if (indexMultipleChoiceQuestion === 16) {
            image.width = 450
            image.height = 300
            image.src = './images/5.png'
        }
        else if (indexMultipleChoiceQuestion === 17 || indexMultipleChoiceQuestion === 18) {
            image.width = 500
            image.height = 300
            image.src = './images/6.png'
        }
        else if (indexMultipleChoiceQuestion === 20 || indexMultipleChoiceQuestion === 21) {
            image.width = 400
            image.height = 300
            image.src = './images/7.png'
        }
        else if (indexMultipleChoiceQuestion >=22 && indexMultipleChoiceQuestion <= 24) {
            image.width = 250
            image.height = 300
            image.src = './images/8.png'
        }
        else if (indexMultipleChoiceQuestion === 25) {
            image.width = 450
            image.height = 300
            image.src = './images/9.png'
        }
        else if (indexMultipleChoiceQuestion === 29) {
            image.width = 400
            image.height = 300
            image.src = './images/10.png'
        }
        else if (indexMultipleChoiceQuestion === 30) {
            image.width = 550
            image.height = 250
            image.src = './images/11.png'
        }
        else if (indexMultipleChoiceQuestion === 31) {
            image.width = 400
            image.height = 300
            image.src = './images/12.png'
        }
        else if (indexMultipleChoiceQuestion === 34) {
            image.width = 600
            image.height = 300
            image.src = './images/13.png'
        }
        else if (indexMultipleChoiceQuestion === 43 || indexMultipleChoiceQuestion === 44) {
            image.width = 450
            image.height = 300
            image.src = './images/14.png'
        }
        else if (indexMultipleChoiceQuestion === 45 || indexMultipleChoiceQuestion === 46) {
            image.width = 400
            image.height = 300
            image.src = './images/15.png'
        }
        else if (indexMultipleChoiceQuestion === 48) {
            image.width = 250
            image.height = 300
            image.src = './images/16.png'
        }
        else if (indexMultipleChoiceQuestion === 50) {
            image.width = 550
            image.height = 300
            image.src = './images/17.png'
        }
        else if (indexMultipleChoiceQuestion === 53) {
            image.width = 600
            image.height = 300
            image.src = './images/18.png'
        }
        else if (indexMultipleChoiceQuestion === 56) {
            image.width = 350
            image.height = 300
            image.src = './images/19.png'
        }
        else if (indexMultipleChoiceQuestion === 62) {
            image.width = 300
            image.height = 300
            image.src = './images/20.png'
        }
        else if (indexMultipleChoiceQuestion === 68 || indexMultipleChoiceQuestion === 69) {
            image.width = 450
            image.height = 300
            image.src = './images/21.png'
        }
        else if (indexMultipleChoiceQuestion === 70 || indexMultipleChoiceQuestion === 71) {
            image.width = 600
            image.height = 300
            image.src = './images/22.png'
        }
        else if (indexMultipleChoiceQuestion === 72) {
            image.width = 500
            image.height = 300
            image.src = './images/23.png'
        }
        else if (indexMultipleChoiceQuestion >= 75 && indexMultipleChoiceQuestion <= 78) {
            image.width = 400
            image.height = 300
            image.src = './images/24.png'
        }
        else if (indexMultipleChoiceQuestion === 81) {
            image.width = 400
            image.height = 300
            image.src = './images/25.png'
        }
        else if (indexMultipleChoiceQuestion >= 83 && indexMultipleChoiceQuestion <= 85) {
            image.width = 400
            image.height = 300
            image.src = './images/26.png'
        }
        else if (indexMultipleChoiceQuestion === 88) {
            image.width = 600
            image.height = 300
            image.src = './images/27.png'
        }
        else if (indexMultipleChoiceQuestion >= 92 && indexMultipleChoiceQuestion <= 94) {
            image.width = 350
            image.height = 300
            image.src = './images/28.png'
        }
    }

    document.getElementById("questionid").innerHTML = "Question Number: " + parseInt(questionNumber)
    document.getElementById("questionMultipleChoice").innerHTML = questions[indexMultipleChoiceQuestion-1]
    document.getElementById("answerOne").innerHTML = "A. " + randomList[0]
    document.getElementById("answerTwo").innerHTML = "B. " + randomList[1]
    document.getElementById("answerThree").innerHTML = "C. " + randomList[2]
    document.getElementById("answerFour").innerHTML = "D. " + randomList[3] 
}

function checkAnswerFrom() {
    if (document.getElementById("answerFrom").value.trim().toLowerCase() === fromVessel[bloodVesselIndexGlobal]) {
        document.getElementById("feedbackFrom").innerHTML = "Correct!"
    }
    else {
        document.getElementById("feedbackFrom").innerHTML = "Incorrect, try again."
    }
}

function checkAnswerTo() {
    if (document.getElementById("answerTo").value.trim().toLowerCase() === toVessel[bloodVesselIndexGlobal]) {
        document.getElementById("feedbackTo").innerHTML = "Correct!"
    }
    else {
        document.getElementById("feedbackTo").innerHTML = "Incorrect, try again."
    }
}

function checkAnswerSingle() {
    if (document.getElementById("answerSingle").value.trim().toLowerCase() === arteries[arteryAnswerGlobal]) {
        document.getElementById("feedbackSingle").innerHTML = "Correct! Try a new question."
        document.getElementById("answerSingle").style.display = 'none';
        document.getElementById("checkAnswerSingle").style.display = 'none';
    }
    else {
        document.getElementById("feedbackSingle").innerHTML = "Incorrect, try again."
    }
}

function checkAnswerMultipleChoice() {
    if (questionNumber === 4) {
        if (multipleChoiceAnswer === document.getElementById("answerMultipleChoice").value.toLowerCase()) {
            document.getElementById("feedbackMultipleChoice").innerHTML = "Correct! Try a new question."
            document.getElementById("answerMultipleChoice").style.display = 'none';
            document.getElementById("checkAnswerMultipleChoice").style.display = 'none';
        }
        else {
            document.getElementById("feedbackMultipleChoice").innerHTML = "Incorrect, try again."
        }
    }
    else if (questionNumber === 8) {
        if (multipleChoiceAnswer === document.getElementById("answerMultipleChoice").value.toLowerCase()) {
            document.getElementById("feedbackMultipleChoice").innerHTML = "Correct! Try a new question."
            answeredQuestions.push[indexMultipleChoiceQuestion-1]
        }
        else {
            document.getElementById("feedbackMultipleChoice").innerHTML = "Incorrect, try again."
            document.getElementById("answerMultipleChoice").value = ''
        }
    }
}

function checkAnswerHeart() {
    answer = heartParts[indexHeartGlobal - 1]
    if (document.getElementById("answerHeart").value.trim().toLowerCase() === answer) {
        document.getElementById("feedbackHeart").innerHTML = "Correct! Here's a new question."
        foundHeartParts.push(indexHeartGlobal)
        question3()
        document.getElementById('answerHeart').value = ""
    }
    else {
        document.getElementById("feedbackHeart").innerHTML = "Incorrect, try again."
    }
}

function checkAnswerList() {
    if (questionNumber === 1) {
        checkAnswerListFull(bloodVessels, 5)
    }
    if (questionNumber === 2) {
        checkAnswerListFull(plasmaProteins, 3)
    }
    if (questionNumber === 7) {
        checkAnswerListFull(heartChambers, 4)
    }
}

function checkAnswerListFull(list, length) {
    if (foundlist.includes(document.getElementById('answerList').value.toLowerCase())) {
        document.getElementById('feedbackList').innerHTML = "You've already named that heart chamber Try again."
    }
    else if (list.includes(document.getElementById('answerList').value.toLowerCase())) {
            foundlist.push(document.getElementById('answerList').value.toLowerCase())
            document.getElementById('feedbackList').innerHTML = "That's correct! You have named " + foundlist.length + " out of " + length + " so far. Name another one."
            document.getElementById('answerList').value = ''
    }
    else {
            document.getElementById('feedbackList').innerHTML = "Incorrect, try again."
            document.getElementById('answerList').value = ''
    }
    if (foundlist.length === length) {
        document.getElementById('feedbackList').innerHTML = "Congratulations! You've named them all! Generate a new question."
        document.getElementById("answerList").style.display = 'none';
        document.getElementById("checkAnswerList").style.display = 'none';
    }
}
