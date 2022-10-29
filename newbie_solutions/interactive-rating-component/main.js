
(function() {

    let score;

    document.querySelectorAll('.rating').forEach(item => {
        item.addEventListener('click', function onClick(event) {

            const element = document.getElementById(this.id);
            setRatingColors(element);  
        })
    })

})()


// reset all rating colors; change selected rating color; update score variable
function setRatingColors(element) {
    document.querySelectorAll('.rating').forEach(item => {
        item.style.backgroundColor = 'hsl(213, 19%, 18%';
        item.style.color = 'var(--medium-gray)';
    })

    element.style.backgroundColor = 'var(--orange)';
    element.style.color = 'var(--white)';

    score = element.innerText;  
}