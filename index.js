// Data for the programming languages
const skillLabels = ["Python", "C++", "C", "Java", "JavaScript", "HTML/CSS", "XML", "PHP"];
const skillValues = [70, 70, 65, 70, 70, 80, 80, 80];
const skillColors = [
    "#b91d47", // Python
    "#00aba9", // C++
    "#00477a", // C
    "#2b5797", // Java
    "#e8c3b9", // JavaScript
    "#1e7145", // HTML/CSS
    "#4e73df", // XML
    "#808080"  // PHP
];

// Render the chart in the "skillsChart" canvas
new Chart("skillsChart", {
    type: "bar",
    data: {
        labels: skillLabels,
        datasets: [{
            backgroundColor: skillColors,
            data: skillValues
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "My Programming Skills"
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Programming Languages"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Skill Proficiency (%)"
                },
                beginAtZero: true,
                max: 100
            }
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
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

// Close popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Ensure popup is hidden on page load
window.onload = function () {
    document.getElementById('popup').style.display = 'none';
};

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
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
function openEducationPopup() {
    const popup = document.getElementById('educationPopup');
    const educationSection = document.getElementById('education'); // Specific section

    if (popup && educationSection) {
        // Get the position of the Education section
        const sectionRect = educationSection.getBoundingClientRect();
        const sectionTop = sectionRect.top + window.scrollY; // Absolute top position
        const sectionLeft = sectionRect.left + window.scrollX; // Absolute left position

        // Position the popup near the Education section
        popup.style.position = 'absolute';
        popup.style.top = `${sectionTop}px`; // Align with the top of the Education section
        popup.style.left = `${sectionLeft}px`; // Align with the left of the Education section
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

// Toggle the hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const firstSection = document.querySelector(".firstSection");
    firstSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
});

//adding hidden class dynamically 
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections that need the hidden class
    const sections = document.querySelectorAll("#home, #about, #skills, #timeline, #project, #education, #contact");

    // Add the 'hidden' class to each section
    sections.forEach(section => section.classList.add("hidden"));
});

document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    hiddenElements.forEach(el => observer.observe(el));
});

// navigation tabs being active when the user is in the page 
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const divs = {
        home: document.getElementById("home"),
        about: document.getElementById("about"),
        timeline: document.getElementById("timeline"),
        project: document.getElementById("project"),
        education: document.getElementById("education"),
        contact: document.getElementById("contact")
    };

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        // Check which div is in view based on scroll position
        let current = "";

        if (scrollY >= divs.home.offsetTop && scrollY < divs.about.offsetTop) {
            current = "home";
        } else if (scrollY >= divs.about.offsetTop && scrollY < divs.timeline.offsetTop) {
            current = "about";
        } else if (scrollY >= divs.timeline.offsetTop && scrollY < divs.project.offsetTop) {
            current = "timeline";
        } else if (scrollY >= divs.project.offsetTop && scrollY < divs.education.offsetTop) {
            current = "project";
        } else if (scrollY >= divs.education.offsetTop && scrollY < divs.contact.offsetTop) {
            current = "education";
        } else if (scrollY >= divs.contact.offsetTop) {
            current = "contact";
        }

        // Update the active link
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});


// Wait for the DOM to fully load
// this function makes sure that the main content shows in any screen size
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the "hidden" class
    const hiddenElements = document.querySelectorAll(".hidden");
  
    // Add the "show" class to each hidden element
    hiddenElements.forEach((el) => {
      el.classList.add("show");
    });
  });
  

