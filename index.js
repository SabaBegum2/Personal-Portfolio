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
