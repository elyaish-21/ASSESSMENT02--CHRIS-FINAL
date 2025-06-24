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
      marriage_correction: {
            name: "Request for Correction of Marriage Certificate",
            baseFee: 150,
            description: "Correction of errors in marriage records",
            rushFee: 50
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
      death_delivery: {
        name: "Death Delivery Registration",
        baseFee: 150,
        description: "Registration of death delivery details",
        rushFee: 50
      },
      death_correction:{
        name: "Request for Correction of Death Certificate",
        baseFee: 150,
        description: "Correction of errors in death records",
        rushFee: 50
      },
    }
}
};

// Add global variables to store current service/offer
let currentService = null;
let currentOffer = null;
let serviceType = null;

// Helper functions
function isDeliveryOffer(serviceType, offerId) {
  const deliveryOffers = {
    birth: ['birth_delivery'],
    marriage: ['marriage_delivery'],
    death: ['death_delivery']
  };
  return deliveryOffers[serviceType]?.includes(offerId);
}

function isCorrectionOffer(serviceType, offerId) {
  const correctionOffers = {
    birth: ['birth_correction'],
    marriage: ['marriage_correction'],
    death: ['death_correction']
  };
  return correctionOffers[serviceType]?.includes(offerId);
}

function getNumberOfCopies() {
  try {
    const data = JSON.parse(localStorage.getItem('DeliveryCopies'));
    if (data && typeof data.copies === 'number') {
      return data.copies;
    }
  } catch (e) {
    console.error("Error reading copies:", e);
  }
  return 1;
}

function updateTotal() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceType = urlParams.get('service');
  const offerId = urlParams.get('offer');

  if (serviceType && offerId && services[serviceType]?.offers[offerId]) {
    const offer = services[serviceType].offers[offerId];
    const isRush = document.getElementById('rush').checked;
    let total = isRush ? offer.baseFee + offer.rushFee : offer.baseFee;

    if (isDeliveryOffer(serviceType, offerId)) {
      const copies = getNumberOfCopies();
      const perCopyFee = 5;
      const totalCopyFee = copies * perCopyFee;
      total += totalCopyFee;
      
      const copyFeeAmount = document.getElementById('copyFeeAmount');
      if (copyFeeAmount) copyFeeAmount.textContent = totalCopyFee;
      
      const copiesCount = document.getElementById('copiesCount');
      if (copiesCount) copiesCount.textContent = copies;
    }

    document.getElementById('total').textContent = total;
    document.getElementById('rushFeeInfo').style.display = isRush ? 'block' : 'none';

    // Update overlay total if it exists
    const popupTotals = document.querySelectorAll('.popupTotal');
    if (popupTotals) {
      popupTotals.forEach(el => {
        el.textContent = total;
      });
    }
  }
}

// Payment method toggle
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

// Overlay functions
function openOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "flex";
    const mainTotal = document.getElementById("total").textContent;
    document.querySelectorAll('.popupTotal').forEach(el => {
      el.textContent = mainTotal;
    });
  }
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.style.display = "none";
}

function submitCard() {
  const popupTotal = parseFloat(document.querySelector(".popupTotal")?.textContent || "0");
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

function confirmPayment() {
  // Validate all required fields
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

  // Validate phone number
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
  generateFinalReceiptPDF();
}

// Tab navigation
function showTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(tabName + 'Form').style.display = 'block';
  
  document.querySelectorAll('.tab-header button').forEach(btn => {
    btn.classList.remove('active-tab');
  });
  document.getElementById(tabName + 'Tab').classList.add('active-tab');
}

// Main payment page initialization
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  serviceType = urlParams.get('service');
  const offerId = urlParams.get('offer');

  if (serviceType && offerId && services[serviceType]?.offers[offerId]) {
    currentService = services[serviceType];
    currentOffer = currentService.offers[offerId];

    // Update UI
    document.getElementById('paymentTitle').textContent = currentOffer.name;
    document.getElementById('serviceDescription').textContent = currentOffer.description;
    document.getElementById('baseFee').textContent = currentOffer.baseFee;
    document.getElementById('rushFeeDisplay').textContent = currentOffer.rushFee;
    document.getElementById('rushFeeAmount').textContent = currentOffer.rushFee;
    
    // Initialize payment section
    document.getElementById("paymentSection").style.display = "block";
    updateTotal();

    // Add copy fee rows for delivery services
    if (isDeliveryOffer(serviceType, offerId)) {
      const copies = getNumberOfCopies();
      const totalCopyFee = copies * 5;

      // Create rows if they don't exist
      if (!document.getElementById('serviceFeeRow')) {
        const serviceFeeRow = document.createElement('div');
        serviceFeeRow.id = 'serviceFeeRow';
        serviceFeeRow.innerHTML = `<span>Service Fee:</span> <span id="serviceFeeAmount">${currentOffer.baseFee}</span>`;
        document.getElementById('paymentSection').insertBefore(serviceFeeRow, document.getElementById('rushFeeDisplay').parentNode);
      }

      if (!document.getElementById('copiesRow')) {
        const copiesRow = document.createElement('div');
        copiesRow.id = 'copiesRow';
        copiesRow.innerHTML = `<span>Number of Copies:</span> <span id="copiesCount">${copies}</span>`;
        document.getElementById('paymentSection').insertBefore(copiesRow, document.getElementById('rushFeeDisplay').parentNode);
      }

      if (!document.getElementById('copyFeeRow')) {
        const copyFeeRow = document.createElement('div');
        copyFeeRow.id = 'copyFeeRow';
        copyFeeRow.innerHTML = `<span>Copies Fee (₱5 x ${copies}):</span> <span id="copyFeeAmount">${totalCopyFee}</span>`;
        document.getElementById('paymentSection').insertBefore(copyFeeRow, document.getElementById('rushFeeDisplay').parentNode);
      }
    }
  } else {
    alert("No service selected. Redirecting to services page...");
    window.location.href = "services.html";
  }
});

