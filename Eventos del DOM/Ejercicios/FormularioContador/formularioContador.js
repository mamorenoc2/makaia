const menos = document.getElementById("menos");
    const mas = document.getElementById("mas");
    const contador = document.getElementById("contador");
    let count = 0;
    
    menos.addEventListener("click", function() {
      count--;
      contador.textContent = count;
    });
    
    mas.addEventListener("click", function() {
      count++;
      contador.textContent = count;
    });