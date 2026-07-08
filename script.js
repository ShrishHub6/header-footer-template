// Function to load HTML into a div
        function loadHTML(elementId, file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to load ${file}`);
                    return response.text();
                })
                .then(data => {
                    document.getElementById(elementId).innerHTML = data;
                })
                .catch(error => console.error(error));
        }

        // Load header and footer
        loadHTML("header", "header.html");
        loadHTML("footer", "footer.html");