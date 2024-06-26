import "./style.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line

import { cartUtilities } from "./utils/cart.js";

let fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/products";
// if (
//   window.location.hostname === "localhost" ||
//   window.location.hostname === "127.0.0.1"
// ) {
//   fetchURL = "http://localhost:5000/products";
// } else {
//   fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/products";
// }

//General -------------
// Initialize a global array to store all selected SKUs
let selectedSKUs = [];
//ORDER---------------------

// Global variable to track the current stage
let currentStage = 1;
const inputValues = {
  firstName: "",
  lastName: "",
  email: "",
  email2: "",
  // phone: '',
  country: "",
  region: "",
  city: "",
  address: "",
  address2: "",
  zip: "",
};

//SHOPPING CART------------
let subtotal = 0;
let total = 0;
let shipping = 19.99;

// const currentUrl = window.location.pathname;
// if (currentUrl === '/cart') {
//   console.log("works1, loaded");
//   handleCart();
// }

// Define a function to update total
function updateTotal() {
  // Calculate the total based on your logic
  total = (subtotal + subtotal * 0.13 + shipping).toFixed(2);
  // console.log('bread and tings', total);

  // Dispatch a custom event to notify other parts of the application
  const updateTotalEvent = new CustomEvent("updateTotalEvent", {
    detail: { total: total },
  });
  document.dispatchEvent(updateTotalEvent);

  return total;
}

// Create a modal element
const orderModal = document.createElement("div");
orderModal.classList.add("modal", "fade", "portfolio-modal");
orderModal.id = "orderModal";

function constructModalBody() {
  switch (currentStage) {
    case 1:
      const price = cartUtilities.getTotalPrice() / 100;
      const tax = Math.round(price * 0.13 * 100) / 100;
      const totalPayment = Math.round((price + tax + shipping) * 100) / 100;
      return `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Total Cost</h5><span style="margin-left:5px">(USD)</span>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Display order summary and total cost here -->
            <table style="border-collapse: collapse; width: 50%;">
            <tr>
                <td style="border: none;">Subtotal:</td>
                <td style="border: none; text-align: left;">$${price}</td>
            </tr>
            <tr>
                <td style="border: none;">Tax:</td>
                <td style="border: none; text-align: left;">$${tax}</td>
            </tr>
            <tr>
                <td style="border: none;">Shipping:</td>
                <td style="border: none; text-align: left;">$${shipping}</td>
            </tr>
            <tr>
                <td style="border: none; font-weight: bold;">Total:</td>
                <td style="border: none; text-align: left; font-weight: bold;">$${totalPayment}</td>
            </tr>
        </table>
            <button id="OrderDetailsButton" class="proceed-btn gen-btn mt-3">Order Details</button>
          </div>
        </div>
      </div>
    `;
    case 2:
      return `
      <div class="modal-dialog modal-dialog-centered" style="top:30px; ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Shipping Information</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style="font-size: 16px; max-height: 650px; overflow-y: auto;" >
            <label for="firstNameInput">First Name<span style='color:red'>*</span>:</label>
            <input type="text" id="firstNameInput" class="form-control" required value="${inputValues.firstName}">
            <label for="lastNameInput">Last Name<span style='color:red'>*</span>:</label>
            <input type="text" id="lastNameInput" class="form-control" required value="${inputValues.lastName}">
            <label for="emailInput">Email<span style='color:red'>*</span>:</label>
            <input type="email" id="emailInput" class="form-control" required value="${inputValues.email}">
            <label for="emailInput">Verify email<span style='color:red'>*</span>:</label>
            <input type="email" id="emailInput2" class="form-control" required value="${inputValues.email2}">
            <label for="countrySelect">Country<span style='color:red'>*</span>:</label>
            <select id="countryInput" class="form-control" required>
            <option>${inputValues.country}</option>
            </select>                       
            <label for="regionInput">State/Province/Region<span style='color:red'>*</span>:</label>
            <select id="regionInput" class="form-control" required>
              <option>${inputValues.region}</option>
            </select>
            <label for="cityinput">City<span style='color:red'>*</span>:</label>
            <select id="cityInput" class="form-control" required>
              <option>${inputValues.city}</option>
            </select>              
            <label for="addressinput">Address Line 1<span style='color:red'>*</span>:</label>
            <input type="address" id="addressInput" class="form-control" required value="${inputValues.address}">
            <label for="address2input">Address Line 2: <span style='font-size:10px'>(if applicable):</span></label>
            <input type="address2" id="address2Input" class="form-control" required value="${inputValues.address2}" placeholder="Unit, Apartment, Suite, Floor, Building, Floor etc.">
            <label for="zipinput">Postal Code/ZIP<span style='color:red'>*</span>:</label>
            <input type="zip" id="zipInput" class="form-control" required value="${inputValues.zip}">
            <button id="backButton" class="back-btn gen-btn mt-3">Back</button>
            <button id="proceedpayment" class="proceed-btn gen-btn mt-3">Proceed to Payment</button>
            <div id='formincomplete' style='color:red; margin-top:5px;font-size:11px'></div>
            <div id='formincomplete2' style='color:red; margin-top:5px;font-size:11px'></div>
            <div style='font-size:10px; margin-top:15px'>By placing your order, you agree to Exotic Relief's <a href="./terms">Terms of Use, Privacy, and Refund Policies</a>.</div>
            <div style='font-size:10px; margin-top:15px'>Please note that <b><u>ALL SALES ARE FINAL</u></b></div>
        </div>
      </div>
    `;
    case 3:
      return `
      <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Payment</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Display payment options here -->
          <div id='paypal-parent'>
          </div>              
        <button id="backButton2" class="back-btn gen-btn mt-3">Back</button>
        </div>
      </div>
    </div>
    `;
    case 4:
      return `
        <div class="modal-dialog modal-dialog-centered success-modal">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-black">Order Received!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- Display a larger text indicating the order has been received and is being processed -->
              <div class="success-message">
                <span class="checkmark larger-checkmark">&#10003;</span>
                <p class="larger-text">Thanks for placing your order! It has been received and is being processed. You will receive an email notification with more details.</p>
              </div>
            </div>
          </div>
        </div>
      `;
    case 5:
      return `
          <div class="modal-dialog modal-dialog-centered error-modal">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-black">Error!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="error-message">
                  <span class="checkmark larger-error">&#10008;</span>
                  <p class="larger-text">Please go back and check your provided information.  The order cannot be placed at this time.</p>
                </div>
              </div>
            </div>
          </div>
        `;
    default:
      break;
  }
}

