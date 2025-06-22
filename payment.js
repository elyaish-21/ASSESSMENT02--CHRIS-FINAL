const districtsData = {
      "Binondo": ["-- Select Barangay --", "Barangay 287","Barangay 288","Barangay 289",
      "Barangay 290","Barangay 291","Barangay 292","Barangay 293",
      "Barangay 294","Barangay 295","Barangay 296"],

      "Ermita": ["-- Select Barangay --","Barangay 659","Barangay 659-A","Barangay 660",
      "Barangay 660-A","Barangay 661","Barangay 663","Barangay 663-A",
      "Barangay 664","Barangay 666","Barangay 667","Barangay 668","Barangay 669","Barangay 670"],

      "Intramuros": ["-- Select Barangay --","Barangay 654","Barangay 655","Barangay 656","Barangay 657","Barangay 658"],

      "Malate": ["-- Select Barangay --","Barangay 688","Barangay 689","Barangay 690","Barangay 691",
      "Barangay 692","Barangay 693","Barangay 694","Barangay 695","Barangay 696",
      "Barangay 697","Barangay 698","Barangay 699","Barangay 700","Barangay 701",
      "Barangay 702","Barangay 703","Barangay 704","Barangay 705","Barangay 706",
      "Barangay 707","Barangay 708","Barangay 709","Barangay 710","Barangay 711",
      "Barangay 712","Barangay 713","Barangay 740","Barangay 741","Barangay 742",
      "Barangay 743","Barangay 744"],

      "Paco": ["-- Select Barangay --","Barangay 662","Barangay 664-A","Barangay 671","Barangay 672",
      "Barangay 673","Barangay 674","Barangay 675","Barangay 676","Barangay 677",
      "Barangay 678","Barangay 679","Barangay 680","Barangay 681","Barangay 682",
      "Barangay 683","Barangay 684","Barangay 685","Barangay 686","Barangay 687",
      "Barangay 809","Barangay 810","Barangay 811","Barangay 812","Barangay 813",
      "Barangay 814","Barangay 815","Barangay 816","Barangay 817","Barangay 818",
      "Barangay 819","Barangay 820","Barangay 821","Barangay 822","Barangay 823",
      "Barangay 824","Barangay 825","Barangay 826","Barangay 827","Barangay 828",
      "Barangay 829","Barangay 830","Barangay 831","Barangay 832"],

      "Pandacan": ["-- Select Barangay --","Barangay 833","Barangay 834","Barangay 835","Barangay 836",
      "Barangay 837","Barangay 838","Barangay 839","Barangay 840","Barangay 841"
      ,"Barangay 842","Barangay 843","Barangay 844","Barangay 845","Barangay 846",
      "Barangay 847","Barangay 848","Barangay 849","Barangay 850","Barangay 851",
      "Barangay 852","Barangay 853","Barangay 855","Barangay 856","Barangay 857",
      "Barangay 858","Barangay 859","Barangay 860","Barangay 861","Barangay 862",
      "Barangay 863","Barangay 864","Barangay 865","Barangay 867","Barangay 868",
      "Barangay 869","Barangay 870","Barangay 871","Barangay 872"],

      "Port Area": ["-- Select Barangay --","Barangay 649","Barangay 650",
      "Barangay 651","Barangay 652","Barangay 653"],

      "Quiapo": ["-- Select Barangay --", "Barangay 306","Barangay 307","Barangay 308","Barangay 309",
      "Barangay 383","Barangay 384","Barangay 385","Barangay 386","Barangay 387",
      "Barangay 388","Barangay 389","Barangay 390","Barangay 391","Barangay 392",
      "Barangay 393","Barangay 394"],

      "Sampaloc":[
        "-- Select Barangay --", "Barangay 587-A",
      // Sampaloc District Barangays (District 4, Barangay 395 to 636)
      ...Array.from({length: 242}, (_, i) => `Barangay ${i + 395}`)
    ],

      "San Andres": [
        "-- Select Barangay --", "Balugo", "Bugay", "Bugtosan", "Bukid",
        "Duhat", "Fatima", "J.A. Bugting", "La Paz", "Malvar",
        "Marupok", "Mercado", "Merville", "Palos", "San Pedro",
        "Santa Cruz", "Santo Niño", "Subida", "United Nations", "Ususan",
        "Zapote", "Alhambra", "Bacood", "Bagumbayan", "Bagtikan",
        "Bilaoan", "Buhangin", "Bulinlima", "Bungad", "Buyan",
        "Calzada", "Culasian", "Dakutin", "Gurong-Guro", "Hilauan",
        "Isagon", "Kabac", "Labac", "Luntal", "Mabini", "Magtalang",
        "Maninghoy", "Matandang Cruz", "Molave", "Nangka", "Pagkakaisa",
        "Pag-asa", "Paliparan", "Pamenta", "Pilar", "Pinaglabanan",
        "Pisong Gubat", "Poblacion", "Pook", "Port Area", "Putatan",
        "Raxio", "Sabang", "Sabitan", "Salapan", "Sampaga",
        "San Antonio", "San Carlos", "San Isidro", "San Jose", "Santa Ana"
      ],

      "San Miguel": ["-- Select Barangay --", "Barangay 637","Barangay 638","Barangay 639",
      "Barangay 640","Barangay 641","Barangay 642","Barangay 643",
      "Barangay 644","Barangay 645","Barangay 646","Barangay 647","Barangay 648"],

      "San Nicolas": ["-- Select Barangay --","Barangay 268","Barangay 269","Barangay 270",
      "Barangay 271","Barangay 272","Barangay 273","Barangay 274","Barangay 275",
      "Barangay 276","Barangay 281","Barangay 282","Barangay 283","Barangay 284",
      "Barangay 285","Barangay 286"],

      "Santa Ana": [ 
        "-- Select Barangay --", "Barangay 818-A","Barangay 866",
        ...Array.from({ length: 161 }, (_, i) => i + 745)
       .filter(n => ![ ...Array.from({ length: 64 }, (_, i) => i + 809)].includes(n)) // exclude specific numbers
       .map(n => `Barangay ${n}`)
      ],

      "Santa Cruz": [
        "-- Select Barangay --",
        ...Array.from({length: 86}, (_, i) => `Barangay ${i + 297}`)
      ],

      "Santa Mesa": [
        "-- Select Barangay --", "Barangay 833", "Barangay 893", "Barangay 894", 
        "Barangay 895", "Daang Bakal", "Pag-Asa",
        ...Array.from({ length: 44 }, (_, i) => i + 587)
       .filter(n => ![593, 594, 595, 619, 626, 627].includes(n)) // exclude specific numbers
       .map(n => `Barangay ${n}`)
      ],

      "Tondo": [
        "-- Select Barangay --","Barangay 202-A",
      ...Array.from({length: 266}, (_, i) => `Barangay ${i + 1}`)
    ]
    };

    const distSelect = document.getElementById("district");
    const brgySelect = document.getElementById("barangay");

    // Populate districts
    for (const dist in districtsData) {
      const o = document.createElement("option");
      o.value = dist;
      o.textContent = dist;
      distSelect.appendChild(o);
    }

    distSelect.addEventListener("change", () => {
      const dist = distSelect.value;
      brgySelect.innerHTML = "";
      if (!dist) {
        brgySelect.disabled = true;
        return;
      }
      districtsData[dist].forEach(b => {
        const o = document.createElement("option");
        o.value = b;
        o.textContent = b;
        brgySelect.appendChild(o);
      });
      brgySelect.disabled = false;
    });

