// tableau d'images
var imagesTable = ["url(images/image-product-1.jpg)","url(images/image-product-2.jpg)","url(images/image-product-3.jpg)","url(images/image-product-4.jpg)"];
// -----------------------------------------------------------------------------------------------------------------------
// faire apparaitre les details du panier
const cartImg = document.getElementById("cart-img");
const lineCartProfileDeux = document.getElementById("line-cart-profile-deux");
var isActiveOne = true;
cartImg.addEventListener("click", function(event){
    if(!isActiveOne){
        lineCartProfileDeux.style.transform = "translateY(-200%)";
        isActiveOne = true;
    }else{
        lineCartProfileDeux.style.transform = "translateY(0%)";
        isActiveOne = false;
    }
});
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// ajouter les classes qu'ils faut en mobile
const hamburger = document.getElementById("hamburger");
const mobileNavigation = document.getElementById("mobile-navigation");

window.addEventListener("load",function(event){
    if(window.innerWidth <= 768){
        hamburger.classList.add("hamburger");
        mobileNavigation.classList.add("mobile-navigation-add");
        zoomImages.classList.add("nozoom");
    }else{
        hamburger.classList.remove("hamburger");
        mobileNavigation.classList.remove("mobile-navigation-add");
        zoomImages.classList.remove("nozoom");
    }
});
window.addEventListener("resize",function(event){
    if(window.innerWidth <= 768){
        hamburger.classList.add("hamburger");
        mobileNavigation.classList.add("mobile-navigation-add");
        zoomImages.classList.add("nozoom");
    }else{
        hamburger.classList.remove("hamburger");
        mobileNavigation.classList.remove("mobile-navigation-add");
        zoomImages.classList.remove("nozoom");
    }
});
// ----------------------------------------------------------------------------------------------------------------------------------
// faire apparaitre le menu
var isActiveTwo = true;
hamburger.addEventListener("click", function(event){
    if(!isActiveTwo){
        mobileNavigation.style.transform = "translateX(0%)";
        hamburger.style.background = " url(images/icon-close.svg)";
        hamburger.style.height = "0.8em";
        hamburger.style.backgroundSize = "contain";
        hamburger.style.backgroundPosition = "center";
        hamburger.style.backgroundRepeat = "no-repeat";
        isActiveTwo = true;
    }
    else{
        mobileNavigation.style.transform = "translateX(-100%)";
        hamburger.style.background = " url(images/icon-menu.svg)";
        hamburger.style.height = "0.8em";
        hamburger.style.backgroundSize = "contain";
        hamburger.style.backgroundPosition = "center";       
        hamburger.style.backgroundRepeat = "no-repeat";
        isActiveTwo = false;
    }
});
// -------------------------------------------------------------------------------------------------------------------------------
// faire apparaitre la page du zoom
const closeZoomImages = document.getElementById("close-zoom-images");
const zoomImages = document.getElementById("zoom-images");
const productImagePrincipale  = document.getElementById("product-image-principale");
var   isActiveThree = true;
// ouvrir et fermer le zoom d'image
closeZoomImages.addEventListener("click", function(event){
    zoomImages.style.transform = "translateX(-100%)";
});
productImagePrincipale.addEventListener("click", function(event){
    zoomImages.style.transform = "translateX(0%)";
});
// --------------------------------------------------------------------------------------------------------------------------------
// gerer le changement d'images principale ainsi que le filtre blanc
const selectedOne = document.getElementById("selcted-1");
const selectedTwo = document.getElementById("selcted-2");
const selectedThree = document.getElementById("selcted-3");
const selectedFour = document.getElementById("selcted-4");

var indexSelected  = 0;

selectedOne.addEventListener("click", function(event){
    productImagePrincipale.style.background = imagesTable[0];
    productImagePrincipale.style.backgroundSize = "cover";
    productImagePrincipale.style.backgroundPosition = "center";
    indexSelected = 1;
    indexChange();
});

selectedTwo.addEventListener("click", function(event){
    productImagePrincipale.style.background = imagesTable[1];
    productImagePrincipale.style.backgroundSize = "cover";
    productImagePrincipale.style.backgroundPosition = "center";
    indexSelected = 2;
    indexChange();
});

selectedThree.addEventListener("click", function(event){
    productImagePrincipale.style.background = imagesTable[2];
    productImagePrincipale.style.backgroundSize = "cover";
    productImagePrincipale.style.backgroundPosition = "center";
    indexSelected = 3;
    indexChange();
});

