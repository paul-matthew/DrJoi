import "./style.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadStripe } from '@stripe/stripe-js';
// import { handleSubmit } from './components/CheckOutForm.js';

import { cartUtilities } from "./utils/cart.js";

let fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/products";
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  fetchURL = "http://localhost:5000/products";
} else {
  fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/products";
}

//General -------------------------------------------------------------------------------
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
  donation:"",
};

//SHOPPING CART-------------------------------------------------------------------------------
let subtotal = 0;

// Create a modal element
const orderModal = document.createElement("div");
orderModal.classList.add("modal", "fade", "portfolio-modal");
orderModal.id = "orderModal";
let totalPayment = 0;

  //Shipping - FUNCTION CURRENTLY NOT BEING USED
  let shippingCost = 0;
  let taxAmount = 0;
  let taxRate = 0
  
  // let donationAmount = 0;
  async function calculateShippingCost() {

    const cartItems = cartUtilities.getCartItems();


    const {
      firstName,
      lastName,
      email,
      country,
      region,
      city,
      address,
      address2,
      zip,
    } = inputValues;

    // Initialize an array to store all line items for the order
    const lineItems = [];

    cartItems.forEach((item) => {
      if (item.product_id && item.variant_id) {
        // Ensure product_id and variant_id exist
        lineItems.push({
          product_id: item.product_id,
          variant_id: item.variant_id,
          quantity: item.qty,
        });
      } else {
        console.error(`Missing product_id or variant_id for item:`, item);
        // Handle missing IDs (e.g., show error message, skip item, etc.)
      }
    });

    // Construct the order details
    const ShippingCalc = {
      line_items: lineItems,
      address_to: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        country: country,
        region: region,
        address1: address,
        address2: address2,
        city: city,
        zip: zip,
      },
    };
    console.log("Shipping Details:", ShippingCalc);
  
    let fetchURL = '';
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      fetchURL = 'http://localhost:5000/shipping-cost';
    } else {
      fetchURL = 'https://drjoiserver-106ea7a60e39.herokuapp.com/shipping-cost';
    }
  
    fetch(fetchURL, {
      method: 'POST',
      body: JSON.stringify(ShippingCalc),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Assuming shipping cost is returned with order data
          shippingCost = Math.round((data.shippingCost / 100 * 1.10) * 100) / 100;// Update global shippingCost..adding 10% margin due to flucations in coversion rate

          console.log('Shipping cost updated:', shippingCost);
          currentStage = 2.5;
          saveInputValues();
          orderModal.innerHTML = constructModalBody();
        } else {
          console.error('Failed to fetch shipping cost:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error fetching shipping cost:', error);
      });
      console.log('DONE')

  }

  async function calculateTax() {
    const fetchStripeTax = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
        ? "http://localhost:5000/stripe/calculate-taxes"
        : "https://drjoiserver-106ea7a60e39.herokuapp.com/stripe/calculate-taxes";

    try {
        const taxResponse = await fetch(fetchStripeTax, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                region: inputValues.region,
                city: inputValues.city,
                country: inputValues.country,
                zip: inputValues.zip,
                address: inputValues.address,
            }),
        });

        const taxData = await taxResponse.json();
        if (taxData.error) {
            throw new Error("Failed to fetch taxes: " + taxData.error);
        }

        taxRate = (taxData.taxRate)/100 || 0; // Default to 0 if no rate found
        console.log("Client side tax rate:", taxRate);

        return taxRate;

    } catch (error) {
        console.error("Error fetching tax rate:", error);
        alert("Error fetching tax rate. Please check the console for details.");
        return 0;
    }
}
  