//PAYMENT SECTION

// Service configuration
const services = {
  birth: {
    title: "Birth Services",
    offers: {
      delayed_birth: {
        name: "Delayed Registration of Birth",
        baseFee: 100,
        description: "For registrations beyond 30 days from birth",
        rushFee: 50
      },
      live_birth: {
        name: "Registration of Live Birth",
        baseFee: 100,
        description: "Standard registration of live birth certificates",
        rushFee: 50
      },
      birth_correction: {
        name: "Request for Correction of Birth Certificate",
        baseFee: 100,
        description: "Correction of errors in birth records",
        rushFee: 50
      },
      birth_delivery: {
        name: "Birth Delivery Registration",
        baseFee: 150,
        description: "Registration of birth delivery details",
        rushFee: 50
      }
    }
  },
  marriage: {
    title: "Marriage Services",
    offers: {
      marriage_certificate: {
        name: "Marriage Certificate Registration",
        baseFee: 100,
        description: "Standard marriage certificate processing",
        rushFee: 50
      },
      marriage_license: {
        name: "Marriage License Registration",
        baseFee: 150,
        description: "Processing of marriage license",
        rushFee: 50
      },
      marriage_correction: {
            name: "Request for Correction of Marriage Certificate",
            baseFee: 150,
            description: "Correction of errors in marriage records",
            rushFee: 50
        },
      marriage_delayed: {
        name: "Delayed Marriage Registration",
        baseFee: 150,
        description: "For registrations beyond the standard period",
        rushFee: 100
    },
    marriage_delivery: {
        name: "Marriage Delivery Registration",
        baseFee: 150,
        description: "Registration of marriage delivery details",
        rushFee: 50
        }
    }
  },
  death: {
    title: "Death Services",
    offers: {
      death_registration: {
        name: "Death Registration",
        baseFee: 100,
        description: "Standard death certificate processing",
        rushFee: 50
      },
      delayed_death: {
        name: "Delayed Death Registration",
        baseFee: 100,
        description: "For registrations beyond the standard period",
        rushFee: 50
      },
      death_delivery: {
        name: "Death Delivery Registration",
        baseFee: 100,
        description: "Registration of death delivery details",
        rushFee: 50
      },
      death_correction:{
        name: "Request for Correction of Death Certificate",
        baseFee: 100,
        description: "Correction of errors in death records",
        rushFee: 50
      },
      death_burial:{
        name: "Death Burial Registration",
        baseFee: 100,
        description: "Registration of burial details",
        rushFee: 50
      },
      death_creamation:{
        name: "Death Cremation Registration",
        baseFee: 100,
        description: "Registration of cremation details",
        rushFee: 50
      }
    }
}
};

