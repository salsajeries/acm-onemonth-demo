let coffeeCount;

window.onload = () => {
coffeeCount = localStorage.getItem("counter") 
           ? parseInt(localStorage.getItem("counter")) 
           : (() => { 
               localStorage.setItem("counter", 0);
               return 0;
             })();


document.getElementById("counter").innerText = `Number of coffees: ${coffeeCount}`;

}

function addCoffee() {
  coffeeCount += 1;
  document.getElementById("counter").innerText = `Number of coffees: ${coffeeCount}`;
  
  localStorage.setItem("counter", coffeeCount);

  alert("Thanks for the coffee! ☕️");
}