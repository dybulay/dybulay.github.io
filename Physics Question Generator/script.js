const earth_mass = 5.98e24;
const earth_radius = 6.38e6;
const gravitational_constant = 6.67e-11;
var questionsGenerated = 0;

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
    questionsGenerated += 1
    questionNumber = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);

    if (questionsGenerated > 1) {
        document.getElementById('questionsGenerated').innerHTML = 'You have generated ' + questionsGenerated + ' questions in this session so far.'
        document.getElementById('introduction').innerHTML = '';
    }

    if (questionNumber === 1 || questionNumber === 3 || questionNumber === 6 || questionNumber === 8 || questionNumber === 10 || questionNumber === 12) {
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
        else if (questionNumber === 8) {
            question8()
        }
        else if (questionNumber === 10) {
            question10()
        }
        else if (questionNumber === 12) {
            question12()
        }
    }
    else if (questionNumber === 5 || questionNumber === 7 || questionNumber === 9 || questionNumber === 11) {
        document.getElementById('question').style.display = 'block';
        document.getElementById('firstQuestion').style.display = 'block';
        document.getElementById('secondQuestion').style.display = 'block';
        if (questionNumber === 5) {
            question5()
        }
        else if (questionNumber === 7) {
            question7()
        }
        else if (questionNumber === 9) {
            question9()
        }
        else if (questionNumber === 11) {
            question11()
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
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + ' J';
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
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + ' J';
    document.getElementById('answerTwo').innerHTML = "The answer is " + answerTwo.toExponential(2) + ' J';
    document.getElementById('answerThree').innerHTML = "The answer is " + answerThree.toExponential(2) + ' J';
}

function question3() {
    const satellite_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const altitude = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e2;
    document.getElementById("questionOne").innerHTML = "A " + satellite_mass + " kg sattelite is in a stable circular orbit around the Earth at an altitude of " + altitude.toExponential(2) + " m. What is the satellite's total energy in this orbit?";
    const answerOne = -0.5*((gravitational_constant*earth_mass*satellite_mass)/(earth_radius+altitude))
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + ' J';
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
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + ' J';
    document.getElementById('answerTwo').innerHTML = "The answer is " + answerTwo.toExponential(2) + ' J';
    document.getElementById('answerThree').innerHTML = "The answer is " + answerThree.toExponential(2) + ' m/s';
}

function question5() {
    const asteroid_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e13;
    const radius = (Math.floor(Math.random() * (1000 - 100)) + 100)/10;
    const velocity = (Math.floor(Math.random() * (100 - 10)) + 10)/10;
    document.getElementById('question').innerHTML = "A ball is thrown vertically upwards from the surface of an asteroid of mass " + asteroid_mass.toExponential(2) + " kg and radius of " + radius + ' km.';
    document.getElementById('questionOne').innerHTML = "What height above the surface of the asteroid does the ball reach if it has an initial velocity of " + velocity + ' m/s?';
    document.getElementById('questionTwo').innerHTML = "At what speed must the ball be thrown to escape the gravitational field of the asteroid?";
    const answerOne = ((-gravitational_constant*asteroid_mass)/(0.5*(velocity**2)-((gravitational_constant*asteroid_mass)/(radius*1000))))-(radius*1000);
    const answerTwo = Math.sqrt((2*gravitational_constant*asteroid_mass)/(radius*1000));
    document.getElementById('answerOne').value = answerOne.toFixed();
    document.getElementById('answerTwo').value = answerTwo.toFixed(1);
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toFixed() + ' m';
    document.getElementById('answerTwo').innerHTML = "The answer is " + answerTwo.toFixed(1) + ' m/s';
}

function question6() {
    const satellite_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const initial_orbital_radius = (Math.floor(Math.random() * (500 - 100)) + 100)*10e5;
    const final_orbital_radius = (Math.floor(Math.random() * (1000 - 500)) + 500)*10e5;
    document.getElementById('questionOne').innerHTML = "A " + satellite_mass + " kg satellite travels in a stable circular orbit around the Earth. The orbital radius is " + initial_orbital_radius.toExponential(2) + ' m. How much work is required to increase the orbital radius to ' + final_orbital_radius.toExponential(2) + ' m?';
    const answerOne = (0.5*gravitational_constant*earth_mass*satellite_mass)*((1/initial_orbital_radius)-(1/final_orbital_radius));
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + ' J';
}

function question7() {
    const distance = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e8;
    const planetX = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e19;
    const planetY = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e20;
    const astronaut_mass = (Math.floor(Math.random() * (120 - 50)) + 50);
    const a = (planetY-planetX);
    const b = (2*planetX*distance);
    const c = (-planetX*(distance**2));
    document.getElementById('question').innerHTML = "Two planets, X and Y, are separated by a distance of " + distance.toExponential(2) + " m. Planet X has a mass of " + planetX.toExponential(2) + ' kg and Planet Y has a mass of ' + planetY.toExponential(2) + ' kg.';
    document.getElementById('questionOne').innerHTML = "At what point between the two planets would an astronaut have to be in order to feel no net force?";
    document.getElementById('questionTwo').innerHTML = "What is the gravitational potential energy of a " + astronaut_mass + " kg astronaut at this point?";
    const answerOne = (-b + Math.sqrt(b**2-(4*a*c)))/(2*a);
    const answerTwo = (-gravitational_constant*astronaut_mass)*((planetX/answerOne)+(planetY/(distance-answerOne)));
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerTwo').value = answerTwo.toFixed();
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + ' m';
    document.getElementById('answerTwo').innerHTML = "The answer is " + answerTwo.toFixed() + ' J';
}

function question8() {
    const satellite_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10;
    const altitude = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e2;
    document.getElementById('questionOne').innerHTML = "A " + satellite_mass + " kg satellite is in a stable circular orbit at an altitude of " + altitude.toExponential(2) + " above the Earth's surface. At what speed is the satellite travelling?";
    const answerOne = (Math.sqrt((gravitational_constant*earth_mass)/(earth_radius+altitude)));
    document.getElementById('answerOne').value = answerOne.toFixed();
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toFixed() + ' m/s';
}

function question9() {
    const period = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e3;
    const orbital_radius = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e6;
    document.getElementById('question').innerHTML = 'A moon orbits a planet with a period of ' + period.toExponential(2) + ' s. The average radius of this orbit is ' + orbital_radius.toExponential(2) + ' m.';
    document.getElementById('questionOne').innerHTML = "What is the moon's centripetal acceleration?";
    document.getElementById('questionTwo').innerHTML = "What is the planet's mass?";
    const answerOne = ((4*(Math.PI)**2*orbital_radius)/period**2);
    const answerTwo = ((answerOne*(orbital_radius)**2)/gravitational_constant);
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerTwo').value = answerTwo.toExponential(2);
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + " m/s^2";
    document.getElementById('answerTwo').innerHTML = answerTwo.toExponential(2) + " kg";
}

function question10() {
    const velocity = (Math.floor(Math.random() * (1000 - 100)) + 100)*10
    document.getElementById('questionOne').innerHTML = 'A satellite orbits Earth at a velocity of ' + velocity + " m/s. What is the radius of this orbit?"
    const answerOne = ((gravitational_constant*earth_mass)/(velocity)**2)
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + " m";
}

function question11() {
    const planet_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e19;
    const orbital_radius = (Math.floor(Math.random() * (1000-100)) + 100)*10e2;
    document.getElementById('question').innerHTML ="A planet has a mass of " + planet_mass.toExponential(2) + " kg. One of it's moons has an orbital radius of " + orbital_radius + " km.";
    document.getElementById('questionOne').innerHTML = "What is the moon's orbital speed?";
    document.getElementById('questionTwo').innerHTML = "What is the moon's orbital period?";
    const answerOne = (Math.sqrt((gravitational_constant*planet_mass)/(orbital_radius*1000)));
    const answerTwo = (Math.sqrt((4*(Math.PI)**2*(orbital_radius*1000)**3)/(gravitational_constant*planet_mass)));
    document.getElementById('answerOne').value = answerOne.toFixed();
    document.getElementById('answerTwo').value = answerTwo.toExponential(2);
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toFixed() + " m/s";
    document.getElementById('answerTwo').innerHTML = "The answer is " + answerTwo.toExponential(2) + " s";
}

function question12() {
    const planet_mass = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e20;
    const period = (Math.floor(Math.random() * (1000 - 100)) + 100)*10e2;
    document.getElementById('questionOne').innerHTML = "A satellite is in a circular orbit around a planet of mass " + planet_mass.toExponential(2) + " kg. If the period of revolution is " + period.toExponential(2) + " s, how far away is the satellite from the planet?";
    const answerOne = (Math.cbrt(((period)**2*gravitational_constant*planet_mass)/(4*(Math.PI)**2)));
    document.getElementById('answerOne').value = answerOne.toExponential(2);
    document.getElementById('answerOne').innerHTML = "The answer is " + answerOne.toExponential(2) + " m";
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
