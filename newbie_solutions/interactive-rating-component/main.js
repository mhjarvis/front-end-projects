let score = 0;

(function() {
    
    // eventListener for all individual rating scores
    document.querySelectorAll('.rating').forEach(item => {
        item.addEventListener('click', function onClick(event) {

            const element = document.getElementById(this.id);
            setScore(element.innerText);  
            setRatingColors(element);  
        })
    })

    // eventListener for Submit button
    document.querySelector('.submit-button').addEventListener('click', function onClick(event) {

        const scoreDisplayElement = document.querySelector('.score-select');
        toggleForm();
        scoreOutput(scoreDisplayElement);

    })

})()

function getScore() {
    return score;
}

function setScore(num) {
    score = num;
}

// reset all rating colors; change selected rating color; update score variable
function setRatingColors(element) {
    document.querySelectorAll('.rating').forEach(item => {
        item.style.backgroundColor = 'hsl(213, 19%, 18%';
        item.style.color = 'var(--medium-gray)';
    })

    element.style.backgroundColor = 'var(--orange)';
    element.style.color = 'var(--white)';
}

// toggle between the submit review form and the thank you note
function toggleForm() {

    if(score === 0) { // prevent submittion without score
        return;
    }

    const formContainer = document.querySelector('#form-container');
    formContainer.classList = 'hidden';

    const thankyouContainer = document.querySelector('#thank-you-note');
    thankyouContainer.classList = 'main-container thankyou-container';
}

function scoreOutput(scoreDisplayElement) {
    scoreDisplayElement.innerText = `You selected ${getScore()} out of 5`;
}