// To RETRIEVE and log the stored SKUs locally
const initializeSelectedSKUs = () => {
  const storedSKUs = localStorage.getItem("selectedSKUs");
  selectedSKUs = storedSKUs ? JSON.parse(storedSKUs) : [];
};

const updateSelectedSKUs = (updatedSKUs) => {
  localStorage.setItem("selectedSKUs", JSON.stringify(updatedSKUs));
};

var initialSetupDone = false;

function saveInputValues() {
  // console.log('this is the', currentStage)
  const firstNameInput = document.getElementById("firstNameInput");
  const lastNameInput = document.getElementById("lastNameInput");
  const emailInput = document.getElementById("emailInput");
  const emailInput2 = document.getElementById("emailInput2");
  // const phoneInput = document.getElementById('phoneInput');
  const countryInput = document.getElementById("countryInput");
  const regionInput = document.getElementById("regionInput");
  const cityInput = document.getElementById("cityInput");
  const addressInput = document.getElementById("addressInput");
  const address2Input = document.getElementById("address2Input");
  const zipInput = document.getElementById("zipInput");

  if (firstNameInput) inputValues.firstName = firstNameInput.value;
  if (lastNameInput) inputValues.lastName = lastNameInput.value;
  if (emailInput) inputValues.email = emailInput.value;
  if (emailInput2) inputValues.email2 = emailInput2.value;
  // if (phoneInput) inputValues.phone = phoneInput.value;
  if (countryInput) {
    inputValues.country = countryInput.value;
    console.log("Saved Country:", inputValues.country);
  }
  if (regionInput) inputValues.region = regionInput.value;
  if (cityInput) inputValues.city = cityInput.value;
  if (addressInput) inputValues.address = addressInput.value;
  if (address2Input) inputValues.address2 = address2Input.value;
  if (zipInput) inputValues.zip = zipInput.value;

  if (currentStage === 2) {
    var formControls = document.getElementsByClassName("form-control");
    var proceedBtn = document.getElementById("proceedpayment");
    var modalBody = document.querySelector(".modal-body"); // Adjust the selector based on your modal structure

    // Function to validate email format
    function validateEmailFormat(emailValue) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(emailValue);
    }

    // Function to validate zip code or Canadian postal code format
    function validateZipCodeFormat(zipValue) {
      // if (countryInput.value === 'TT') {
      //   // Trinidad and Tobago doesn't require a postal code
      //   var zipPattern = /^(\d{6}(-\d{4})?)$/;
      //   return zipPattern.test(zipValue);
      // }
      let zipPattern;
      if (countryInput.value === "US") {
        // Allow for postal code with or without a space
        zipPattern = /^(\d{5}(-\d{4})?)$/;
        return zipPattern.test(zipValue);
      } else if (countryInput.value === "CA") {
        // Allow for postal code with or without a space
        zipPattern =
          /^([A-Za-z]\d[A-Za-z] \d[A-Za-z]\d|[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d)$/;
        return zipPattern.test(zipValue);
      }
    }

    // Function to validate if emails match
    function validateEmailsMatch() {
      return emailInput.value.trim() === emailInput2.value.trim();
    }

    var validationMessage = document.getElementById("formincomplete");
    if (!validationMessage) {
      validationMessage = document.createElement("div");
      validationMessage.id = "validationMessage";
      modalBody.appendChild(validationMessage);
    }
    var validationMessage2 = document.getElementById("formincomplete2");
    if (!validationMessage2) {
      validationMessage2 = document.createElement("div");
      validationMessage2.id = "validationMessage2";
      modalBody.appendChild(validationMessage2);
    }

    var validationMessageText = "";

    if (
      !initialSetupDone ||
      Array.from(formControls).some(
        (input) => input.value.trim() === "" && input !== address2Input
      ) ||
      !validateEmailFormat(emailInput.value.trim()) ||
      !validateZipCodeFormat(zipInput.value.trim()) ||
      !validateEmailsMatch()
      // || phoneInput.value.replace(/\D/g, '').length < 10
    ) {
      // Set initial state
      proceedBtn.disabled = true;
      proceedBtn.classList.add("btn-disabled");
      validationMessageText =
        "Please fill in all required fields to proceed to payment.";
    }

    validationMessage.innerText = validationMessageText;
    // var validationMessage2=document.createElement('div');
    // validationMessage.appendChild(validationMessage2);

    // Loop through each element with the 'form-control' class
    Array.from(formControls).forEach(function (formControl) {
      formControl.addEventListener("input", function () {
        var inputsToCheck = Array.from(formControls).filter(function (input) {
          return input !== address2Input;
        });

        var allFieldsFilled = inputsToCheck.every(function (input) {
          return input.value.trim() !== "";
        });

        var emailIsValid = validateEmailFormat(emailInput.value.trim());
        var emailsMatch = validateEmailsMatch();
        var zipIsValid = validateZipCodeFormat(zipInput.value.trim());

        var allFilledAndValid =
          allFieldsFilled && emailIsValid && zipIsValid && emailsMatch;

        if (!emailIsValid && emailInput.value.trim() !== "") {
          validationMessage2.innerHTML = "Please provide a valid EMAIL";
        } else if (!emailsMatch) {
          validationMessage2.innerHTML = "Verified email does not match";
        } else if (!zipIsValid || zipInput.value.trim() === "") {
          validationMessage2.innerHTML = "Please review POSTAL/ZIP CODE format";
        } else {
          validationMessage2.innerHTML = "";
        }

        if (allFieldsFilled) {
          validationMessageText = "";
          validationMessage.innerText = validationMessageText;
        }
        proceedBtn.disabled = !allFilledAndValid;
        proceedBtn.classList.toggle("btn-disabled", !allFilledAndValid);
      });
    });

    initialSetupDone = true;
  }
}

function handleOrderDetailsButton() {
  currentStage = 2;

  // Update only the modal body content
  orderModal.innerHTML = constructModalBody();

  // Save input values
  saveInputValues();
  orderModal.style.display = "block";
}

