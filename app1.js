
function gstCalculate() {
  
  // name = document.getElementById("name")

  const name = document.getElementById("name").value;

  
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const place = document.getElementById("place").value;

  const wallCabinate = document.getElementById("wallCabinet").value;

  const bekasBesideTable = document.getElementById("bekasBesideTable").value;

  const fableBookCase = document.getElementById("fableBookCase").value;

  const carmelDeskSpace = document.getElementById("carmelDeskSpace").value;

  const atocOfficeChair = document.getElementById("atocOfficeChair").value;

  console.log(atocOfficeChair);

  const GST = document.getElementById("gst").value;

  const buttonEl = document.getElementById("paymentButton");

  let arrayOfItems = [
    parseInt(wallCabinate),
    parseInt(bekasBesideTable),
    parseInt(fableBookCase),
    parseInt(carmelDeskSpace),
    parseInt(atocOfficeChair),
  ];
  let calculate = 0;
  for (let i = 0; i < arrayOfItems.length; i++) {
    calculate = calculate + arrayOfItems[i];
  }
  let totalGstCalculate = (calculate * GST) / 100;
  let total = calculate + totalGstCalculate;
  if (total >= 30000) {
    console.log(total + 1000);
  } else {
    console.log(total + 500);
  }
  // let resName = document.getElementById("res-name");
  // resName.textContent = nameVal;
  // console.log(resName)
  let details = `<h3>name : ${name}</h3><br>
  <h3>mobile : ${contact}</h3><br>
  <h3>email : ${email}</h3><br>
  <h3>place : ${place}</h3> <br>
  <h3>total_amount : ${calculate}</h3><br>
  <h3>Total bill payment With 18% GST : ${total}</h3><br>
  <h3>With tip 1000 rupees:</h3>
  <h3>Note: bil exceeds 50000 then will only pay 500 rupees in tip otherwise will pay 1000 rupees in tip</h3>`

   let data = dadocument.getElementById("data") = details;
}



