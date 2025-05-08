function increase() {
    let qty = document.getElementById("quantity");
    if (parseInt(qty.value) < 10) {
        qty.value = parseInt(qty.value) + 1;
    }
}

function decrease() {
    let qty = document.getElementById("quantity");
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
}

 function calculateNewPrice() {
            let initialPrice = parseFloat(document.getElementById("initialPrice").value);
            let adjustmentValue = parseFloat(document.getElementById("adjustmentValue").value);
            let adjustmentType = document.getElementById("adjustmentType").value;
            let adjustmentMode = document.getElementById("adjustmentMode").value;
            let resultDiv = document.getElementById("result");

            if (isNaN(initialPrice) || isNaN(adjustmentValue)) {
                resultDiv.innerHTML = "Please enter valid numbers.";
                return;
            }

            let newPrice = initialPrice;

            if (adjustmentMode === "percentage") {
                let percentageValue = (initialPrice * adjustmentValue) / 100;
                newPrice = adjustmentType === "increase" ? initialPrice + percentageValue : initialPrice - percentageValue;
            } else {
                newPrice = adjustmentType === "increase" ? initialPrice + adjustmentValue : initialPrice - adjustmentValue;
            }

            resultDiv.innerHTML = `New Price: <strong>${newPrice.toFixed(2)}</strong>`;
        }

      


        let stock = 5; 
        let minPrice = 0;
        let maxPrice = 100; 

        function changePrice(amount) {
            let priceElement = document.getElementById("price");
            let decreaseBtn = document.getElementById("decrease");
            let increaseBtn = document.getElementById("increase");
            let stockElement = document.getElementById("stock");

            let currentPrice = parseInt(priceElement.innerText.replace("$", ""));
            let newPrice = currentPrice + amount;

            
            if (amount > 0 && stock > 0) stock--; 
            if (amount < 0 && stock < 5) stock++;

            if (newPrice >= minPrice && newPrice <= maxPrice) {
                priceElement.innerText = `$${newPrice}`;
            }

            stockElement.innerText = stock;

          
            decreaseBtn.disabled = newPrice <= minPrice;
            increaseBtn.disabled = newPrice >= maxPrice || stock === 0;
        }


        // Zoom Image Container


        // Show popup after 5 seconds
 const container = document.getElementById("zoomContainer");
        const image = document.getElementById("image");
        const lens = document.getElementById("zoomLens");

        container.addEventListener("mousemove", (e) => {
            lens.style.display = "block";

            let rect = container.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            // Position the lens
            lens.style.left = `${x - lens.offsetWidth / 2}px`;
            lens.style.top = `${y - lens.offsetHeight / 2}px`;

            // Set the background image to zoomed-in effect
            lens.style.backgroundImage = `url(${image.src})`;
            lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
        });

        container.addEventListener("mouseleave", () => {
            lens.style.display = "none";
        });
 
document.getElementById("search-button").addEventListener("click", function() {
        const searchText = document.getElementById("search").value;
        alert("You searched for: " + searchText);
        });