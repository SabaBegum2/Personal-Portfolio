// Data for the programming languages
const skillLabels = ["Python", "C++","C","Java", "JavaScript", "HTML/CSS", "XMl", "PHP"];
const skillValues = [25, 20, 18, 15, 12, 10]; // Example percentages for skill proficiency
const skillColors = [
    "#b91d47", // Python
    "#00aba9", // C++
    "#2b5797", // Java
    "#e8c3b9", // JavaScript
    "#1e7145", // HTML/CSS
    "#4e73df", // XMl
    "#808080"  // PHP 
];

// Render the chart in the "skillsChart" canvas
new Chart("skillsChart", {
    type: "pie",
    data: {
        labels: skillLabels,
        datasets: [{
            backgroundColor: skillColors,
            data: skillValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "My Programming Skills"
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove 'active' class from all tabs and content
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add 'active' class to the clicked tab and corresponding content
            tab.classList.add("active");
            const targetId = tab.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
});

//projects box 
// Open popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Close popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Ensure popup is hidden on page load
window.onload = function () {
    document.getElementById('popup').style.display = 'none';
};

// Toggle sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

//dyslex timeline 
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

//this is for the images in the gallery 
const images = [
    {
        src: "Images/DyslexAI Screenshots/Screenshot 2024-12-26 at 1.47.54 AM.png",
        heading: "Image 1: Home Page"
    },
    {
        src: "Images/DyslexAI Screenshots/Screenshot 2024-12-26 at 1.41.48 AM.png",
        heading: "Image 2: User Login"
    },
    {
        src: "Images/DyslexAI Screenshots/Screenshot 2024-12-26 at 1.40.09 AM.png",
        heading: "Image 3: E-book Search"
    },
    {
        src: "Images/DyslexAI Screenshots/Screenshot 2024-12-26 at 1.40.34 AM.png",
        heading: "Image 4: Settings Page"
    },
    {
        src: "Images/DyslexAI Screenshots/Screenshot 2024-12-26 at 1.40.46 AM.png",
        heading: "Image 5: Library"
    },
    {
        src: "Images/DyslexAI Screenshots/Screenshot 2024-12-26 at 2.22.35 AM.png",
        heading: "Image 6: AI Recommendation"
    }

    
];

// Select the gallery container
const gallery = document.getElementById("gallery");

// Dynamically create image elements with headings
images.forEach((image) => {
    const heading = document.createElement("h3");
    heading.innerText = image.heading; // Set the heading text
    heading.style.color = "white"; // Optional: Style the heading text
    heading.style.marginBottom = "10px"; // Add spacing below the heading

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.heading;
    img.style.cursor = "pointer";
    img.style.marginBottom = "20px"; // Add spacing below the image

    gallery.appendChild(heading);
    gallery.appendChild(img);
});

// Create the modal elements
const modal = document.createElement("div");
modal.className = "modal";

const modalImage = document.createElement("img");
const modalHeading = document.createElement("h3");
modalHeading.style.color = "white"; // Heading color inside modal
modalHeading.style.textAlign = "center"; // Center heading in modal
modalHeading.style.marginBottom = "20px";

const closeButton = document.createElement("span");
closeButton.className = "close";
closeButton.innerHTML = "&times;";

modal.appendChild(modalHeading);
modal.appendChild(modalImage);
modal.appendChild(closeButton);
document.body.appendChild(modal);

// Add click event to enlarge the image and display heading
gallery.querySelectorAll("img").forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
        modalHeading.innerText = images[index].heading; // Set modal heading
    });
});

// Add event to close the modal
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


///////////////////////////////////////  Education //////////////////////////////////////////////
// Function to open the Education popup
// Function to open the Education popup// Function to open the Education popup
function openEducationPopup() {
    const popup = document.getElementById('educationPopup');
    if (popup) {
        popup.style.display = 'flex'; // Show the popup
    }
}

// Function to close the Education popup
function closeEducationPopup() {
    const popup = document.getElementById('educationPopup');
    if (popup) {
        popup.style.display = 'none'; // Hide the popup
    }
}

// Function to toggle sections in the Education popup
function toggleEducationSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block'; // Show the section
    } else {
        section.style.display = 'none'; // Hide the section
    }
}