function constructModalBody() {
  switch (currentStage) {
    case 1:
      const price = cartUtilities.getTotalPrice() / 100;
      return `
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Subtotal <span style="font-size: 14px;">(Before Taxes & Shipping) (USD)</span></h5><span style="margin-left:5px"></span>              
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- Display order summary and total cost here -->
              <p style="font-size: 14px; color: gray;margin-top:10px">Taxes and shipping will be added at checkout based on your shipping address.</p>
              <table style="border-collapse: collapse; width: 50%;">
              <tr>
                  <td style="border: none; font-weight: bold;">Subtotal:</td>
                  <td style="border: none; text-align: left; font-weight: bold;">$${Math.round((price) * 100) / 100}</td>
              </tr>
            </table>
            <p style="font-size: 14px; color: gray; margin-top: 10px;">
              Consider making a <strong>Support Gift</strong> to Exotic Relief by Dr. Joi. Your contribution helps us continue our mission and make a difference.
            </p>
            <table style="border-collapse: collapse; width: 50%;">
            <tr>
              <td style="border: none; font-weight: bold;">Support Gift:</td>
              <td style="border: none; text-align: left;">
              <input type="number" id="donationInput" value="${(parseFloat(inputValues.donation) || 0).toFixed(2)}" step="1.00" min="0" style="width: 100px; text-align: right;">
              </td>
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
            <button id="totalcost" class="proceed-btn gen-btn mt-3">Total Cost</button>
            <div id='formincomplete' style='color:red; margin-top:5px;font-size:11px'></div>
            <div id='formincomplete2' style='color:red; margin-top:5px;font-size:11px'></div>
            <div style='font-size:10px; margin-top:15px'>By placing your order, you agree to Exotic Relief's <a href="./terms">Terms of Use, Privacy, and Refund Policies</a>.</div>
            <div style='font-size:10px; margin-top:15px'>Please note that <b><u>ALL SALES ARE FINAL</u></b></div>
        </div>
      </div>
    `;

    case 2.5: // New case for displaying shipping costs and tax before payment
    subtotal = cartUtilities.getTotalPrice() / 100;
    taxAmount = Math.round(subtotal * taxRate * 100) / 100;
  
    // Check if subtotal is over $100 to apply free shipping (US only)
    if (subtotal > 100 && inputValues.country === 'US') {
      shippingCost = 0;
    }
  
    // Check if shipping cost is NaN for Canada
    if (inputValues.country === 'CA' && isNaN(shippingCost)) {
      // Display an error message and prevent proceeding
      return `
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Shipping Error</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Unfortunately, some products in your cart are not available for shipping to Canada. Please remove these items or select a different shipping address.</p>
              <button id="backButton2" class="back-btn gen-btn mt-3">Back</button>
            </div>
          </div>
        </div>
      `;
    }
  
    console.log('updated shipping:', shippingCost);
    const donationAmount = parseFloat(inputValues.donation); // Ensure donationAmount is a number
    totalPayment = Math.round((subtotal + shippingCost + taxAmount + donationAmount) * 100) / 100;
    
    const taxRow = taxAmount > 0 ? `
    <tr>
      <td style="border: none;">Tax (${(taxRate * 100).toFixed(2)}%):</td>
      <td style="border: none; text-align: left;">$${taxAmount}</td>
    </tr>
  ` : '';

    return `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Order Summary<span style="font-size: 14px;">(USD)</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Display shipping costs, tax, and total before payment -->
            <table style="border-collapse: collapse; width: 50%;">
              <tr>
                <td style="border: none;">Subtotal:</td>
                <td style="border: none; text-align: left;">$${subtotal}</td>
              </tr>
              <tr>
                <td style="border: none;">Shipping:</td>
                <td style="border: none; text-align: left;">$${shippingCost}</td>
              </tr>
              ${taxRow}
              <tr>
                <td style="border: none;">Support Gift:</td>
                <td style="border: none; text-align: left;">$${donationAmount}</td>
              </tr>
              <tr>
                <td style="border: none; font-weight: bold;">Total:</td>
                <td style="border: none; text-align: left; font-weight: bold;">$${totalPayment}</td>
              </tr>
            </table>
            <p style="font-size: 14px; color: gray;margin-top:10px">Review your order details before proceeding to payment.</p>
            <p style="font-size: 14px; color: gray;">Standard shipping within continental US is typically 3-7 business days. Shipping within Canada can be up to 30 business days.</p>
            <p style="font-size: 14px; color: gray;">Sales tax is collected for orders shipped within the state of Louisiana. We do not currently collect sales tax for other states or countries.</p>
            <button id="backButton2" class="back-btn gen-btn mt-3">Back</button>
            <button id="proceedpayment" class="proceed-btn gen-btn mt-3">Proceed to Payment</button>
          </div>
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
                <!-- Payment options container -->
                <div id="paypal-parent" class="checkout-form"></div>
                <button id="backButton3" class="back-btn gen-btn mt-3">Back</button>
                <a href="./terms" target="_blank">
                  <img src="./stripe-logo.png" class='stripelogo'>
                </a>

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
  const donationInput = document.getElementById("donationInput");

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
  if (donationInput) {inputValues.donation = donationInput.value;console.log("Donation amount:",inputValues.donation)}

  if (currentStage === 2) {
    var formControls = document.getElementsByClassName("form-control");
    var proceedBtn = document.getElementById("totalcost");
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
      saveInputValues();
      hideModal();
      currentStage = 1;
    }
  });

  // Reset the currentStage to 1 when the modal is closed
  // orderModal.addEventListener('hidden.bs.modal', function () {
  //   currentStage = 1;
  // });
}

//CLEAR --------------------------------------------------------------

export function handleCart() {
  // const skuToProductIdMap = {};
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
          // const reversedProducts = data.data.reverse();
          let counter=0;
          // reversedProducts.forEach((product, index) => {
            data.data.forEach((product, index) => {
            const isInStock = product.variants.some(variant => variant.is_available);
            if (!isInStock) {
              return;
            }
            const maxPrice=product.variants
              .filter((variant) => variant.is_enabled)
              .reduce((maxPrice, variant) => (variant.price > maxPrice ? variant.price : maxPrice), 0);
              
            const productCard = document.createElement("div");
            productCard.classList.add("card-container");
            productCard.innerHTML = `
            <a data-bs-toggle="modal" href="#productitem${index + 1}" style="text-decoration: none;">
              <div class="card">
                <div class='productimage'>
                  ${
                    product.images && product.images.length > 0
                      ? `<img src="${product.images[0].src}" class="card-img-top" alt="${product.title}" loading="lazy">`
                      : '<div class="no-image">No image available</div>'
                  }
                  <div class="new-label">NEW</div>
                </div>
                <div class="card-body">
                  <div class="title-price">
                    <div class="service-info">
                      <h5 class="card-title2">${product.title}</h5>
                    </div>
                    <div class='card-price' style='color: grey; font-size: 0.8em;'>
                      <span style='text-decoration: line-through;'>$${(maxPrice / 75).toFixed(2)}</span> <!-- 75 is because it's 25% off! -->
                      <br>
                    </div>
                    <div class='card-price' style='color:red;font-weight:bold'>
                      $${(maxPrice / 100).toFixed(2)}
                    </div>
                    <span style="visibility:hidden;">-</span><!-- Placeholder to temp fix bug -->
                  </div>
                </div>
              </div>
            </a>
          `;
            productsContainer.appendChild(productCard);

          const newLabel = productCard.querySelector('.new-label');
          if (newLabel && counter<18) {
            newLabel.style.position = 'absolute';
            newLabel.style.bottom = '50%';
            newLabel.style.left = '30px';
            newLabel.style.backgroundColor = 'red';
            newLabel.style.color = 'white';
            newLabel.style.padding = '5px';
            newLabel.style.fontWeight = 'bold';
            newLabel.style.maxWidth='50px';
            newLabel.style.zIndex = '1'; // Ensure it overlays the image
            counter++;
          }
          else{
            if (newLabel) {
              newLabel.style.display = 'none';
            }          
          }

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
                    product.options
                    .find((option) => option.name === "Bottle color")
                    ?.values.map(
                      (color) => `
                        <div class="color-option" 
                             style="background-color: ${color.colors[0]};">
                        </div>
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
                            variant.is_available
                            //REMOVED BELOW LINE TO MAKE WATER BOTTLE WORK
                            // && variant.is_enabled
                          );
                        })
                        .map(
                          (size) => `
                        <option value="${size.id}">${size.title}</option>
                      `
                        )
                        .join("") ||
                        product.options
                        .find((option) => option.name === "Quantity")
                        ?.values.map(
                          (quantity) => `
                          <option value="${quantity.id}">${quantity.title}</option>
                        `
                        )
                        .join("") 
                    }            
                  </select>
                </div>
                ${
                  product.options.find((option) => option.name === "Flavour" || option.name === "Flavor")
                    ?.values.length > 0
                    ? `
                    <div class="flavour-options" style="margin-right: 20px;">
                      <h6 style='font-weight:bold; display: inline;'>Flavors:</h6>
                      <select class="flavour-dropdown">
                        ${product.options
                          .find((option) => option.name === "Flavour" || option.name === "Flavor")
                          ?.values.map(
                            (flavour) => `
                            <option value="${flavour.id}">${flavour.title}</option>
                          `
                          )
                          .join("")}
                      </select>
                    </div>
                    `
                    : ""
                }
                

              </div>
              <div style="margin-top:10px;margin-bottom:10px">
                <label for="product-qty" style="margin-top: 10px; font-weight: bold; display: inline;">Quantity:</label>
                <input type="number" class="product-qty" name="quantity" min="1" max="50" value="1" style="display: inline; width: 40px;">
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
                  )?.values[colorIndex] ||
                  product.options.find((option) => option.name === "Bottle color");
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

            const flavorOptions = productModal.querySelectorAll(".flavor-option");
            flavorOptions.forEach((flavorOption, flavorIndex) => {
              flavorOption.addEventListener("click", () => {
                const selectedFlavor =
                  product.options.find((option) => option.name === "Flavor" || option.name === "Flavour")
                    ?.values[flavorIndex];

                if (selectedFlavor) {
                  // Remove 'selected' class from all flavor options
                  flavorOptions.forEach((option) => {
                    option.classList.remove("selected");
                  });

                  // Add 'selected' class to the clicked flavor option
                  flavorOption.classList.add("selected");

                  // Log or handle the selected flavor as needed
                  console.log("Selected Flavor:", selectedFlavor);
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
              // updateTotal();
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
                  ?.values[selectedColorIndex] ||
                product.options.find((option) => option.name === "Bottle color")
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
                  )?.values.length > 0 ||
                  product.options.find(
                    (option) => option.name === "Bottle color"
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


  const random = generateRandom6DigitNumber();
  const randomlabel = generateRandom6DigitNumber();

  function generateRandom6DigitNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  // Initialize an array to store line items for the order
  async function submitOrder() {
    // Find all cart items
    const cartItems = cartUtilities.getCartItems();
    console.log("Cart Items:", cartItems);

    const {
      firstName,
      lastName,
      email,
      country,
      region,
      city,
      address,
      address2,
      zip,
    } = inputValues;

    // Initialize an array to store all line items for the order
    const lineItems = [];

    // Iterate over each cart item and populate lineItems
    cartItems.forEach((item) => {
      if (item.product_id && item.variant_id) {
        // Ensure product_id and variant_id exist
        lineItems.push({
          product_id: item.product_id,
          variant_id: item.variant_id,
          quantity: item.qty,
          title: item.title,
          price: item.price,
        });
      } else {
        console.error(`Missing product_id or variant_id for item:`, item);
        // Handle missing IDs (e.g., show error message, skip item, etc.)
      }
    });

    // Construct the order details
    const orderDetails = {
      external_id: random.toString(),
      label: randomlabel.toString(),
      line_items: lineItems,
      shipping_method: 1,
      is_printify_express: false,
      send_shipping_notification: false,
      address_to: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        country: country,
        region: region,
        address1: address,
        address2: address2,
        city: city,
        zip: zip,
        // Include other user input in address_to
      },
      subtotal: subtotal,         
      shippingCost: shippingCost, 
      totalPayment: totalPayment,
      taxAmount:taxAmount, 
    };
    console.log("Order Details:", orderDetails);

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

  orderModal.addEventListener("click", async function (event) {
    const targetId = event.target.id;
    switch (targetId) {
      case "OrderDetailsButton":
        saveInputValues();
        currentStage = 2;
        orderModal.innerHTML = constructModalBody();
        break;
      case "totalcost":
        saveInputValues();
        await calculateShippingCost();
        await calculateTax();
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
      case "backButton3":
        currentStage = 2.5;
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


  
  async function initializePayPal() {
    if (currentStage === 3) {
        const stripeContainer = document.getElementById("paypal-parent");
        if (!stripeContainer) {
            console.error("Element with ID 'paypal-parent' not found.");
            return;
        }

        // Create and append the payment form
        const stripeFormContainer = document.createElement("form");
        stripeFormContainer.id = "payment-form";
        
        const cardElementDiv = document.createElement("div");
        cardElementDiv.id = "stripe-form-container";
        stripeFormContainer.appendChild(cardElementDiv);
        
        const cardErrorsDiv = document.createElement("div");
        cardErrorsDiv.id = "card-errors";
        cardErrorsDiv.setAttribute("role", "alert");
        stripeFormContainer.appendChild(cardErrorsDiv);
        stripeContainer.appendChild(stripeFormContainer);
        
        // Create and append the Pay button
        const payButton = document.createElement("button");
        payButton.type = "submit";
        payButton.className = "pay-button";
        payButton.textContent = `Pay: $${totalPayment}`;
        stripeContainer.appendChild(payButton);

        const fetchURLstripeCreatePaymentIntent = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
            ? "http://localhost:5000/stripe/create-payment-intent"
            : "https://drjoiserver-106ea7a60e39.herokuapp.com/stripe/create-payment-intent";

        const fetchURLstripeValidate = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
            ? "http://localhost:5000/stripe/validate"
            : "https://drjoiserver-106ea7a60e39.herokuapp.com/stripe/validate";

        const fetchStripeKey = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
            ? "http://localhost:5000/stripe/publishable-key"
            : "https://drjoiserver-106ea7a60e39.herokuapp.com/stripe/publishable-key";

        try {
            // Fetch the Stripe publishable key
            const keyResponse = await fetch(fetchStripeKey);
            const { publishableKey } = await keyResponse.json();
            if (!publishableKey) {
                throw new Error("Failed to retrieve Stripe publishable key");
            }

            // Initialize Stripe elements
            const stripe = await loadStripe(publishableKey);
            const elements = stripe.elements();
            const cardElement = elements.create('card');
            cardElement.mount('#stripe-form-container');

            // Add event listener to the Pay button
            payButton.addEventListener('click', async (event) => {
                event.preventDefault();
                if (!stripe || !elements) {
                    console.error("Stripe or elements not loaded.");
                    return;
                }

                try {
                    // Calculate the tax amount based on the subtotal
                    const formattedSubtotal = parseFloat(subtotal).toFixed(2);
                    const taxAmount = (subtotal * taxRate).toFixed(2);
                    const formattedTaxAmount = parseFloat(taxAmount).toFixed(2);
                    const formattedShippingCost = parseFloat(shippingCost).toFixed(2);
                    const formattedDonationAmount = parseFloat(inputValues.donation) || 0;

                    // Validate the payment details on the server
                    const validationResponse = await fetch(fetchURLstripeValidate, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            amount: Math.round(totalPayment * 100), // Stripe expects the amount in cents
                            taxAmount: formattedTaxAmount,
                            shippingCost: formattedShippingCost,
                            donationAmount: formattedDonationAmount,
                            subtotal: formattedSubtotal,
                        }),
                    });
                    
                    const validationData = await validationResponse.json();
                    if (!validationData.success) {
                        throw new Error("Payment validation failed: " + (validationData.error || 'Unknown error'));
                    }

                    // Create a PaymentIntent on the server
                    const paymentIntentResponse = await fetch(fetchURLstripeCreatePaymentIntent, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            amount: Math.round(totalPayment * 100), // Stripe expects the amount in cents
                            description: `Order total of $${totalPayment.toFixed(2)}`,
                            metadata: {
                                subtotal: formattedSubtotal,
                                tax: formattedTaxAmount,
                                shipping: formattedShippingCost,
                                donation: inputValues.donation,
                            },
                        }),
                    });

                    const paymentIntentData = await paymentIntentResponse.json();
                    if (!paymentIntentData.clientSecret) {
                        throw new Error("Failed to get client secret from Stripe");
                    }

                    const clientSecret = paymentIntentData.clientSecret;

                    // Handle the payment confirmation
                    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                        payment_method: {
                            card: cardElement,
                        },
                    });

                    console.log('Stripe PaymentIntent Response:', { paymentIntent, error });

                    if (error) {
                        console.error("Error confirming card payment:", error);
                        alert("Error confirming card payment. Please check the console for details.");
                    } else if (paymentIntent.status === 'succeeded') {
                        submitOrder();
                        console.log("Order submitted successfully");
                        console.log("Payment succeeded:", paymentIntent);
                    }
                } catch (error) {
                    console.error("Error during payment process:", error);
                    alert("Error during payment process. Please check the console for details.");
                }
            });
        } catch (error) {
            console.error("Error during initialization process:", error);
            alert("Error during initialization process. Please check the console for details.");
        }
    }
}







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
        // case "TT":
        //   // Assuming 'TT' API response contains ISO and name properties
        //   // Sort the Trinidad and Tobago regions alphabetically by name
        //   const sortedTTRegions = result.sort((a, b) =>
        //     a.name.localeCompare(b.name)
        //   );
        //   addOptions(
        //     regionSelect,
        //     sortedTTRegions.map((state) => ({
        //       value: state.iso2,
        //       text: state.name,
        //     }))
        //   );
        //   fetchCities();
        //   break;
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