// Function to handle the order button click
function handleOrderButtonClick() {
  // Create the backdrop element
  const backdrop = document.createElement("div");
  backdrop.classList.add("modal-backdrop");
  document.body.appendChild(backdrop);

  // Set the modal content
  orderModal.innerHTML = constructModalBody();

  // Append the modal to the body
  document.body.appendChild(orderModal);

  // Disable scrolling on the body
  document.body.style.overflow = "hidden";

  // Show the modal
  orderModal.style.display = "block";

  const orderDetailsButton = orderModal.querySelector("#OrderDetailsButton");
  orderDetailsButton.addEventListener("click", handleOrderDetailsButton);

  // Function to hide the modal
  function hideModal() {
    backdrop.remove();
    // Enable scrolling on the body
    document.body.style.overflow = "";

    orderModal.style.display = "none";
    // Remove the modal from the DOM when hidden
    orderModal.remove();
  }

  // Event listener to hide the modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (
      event.target === orderModal ||
      event.target.classList.contains("btn-close")
    ) {
      hideModal();
      currentStage = 1;
    }
  });

  // Reset the currentStage to 1 when the modal is closed
  // orderModal.addEventListener('hidden.bs.modal', function () {
  //   currentStage = 1;
  // });
}

//CLEAR --------------------

export function handleCart() {
  const skuToProductIdMap = {};
  if (window.location.pathname.toLowerCase().includes("cart")) {
    // Create an order button
    const orderButton = document.createElement("button");
    orderButton.id = "orderButton";
    orderButton.classList.add("order-btn");
    orderButton.innerText = "Order Now";

    // Add a click event listener to the order button
    orderButton.addEventListener("click", handleOrderButtonClick);
    // orderButton.addEventListener("click", () => console.log("hello"));

    // Fetch product data based on SKUs
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          const productsContainer = document.createElement("div");
          productsContainer.classList.add("products", "row", "mb-93");

          // Iterate over the fetched product data and create elements
          data.data.forEach((product) => {
            // Check if the product has at least one variant with a matching SKU
            if (
              product.variants.some((variant) =>
                selectedSKUs.includes(variant.sku)
              )
            ) {
              selectedSKUs.forEach((selectedSKU) => {
                const matchingVariant = product.variants.find(
                  (variant) => variant.sku === selectedSKU
                );
                if (matchingVariant) {
                  skuToProductIdMap[matchingVariant.sku] = product.id;
                }
                if (matchingVariant) {
                  const matchingSKU = matchingVariant.sku;
                  const existingCartItem = document.querySelector(
                    `.cart-item[data-sku="${matchingSKU}"]`
                  );
                  subtotal += matchingVariant.price / 100;
                  total += matchingVariant.price / 100;
                  updateTotal();

                  if (existingCartItem) {
                    // If the item with the same SKU already exists, update its quantity
                    const quantityElement =
                      existingCartItem.querySelector(".quantity");
                    const currentQuantity = parseInt(
                      quantityElement.innerText,
                      10
                    );
                    quantityElement.innerText = currentQuantity + 1;
                  } else {
                    // Create and append the new cart item
                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item", "row", "mb-3");
                    cartItem.setAttribute("data-sku", matchingSKU);
                    cartItem.setAttribute("data-product-id", product.id); // Add product ID attribute
                    cartItem.setAttribute(
                      "data-variant-id",
                      matchingVariant.id
                    ); // Add variant ID attribute

                    const matchingImage = product.images.find((image) =>
                      image.variant_ids.includes(matchingVariant.id)
                    );

                    // Product image
                    const productImage = document.createElement("img");
                    productImage.src = matchingImage ? matchingImage.src : "";
                    productImage.alt = product.title;
                    productImage.classList.add(
                      "col-2",
                      "img-fluid",
                      "productimg"
                    );
                    productImage.loading = "lazy";

                    // Product details
                    const productDetails = document.createElement("div");
                    productDetails.classList.add("col-8");
                    productDetails.innerHTML = `
                                          <hr style="border-top: 5px solid rgba(33, 74, 109, 1); margin: 1px 0;">
                                          <h5 style='font-family: IGLight;'>${
                                            product.title
                                          }</h5>
                                          <p style="margin: 0;"><span style="font-weight: bold;">Color & Size:</span> ${
                                            matchingVariant.title
                                          }</p>
                                          <p style="margin: 0;"><span style="font-weight: bold;">Price:</span> $${
                                            matchingVariant.price / 100
                                          } USD</p>
                                          <p style="margin: 0;"><span style="font-weight: bold;">Quantity:</span> <span class="quantity">1</span></p>
                                      `;

                    // Remove item button
                    const removeItemButton = document.createElement("button");
                    removeItemButton.innerText = "Remove";
                    removeItemButton.classList.add("col-2", "remove-btn");
                    removeItemButton.addEventListener("click", () => {
                      // Find the index of the item with the matching SKU in the cart
                      const matchingSKU = matchingVariant.sku;
                      const quantityElement =
                        cartItem.querySelector(".quantity");
                      const currentQuantity = parseInt(
                        quantityElement.innerText,
                        10
                      );
                      console.log("Current Quantity:", currentQuantity); // Log current quantity for debugging
                      subtotal -= matchingVariant.price / 100;
                      total -= matchingVariant.price / 100;
                      updateTotal();

                      if (currentQuantity > 1) {
                        // If the quantity is more than 1, decrease it
                        quantityElement.innerText = currentQuantity - 1;
                        const indexOfMatchingSKU =
                          selectedSKUs.indexOf(matchingSKU);

                        // Check if the SKU appears more than once in the array
                        if (indexOfMatchingSKU !== -1) {
                          // Remove only the first occurrence of the SKU
                          selectedSKUs.splice(indexOfMatchingSKU, 1);
                        }

                        // Update selectedSKUs with the modified array
                        updateSelectedSKUs(selectedSKUs);
                      } else {
                        // If the quantity is 1, remove the entire cart item
                        cartItem.parentNode.removeChild(cartItem);

                        // Update selectedSKUs with the filtered array
                        const updatedSelectedSKUs = selectedSKUs.filter(
                          (item) => item !== matchingSKU
                        );
                        updateSelectedSKUs(updatedSelectedSKUs);
                      }

                      // Log the updated array
                      console.log("Updated SKUs:", selectedSKUs);
                      // console.log(`Remove item with SKU: ${matchingSKU}`);
                    });

                    // Append elements to the cart item
                    cartItem.appendChild(productImage);
                    cartItem.appendChild(productDetails);
                    cartItem.appendChild(removeItemButton);

                    // Append cart item to the products container
                    productsContainer.appendChild(cartItem);
                  }
                }
              });
            }
          });

          // Insert productsContainer into the DOM
          const cartContainer = document.getElementById("cart-container");
          if (cartContainer) {
            cartContainer.parentNode.prepend(orderButton);
            // cartContainer.parentNode.prepend(clearButton);
          } else {
            console.error("Cart container not found.");
          }
        } else {
          console.log("Product data is missing or undefined.");
        }
      })
      .catch((error) => console.error(error));
  }
}

