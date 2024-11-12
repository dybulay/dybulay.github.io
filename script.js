const earth_mass = 5.98e24;
const earth_radius = 6.38e6;
const gravitational_constant = 6.67e-11;
const userAnswer = document.getElementById("userAnswer").value;

function hideElements() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('firstQuestion').style.display = 'none';
    document.getElementById('secondQuestion').style.display = 'none';
    document.getElementById('thirdQuestion').style.display = 'none';
    document.getElementById('answerOne').style.display = 'none';
    document.getElementById('answerTwo').style.display = 'none';
    document.getElementById('answerThree').style.display = 'none';
    document.getElementById('feedbackOne').innerHTML = '';
    document.getElementById('feedbackTwo').innerHTML = '';
    document.getElementById('feedbackThree').innerHTML = '';
}

function generateQuestion() {
    hideElements()
    questionNumber = (Math.floor(Math.random() * (7 - 1 + 1)) + 1);
    if (questionNumber === 1 || questionNumber === 3 || questionNumber === 6) {
        document.getElementById('firstQuestion').style.display = 'block';
        if (questionNumber === 1) {
            question1()
        }
        else if (questionNumber === 3) {
            question3()
        }
        else if (questionNumber === 6) {
            question6()
        }
    }
    else if (questionNumber === 5 || questionNumber === 7) {
        document.getElementById('question').style.display = 'block';
        document.getElementById('firstQuestion').style.display = 'block';
        document.getElementById('secondQuestion').style.display = 'block';
        if (questionNumber === 5) {
            question5()
        }
        else if (questionNumber === 7) {
            question7()
        }
    }
    else if (questionNumber === 2 || questionNumber === 4) {
        document.getElementById('question').style.display = 'block';
        document.getElementById('firstQuestion').style.display = 'block';
        document.getElementById('secondQuestion').style.display = 'block';
        document.getElementById('thirdQuestion').style.display = 'block';
        if (questionNumber === 2) {
            question2()
        }
        else if (questionNumber === 4) {
            question4()
        }
    }
}

function question1() {
    const mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const altitude = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e2;
    document.getElementById("questionOne").innerHTML = "How much work is required to lift a " + mass + " kg object from the surface of the Earth to an altitude of " + altitude.toExponential(2) + ' m?';
    const answerOne = gravitational_constant*mass*earth_mass*(1/(earth_radius) - 1/(earth_radius+altitude));
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerOne').innerHTML = answerOne.toExponential(2) + ' J';
}

function question2() {
    const satellite_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const orbital_radius = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e4;
    document.getElementById("question").innerHTML = "A " + satellite_mass + " kg sattelite travels in a stable circular orbit around the Earth. The orbital radius is " + orbital_radius.toExponential(2) + ' m.';
    document.getElementById("questionOne").innerHTML = "What is the sattelite's potential energy?";
    document.getElementById("questionTwo").innerHTML = "What is the sattelite's kinetic energy?";
    document.getElementById("questionThree").innerHTML = "What is the total energy of the sattelite?";
    const answerOne = -(gravitational_constant*earth_mass*satellite_mass)/orbital_radius;
    const answerTwo = 0.5*((gravitational_constant*earth_mass*satellite_mass)/(orbital_radius))
    const answerThree = answerOne + answerTwo;
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerTwo').value = answerTwo.toExponential(2);
    document.getElementById('answerThree').value = answerThree.toExponential(2);
    document.getElementById('answerOne').innerHTML = answerOne.toExponential(2) + ' J';
    document.getElementById('answerTwo').innerHTML = answerTwo.toExponential(2) + ' J';
    document.getElementById('answerThree').innerHTML = answerThree.toExponential(2) + ' J';
}

function question3() {
    const satellite_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const altitude = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e2;
    document.getElementById("questionOne").innerHTML = "A " + satellite_mass + " kg sattelite is in a stable circular orbit at an altitude of " + altitude.toExponential(2) + " m. What is the satellite's total energy in this orbit?";
    const answerOne = -0.5*((gravitational_constant*earth_mass*satellite_mass)/(earth_radius+altitude))
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerOne').innerHTML = answerOne.toExponential(2) + ' J';
}

function question4() {
    const mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const altitude = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e2;
    document.getElementById("question").innerHTML = "A " + mass + " kg object is at rest on the surface of Earth.";
    document.getElementById("questionOne").innerHTML = "How much work is required to lift it to an altitude of " + altitude.toExponential(2) + ' m?'
    document.getElementById("questionTwo").innerHTML = "How much work is required to lift it to infinity?";
    document.getElementById("questionThree").innerHTML = "What is the escape velocity?";
    const answerOne = gravitational_constant*mass*earth_mass*(1/(earth_radius) - 1/(earth_radius+altitude));
    const answerTwo = gravitational_constant*mass*earth_mass*(1/(earth_radius));
    const answerThree = Math.sqrt((2*gravitational_constant*earth_mass)/(earth_radius));
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerTwo').value = answerTwo.toExponential(2);
    document.getElementById('answerThree').value = answerThree.toExponential(2);
    document.getElementById('answerOne').innerHTML = answerOne.toExponential(2) + ' J';
    document.getElementById('answerTwo').innerHTML = answerTwo.toExponential(2) + ' J';
    document.getElementById('answerThree').innerHTML = answerThree.toExponential(2) + ' m/s';
}