// Add global variables to store current service/offer
let currentService = null;
let currentOffer = null;
let serviceType = null;

   document.addEventListener("DOMContentLoaded", function() {
  // Get service parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  serviceType = urlParams.get('service'); // assign to global
  const offerId = urlParams.get('offer');

  if (serviceType && offerId && services[serviceType]?.offers[offerId]) {
    currentService = services[serviceType]; // assign to global
    currentOffer = currentService.offers[offerId]; // assign to global
    const service = currentService;
    const offer = currentOffer;
    
    // Update UI with service details
    document.getElementById('paymentTitle').textContent = offer.name;
    document.getElementById('serviceDescription').textContent = offer.description;
    document.getElementById('baseFee').textContent = offer.baseFee;
    document.getElementById('rushFeeDisplay').textContent = offer.rushFee;
    document.getElementById('rushFeeAmount').textContent = offer.rushFee;
    document.getElementById('total').textContent = offer.baseFee;
    
    // Show payment section (remove the form submission flow)
    document.getElementById("paymentSection").style.display = "block";
  } else {
    alert("No service selected. Redirecting to services page...");
    window.location.href = "services.html";
  }
});


function updateTotal() {
  // Get the current service and offer from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const serviceType = urlParams.get('service');
  const offerId = urlParams.get('offer');

  // Check if we have valid service data
  if (serviceType && offerId && services[serviceType]?.offers[offerId]) {
    const offer = services[serviceType].offers[offerId];
    const isRush = document.getElementById('rush').checked;
    
    // Calculate total based on the current offer's fees
    const total = isRush ? offer.baseFee + offer.rushFee : offer.baseFee;
    
    // Update the display
    document.getElementById('total').textContent = total;
    document.getElementById('rushFeeInfo').style.display = isRush ? 'block' : 'none';
    
    // Update any popup/overlay totals if they exist
    const popupTotals = document.querySelectorAll('.popupTotal');
    if (popupTotals) {
      popupTotals.forEach(el => {
        el.textContent = total;
      });
    }
  } else {
    console.error("Could not determine service fees - missing or invalid service parameters");
  }
}

  // Optional: run this on page load to make sure total is correct
  window.onload = updateTotal;


  function completePayment() {
    alert("Payment successful! A confirmation will be sent.");
    window.location.href = 'birth-service.html'; // or redirect as needed
  }

  // Store form data when leaving the form page
