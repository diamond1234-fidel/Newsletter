// Expand/Collapse benefit section        
function toggleBenefits() {
    const benefitsContent = document.querySelector('.benefits-content');
    benefitsContent.style.display = (benefitsContent.style.display === 'none') ? 'block' : 'none';

}

window.addEventListener('load', (event) => {
    $('#popup').fadeIn('slow').delay(3000).fadeOut('slow')
});

var images = [
    "20230904_125708.jpg",
    "20230928_103245.jpg", // Example image paths
    "Screenshot_20230719-135747_Lite.jpg?",
    "d/Inshot.jpeg",
    "d/Gemini_Generated_Image.jpeg",
];


const loader = document.querySelector('.loader');

var currentIndex = 0;
var currentIndex2 = 0

function changePicture() {
    var picture = document.getElementById('changing-picture');
    picture.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    var picture2 = document.getElementById('changing-picture2');
    picture2.src = images[currentIndex2];
    currentIndex2 = (currentIndex2 + 3) % images.length;
}

// Change picture every 3 seconds (adjust as needed)
setInterval(changePicture, 10000);
var currentContent = 2;
var totalContents = $(".content").length;
function NextBtn() {

    if (currentContent < 6) {
        $("#content" + currentContent).animate({ "margin-left": "-100%" });
        $("#content" + (currentContent + 1)).animate({ "margin-left": "0%" });
        currentContent++;
    }
}

function prevBtn() {
    if (currentContent > 2) {
        $("#content" + currentContent).animate({ "margin-left": "100%" });
        $("#content" + (currentContent - 1)).animate({ "margin-left": "0%" });
        currentContent--;

    }
}

function stoploader(){
    loader.style.display = 'none'
}

function startloader(){    
    alert('in')
    loader.style.display = 'block'
    setTimeout(stoploader, 3000)
}