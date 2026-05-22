// This script shows a simple example of how to use JavaScript to add interaction to your web page

// Wait until the web page is fully loaded
window.onload = function () {
  // Find the profile image element
  var profileImage = document.querySelector(".headshot");

  // Set a flag to track if the image is big or small
  var isBig = false;

  // Add a click event to the image
  profileImage.onclick = function () {
    if (isBig) {
      // If the image is big, make it small
      profileImage.style.width = "120px";
      profileImage.style.height = "120px";
      isBig = false;
    } else {
      // If the image is small, make it big
      profileImage.style.width = "240px";
      profileImage.style.height = "240px";
      isBig = true;
    }
  };
};
