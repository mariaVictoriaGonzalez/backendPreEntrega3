document.addEventListener("DOMContentLoaded", function () {
  const finishPurchaseButton = document.getElementById("finishPurchaseButton");

  if (finishPurchaseButton) {
    finishPurchaseButton.addEventListener("click", async function () {
      try {
        // Perform actions when "Finish Purchase" button is clicked
        const existingCartResponse = await fetch(`/api/carts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const existingCartsData = await existingCartResponse.json();

        // Verifica si hay carritos existentes
        let cartId;
        const cartIds = existingCartsData.cartIds;

        if (cartIds.length > 0) {
          // Utiliza el primer ID de la lista de carritos existentes
          cartId = cartIds[0];
        } else {
            console.warn("non existent cart")
        }

        // Finish purchase by making a POST request
        const finishPurchaseResponse = await fetch(
          `/api/carts/${cartId}/purchase`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // Add any additional payload if needed
            body: JSON.stringify({}),
          }
        );

        // Handle the response as needed
        const finishPurchaseResult = await finishPurchaseResponse.json();
        console.log("Finish Purchase Result:", finishPurchaseResult);

        // You might want to redirect or show a success message here
      } catch (error) {
        console.error("Error finishing purchase:", error);
      }
    });
  }
});
