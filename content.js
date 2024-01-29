function removeElementsWithVerifiedBadge() {
  const removeInterval = 10; // Adjust the interval as needed (in milliseconds)

  const removeElements = () => {
    // For roblox.com
    const robloxElements = document.querySelectorAll('[title="Verified Badge Icon"]');
    robloxElements.forEach((element) => {
      element.remove();
    });
  };

  // Call the function initially
  removeElements();

  // Set up an interval to keep checking and removing elements
  setInterval(removeElements, removeInterval);
}

// Call the removeElementsWithVerifiedBadge function when the extension is loaded
removeElementsWithVerifiedBadge();
