answeredQuestions = []
previousQuestion = 0
indexMultipleChoiceQuestion = 0

questions = [
    "Which structure is the renal cortex?",
    "The function of the structure labelled Y is to",
    "In a healty person, Bowman's capsules are found in the renal",
    "The composition of the filtrate in the Bowman's capsule is determined by",
    "The tube that carries urine out of the bladder is the",
    "As filtrate moves through the nephron it becomes increasing hypertonic because of the",
    "Which of the following is not a characteristic of the glomerulus?",
    "In a healthy person, the sequence of structures through which most glucose molecules pass is",
    "Secretions from the posterior pituitary affect which structure labelled above?",
    "The structure labelled X is the",
    "The function of the structure labelled Y is to",
    "When comparing the blood concentrations of urea and glucose in the hepatic portal vein to those in the renal vein, one finds that in the hepatic portal vein",
    "Decreasing the concentration of sodium ions in the blood will result in",
    "Movement of fluids from the glomerulus to Bowman's capsule is due to",
    "The site of tubular excretion is the",
    "The concentration of sodium in the blood would increase with increased plasma levels of a hormone from the",
    "Which of the following is not a function of the organ shown?",
    "Filtrate enters the Bowman's capsule by",
    "Which of the folloiwing occurs in the distal tubule to return acidic blood back to a normal pH?",
    "The inability to regulate the concentration of sodium ions in the blood could be due to improper functioning of the",
    "At which location would the greatest concentration of glucose be found?",
    "Which structure carries urine from the bladder to the outside of the body?",
    "Which substance is found in the glomerulus, Bowman's capsule and efferent arteriole but is not normally found in the collecting duct?",
    "Blood is brought to the glomerulus by the",
    "The source of antidiuretic hormone (ADH) is the",
    "The process that occurs at W is",
    "The permeability of which structure is altered by secretions from the adrenal cortex?",
    "Identify the correct order of structures through which urine passes on its way out of the body",
    "Which of the following will cause the kidneys to reabsorb more sodium ions?",
    "If a drop in the pH of the blood occurs, the kidneys will",
    "Frog eggs placed in an isotonic solution will",
    "Which of the labelled structures is the renal cortex?",
    "Antidiuretic hormone (ADH) is released by the",
    "The loop of Henle is found in the",
    "Two identical plant cell samples of equal mass were taken from the same plant and were prepared for an experiment. Each sample was placed in a different solution. The percent change in mass was recorded and graphed over an eight hour period ass shown above.<br>Given the results, which of the following statements is accurate?",
    "Molecules in the scell membrane that function as receptors are",
    "How many of the following factors would affect the permeability of the cell membrane?<br>1. Size of molecules<br>2. Lipid solubility of molecules<br>3. Presence of teleport channels<br>4. Presence of ATEP inside the cell",
    "The diagram illustrates that the membrane selects according to the",
    "Which of the following conditions would cause the change in the fluid levels as shown after 10 minutes?",
    "The fluid-mosaic membrane model describes the membrane as having a",
    "The diagram alllows a white blood cell ingesting a bacterium. The bacterium enters the white blood cell by",
    "The diagram above shows a thistle tube suspended in a solution. The inital concentrations of the solutions inside and outside the thistle tube are indicated. What will happen to the concentration of the salt solution surrounding the thistle tube?",
    "Carrier molecules that bring materials into cells are",
    "Which of the following moves material against a concentration gradient?"
]

