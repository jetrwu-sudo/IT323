document.addEventListener("DOMContentLoaded", function() {
    fetch('https://jetrwu-sudo.github.io/IT323/courses.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load courses.json");
            }
            return response.json();
        })
        .then(data => {
            const coursesList = document.getElementById("courses-list");

            data.courses.forEach(course => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${course.year_level}</td>
                    <td>${course.sem}</td>
                    <td>${course.code}</td>
                    <td>${course.description}</td>
                    <td>${course.credit}</td>
                `;
                coursesList.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
});

// Search Function
function searchCourses() {
    let input = document.getElementById("search").value.toLowerCase();
    let table = document.getElementById("courses-table");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let description = rows[i].getElementsByTagName("td")[3]?.textContent.toLowerCase() || "";
        let code = rows[i].getElementsByTagName("td")[2]?.textContent.toLowerCase() || "";

        if (description.includes(input) || code.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