selectedFour.addEventListener("click", function(event){
    productImagePrincipale.style.background = imagesTable[3];
    productImagePrincipale.style.backgroundSize = "cover";
    productImagePrincipale.style.backgroundPosition = "center";
    indexSelected = 4;
    indexChange();
});
// -----------------------------------------------------------------------------------------
// dertermine s'il faut oui ou non apppliquer le filtre blanc
const selectedConfirmeOne = document.getElementById("selected-confirme-one");
const selectedConfirmeTwo = document.getElementById("selected-confirme-two");
const selectedConfirmeThree = document.getElementById("selected-confirme-three");
const selectedConfirmeFour = document.getElementById("selected-confirme-four");
function indexChange(){
    if(indexSelected == 1){
        selectedConfirmeOne.style.background = "hsla(0, 0%, 100%, 0.322)";
        selectedOne.style.border = "2px solid hsl(26, 100%, 55%)";
    }else{
        selectedConfirmeOne.style.background = "transparent";
        selectedOne.style.border = "transparent";
    };
    
    if(indexSelected == 2){
        selectedConfirmeTwo.style.background = "hsla(0, 0%, 100%, 0.322)";
        selectedTwo.style.border = "2px solid hsl(26, 100%, 55%)";
    }else{
        selectedConfirmeTwo.style.background = "transparent";
        selectedTwo.style.border = "transparent";
    };

    if(indexSelected == 3){
        selectedConfirmeThree.style.background = "hsla(0, 0%, 100%, 0.322)";
        selectedThree.style.border = "2px solid hsl(26, 100%, 55%)";
    }else{
        selectedConfirmeThree.style.background = "transparent";
        selectedThree.style.border = "transparent";
    };

    if(indexSelected == 4){
        selectedConfirmeFour.style.background = "hsla(0, 0%, 100%, 0.322)";
        selectedFour.style.border = "2px solid hsl(26, 100%, 55%)";
    }else{
        selectedConfirmeFour.style.background = "transparent";
        selectedFour.style.border = "transparent";
    };
}
if(indexSelected == 0){
    selectedConfirmeOne.style.background = "hsla(0, 0%, 100%, 0.322)";
    selectedOne.style.border = "2px solid hsl(26, 100%, 55%)";
}
// --------------------------------------------------------------------------------------------------------------------
// gerer le defilement des images
const previousZomm = document.getElementById("previous-zomm");
const nextZoom = document.getElementById("next-zoom");
const zoomImagesPrincipale = document.getElementById("zoom-image-line-two");
var testNext = 0;

nextZoom.addEventListener('click', function(event){
    testNext++;
    if(testNext>3){
        testNext = 3;
    }
    zoomChange();
    indexSelectedZommChange();
});

previousZomm.addEventListener('click', function(event){
    testNext--;
    if(testNext<0){
        testNext = 0;
    }
    zoomChange();
    indexSelectedZommChange();
});



function zoomChange(){
    if(testNext == 0){
        zoomImagesPrincipale.style.background = imagesTable[testNext];
        zoomImagesPrincipale.style.backgroundSize = "cover";
        zoomImagesPrincipale.style.backgroundPosition = "center";
        indexSelectedZomm = 1;
    }

    if(testNext == 1){
        zoomImagesPrincipale.style.background = imagesTable[testNext];
        zoomImagesPrincipale.style.backgroundSize = "cover";
        zoomImagesPrincipale.style.backgroundPosition = "center";
        indexSelectedZomm = 2;
    }

    if(testNext == 2){
        zoomImagesPrincipale.style.background = imagesTable[testNext];
        zoomImagesPrincipale.style.backgroundSize = "cover";
        zoomImagesPrincipale.style.backgroundPosition = "center";
        indexSelectedZomm = 3;
    }

    if(testNext == 3){
        zoomImagesPrincipale.style.background = imagesTable[testNext];
        zoomImagesPrincipale.style.backgroundSize = "cover";
        zoomImagesPrincipale.style.backgroundPosition = "center";
        indexSelectedZomm = 4;
    }
}
// -------------------------------------------------------------------------
// gestion de la troisieme ligne
const zommSelectedOne = document.getElementById("zoom-selected-one");
const zommSelectedTwo = document.getElementById("zoom-selected-two");
const zommSelectedThree = document.getElementById("zoom-selected-three");
const zommSelectedFour = document.getElementById("zoom-selected-four");

const rgbaSelectedOne = document.getElementById("rgba-seclected-one");
const rgbaSelectedTwo = document.getElementById("rgba-seclected-two");
const rgbaSelectedThree = document.getElementById("rgba-seclected-three");
const rgbaSelectedFour = document.getElementById("rgba-seclected-four");

var indexSelectedZomm = 0;

rgbaSelectedOne.addEventListener("click", function(event){
    zoomImagesPrincipale.style.background = imagesTable[0];
    zoomImagesPrincipale.style.backgroundSize = "cover";
    zoomImagesPrincipale.style.backgroundPosition = "center";
    testNext = 0;
    indexSelectedZomm = 1;
    indexSelectedZommChange();
});
rgbaSelectedTwo.addEventListener("click",function(event){
    zoomImagesPrincipale.style.background = imagesTable[1];
    zoomImagesPrincipale.style.backgroundSize = "cover";
    zoomImagesPrincipale.style.backgroundPosition = "center";
    testNext = 1;
    indexSelectedZomm = 2;
    indexSelectedZommChange();
});
rgbaSelectedThree.addEventListener("click",function(event){
    zoomImagesPrincipale.style.background = imagesTable[2];
    zoomImagesPrincipale.style.backgroundSize = "cover";
    zoomImagesPrincipale.style.backgroundPosition = "center";
    testNext = 2;
    indexSelectedZomm = 3;
    indexSelectedZommChange();
});
rgbaSelectedFour.addEventListener("click",function(event){
    zoomImagesPrincipale.style.background = imagesTable[3];
    zoomImagesPrincipale.style.backgroundSize = "cover";
    zoomImagesPrincipale.style.backgroundPosition = "center";
    testNext = 3;
    indexSelectedZomm = 4;
    indexSelectedZommChange();
});
// gestion du filtre blanc
if(indexSelectedZomm == 0){
    // faire apparaitre le rgba du zoom au debut
    zommSelectedOne.style.border = "2px solid hsl(26, 100%, 55%)";
    rgbaSelectedOne.style.background = "hsla(0, 0%, 100%, 0.322)";
}