function storeFormData() {
  const formData = {
    serviceType: new URLSearchParams(window.location.search).get('service'),
    applicantName: document.getElementById("applicantName")?.value,
    // Add all other form fields you want to preserve
    childName: {
      firstName: document.getElementById("firstName")?.value,
      lastName: document.getElementById("lastName")?.value,
      middleName: document.getElementById("middleName")?.value
    },
    // Add more fields as needed
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Restore form data when going back
function goBackToForm() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData || !formData.serviceType) {
    window.history.back();
    return;
  }

  // Redirect to the appropriate form page
  switch(formData.serviceType) {
    case 'birth':
      window.location.href = 'birth-service.html';
      break;
    case 'marriage':
      window.location.href = 'marriage-service.html';
      break;
    case 'death':
      window.location.href = 'death-service.html';
      break;
    default:
      window.history.back();
  }
}

function toggleQR(selectedMethod) {
  const gcashQR = document.getElementById("gcashQR");
  const paymayaQR = document.getElementById("paymayaQR");

  if (selectedMethod === "GCash") {
    gcashQR.style.display = "block";
    paymayaQR.style.display = "none";
  } else if (selectedMethod === "PayMaya") {
    gcashQR.style.display = "none";
    paymayaQR.style.display = "block";
  } else {
    gcashQR.style.display = "none";
    paymayaQR.style.display = "none";
  }
}

function openOverlay() {
  console.log("openOverlay function called"); // Debugging line
  const overlay = document.getElementById("overlay");
  
  if (overlay) {
    console.log("Overlay element found"); // Debugging line
    overlay.style.display = "flex";
    
    // Update the total in the overlay
    const mainTotal = document.getElementById("total").textContent;
    document.querySelectorAll('.popupTotal').forEach(el => {
      el.textContent = mainTotal;
    });
  } else {
    console.error("Overlay element not found!");
  }
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}

function submitCard() {
  const popupTotalElement = document.querySelector(".popupTotal"); // First match
  const popupTotal = parseFloat(popupTotalElement?.textContent || "0");

  const userAmount = parseFloat(document.getElementById("userAmount").value);

  if (isNaN(userAmount)) {
    alert("Please enter a valid payment amount.");
    return;
  }

  if (userAmount < popupTotal) {
    alert(`Insufficient payment. Please enter at least ₱${popupTotal}`);
  } else {
    alert("Payment successful!");
    closeOverlay();
  }
}

function proceedToPayment() {
  const requiredTotal = document.getElementById("total").textContent;
  const userAmount = document.getElementById("userAmount").value;

  if (parseFloat(userAmount) < parseFloat(requiredTotal)) {
    alert("Insufficient payment. Please enter at least ₱" + requiredTotal);
  } else {
    alert("Payment processing...");
    closePopup();
  }

  storeFormData(); // Save data before redirect
  window.location.href = `payment.html?service=${currentService.type}&offer=${currentService.offer}`;
}

function showTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  
  // Show selected tab
  document.getElementById(tabName + 'Form').style.display = 'block';
  
  // Update active tab buttons
  document.querySelectorAll('.tab-header button').forEach(btn => {
    btn.classList.remove('active-tab');
  });
  document.getElementById(tabName + 'Tab').classList.add('active-tab');
}


window.onload = () => {
  updateTotal();
};

function confirmPayment() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const mname = document.getElementById("mname").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const district = document.getElementById("district").value;
  const barangay = document.getElementById("barangay").value;
  const addressDetails = document.getElementById("addressDetails").value.trim();
  const receiptFile = document.querySelector('input[type="file"]').files[0];

  // Validation checks
  if (!fname || !lname || !mname || !contact || !district || !barangay || !addressDetails) {
    alert("Please fill in all required fields before submitting.");
    return;
  }

  // Validate phone number format (must be 10 digits starting with 9)
  const phoneRegex = /^9\d{9}$/;
  if (!phoneRegex.test(contact)) {
    alert("Please enter a valid 10-digit contact number starting with 9.");
    return;
  }

  // Validate receipt upload
  if (!receiptFile) {
    alert("Please upload your receipt for verification.");
    return;
  }

 // Validate file type
  const validExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
  const fileExt = receiptFile.name.substring(receiptFile.name.lastIndexOf(".")).toLowerCase();
  if (!validExtensions.includes(fileExt)) {
    alert("Please upload a valid file type (PDF, JPG, JPEG, PNG).");
    return;
  }

  // All validations passed - generate receipt
  alert("Payment submitted successfully! Your receipt will now download.");
  generateFinalReceiptPDF();
  
  // Optional: You can add form submission to server here
  // submitFormToServer();
}


