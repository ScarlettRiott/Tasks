$(document).ready(function () {
    // Hide/Show elements
    $("#hideShowButton").click(function () {
        $("#someElement").toggle();
    });

    // Dropdown menu functionality
    $("#dropdownMenu").hover(function () {
        $("#submenu").slideDown();
    }, function () {
        $("#submenu").slideUp();
    });

    // Animation effects and chained effects
    $("#animateButton").click(function () {
        $("#animatedElement")
            .animate({ fontSize: "24px" }, "slow")
            .css("color", "blue")
            .slideUp()
            .slideDown();
    });

    // Dropdown with buttons on hyperlink hover
    $("a.like-button").hover(function () {
        let dropdownContainer = $("<div class='dropdown-container'></div>");

        // Create buttons and append to the container
        let openButton = $("<button>Open</button>").click(function () {
            window.open($(this).parent().attr("href"));
        });

        let likeButton = $("<button>Like</button>").click(function () {
            // Like the article
            let hyperlink = $(this).parent().attr("href");
            console.log(`Article at ${hyperlink} has been liked.`);
        });

        let saveForLaterButton = $("<button>Save For Later</button>").click(function () {
            // Add functionality for Save for Later button
            let itemName = $(this).parent().find("h3").text();
            savedItems.push(itemName);
            alert("Item saved! You have " + savedItems.length + " items in your 'Save for later' folder.");
            displaySavedItems();
        });

        dropdownContainer.append(openButton, likeButton, saveForLaterButton);

        // Append the dropdown container after the hovered hyperlink
        $(this).after(dropdownContainer);

        // Add animation to the dropdown container
        dropdownContainer.slideDown("slow");
    }, function () {
        // Remove the dropdown container with animation when mouse leaves the hyperlink
        $(".dropdown-container").slideUp("slow", function () {
            $(this).remove();
        });
    });

    // Save for later functionality
    let savedItems = [];

    $(".saveForLater").click(function () {
        let itemName = $(this).parent().prev().find("h3").text();
        savedItems.push(itemName);
        alert("Item saved! You have " + savedItems.length + " items in your 'Save for later' folder.");
    });

    // Comment form functionality
    $(".comment-form").submit(function (event) {
        event.preventDefault();
        let comment = $(".comment-input").val();
        let hyperlink = $(this).parent().find("a").attr("href");
        console.log(`Comment "${comment}" has been left on article at ${hyperlink}.`);

    });

    // Contact form functionality
    $(".contact-form").submit(function (event) {
        event.preventDefault();
        let name = $(".name-input").val();
        let email = $(".email-input").val();
        let message = $(".message-input").val();
        console.log(`Message from ${name} (${email}): ${message}`);
    });
});

function displaySavedItems() {
    const savedItemsList = document.getElementById("savedItemsList");
    savedItemsList.innerHTML = ""; // Clear existing items
    savedItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        savedItemsList.appendChild(listItem);
    });
};