// PDF Receipt Generation (with copy fee included for delivery services)
function generateFinalReceiptPDF() {
  try {
    const doc = new window.jsPDF();
    const urlParams = new URLSearchParams(window.location.search);
    const offerId = urlParams.get('offer');

    // Get form values
    const formValues = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      mname: document.getElementById("mname").value,
      sfxname: document.getElementById("sfxname").value,
      contact: document.getElementById("contact").value,
      addressDetails: document.getElementById("addressDetails").value,
      barangay: document.getElementById("barangay").value,
      district: document.getElementById("district").value,
      paymentMethod: document.querySelector('input[name="paymentMethod"]:checked')?.value || "Credit/Debit Card"
    };

    // Calculate fees
    const baseFee = currentOffer.baseFee;
    const rushFee = document.getElementById("rush").checked ? currentOffer.rushFee : 0;
    let copies = 1;
    let copyFee = 0;

    // Only show number of copies and copy fee for delivery offers (not correction offers)
    if (isDeliveryOffer(currentService.type, offerId) && !isCorrectionOffer(currentService.type, offerId)) {
      const domCopiesElem = document.getElementById("copiesCount");
      if (domCopiesElem && !isNaN(parseInt(domCopiesElem.textContent))) {
        copies = parseInt(domCopiesElem.textContent);
      } else {
        copies = getNumberOfCopies();
      }
      copyFee = copies * 5;
    }

    const total = baseFee + rushFee + copyFee;

    // Generate reference number
    const date = new Date();
    const refNo = `MNL-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;

    // Receipt Header
    doc.setFontSize(14);
    doc.setFont("courier", "bold");
    doc.text("REPUBLIC OF THE PHILIPPINES", 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.text("CITY OF MANILA", 105, 22, { align: "center" });
    doc.text("OFFICE OF THE CIVIL REGISTRAR", 105, 29, { align: "center" });
    doc.line(15, 45, 195, 45);

    // Service Information
    doc.setFontSize(16);
    doc.text("OFFICIAL RECEIPT", 105, 55, { align: "center" });
    doc.setFontSize(12);
    doc.text(`Service: ${currentService.title}`, 20, 65);
    doc.text(`Request Type: ${currentOffer.name}`, 20, 72);
    
    // Payment Details
    doc.setFontSize(10);
    doc.text(`Date: ${date.toLocaleDateString()}    Time: ${date.toLocaleTimeString()}`, 20, 82);
    doc.text(`Reference No: ${refNo}`, 20, 89);
    doc.text(`Payment Method: ${formValues.paymentMethod}`, 20, 96);
    
    // Charges Section (with copy fee for delivery services if and only if Home Delivery form was filled)
    doc.setFont("courier", "bold");
    doc.text("--- CHARGES ---", 20, 106);
    doc.setFont("courier", "normal");
    let y = 114;
    doc.text(`Service Fee: PHP ${baseFee.toFixed(2)}`, 20, y);
    y += 8;
    // Only show number of copies and copy fee for delivery offers (not correction offers)
    if (isDeliveryOffer(currentService.type, offerId) && !isCorrectionOffer(currentService.type, offerId)) {
      doc.text(`Number of Copies: ${copies}`, 20, y);
      y += 8;
      doc.text(`Copies Fee (₱5 x ${copies}): PHP ${copyFee.toFixed(2)}`, 20, y);
      y += 8;
    }
    if (rushFee > 0) {
      doc.text(`RUSH PROCESSING FEE: PHP ${rushFee.toFixed(2)}`, 20, y);
      y += 8;
    }
    doc.setFont("courier", "bold");
    doc.text(`TOTAL: PHP ${total.toFixed(2)}`, 20, y);
    y += 10;
    
    // Customer Info
    doc.setFontSize(10);
    doc.text("--- CUSTOMER INFORMATION ---", 20, y);
    doc.setFont("courier", "normal");
    doc.text(`NAME: ${formValues.fname} ${formValues.mname} ${formValues.lname} ${formValues.sfxname}`, 20, y + 8);
    doc.text(`CONTACT: +63${formValues.contact}`, 20, y + 16);
    doc.text(`ADDRESS: ${formValues.addressDetails}, ${formValues.barangay}, ${formValues.district}, Manila`, 20, y + 24);
    
    // Footer
    doc.setFontSize(9);
    doc.text("THANK YOU FOR YOUR PAYMENT", 105, y + 40, { align: "center" });
    doc.text("This serves as your official receipt", 105, y + 46, { align: "center" });

    // Save PDF
    doc.save(`Receipt-${currentOffer.name.replace(/ /g,'_')}-${refNo}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating receipt. Please try again.");
  }
}

// Initialize on load
window.onload = function() {
  updateTotal();
};

// Add this function to handle the back button
function goBackToForm() {
  // Try to go back to the previous page, or fallback to the appropriate service form
  const urlParams = new URLSearchParams(window.location.search);
  const serviceType = urlParams.get('service');
  if (serviceType === 'birth') {
    window.location.href = 'Birth-Certificate/birth-service.html';
  } else if (serviceType === 'marriage') {
    window.location.href = 'Marriage-Certificate/marriage-service.html';
  } else if (serviceType === 'death') {
    window.location.href = 'Death-Certificate/Death-service.html';
  } else {
    window.history.back();
  }
}