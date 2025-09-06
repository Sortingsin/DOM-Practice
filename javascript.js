const promoApplication = () => {

    let seasonalPromo = document.querySelector("#sesaonal-promo")
    let isPromoApplied = false;

    const changeTheme = () => {
        isPromoApplied = !isPromoApplied
        document.body.classList.toggle("sesaonal-promo")

        if(isPromoApplied) {
            document.querySelector("#seasonal-promo-img").setAttribute("src", "./assets/images/irish.jpg")
        } else {
            document.querySelector("#seasonal-promo-img").setAttribute("src", "./assets/images/Pumpkin-Spice-Latte-1-2.jpg")
        }
    }

    seasonalPromo.addEventListener("click", ()=> {
        changeTheme()
    })



}
// &&(AND) ||(OR) !(NOT)

promoApplication()