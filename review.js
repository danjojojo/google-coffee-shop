let reviews;
let slideIndex = 0;

function loadReviews(review){
    return`
    <div class="review">
        <p class="review__profile">${review.username[0]}</p>
        <p class="review__name">${review.username}</p>
        <p class="review__body">${review.body}</p>
    </div>
    `;
}

function getFirstLetter(username){
    console.log(username[0]);
}

function moveSlider(e){

    if(e.currentTarget.id.includes('right')){
        slideIndex === reviews.length - 1 ? (slideIndex = 0) : slideIndex++;
    } else {
        slideIndex === 0 ? (slideIndex = reviews.length - 1) : slideIndex--;
    }
    document.querySelector('.reviews').style.transform = `translate(${-100 * slideIndex}%)`;
}


// 1. Fetch data from our API -- reviews.json
async function fetchReviews(){
    await fetch('reviews.json')
    .then((response) => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        reviews = data;
        // 2. Parse the data and create the 'review' divs
        document.querySelector('.reviews').innerHTML = data.map(loadReviews).join('');
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation', error);
    });
}

fetchReviews();

// 3. Add event listeners to move the sliders left and right

document.querySelector('#arrow--right').addEventListener('click', moveSlider);
document.querySelector('#arrow--left').addEventListener('click', moveSlider);


// Mema

