const foundlist = []
const heartChambers = ["left atrium", "right atrium", "left ventricle", "right ventricle"]
const plasmaProteins = ["albumin", "fibrinogen", "immunoglobulins"]
const bloodVessels = ["arteries", "arterioles", "capillaries", "veins", "venules"]

const heartParts = ["aortic arch", "superior vena cava", "pulmonary artery", "pulmonary vein", "right atrium", "tricuspid valve", "right ventricle", "inferior vena cava", "pulmonary trunk", "pulmonary vein", "left atrium", "mitrial valve", "aortic valve", "left ventricle", "descending aorta"]
const foundHeartParts = []

const arteries = ["coronary", "subclavian", "iliac", "carotid", "renal", "hepatic", "mesentric"]
const arteriesAnswers = ["heart", "shoulders/arms", "legs", "head", "kidneys", "liver", "intestines"]

const bloodVessel = ["aorta", "superior vena cava", "inferior vena cava", "hepatic portal system", "hepatic vein", "coronary vein", "coronary artery", "iliac vein", "iliac artery", "renal vein", "renal artery", "pulmonary vein", "pulmonary artery", "subclavian vein", "subclavian artery", "jugular", "carotid", "mesentric artery"]
const fromVessel = ["left ventricle", "upper body", "lower body", "intestines", "liver", "heart", "left ventricle", "legs", "aorta", "kidneys", "aorta", "lungs", "right ventricle", "arms", "aorta", "head", "aorta", "aorta"]
const toVessel = ["system circulation", "right atrium", "right atrium", "liver", "inferior vena cava", "right atrium", "heart", "inferior vena cava", "legs", "inferior vena cava", "kidneys", "left atrium", "lungs", "superior vena cava", "arms", "superior vena cava", "head", "intestines"]

indexHeartGlobal = 0
previousQuestion = 0
arteryAnswerGlobal = 0

multipleChoiceAnswer = ""

function hideElements() {
    document.getElementById('listQuestion').style.display = 'none';
    document.getElementById('heartQuestion').style.display = 'none';
    document.getElementById('multipleChoiceQuestion').style.display = 'none';
    document.getElementById('singleQuestion').style.display = 'none';
    document.getElementById('fromAndToQuestion').style.display = 'none';
}

function generateQuestion() {
    hideElements()
    foundlist.length = 0
    foundHeartParts.length = 0
    if (document.getElementById("customQuestion").value < 6 && document.getElementById("customQuestion").value > 0) {
        questionNumber = parseInt(document.getElementById("customQuestion").value)
        console.log("Question number: " + questionNumber)
    }
    else {
        questionNumber = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
        while (previousQuestion === questionNumber) {
            questionNumber = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
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
    else if (questionNumber === 4) {
        document.getElementById('multipleChoiceQuestion').style.display = 'block';
        document.getElementById("feedbackMultipleChoice").innerHTML = ""
        document.getElementById("answerMultipleChoice").style.display = 'inline-block';
        document.getElementById("checkAnswerMultipleChoice").style.display = 'inline-block';
        if (questionNumber === 4) {
            question4()
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
        document.getElementById('feedbackFrom').value = "";
        document.getElementById('feedbackTo').value = "";
        question6()
    }
}

function question1() {
    document.getElementById("questionid").innerHTML = "Question ID: 1"
    document.getElementById("questionList").innerHTML = "Name a blood vessel (all answers are plural)"
}

function question2() {
    document.getElementById("questionid").innerHTML = "Question ID: 2"
    document.getElementById("questionList").innerHTML = "Name a plasma protein"
}

function question3() {
    document.getElementById("questionid").innerHTML = "Question ID: 3"
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
    document.getElementById("questionid").innerHTML = "Question ID: 4"
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
    document.getElementById("questionid").innerHTML = "Question ID: 5"
    indexAnswer = (Math.floor(Math.random() * (7 - 1 + 1)) + 1);
    arteryAnswerGlobal = (indexAnswer-1)
    document.getElementById("questionSingle").innerHTML = "Fill in the blank. The _______ artery/vein supplies the " + arteriesAnswers[indexAnswer-1] + " with blood."
}

function question6() {
    document.getElementById("questionid").innerHTML = "Question ID: 6"
    indexAnswer = (Math.floor(Math.random() * (18 - 1 + 1)) + 1);
    bloodVesselIndexGlobal = (indexAnswer-1)
    document.getElementById("questionFromAndTo").innerHTML = "The " + bloodVessel[bloodVesselIndexGlobal] + " brings blood from the _______ to the _______"
}


function question7() {
    document.getElementById("questionid").innerHTML = "Question ID: 7"
    document.getElementById("questionList").innerHTML = "Name one of the chambers of the heart"
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
    if (multipleChoiceAnswer === document.getElementById("answerMultipleChoice").value.toLowerCase()) {
        document.getElementById("feedbackMultipleChoice").innerHTML = "Correct! Try a new question."
        document.getElementById("answerMultipleChoice").style.display = 'none';
        document.getElementById("checkAnswerMultipleChoice").style.display = 'none';
    }
    else {
        document.getElementById("feedbackMultipleChoice").innerHTML = "Incorrect, try again."
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
