document.addEventListener("DOMContentLoaded", function() {
    const room1ImageContainer = document.getElementById("room1-image-container");

    // Check if we're on room1.html by verifying the existence of room1ImageContainer
    if (room1ImageContainer) {
        const dir = "1.Standardsingleroom";

        // Dynamically generate image paths and elements. 
        // (Change the 30 to the maximum number of images you expect in a directory)
        for (let i = 1; i <= 30; i++) {
            const imagePath = `Hình/${dir}/${i}.JPG`;

            const img = document.createElement("img");
            img.src = imagePath;
            img.alt = `${dir} - Image ${i}`;
            img.onerror = function() {
                this.style.display = 'none'; // Hide images that fail to load
            };

            room1ImageContainer.appendChild(img);
        }
    }
});
