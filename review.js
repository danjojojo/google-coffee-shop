let reviews;
let slideIndex = 0;

function loadReviews(review){
    return`
    <div class="review">
        <div class="profile-pic" style="background-color: ${review.headshotcolor}; >
            <p class="review__profile">${review.username[0]}</p>
        </div>
        <p class="review__name">${review.username}</p>
        <p class="review__body">${review.body}</p>
    </div>
    `;
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
document.querySelector('.add-to-order').onclick = addtoorder;

function addtoorder(){
    alert(`Added to cart successfully!`);
}


// FOR BEST SELLERS
// let bestsellers;


// function loadBestSellers(bestsellers){
//     return`
//     <div class="review">
//         <div class="profile-pic">
//             <p class="review__profile">${review.username[0]}</p>
//         </div>
//         <p class="review__name">${review.username}</p>
//         <p class="review__body">${review.body}</p>
//     </div>
//     `;
// }

// async function fetchBestSellers(){
//     await fetch('bestsellers.json')
//     .then((response) => {
//         if(!response.ok){
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         bestsellers = data;
//         // 2. Parse the data and create the 'review' divs
//         document.querySelector('.best-sellers').innerHTML = data.map(loadBestSellers).join('');
//     })
//     .catch((error) => {
//         console.error('There has been a problem with your fetch operation', error);
//     });
// }