function question5() {
    const asteroid_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e13;
    const radius = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const velocity = (Math.floor(Math.random() * (100 - 10)) + 10)/10;
    document.getElementById('question').innerHTML = "A ball is thrown vertically upwards from the surface of an asteroid of mass " + asteroid_mass.toExponential(2) + " kg and radius of " + radius + ' m.';
    document.getElementById('questionOne').innerHTML = "What height above the surface of the asteroid does the ball reach if it has an initial velocity of " + velocity + ' m/s?';
    document.getElementById('questionTwo').innerHTML = "At what speed must the ball be thrown to escape the gravitational field of the asteroid?";
    const answerOne = ((-gravitational_constant*asteroid_mass)/(0.5*(velocity**2)-((gravitational_constant*asteroid_mass)/radius)))-radius;
    const answerTwo = Math.sqrt((2*gravitational_constant*asteroid_mass)/(radius));
    document.getElementById('answerOne').value = answerOne.toFixed();
    document.getElementById('answerTwo').value = answerTwo.toFixed(1);
    document.getElementById('answerOne').innerHTML = answerOne.toFixed() + ' m';
    document.getElementById('answerTwo').innerHTML = answerTwo.toFixed(1) + ' m/s';
}

function question6() {
    const satellite_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const initial_orbital_radius = (Math.floor(Math.random() * (500 - 100)) + 100)*10e5;
    const final_orbital_radius = (Math.floor(Math.random() * (1000 - 500)) + 500)*10e5;
    document.getElementById('questionOne').innerHTML = "A " + satellite_mass + " kg satellite travels in a stable circular orbit around the earth. The orbital radius is " + initial_orbital_radius.toExponential(2) + ' m. How much work is required to increase the orbital radius to ' + final_orbital_radius.toExponential(2) + ' m?';
    const answerOne = (0.5*gravitational_constant*earth_mass*satellite_mass)*((1/initial_orbital_radius)-(1/final_orbital_radius));
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerOne').innerHTML = answerOne.toExponential(2) + ' J';
}

function question7() {
    const distance = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e8;
    const planetX = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e19;
    const planetY = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e20;
    const astronaut_mass = (Math.floor(Math.random() * (120 - 50)) + 50);
    const a = (planetY-planetX);
    const b = (2*-planetX*distance);
    const c = (-planetX*(distance**2));
    document.getElementById('question').innerHTML = "Two planets, X and Y, are separated by a distance of " + distance.toExponential(2) + " m. Planet X has a mass of " + planetX.toExponential(2) + ' kg and Planet Y has a mass of ' + planetY.toExponential(2) + ' kg.';
    document.getElementById('questionOne').innerHTML = "At what point between the two planets would an astronaut have to be in order to feel no net force?";
    document.getElementById('questionTwo').innerHTML = "What is the gravitational potential energy of a " + astronaut_mass + " kg astronaut at this point?";
    const answerOne = (-b + Math.sqrt(b**2-(4*a*c)))/(2*a);
    const answerTwo = (-gravitational_constant*astronaut_mass)*(planetX/distance+planetY/(distance-answerOne));
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerTwo').value = answerTwo.toFixed();
    document.getElementById('answerOne').innerHTML = answerOne.toExponential(2) + ' m';
    document.getElementById('answerTwo').innerHTML = answerTwo.toFixed() + ' J';
}

function checkAnswerOne() {
    if (document.getElementById('userAnswerOne').value === document.getElementById('answerOne').value) {
        document.getElementById('feedbackOne').innerHTML = "You're right!";
        document.getElementById('answerOne').style.display = 'block';
    }
    else {
        document.getElementById('feedbackOne').innerHTML = "You're wrong!";
    }
}

function checkAnswerTwo() {
    if (document.getElementById('userAnswerTwo').value === document.getElementById('answerTwo').value) {
        document.getElementById('feedbackTwo').innerHTML = "You're right!";
        document.getElementById('answerTwo').style.display = 'block';
    }
    else {
        document.getElementById('feedbackTwo').innerHTML = "You're wrong!";
    }
}

function checkAnswerThree() {
    if (document.getElementById('userAnswerThree').value === document.getElementById('answerThree').value) {
        document.getElementById('feedbackThree').innerHTML = "You're right!";
        document.getElementById('answerThree').style.display = 'block';
    }
    else {
        document.getElementById('feedbackThree').innerHTML = "You're wrong!";
    }
}

function showAnswerOne() {
    document.getElementById('answerOne').style.display = 'block';
}

function showAnswerTwo() {
    document.getElementById('answerTwo').style.display = 'block';
}

function showAnswerThree() {
    document.getElementById('answerThree').style.display = 'block';
}