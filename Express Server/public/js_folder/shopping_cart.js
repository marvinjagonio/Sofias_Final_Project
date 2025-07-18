const input = document.getElementById("quantity");

  function changeValue(amount) {
    let currentValue = parseInt(input.value) || 0;
    let newValue = currentValue + amount;

    // Clamp to min/max
    if (input.min) newValue = Math.max(parseInt(input.min), newValue);
    if (input.max) newValue = Math.min(parseInt(input.max), newValue);

    input.value = newValue;
  }

  