function indexSelectedZommChange(){
    if(indexSelectedZomm == 1){
        zommSelectedOne.style.border = "2px solid hsl(26, 100%, 55%)";
        rgbaSelectedOne.style.background = "hsla(0, 0%, 100%, 0.322)";
    }else{
        zommSelectedOne.style.border = "transparent";
        rgbaSelectedOne.style.background = "transparent";
    }

    if(indexSelectedZomm == 2){
        zommSelectedTwo.style.border = "2px solid hsl(26, 100%, 55%)";
        rgbaSelectedTwo.style.background = "hsla(0, 0%, 100%, 0.322)";
    }else{
        zommSelectedTwo.style.border = "transparent";
        rgbaSelectedTwo.style.background = "transparent";
    }

    if(indexSelectedZomm == 3){
        zommSelectedThree.style.border = "2px solid hsl(26, 100%, 55%)";
        rgbaSelectedThree.style.background = "hsla(0, 0%, 100%, 0.322)";
    }else{
        zommSelectedThree.style.border = "transparent";
        rgbaSelectedThree.style.background = "transparent";
    }

    if(indexSelectedZomm == 4){
        zommSelectedFour.style.border = "2px solid hsl(26, 100%, 55%)";
        rgbaSelectedFour.style.background = "hsla(0, 0%, 100%, 0.322)";
    }else{
        zommSelectedFour.style.border = "transparent";
        rgbaSelectedFour.style.background = "transparent";
    }
};
// ----------------------------------------------------------------------------
// diaporama sur mobile
const previous = document.getElementById('previous');
const next = document.getElementById('next');
var nextMobileIndex = 0;

previous.addEventListener("click", function(event){
    nextMobileIndex--;
    if(nextMobileIndex<0){
        nextMobileIndex = 0;
    }
    nextMobile();
});
next.addEventListener("click", function(event){
    nextMobileIndex++;
    if(nextMobileIndex>3){
        nextMobileIndex = 3;
    }
    nextMobile();
});

function nextMobile(){
    if(nextMobileIndex == 0){
        productImagePrincipale.style.background = imagesTable[0];
        productImagePrincipale.style.backgroundSize = "cover";
        productImagePrincipale.style.backgroundPosition = "center";
    }

    if(nextMobileIndex == 1){
        productImagePrincipale.style.background = imagesTable[1];
        productImagePrincipale.style.backgroundSize = "cover";
        productImagePrincipale.style.backgroundPosition = "center";
    }

    if(nextMobileIndex == 2){
        productImagePrincipale.style.background = imagesTable[2];
        productImagePrincipale.style.backgroundSize = "cover";
        productImagePrincipale.style.backgroundPosition = "center";
    }

    if(nextMobileIndex == 3){
        productImagePrincipale.style.background = imagesTable[3];
        productImagePrincipale.style.backgroundSize = "cover";
        productImagePrincipale.style.backgroundPosition = "center";
    }
}
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
const removeCount = document.getElementById('remove-count');
const addCount = document.getElementById("add-count");
const addToCart = document.getElementById('add-to-cart');
var count = document.getElementById("count");

var alertProductCount = document.getElementById('alert-product-count');

var productCount = document.getElementById('product-count');
var priceBold = document.getElementById("price-bold");
const cartEmpty = document.getElementById("cart-empty");
const cartCompleted = document.getElementById("cart-completed");

const emptyCartButton = document.getElementById('delet-img');

var countIndex = 0;

removeCount.addEventListener("click", function(event){
    countIndex--;
    if(countIndex<0){
        countIndex = 0;
    };
    countChange();
});
addCount.addEventListener("click", function(event){
    countIndex++;
    countChange();
});
addToCart.addEventListener("click", function(event){
    addToCartChange();
});
var sss;
emptyCartButton.addEventListener('click', function(event){
    alertProductCount.innerHTML = 0;
    cartEmpty.style.display = "flex";
    cartCompleted.style.display = "none";
});

function countChange(){
    count.innerHTML = countIndex;
}

function addToCartChange(){
    alertProductCount.innerHTML = countIndex;
    productCount.innerHTML = countIndex + " ";
    priceBold.innerHTML = "" + (125*countIndex) + "$";
    testComponentCart();
}

function testComponentCart(){
    if(countIndex != 0){
        cartEmpty.style.display = "none";
        cartCompleted.style.display = "flex";
    }else{
        cartEmpty.style.display = "flex";
        cartCompleted.style.display = "none";
    }
}