export function updateTotalCartItemOnShopModal() {
  // Update the item count display in all modals
  document.querySelectorAll(".item-count").forEach((span) => {
    span.textContent = cartUtilities.getTotal();
  });
}

const DisplayProducts = (props) => {
  //PRINTIFY API------------------------------------------------------

  initializeSelectedSKUs();

  // PRODUCTS--------------

  if (window.location.pathname.includes("Shop")) {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        const productsContainer = document.getElementById("products-container");
        if (data && data.data) {
          const reversedProducts = data.data.reverse();
          reversedProducts.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("card-container");
            productCard.innerHTML = `
          <a data-bs-toggle="modal" href="#productitem${index + 1}">
            <div class="card">
              <img src="${product.images[0].src}" class="card-img-top" alt="${
              product.title
            }"loading="lazy">
              <div class="card-body">
                <div class="title-price">
                  <div class="service-info">
                    <h5 class="card-title2">${product.title}</h5>
                  </div>
                    <div class='card-price'>
                      $${
                        product.variants
                          .filter((variant) => variant.is_enabled)
                          .reduce(
                            (maxPrice, variant) =>
                              variant.price > maxPrice
                                ? variant.price
                                : maxPrice,
                            0
                          ) / 100
                      }
                    </div>
                  </div>
              </div>
            </div>
          </a>
        `;
            productsContainer.appendChild(productCard);

            const productModal = document.createElement("div");
            productModal.classList.add("portfolio-modal", "modal", "fade");
            productModal.id = `productitem${index + 1}`;
            productModal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${product.title}</h5>
              <button type="button" class="view-cart-btn" style="font-family:inherit;margin:10px"><i class="fas ion-ios-cart"></i></button>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="product-images">
                <div class="small-images">
                  ${product.images
                    .map(
                      (image, i) => `
                    <img src="${image.src}" class="small-img" alt="${product.title}" loading="lazy">
                  `
                    )
                    .join("")}
                </div>
                <div class="main-container">
                <div class="magnify" id="magnify-${index + 1}">
                  <img src="${
                    product.images[0].src
                  }" class="img-fluid main-img" alt="${
              product.title
            }" loading="lazy" id="main-image-${index + 1}">
                  <div class="magnify-glass" id="magnify-glass-${
                    index + 1
                  }"></div>
                </div>
              </div>
              </div>
              <div class="color-options">
                <h6></h6>
                ${
                  (
                    product.options.find((option) => option.name === "Colors")
                      ?.values || []
                  )
                    .filter((color) => {
                      const variant = product.variants.find((variant) =>
                        variant.options.includes(color.id)
                      );
                      return variant && variant.is_enabled;
                    })
                    .map(
                      (color) => `
                    <div class="color-option" style="background-color: ${color.colors[0]};"></div>
                    `
                    )
                    .join("") ||
                  product.options
                    .find((option) => option.name === "Frame Color")
                    ?.values.map(
                      (frameColor) => `
                    <div class="color-option" style="background-color: ${frameColor.colors[0]};"></div>
                    `
                    )
                    .join("") ||
                  product.options
                    .find((option) => option.name === "Color")
                    ?.values.map(
                      (color) => `
                    <div class="color-option" style="background-color: ${color.colors[0]};"></div>
                    `
                    )
                    .join("") ||
                  product.options
                    .find((option) => option.name === "Seam Colors")
                    ?.values.map(
                      (color) => `
                    <div class="color-option" style="background-color: ${color.colors[0]};"></div>
                    `
                    )
                    .join("") ||
                  ""
                }
              </div>
              <div class="fabric-options" style="margin-right: 20px; ${
                product.options.some(
                  (option) =>
                    option.name === "Fabric weight" ||
                    option.name === "Box type" ||
                    option.name === "Paper finishes" ||
                    option.name === "Finishes"
                ) &&
                (product.options.some(
                  (option) =>
                    option.name === "Fabric weight" && option.type === "weight"
                ) ||
                  product.options.some(
                    (option) =>
                      option.name === "Box type" && option.type === "finish"
                  ) ||
                  product.options.some(
                    (option) =>
                      option.name === "Paper finishes" &&
                      option.type === "paper"
                  ) ||
                  product.options.some(
                    (option) =>
                      option.name === "Finishes" && option.type === "surface"
                  ))
                  ? ""
                  : "display: none;"
              }">
                <h6 style='font-weight:bold; display: inline;'>${
                  product.options.find(
                    (option) =>
                      option.name === "Fabric weight" ||
                      option.name === "Box type" ||
                      option.name === "Paper finishes" ||
                      option.name === "Finishes"
                  )?.name
                }:</h6>
                <select class="fabric-dropdown">
                    ${(
                      product.options.find(
                        (option) =>
                          option.name === "Fabric weight" &&
                          option.type === "weight"
                      )?.values ||
                      product.options.find(
                        (option) =>
                          option.name === "Box type" && option.type === "finish"
                      )?.values ||
                      product.options.find(
                        (option) =>
                          option.name === "Paper finishes" &&
                          option.type === "paper"
                      )?.values ||
                      product.options.find(
                        (option) =>
                          option.name === "Finishes" &&
                          option.type === "surface"
                      )?.values ||
                      []
                    )
                      .filter((option) => {
                        const variant = product.variants.find((variant) => {
                          if (variant.options.includes(option.id)) {
                            if (
                              product.options.some(
                                (opt) =>
                                  opt.name === "Fabric weight" &&
                                  opt.type === "weight"
                              ) ||
                              product.options.some(
                                (opt) =>
                                  opt.name === "Box type" &&
                                  opt.type === "finish"
                              ) ||
                              product.options.some(
                                (opt) =>
                                  opt.name === "Paper finishes" &&
                                  opt.type === "paper"
                              ) ||
                              product.options.some(
                                (opt) =>
                                  opt.name === "Finishes" &&
                                  opt.type === "surface"
                              )
                            ) {
                              return variant.is_available && variant.is_enabled;
                            }
                          }
                          return false;
                        });
                        return variant;
                      })
                      .map(
                        (option) => `
                            <option value="${option.id}">${option.title}</option>
                        `
                      )
                      .join("")}
                </select>
              </div>

        
            
            
              
            

              <div class="size-and-quantity-options" style="display: flex; align-items: center;">
                <div class="size-options" style="margin-right: 20px;">
                  <h6 style='font-weight:bold; display: inline;'>Size Options:</h6>
                  <select class="size-dropdown">
                    ${
                      product.options
                        .find((option) => option.name === "Sizes")
                        ?.values.filter((size) => {
                          const variant = product.variants.find((variant) =>
                            variant.options.includes(size.id)
                          );
                          if (size.title.length < 4) {
                            return variant && variant.is_available
                              ? `<option value="${size.id}">${size.title} (Available)</option>`
                              : "";
                          } else {
                            return variant &&
                              variant.is_available &&
                              variant.is_enabled
                              ? `<option value="${size.id}">${size.title}</option>`
                              : "";
                          }
                        })
                        .map(
                          (size) => `
                        <option value="${size.id}">${size.title}</option>
                      `
                        )
                        .join("") ||
                      product.options
                        .find((option) => option.name === "Size")
                        ?.values.filter((size) => {
                          const variant = product.variants.find((variant) =>
                            variant.options.includes(size.id)
                          );
                          return (
                            variant &&
                            variant.is_available &&
                            variant.is_enabled
                          );
                        })
                        .map(
                          (size) => `
                        <option value="${size.id}">${size.title}</option>
                      `
                        )
                        .join("") ||
                      product.options
                        .find((option) => option.name === "Phone models")
                        ?.values.filter((size) => {
                          const variant = product.variants.find((variant) =>
                            variant.options.includes(size.id)
                          );
                          return (
                            variant &&
                            variant.is_available &&
                            variant.is_enabled
                          );
                        })
                        .map(
                          (size) => `
                        <option value="${size.id}">${size.title}</option>
                      `
                        )
                        .join("")
                    }            
                  </select>
                </div>
                <div>
                  <label for="product-qty" style="margin-top: 10px; font-weight: bold; display: inline;">Quantity:</label>
                  <input type="number" class="product-qty" name="quantity" min="1" max="50" value="1" style="display: inline; width: 40px;">
                  </div>
              </div>
              <p style='font-weight:bold'>Price: 
                <span style='font-weight:normal'>
                  $${
                    product.variants
                      .filter((variant) => variant.is_enabled)
                      .reduce(
                        (maxPrice, variant) =>
                          variant.price > maxPrice ? variant.price : maxPrice,
                        0
                      ) / 100
                  }
                USD</span>
              </p>
              <button class="add-to-cart-btn" style='margin-right:10px'>Add to Cart</button>Items in Cart: <span class="item-count"></span>
              <p>${product.description}</p>
            </div>
          </div>
        </div>
      `;

            document.body.appendChild(productModal);

            // Add the magnifying glass functionality
            const magnifyGlass = productModal.querySelector(
              `#magnify-glass-${index + 1}`
            );
            const mainImage = productModal.querySelector(
              `#main-image-${index + 1}`
            );
            const magnify = productModal.querySelector(`#magnify-${index + 1}`);

            magnify.addEventListener("mousemove", (e) => {
              magnifyGlass.style.display = "block";
              let { left, top } = mainImage.getBoundingClientRect();
              let x = e.pageX - left - window.pageXOffset;
              let y = e.pageY - top - window.pageYOffset;

              let bgPosX = ((x / mainImage.width) * 100).toFixed(2);
              let bgPosY = ((y / mainImage.height) * 100).toFixed(2);

              magnifyGlass.style.left = `${x - magnifyGlass.offsetWidth / 2}px`;
              magnifyGlass.style.top = `${y - magnifyGlass.offsetHeight / 2}px`;
              magnifyGlass.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
              magnifyGlass.style.backgroundImage = `url(${mainImage.src})`;
            });

            magnify.addEventListener("mouseleave", () => {
              magnifyGlass.style.display = "none";
            });

            // JavaScript to handle color selection
            const colorOptions = productModal.querySelectorAll(".color-option");
            colorOptions.forEach((colorOption, colorIndex) => {
              colorOption.addEventListener("click", () => {
                const selectedColor =
                  product.options.find((option) => option.name === "Colors")
                    ?.values[colorIndex] ||
                  product.options.find(
                    (option) => option.name === "Frame Color"
                  )?.values[colorIndex] ||
                  product.options.find((option) => option.name === "Color")
                    ?.values[colorIndex] ||
                  product.options.find(
                    (option) => option.name === "Seam Colors"
                  )?.values[colorIndex];
                if (selectedColor) {
                  // Remove 'selected' class from all color options
                  colorOptions.forEach((option) => {
                    option.classList.remove("selected");
                  });

                  // Add 'selected' class to the clicked color option
                  colorOption.classList.add("selected");
                }
              });
            });

            // JavaScript to handle size selection dropdown
            const sizeDropdown = productModal.querySelector(".size-dropdown");
            const Quantity = productModal.querySelector(".product-qty");
            const fabricDropdown =
              productModal.querySelector(".fabric-dropdown");

            productCard.addEventListener("click", () => {
              const smallImages = document.querySelectorAll(
                `#productitem${index + 1} .small-images .small-img`
              );
              const mainImage = document.querySelector(
                `#productitem${index + 1} .main-img`
              );

              // Switch main image on click of small images
              smallImages.forEach((img, idx) => {
                img.addEventListener("click", () => {
                  // Remove 'selected' class from all images
                  smallImages.forEach((img) => {
                    img.classList.remove("selected");
                  });

                  // Add 'selected' class to the clicked image
                  img.classList.add("selected");

                  // Apply a smooth transition
                  mainImage.style.opacity = "0";
                  mainImage.onload = function () {
                    mainImage.style.opacity = "1";
                  };
                  mainImage.src = product.images[idx].src;
                });
              });
            });

            const addToCartButton = productModal.querySelector(
              `#productitem${index + 1} .add-to-cart-btn`
            );

            // Add an event listener to the "View Cart" button
            const viewCartBtn = productModal.querySelector(".view-cart-btn");
            const { handleCartClick } = props;

            viewCartBtn.addEventListener("click", () => {
              // Call handleCartClick directly
              handleCartClick();
              handleCart();
              updateTotal();
            });
            viewCartBtn.setAttribute("data-bs-dismiss", "modal");

            addToCartButton.addEventListener("click", () => {
              // Get the selected color, size, and variant
              const selectedColorIndex = Array.from(colorOptions).findIndex(
                (option) => option.classList.contains("selected")
              );
              const selectedColor =
                product.options.find((option) => option.name === "Colors")
                  ?.values[selectedColorIndex] ||
                product.options.find((option) => option.name === "Frame Color")
                  ?.values[selectedColorIndex] ||
                product.options.find((option) => option.name === "Color")
                  ?.values[selectedColorIndex] ||
                product.options.find((option) => option.name === "Seam Colors")
                  ?.values[selectedColorIndex];
              const selectedSizeId = sizeDropdown.value;
              const selectedQuantity = Quantity.value;
              const selectedFabricId = fabricDropdown.value;

              console.log("Selected Color:", selectedColor);
              console.log("Selected Size ID:", selectedSizeId);
              console.log("Selected Quantity:", selectedQuantity);
              console.log("Selected Fabric:", selectedFabricId);

              // Log the entire product data for debugging
              console.log("Product Data:", product);

              // Find the selected variant based on color and size
              let selectedVariant;

              // Attempt with the first set of conditions
              selectedVariant = product.variants.find((variant) => {
                const colorOptionIndex = product.options.findIndex(
                  (option) => option.type === "color"
                );
                const sizeOptionIndex = product.options.findIndex(
                  (option) => option.type === "size"
                );
                const fabricOptionIndex = product.options.findIndex(
                  (option) =>
                    option.type === "weight" ||
                    option.type === "finish" ||
                    option.type === "paper" ||
                    option.type === "surface"
                );

                const colorMatchIndex =
                  colorOptionIndex !== -1
                    ? variant.options[colorOptionIndex] === selectedColor?.id
                    : true;
                const sizeMatchIndex =
                  sizeOptionIndex !== -1
                    ? variant.options[sizeOptionIndex]?.toString() ===
                      selectedSizeId.toString()
                    : true;
                const fabricMatchIndex =
                  fabricOptionIndex !== -1
                    ? variant.options[fabricOptionIndex]?.toString() ===
                      selectedFabricId.toString()
                    : true;

                return colorMatchIndex && sizeMatchIndex && fabricMatchIndex;
              });

              // If the first attempt failed, try the second set of conditions
              if (!selectedVariant) {
                selectedVariant = product.variants.find((variant) => {
                  const colorMatchIndex =
                    variant.options[2] === selectedColor?.id;
                  const sizeMatchIndex =
                    variant.options[0]?.toString() ===
                    selectedSizeId.toString();
                  const fabricMatchIndex =
                    variant.options[0]?.toString() ===
                    selectedFabricId.toString();
                  return colorMatchIndex && sizeMatchIndex && fabricMatchIndex;
                });
              }

              // If the second attempt failed, try the second set of conditions
              if (!selectedVariant) {
                selectedVariant = product.variants.find((variant) => {
                  const colorMatchIndex =
                    variant.options[1] === selectedColor?.id;
                  const sizeMatchIndex =
                    variant.options[0]?.toString() ===
                    selectedSizeId.toString();
                  const fabricMatchIndex =
                    variant.options[0]?.toString() ===
                    selectedFabricId.toString();
                  return colorMatchIndex && sizeMatchIndex && fabricMatchIndex;
                });
              }

              // Now you can use the selectedVariant variable as needed

              if (
                !selectedColor &&
                (product.options.find((option) => option.name === "Colors")
                  ?.values.length > 0 ||
                  product.options.find((option) => option.name === "Color")
                    ?.values.length > 0 ||
                  product.options.find(
                    (option) => option.name === "Seam Colors"
                  )?.values.length > 0 ||
                  product.options.find(
                    (option) => option.name === "Frame Color"
                  )?.values.length > 0)
              ) {
                // Show an error message to the user (you can customize this based on your UI)
                alert("Please select a Colour Option");
                return; // Stop execution if no color is selected
              }

              // Log the selected variant for debugging
              console.log("Selected Variant:", selectedVariant);

              // Check if a variant was found
              if (selectedVariant) {
                const selectedVariantSKU = selectedVariant.sku;
                const selectedVariantPrice = selectedVariant.price;

                // Add the selected SKU to the global array based on quantity
                for (let i = 0; i < selectedQuantity; i++) {
                  selectedSKUs.push(selectedVariantSKU);
                }

                // Update total item count
                // itemCount = selectedSKUs.length;

                // Now you can use the selectedVariantSKU in your cart logic
                console.log("Selected Variant SKU:", selectedVariantSKU);

                // Also, you can log or use the entire selectedSKUs array
                console.log("All Selected SKUs:", selectedSKUs);

                // // To STORE the SKU locally
                // localStorage.setItem(
                //   "selectedSKUs",
                //   JSON.stringify(selectedSKUs)
                // );
                // // To RETRIEVE and log the stored SKUs locally
                // const storedSKUs = localStorage.getItem("selectedSKUs");
                // const retrievedSKUs = storedSKUs ? JSON.parse(storedSKUs) : [];

                // console.log("NEW Stored SKUs:", retrievedSKUs);
                const data = {
                  id: selectedVariantSKU,
                  qty: parseInt(selectedQuantity),
                  price: selectedVariantPrice,
                  variant_id: selectedVariant.id,
                  product_id: product.id,
                };
                cartUtilities.add(data);

                updateTotalCartItemOnShopModal();
              } else {
                console.error(
                  "No matching variant found for the selected color and size."
                );
              }
            });
          });
        } else {
          console.log("Products data is missing or undefined.");
        }
      })
      .catch((error) => console.error(error));
  }

  // Call the function to handle cart functionality
  // handleCart();

  const random = generateRandom6DigitNumber();
  const randomlabel = generateRandom6DigitNumber();

  function generateRandom6DigitNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  // Initialize an array to store line items for the order
  const lineItems = [];

  async function submitOrder() {
    // Find all cart items
    const cartItems = cartUtilities.getCartItems();

    const {
      firstName,
      lastName,
      email,
      // phone,
      country,
      region,
      city,
      address,
      address2,
      zip,
    } = inputValues;

    // Iterate over each cart item
    cartItems.forEach((item) => {
      lineItems.push({
        // "sku": sku,
        product_id: item.product_id,
        variant_id: item.variant_id,
        quantity: item.qty,
      });
    });

    // Construct the order details
    const orderDetails = {
      external_id: random.toString,
      label: randomlabel.toString,
      line_items: lineItems,
      shipping_method: 1,
      is_printify_express: false,
      send_shipping_notification: false,
      address_to: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        // "phone": phone,
        country: country,
        region: region,
        address1: address,
        address2: address2,
        city: city,
        zip: zip,
        // Include other user input in address_to
      },
    };

    // console.log('ah yo this one:',lineItems);

    // Make a POST request to your server's /orders endpoint
    let fetchURLorder = "";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      fetchURLorder = "http://localhost:5000/orders";
    } else {
      fetchURLorder = "https://drjoiserver-106ea7a60e39.herokuapp.com/orders";
    }

    if (window.location.pathname.includes("Cart")) {
      fetch(fetchURLorder, {
        method: "POST",
        body: JSON.stringify(orderDetails),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Order response:", data);

          if (data.success && data.orderStatus === "OK") {
            currentStage = 4;
          } else {
            currentStage = 5;
          }

          orderModal.innerHTML = constructModalBody();
        })
        .catch((error) => {
          console.error("Error placing order:", error);
          currentStage = 5;
          orderModal.innerHTML = constructModalBody();
        });
    }
  }

  // function formatPhoneNumber() {
  //   // var phoneInput = document.getElementById('phoneInput');
  //   var phoneInput = document.getElementById('phoneInput');
  //   console.log('trigger fingers')

  //   // Remove any non-numeric characters
  //   var phoneNumber = phoneInput.value.replace(/\D/g, '');

  //   // Format the phone number as needed
  //   if (phoneNumber.length >= 10) {
  //     phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  //   }

  //   // Update the input value
  //   phoneInput.value = phoneNumber;
  // }

  // document.addEventListener("DOMContentLoaded", function() {
  //   // Add event listener to the 'phoneInput' element
  //   document.getElementById('phoneInput').addEventListener('input', function(event) {
  //     // Get the input value
  //     var inputValue = event.target.value;

  //     // Remove any non-numeric characters
  //     var numericValue = inputValue.replace(/\D/g, '');

  //     // Format the numeric value as needed (e.g., 123-456-7890)
  //     var formattedValue = numericValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

  //     // Update the input value
  //     event.target.value = formattedValue;

  //     // Check if the input value contains non-numeric characters
  //     if (inputValue !== numericValue) {
  //       // Display an error message
  //       document.getElementById('phoneErrorMessage').textContent = 'Please enter only numbers.';
  //     } else {
  //       // Clear the error message if input is valid
  //       document.getElementById('phoneErrorMessage').textContent = '';
  //     }
  //   });
  // });

  orderModal.addEventListener("click", function (event) {
    const targetId = event.target.id;
    switch (targetId) {
      case "OrderDetailsButton":
        currentStage = 2;
        orderModal.innerHTML = constructModalBody();
        saveInputValues();
        break;
      case "proceedpayment":
        currentStage = 3;
        saveInputValues();
        orderModal.innerHTML = constructModalBody();
        initializePayPal();
        break;
      case "backButton":
        currentStage = 1;
        saveInputValues();
        orderModal.innerHTML = constructModalBody();
        break;
      case "backButton2":
        currentStage = 2;
        orderModal.innerHTML = constructModalBody();
        saveInputValues();
        break;
      default:
        break;
    }

    // Add event listeners for country and region select inputs
    if (currentStage === 2) {
      const countryInput = document.getElementById("countryInput");
      const regionInput = document.getElementById("regionInput");
      // const cityInput = document.getElementById('cityInput');

      // Function to populate country options when input gains focus
      countryInput.addEventListener("focus", async () => {
        await populateCountryOptions();
      });

      // Function to update regions based on selected country
      countryInput.addEventListener("change", async () => {
        await region(); // Update regions
      });

      // Function to update cities based on selected region
      regionInput.addEventListener("change", async () => {
        await fetchCities(); // Update cities
      });

      // Optionally, you can populate country options initially
      populateCountryOptions(); // Assuming this function exists
    }
  });

  function initializePayPal(amount) {
    // Get the container for the PayPal button
    const paypalContainer = document.getElementById("paypal-parent");

    // Create a new div for the PayPal button
    const paypalButtonContainer = document.createElement("div");
    paypalButtonContainer.id = "paypal-button-container";

    // Append the PayPal button container to the parent container
    if (currentStage === 3) {
      paypalContainer.appendChild(paypalButtonContainer);
    }

    let fetchURLpayvalidate = "";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      fetchURLpayvalidate = "http://localhost:5000/paypal/validate";
    } else {
      fetchURLpayvalidate =
        "https://drjoiserver-106ea7a60e39.herokuapp.com/paypal/validate";
    }

    // Initialize the PayPal SDK here
    if (currentStage === 3) {
      // eslint-disable-next-line no-undef
      paypal
        .Buttons({
          createOrder: function (_, actions) {
            saveInputValues();
            console.log("Amount to be sent to PayPal:", total);

            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total,
                  },
                  // shipping: {
                  //   name: {
                  //     full_name: inputValues.firstName + ' ' + inputValues.lastName,
                  //     phone: inputValues.phone,
                  //     email: inputValues.email,
                  //   },
                  //   address: {
                  //     country_code: 'US',
                  //     address_line_1: inputValues.address,
                  //     address_line_2: '',
                  //     admin_area_2: inputValues.city,
                  //     admin_area_1: inputValues.region,
                  //     postal_code: 'xxxxx',
                  //   },

                  // },
                },
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING",
              },
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.log("Transaction details:", details);
              // console.log('Transaction Customer details', details.payer);
              // console.log('Transaction value:', details.purchase_units[0].amount.value);

              // Send payment details to the server for further validation
              fetch(fetchURLpayvalidate, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  order: data,
                  paymentDetails: details,
                  total: total,
                }),
              })
                .then((response) => response.json())
                .then((responseData) => {
                  // console.log("Response Data is:",responseData);
                  if (responseData.success) {
                    // If the server validates the payment, proceed with your logic
                    submitOrder();
                  } else {
                    console.error(
                      "Error processing payment on the server:",
                      responseData.error
                    );
                    currentStage = 5;
                    orderModal.innerHTML = constructModalBody();

                    // Display an error message to the user
                    alert("Error processing payment: " + responseData.error);
                  }
                })
                .catch((error) => {
                  console.error("Error communicating with the server:", error);
                  // Display an error message to the user
                  alert("Error communicating with the server");
                });
            });
          },
        })
        .render("#paypal-button-container");
    }
  }

  //Shipping - FUNCTION CURRENTLY NOT BEING USED

  // function calculateShippingCost() {
  //   // Fetch the order details, such as selectedSKUs and any other relevant information

  //   // Make a POST request to Printify's shipping cost endpoint
  //   fetch(fetchURL)
  //   .then(response => response.json())
  //   .then(data => {
  //       // Handle the response from Printify
  //       console.log('Printify shipping cost response:', data);

  //       // You can extract and use the shipping cost options from the response
  //       const standardShippingCost = data.standard || 0;
  //       const expressShippingCost = data.express || 0;
  //       const priorityShippingCost = data.priority || 0;
  //       const printifyExpressShippingCost = data.printify_express || 0;

  //       // You can use these shipping cost values as needed in your application
  //   })
  //   .catch(error => {
  //       // Handle any errors that occur during the fetch
  //       console.error('Error calculating shipping cost with Printify:', error);
  //       // You can also show an error message to the user
  //   });
  // }

  // PAYPAL CONNECTION ----------------
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  let fetchURLpay = "";
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    fetchURLpay = "http://localhost:5000/config";
  } else {
    fetchURLpay = "https://drjoiserver-106ea7a60e39.herokuapp.com/config";
  }

  const apiUrl = `${fetchURLpay}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((config) => {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${config.paypalClientId}`;
      script.onload = function () {
        initializePayPal(); // Call the function to initialize PayPal after the script is loaded
      };
      document.head.appendChild(script);
    })
    .catch((error) => console.error("Error fetching configuration:", error));

  //ADDRESS OPTIONS AUTOMATION VIA API ----------------------------------------------------------------------

  function populateCountryOptions() {
    const countrySelect = document.getElementById("countryInput");
    const countries = [
      { value: "", text: "" },
      { value: "US", text: "United States" },
      { value: "CA", text: "Canada" },
      // Add more countries as needed
    ];

    // Clear existing options
    countrySelect.innerHTML = "";

    // Add new options based on the countries array
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.value;
      option.text = country.text;

      if (inputValues.country === country.value) {
        option.selected = true;
      }

      countrySelect.appendChild(option);
    });
    saveInputValues();
  }

  function filterUSRegions(regions) {
    // Filter out regions with specific ISO codes
    return regions.filter(
      (region) =>
        !region.iso2.startsWith("UM-") &&
        !region.iso2.startsWith("VI") &&
        !region.iso2.startsWith("GU")
    );
  }

  async function region() {
    // Get the selected country
    const selectedCountry = document.getElementById("countryInput").value;
    saveInputValues();
    console.log("Country saved:", selectedCountry);

    // Get the region select element
    const regionSelect = document.getElementById("regionInput");

    // Clear existing options
    regionSelect.innerHTML = "";

    // Set the fetch URL based on the environment
    let fetchURLmap = "";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      fetchURLmap = "http://localhost:5000/maps/regions";
    } else {
      fetchURLmap =
        "https://drjoiserver-106ea7a60e39.herokuapp.com/maps/regions";
    }

    const apiUrl = `${fetchURLmap}?country=${selectedCountry}`;

    try {
      const response = await fetch(apiUrl);
      const result = await response.json();

      switch (selectedCountry) {
        case "CA":
          // Sort the Canadian regions alphabetically by name
          const sortedCARegions = result.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          addOptions(
            regionSelect,
            sortedCARegions.map((state) => ({
              value: state.iso2,
              text: state.name,
            }))
          );
          fetchCities();
          break;
        case "TT":
          // Assuming 'TT' API response contains ISO and name properties
          // Sort the Trinidad and Tobago regions alphabetically by name
          const sortedTTRegions = result.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          addOptions(
            regionSelect,
            sortedTTRegions.map((state) => ({
              value: state.iso2,
              text: state.name,
            }))
          );
          fetchCities();
          break;
        case "US":
          // For 'US', filter out regions with ISO codes starting with "UM-"
          const filteredUSRegions = filterUSRegions(result);
          // Sort the American regions alphabetically by name
          const sortedUSRegions = filteredUSRegions.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          addOptions(
            regionSelect,
            sortedUSRegions.map((state) => ({
              value: state.iso2,
              text: state.name,
            }))
          );
          fetchCities();
          break;
        // Add more cases for other countries as needed
        default:
          // Default case when no country is selected
          break;
      }
    } catch (error) {
      console.log("Error fetching states:", error);
    }
  }

  async function fetchCities() {
    // Get the selected country and region
    const selectedCountry = document.getElementById("countryInput").value;
    const selectedRegion = document.getElementById("regionInput").value;
    saveInputValues();
    console.log("Region saved:", selectedRegion);

    // Set up headers for the API request
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    let fetchURLmap = "";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      fetchURLmap = "http://localhost:5000/maps/cities";
    } else {
      fetchURLmap =
        "https://drjoiserver-106ea7a60e39.herokuapp.com/maps/cities";
    }

    const apiUrl = `${fetchURLmap}?country=${selectedCountry}&region=${encodeURIComponent(
      selectedRegion
    )}`;

    try {
      // Fetch cities data from the server
      const response = await fetch(apiUrl);
      const result = await response.json();

      // Log the result to the console (you can modify this part as needed)
      // console.log(result);

      // Update city dropdown options
      updateCityDropdown(result);
    } catch (error) {
      console.log("Error fetching cities:", error);
    }
  }

  function updateCityDropdown(cityData) {
    const citySelect = document.getElementById("cityInput");

    // Clear existing options
    citySelect.innerHTML = "";

    // Add new options based on the fetched city data
    cityData.forEach((city) => {
      const option = document.createElement("option");
      option.value = city.name; // Use the 'name' property for the value
      option.text = city.name; // Display the 'name' property in the dropdown
      citySelect.appendChild(option);
    });
    saveInputValues();
    console.log("City saved:", citySelect.value);
  }

  function addOptions(regionSelect, optionsArray, selectedValue) {
    // Add options to the select element
    optionsArray.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText.value;
      option.text = optionText.text;

      // Add a data attribute to store the classification
      option.setAttribute("data-classification", "region");

      if (selectedValue === optionText) {
        option.selected = true;
      }
      regionSelect.add(option);
    });
  }
};
export default DisplayProducts;