function generateFinalReceiptPDF() {
  try {
    const doc = new window.jsPDF();
    
    // Get form values
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const mname = document.getElementById("mname").value;
    const sfxname = document.getElementById("sfxname").value;
    const contact = document.getElementById("contact").value;
    const addressDetails = document.getElementById("addressDetails").value;
    const barangay = document.getElementById("barangay").value;
    const district = document.getElementById("district").value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "Credit/Debit Card";
    const rushChecked = document.getElementById("rush").checked;

    const baseFee = currentOffer.baseFee;
    const rushFee = rushChecked ? currentOffer.rushFee : 0;
    const total = baseFee + rushFee;

    // Generate reference number
    const date = new Date();
    const dateStr = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
    const timeStr = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    const randomID = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const refNo = `MNL-${randomID}`;

    // Receipt formatting
    doc.setFont("courier", "normal");
    
    // Header
    doc.setFontSize(14);
    doc.setFont("courier", "bold");
    doc.text("REPUBLIC OF THE PHILIPPINES", 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.text("CITY OF MANILA", 105, 22, { align: "center" });
    doc.text("OFFICE OF THE CIVIL REGISTRAR", 105, 29, { align: "center" });
    doc.text("NATIONAL CAPITAL REGION (NCR)", 105, 36, { align: "center" });
    
    // Divider line
    doc.setDrawColor(0);
    doc.line(15, 45, 195, 45);
    
    // Service Information
    doc.setFontSize(16);
    doc.text("OFFICIAL RECEIPT", 105, 55, { align: "center" });
    
    doc.setFontSize(12);
    doc.text(`Service: ${currentService.title}`, 20, 65);
    doc.text(`Request Type: ${currentOffer.name}`, 20, 72);
    
    // Payment Details
    doc.setFontSize(10);
    doc.text(`Date: ${dateStr}    Time: ${timeStr}`, 20, 82);
    doc.text(`Reference No: ${refNo}`, 20, 89);
    doc.text(`Payment Method: ${paymentMethod}`, 20, 96);
    
    // Charges
    doc.setFont("courier", "bold");
    doc.text("--- CHARGES ---", 20, 106);

    doc.setFont("courier", "normal");
    doc.text(`${currentOffer.name.toUpperCase()} FEE: PHP ${baseFee.toFixed(2)}`, 20, 114);
    if (rushChecked) {
      doc.text(`RUSH PROCESSING FEE: PHP ${rushFee.toFixed(2)}`, 20, 122);
    }

    // Total
    doc.setFont("courier", "bold");
    doc.text(`TOTAL:    PHP ${total.toFixed(2)}`, 20, rushChecked ? 130 : 122);
    
    // Customer Info
    doc.setFontSize(10);
    doc.text("--- CUSTOMER INFORMATION ---", 20, 140);
    doc.setFont("courier", "normal");
    doc.text(`NAME: ${fname} ${mname} ${lname} ${sfxname}`, 20, 148);
    doc.text(`CONTACT: +63${contact}`, 20, 156);
    doc.text(`ADDRESS: ${addressDetails}, ${barangay}, ${district}, Manila`, 20, 164);
    
    // Footer
    doc.setFontSize(9);
    doc.text("THANK YOU FOR YOUR PAYMENT", 105, 180, { align: "center" });
    doc.text("This serves as your official receipt", 105, 186, { align: "center" });
    doc.text("**** Customer Copy ****", 105, 192, { align: "center" });

    // Save PDF with service-specific filename
    doc.save(`Receipt-${currentOffer.name.replace(/ /g,'_')}-${refNo}.pdf`);

  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("There was an error generating your receipt. Please try again.");
  }
}