answers = [
    ["W", "X", "Y", "Z"],
    ["collect urine", "protect the kidney", "adjust the pH of the blood", "supply blood to the kidney"],
    ["cortex", "vein", "pelvis", "medulla"],
    ["molecular size", "pH", "enzymes", "temperature"],
    ["ureter", "urethra", "distal tubule", "collecting duct"],
    ["active transport of sodium ions", "diffusion of glucose", "pressure filtration of the blood", "reabsorption of bicarbonate ions"],
    ["it surrounds the Bowman's capsule", "it is composed of capillaries", "its blood pressure promotes filtration", "it is connected to arterioles at both ends"],
    ["U, W, Z", "U, X, Y", "W, Z, X", "W, X, Y"],
    ["Y", "V", "W", "Z"],
    ["ureter", "urethra", "bladder", "collecting duct"],
    ["store urine", "filter blood", "produce urine", "maintain blood volume"],
    ["urea is higher and glucose is higher", "urea is lower and glucose is lower", "urea is lower and glucose is higher", "urea is higher and glucose is lower"],
    ["decreased ADH secretion and increased aldosterone secretion", "increased ADH secretion and increased aldosterone secretion", "increased ADH secretion and decreased aldosterone secretion", "decreased ADH secretion and decreased aldosterone secretion"],
    ["pressure filtration", "osmosis", "secretion", "active transport"],
    ["distal convoluted tubule", "loop of henle", "bowman's capsule", "proximal convoluted tubule"],
    ["anterior pituitary gland", "thyroid gland", "adrenal gland", "prostate gland"],
    ["to prolduce urea", "to excrete metabolic wastes", "to regualte the acidity of the blood", "to maintain a constant blood volume"],
    ["pressure filtration", "active transport", "tubular excretion", "selective reabsorption"],
    ["ammonia and hydrogen ions are reabsorbed and bicarbonate ions are excreted", "both sodium and hydrogen ions are excreted", "bicarbonate ions are excreted and hydrogen ions are reabsorbed", "ammonia and hydrogen ions are excreted and sodium ions are reabsorbed"],
    ["adrenal cortex, since it produces aldosterone", "adrenal cortex, since it produces ADH", "adrenal medulla, since it produces ADH", "adrenal medulla, since it produces aldosterone"],
    ["X", "Y", "Z", "W"],
    ["urethra", "ureter", "renal pelvis", "collecting duct"],
    ["glucose", "urea", "penicillin", "sodium ions"],
    ["afferent arteriole", "renal vein", "efferent arteriole", "peritubular capillaries"],
    ["posterior pituitary", "thyroid", "adrenal cortex", "anterior pituitary"],
    ["pressure filtration", "tubular excretion", "reabsorption of water", "selective reabsorption"],
    ["Y", "W", "X", "Z"],
    ["collecting duct -> renal pelvis -> ureter -> bladder -> urethra", "renal pelvis -> collecting duct -> ureter -> bladder -> urethra", "bladder -> collecting duct -> urethra -> renal pelvis -> ureter", "urethra -> ureter -> bladder -> renal pelvis -> collecting duct"],
    ["a decrease in blood pressure", "an increase in the volume of blood", "constriction of the afferent arterioles", "a decrease in the amount of ADH secreted"],
    ["decrease the secretion of hydrogen ions", "increase the absorption of urea", "decrease the absorption of sodium ions", "increase the reabsorption of bicarbonate ions"],
    ["remain the same", "burst", "shrink", "increase in volume"],
    ["W", "X", "Y", "Z"],
    ["posterior pituitary", "kidneys", "pancreas", "anterior pituitary"],
    ["renal medulla", "ureter", "urethra", "renal pelvis"],
    ["solution A was hypotonic to the plant cells", "both solutions were isotonic to the plant cells", "both solutions were hypotonic to the plant cells", "solution A was hypertonic and solution B was hypotonic to the plant cells"],
    ["proteins", "glycerol", "cholestorol", "phospholipids"],
    ["one", "two", "three", "four"],
    ["size of the molecules", "temperature of the solution", "concentration of the molecules", "electronic charge of the molecules"],
    ["Side A: 5% protein, Side B: 2% protein", "Side A: distilled water, Side B: 5% salt", "Side A: 2% glucose, Side B: 5% glucose", "Side A: 2% salt, Side B: 2% salt"],
    ["phospholipid bilayer", "sheet of protein", "sugar-phosphate backbone", "complementary base template"],
    ["phagocytosis", "diffusion", "pinocytosis", "active transport"],
    ["it will increase as water moves into the thistle tube", "it will decrease as salt moves into the thistle tube", "it will increase as salt moves out of the thistle tube", "it will decrease as water and glucose move out of the thistle tube"],
    ["proteins", "lipids", "glycogen", "phospholipids"],
    ["osmosis", "diffusion", "active transport", "facilitated transport"]
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

    if (document.getElementById('customQuestion').value >= 1 && document.getElementById('customQuestion').value <= 43) {
        indexMultipleChoiceQuestion = parseInt(document.getElementById('customQuestion').value)
    }
    else if (document.getElementById('customQuestion').value > 43 || document.getElementById('customQuestion').value < 0 || document.getElementById('customQuestion').value === '') {
        previousQuestion = indexMultipleChoiceQuestion
        indexMultipleChoiceQuestion = Math.floor(Math.random() * (43 - 1 + 1) + 1);
        while (answeredQuestions.includes(indexMultipleChoiceQuestion-1) || previousQuestion === indexMultipleChoiceQuestion) {
            previousQuestion = indexMultipleChoiceQuestion
            indexMultipleChoiceQuestion = Math.floor(Math.random() * (43 - 1 + 1) + 1);
        }
    }
    randomize(answers[indexMultipleChoiceQuestion-1])


    if (indexMultipleChoiceQuestion === 1 || (indexMultipleChoiceQuestion >= 8 && indexMultipleChoiceQuestion <= 11) || indexMultipleChoiceQuestion === 17 || indexMultipleChoiceQuestion === 21 || indexMultipleChoiceQuestion === 26 || indexMultipleChoiceQuestion === 27 || indexMultipleChoiceQuestion === 35 || indexMultipleChoiceQuestion === 38 || indexMultipleChoiceQuestion === 39 || indexMultipleChoiceQuestion === 41 || indexMultipleChoiceQuestion === 42) {
        image.style = 'display:block'
        if (indexMultipleChoiceQuestion === 1 || indexMultipleChoiceQuestion === 32) {
            image.width = 400
            image.height = 300
            image.src = './images/1.png'
        }
        else if (indexMultipleChoiceQuestion === 8 || indexMultipleChoiceQuestion === 9) {
            image.width = 450
            image.height = 300
            image.src = './images/2.png'
        }
        else if (indexMultipleChoiceQuestion === 10 || indexMultipleChoiceQuestion === 11) {
            image.width = 300
            image.height = 400
            image.src = './images/3.png'
        }
        else if (indexMultipleChoiceQuestion === 17) {
            image.width = 300
            image.height = 400
            image.src = './images/4.png'
        }
        else if (indexMultipleChoiceQuestion === 21) {
            image.width = 450
            image.height = 300
            image.src = './images/5.png'
        }
        else if (indexMultipleChoiceQuestion === 26 || indexMultipleChoiceQuestion === 27) {
            image.width = 450
            image.height = 300
            image.src = './images/6.png'
        }
        else if (indexMultipleChoiceQuestion === 35) {
            image.width = 600
            image.height = 300
            image.src = './images/7.png'
        }
        else if (indexMultipleChoiceQuestion === 38) {
            image.width = 600
            image.height = 300
            image.src = './images/8.png'
        }
        else if (indexMultipleChoiceQuestion === 39) {
            image.width = 600
            image.height = 300
            image.src = './images/9.png'
        }
        else if (indexMultipleChoiceQuestion === 41) {
            image.width = 600
            image.height = 200
            image.src = './images/10.png'
        }
        else if (indexMultipleChoiceQuestion === 42) {
            image.width = 400
            image.height = 300
            image.src = './images/11.png'
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