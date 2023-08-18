/////////// NEW CODE ///// CHECKBOXES WORK WITH EVERY DRIVER START //////////////////////////

let accidentsArray = [1];
let ticketsArray = [1];
let driversFullContainer = document.getElementById('Drivers-Full-Container');
let driverCount = 1;

driversFullContainer.addEventListener('click', doSomething, false);


function getTicketNumber(driverNumber) {
result = ticketsArray[driverNumber - 1];
return result;
}

function getAccidentNumber(driverNumber) {
result = accidentsArray[driverNumber - 1];
return result;
}

function addTicketNumber(driverNumber) {
  result = driverNumber - 1;
  ticketArray = ticketsArray.splice(result, 1, ticketsArray[result] + 1);
}


function addAccidentNumber(driverNumber) {
  result = driverNumber - 1;
  accidentArray = accidentsArray.splice(result, 1, accidentsArray[result] + 1);
}

function subtractTicketNumber(driverNumber) {
  result = driverNumber - 1;
  ticketArray = ticketsArray.splice(result, 1, ticketsArray[result] - 1);
}

function subtractAccidentNumber(driverNumber) {
  result = driverNumber - 1;
  accidentArray = accidentsArray.splice(result, 1, accidentsArray[result] - 1);
}


function doSomething(e) {
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.id;



    
    // IF IT IS A TICKET CHECKBOX

    if (clickedItem.endsWith('_Tickets_Checkbox')) {
      let targetItem = document.getElementById(clickedItem);
      let driverNumber = clickedItem.charAt(6);
      let accidentLabel = document.getElementById(`Driver${driverNumber}_Accidents_Checkbox_Label`);
      let ticketsFormFull = document.createElement('div');
    
     

      ticketsFormFull.innerHTML = `
      <div id="Driver${driverNumber}_Tickets_Form">
      <label for="Driver${driverNumber}_Ticket_Type${getTicketNumber(driverNumber)}">${toWords(getTicketNumber(driverNumber))} Ticket Type</label>
<select id="Driver${driverNumber}_Ticket_Type${getTicketNumber(driverNumber)}" name="Driver${driverNumber}_Ticket_Type${getTicketNumber(driverNumber)}" onchange="speedingCheck(${driverNumber}, ${getTicketNumber(driverNumber)})">
  <option value="">Choose an option if applicable...</option>
  <option value="Speeding">Speeding</option>
  <option value="Reckless driving">Reckless driving</option>
  <option value="Driving under the influence of alcohol">Driving under the influence of alcohol</option>
  <option value="Improper passing">Improper passing</option>
  <option value="Following too closely">Following too closely</option>
  <option value="Hit and run">Hit and run</option>
  <option value="Improper turn">Improper turn</option>
  <option value="Improper backing">Improper backing</option>
  <option value="Texting while driving">Texting while driving</option>
  <option value="Failure to yield">Failure to yield</option>
  <option value="Tailgating">Tailgating</option>
  <option value="Driving without insurance">Driving without insurance</option>
  <option value="Failure to signal">Failure to signal</option>
  <option value="Improper lane usage">Improper lane usage</option>
  <option value="Driving on a suspended license">Driving on a suspended license</option>
  <option value="Improper U-turn">Improper U-turn</option>
  <option value="Driving on sidewalk">Driving on sidewalk</option>
  <option value="Passing stopped school bus">Passing stopped school bus</option>
  <option value="Failure to stop">Failure to stop</option>
  <option value="Improper lane change">Improper lane change</option>
  <option value="Illegal U-turn">Illegal U-turn</option>
  <option value="Drinking while driving">Drinking while driving</option>
</select>

<div id="Driver${driverNumber}_Speeding_Options_Container${getTicketNumber(driverNumber)}" style="display: none;">
  <label for="Driver${driverNumber}_Speeding_Options_${getTicketNumber(driverNumber)}">Speeding Options</label>
  <select id="Driver${driverNumber}_Speeding_Options_${getTicketNumber(driverNumber)}" name="Driver${driverNumber}_Speeding_Options_${getTicketNumber(driverNumber)}">
    <option value="">Choose an option...</option>
    <option value="1-10 mph above the limit">1-10 mph above the limit</option>
    <option value="11-14 mph above the limit">11-14 mph above the limit</option>
    <option value="15-25 mph above the limit">15-25 mph above the limit</option>
    <option value="More than 25mph above the limit">More than 25mph above the limit</option>
  </select>
</div>

  <button type="button" class="add-remove-button" id="Driver${driverNumber}_Add_Ticket_Button">
    + ADD TICKET
  </button>

  <button type="button" class="add-remove-button" id="Driver${driverNumber}_Remove_Ticket_Button">
    - REMOVE TICKET
  </button>
`;



      if (!accidentLabel.classList.contains('active')) {
        accidentLabel.classList.add('active');
        accidentLabel.before(ticketsFormFull);
      }
      else {
        accidentLabel.classList.remove('active');
        document.getElementById(`Driver${driverNumber}_Tickets_Form`).remove();

      }
    }

    // IF IT IS A ACCIDENT CHECKBOX

    if (clickedItem.endsWith('_Accidents_Checkbox')) {
      let targetItem = document.getElementById(clickedItem);
      let driverNumber = clickedItem.charAt(6);
      let accidentCheckbox = document.getElementById(`Driver${driverNumber}_Accidents_Checkbox`);
      let accidentsFormFull = document.createElement('div');

      accidentsFormFull.innerHTML =
       `
       <div id="Driver${driverNumber}_Accidents_Form">
      <label for="Driver${driverNumber}_Accident_Type_N${getAccidentNumber(driverNumber)}">${toWords(getAccidentNumber(driverNumber))} Accident Type</label>
      <select id="Driver${driverNumber}_Accident_Type_N${getAccidentNumber(driverNumber)}" name="Driver${driverNumber}_Accident_Type_N${getAccidentNumber(driverNumber)}">
        <option value="">Choose an option...</option>
        <option value="Vehicle Parked">Vehicle Parked</option>
        <option value="Hit & Run">Hit & Run</option>
        <option value="At-fault">At-fault</option>
      </select>

      <label for="Driver${driverNumber}_Accident_Date_N${getAccidentNumber(driverNumber)}">${toWords(getAccidentNumber(driverNumber))} Accident Date</label>
      <input type="date" id="Driver${driverNumber}_Accident_Date_N${getAccidentNumber(driverNumber)}" name="Driver${driverNumber}_Accident_Date_N${getAccidentNumber(driverNumber)}">
    

      <button href="#" class="add-remove-button" type="button" id="Driver${driverNumber}_Add_Accident_Button">
         + ADD ACCIDENT
      </button>

      <button href="#" class="add-remove-button" type="button" id="Driver${driverNumber}_Remove_Accident_Button">
       - REMOVE ACCIDENT
      </button>
      </div>
      `;

      if (!accidentCheckbox.classList.contains('active')) {
        accidentCheckbox.classList.add('active');
        accidentCheckbox.after(accidentsFormFull);
      }

      else {
        accidentCheckbox.classList.remove('active');
        document.getElementById(`Driver${driverNumber}_Accidents_Form`).remove();

      }
    }


  //IF IT IS A ADD TICKET BUTTON
  if (clickedItem.endsWith('_Add_Ticket_Button')) { 
    driverNumber = Number(clickedItem.charAt(6));
    addTicketNumber(driverNumber);
    ticketsForm = document.createElement('div');
    ticketNumber = ticketsArray[ driverNumber - 1];
    
    
    
    ticketsForm.setAttribute("id", `Driver${driverNumber}_Tickets${ticketNumber}_Form${ticketNumber}`);
    ticketsForm.innerHTML = `
      <label for="Driver${driverNumber}_Ticket_Type${ticketNumber}">${toWords(ticketNumber) } Ticket Type</label>
<select id="Driver${driverNumber}_Ticket_Type${ticketNumber}" name="Driver${driverNumber}_Ticket_Type${ticketNumber}" onchange="speedingCheck(${driverNumber}, ${getTicketNumber(driverNumber)})">
  <option value="">Choose an option if applicable...</option>
  <option value="Speeding">Speeding</option>
  <option value="Reckless driving">Reckless driving</option>
  <option value="Driving under the influence of alcohol">Driving under the influence of alcohol</option>
  <option value="Improper passing">Improper passing</option>
  <option value="Following too closely">Following too closely</option>
  <option value="Hit and run">Hit and run</option>
  <option value="Improper turn">Improper turn</option>
  <option value="Improper backing">Improper backing</option>
  <option value="Texting while driving">Texting while driving</option>
  <option value="Failure to yield">Failure to yield</option>
  <option value="Tailgating">Tailgating</option>
  <option value="Driving without insurance">Driving without insurance</option>
  <option value="Failure to signal">Failure to signal</option>
  <option value="Improper lane usage">Improper lane usage</option>
  <option value="Driving on a suspended license">Driving on a suspended license</option>
  <option value="Improper U-turn">Improper U-turn</option>
  <option value="Driving on sidewalk">Driving on sidewalk</option>
  <option value="Passing stopped school bus">Passing stopped school bus</option>
  <option value="Failure to stop">Failure to stop</option>
  <option value="Improper lane change">Improper lane change</option>
  <option value="Illegal U-turn">Illegal U-turn</option>
  <option value="Drinking while driving">Drinking while driving</option>
</select>

<div id="Driver${driverNumber}_Speeding_Options_Container${ticketNumber}" style="display: none;">
  <label for="Driver${driverNumber}_Speeding_Options_${ticketNumber}">Speeding Options</label>
  <select id="Driver${driverNumber}_Speeding_Options_${ticketNumber}" name="Driver${driverNumber}_Speeding_Options_${getTicketNumber(driverNumber)}">
    <option value="">Choose an option...</option>
    <option value="1-10 mph above the limit">1-10 mph above the limit</option>
    <option value="11-14 mph above the limit">11-14 mph above the limit</option>
    <option value="15-25 mph above the limit">15-25 mph above the limit</option>
    <option value="More than 25mph above the limit">More than 25mph above the limit</option>
  </select>
</div>


`;

let lastTicket = document.getElementById(`Driver${driverNumber}_Speeding_Options_Container${ticketNumber - 1}`);
  console.log(lastTicket);
lastTicket.after(ticketsForm);

  console.log(driverNumber + " " + ticketNumber - 1)
  

}

//IF IT IS A REMOVE TICKET BUTTON

if (clickedItem.endsWith('_Remove_Ticket_Button')) { 
    driverNumber = Number(clickedItem.charAt(6));
    ticketsNumber = ticketsArray[ driverNumber - 1];
    document.getElementById(`Driver${driverNumber}_Tickets${ticketsNumber}_Form${ticketsNumber}`).remove();
    subtractTicketNumber(driverNumber);
    console.log('clicked');
  }


 //// IF IT IS A ADD ACCIDENT BUTTON
 if (clickedItem.endsWith('_Add_Accident_Button')) { 
    driverNumber = Number(clickedItem.charAt(6));
    addAccidentNumber(driverNumber);
    accidentsForm = document.createElement('div');
    accidentsNumber = accidentsArray[ driverNumber - 1];
    
    accidentsForm.setAttribute("id", `Driver${driverNumber}_Accident${accidentsNumber}_Form${accidentsNumber}`)
    accidentsForm.innerHTML = `
    <label for="Driver${driverNumber}_Accident_Type_N${accidentsNumber}" id="Driver${driverNumber}_Accident_Type_N${accidentsNumber}_Label">${toWords(accidentsNumber)} Accident Type
                </label>
                <select id="Driver${driverNumber}_Accident_Type_N${accidentsNumber}" name="Driver${driverNumber}_Accident_Type_N${accidentsNumber}">
                  <option value="">Vehicle Parked</option>
                  <option value="">Hit & Run</option>
                  <option value="">At-fault</option>
                </select>

                <label for="Driver${driverNumber}_Accident_Date_N${accidentsNumber}" id="Driver${driverNumber}_Accident_Date_N${accidentsNumber}_Label">${toWords(accidentsNumber)} Accident
                  Date</label>
                <input type="date" id="Driver${driverNumber}_Accident_Date_N${accidentsNumber}" name="Driver${driverNumber}_Accident_Date_N${accidentsNumber}">

    `;
    console.log(driverNumber);
    console.log(accidentsNumber - 1);
    lastAccident = document.getElementById(`Driver${driverNumber}_Accident_Date_N${accidentsNumber - 1}`);
    lastAccident.after(accidentsForm);
    console.log(lastAccident);
    
  }


  // IF IT IS A REMOVE ACCIDENT BUTTON

  if (clickedItem.endsWith('_Remove_Accident_Button')) { 
    driverNumber = Number(clickedItem.charAt(6));
    accidentsNumber = accidentsArray[ driverNumber - 1];
    document.getElementById(`Driver${driverNumber}_Accident${accidentsNumber}_Form${accidentsNumber}`).remove();
    subtractAccidentNumber(driverNumber);
  }



  }
  e.stopPropagation();
}

  

  

function speedingCheck(driverNumber, ticketNumber) {

  let ticketType = document.getElementById(`Driver${driverNumber}_Ticket_Type${ticketNumber}`);

  selectedValue = ticketType.options[ticketType.selectedIndex].value;

  if(selectedValue == "Speeding"){

    let speedingOptions = document.getElementById(`Driver${driverNumber}_Speeding_Options_Container${ticketNumber}`);
    speedingOptions.style.display= 'block';
  }
  else {
    speedingOptions.style.display= 'none';
  }
}


//////////  NEW CODE ///// CHECKBOXES WORK WITH EVERY DRIVER END ///////////////////////////






///////////////////////////////// DRIVER BUTTON CODE START /////////////////////////////////


let vehicleCount = 1;


document.getElementById('Add_Driver_Button').addEventListener('click', function (event) {
  event.preventDefault();
  addDriver();
});

document.getElementById('Remove_Driver_Button').addEventListener('click', function (event) {
  event.preventDefault();
  removeDriver();
});

function addDriver() {
  // Increment driver count
  driverCount++;
  ticketsArray.push(1);
  accidentsArray.push(1);

  // Create a new div for the driver section
  const newDriverDiv = document.createElement('div');
  newDriverDiv.innerHTML = `
<label for="Driver_${toWords(driverCount)}_Name">${toWords(driverCount)} Driver Name</label>
<input type="text" id="Driver_${toWords(driverCount)}_Name" name="Driver_${toWords(driverCount)}_Name">

<label for="Driver_${toWords(driverCount)}_Date_of_Birth">${toWords(driverCount)} Driver Date of Birth</label>
<input type="date" id="Driver_${toWords(driverCount)}_Date_of_Birth" name="Driver_${toWords(driverCount)}_Date_of_Birth">

<label for="${toWords(driverCount)}_Driver_License_Number">${toWords(driverCount)} Driver's License Number</label>
<input type="number" id="${toWords(driverCount)}_Driver_License_Number" name="${toWords(driverCount)}_Driver_License_Number">

<div class="preference">
  <p>Violations</p>

  <label for="Driver${driverCount}_Tickets_Checkbox">
    Tickets
    <input type="checkbox" id="Driver${driverCount}_Tickets_Checkbox" name="Driver${driverCount}_Tickets_Checkbox" value="Yes" >
  </label>

  <label id="Driver${driverCount}_Accidents_Checkbox_Label" for="Driver${driverCount}_Accidents_Checkbox">
    Accidents
    <input type="checkbox" id="Driver${driverCount}_Accidents_Checkbox" name="Driver${driverCount}_Accidents_Checkbox">
  </label>
</div>

`;

  // Insert the new driver section after the last driver div in the container
  const driversContainer = document.getElementById('drivers-container');
  const lastDriverDiv = driversContainer.lastElementChild;
  driversContainer.insertAdjacentElement('beforeend', newDriverDiv);
}

function removeDriver() {
  if (driverCount > 1) {
    accidentsArray.pop();
    ticketsArray.pop();

    // Find the last added driver section
    const driversContainer = document.getElementById('drivers-container');
    const lastDriverDivToRemove = driversContainer.lastElementChild;

    // Remove the last driver section from the container
    driversContainer.removeChild(lastDriverDivToRemove);

    // Decrement driver count
    driverCount--;
  }
}

// Helper function to convert numbers to words with first letter capitalized (e.g., 1 to "One", 2 to "Two", etc.)
function toWords(num) {
  const words = ['Zero', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
  return words[num] || num.toString();
}


///////////////////////////////// DRIVER BUTTON CODE END //////////////////////////////////////



/////////////////////////////////////    CUSTOM CODE     ///////////////////////////////////////

function addvehicle() {
  // Increment vehicle count
  vehicleCount++;

  // Create a new div for the vehicle section
  const newvehicleDiv = document.createElement('div');
  newvehicleDiv.innerHTML = `
  <h3>${toWords(vehicleCount)} Vehicle</h3>
  <label for="Vehicle${vehicleCount}_Year">Year of Vehicle</label>
  <select id="Vehicle${vehicleCount}_Year" name="Vehicle${vehicleCount}_Year" onchange="yearCheck(${vehicleCount})">
  <option value="">---</option>
                      <option value="2024">2024</option><option value="2023">2023</option>
                      <option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option>
  </select>
    <label for="Vehicle${vehicleCount}_Make">Make of Vehicle</label>
    <select id="Vehicle${vehicleCount}_Make" name="Vehicle${vehicleCount}_Make" onchange="checkModel(${vehicleCount})">
    </select>
      <label for="Vehicle${vehicleCount}_Model">Model of Vehicle</label>
      <select id="Vehicle${vehicleCount}_Model" name="Vehicle${vehicleCount}_Model">>
      </select>
        <label for="Vehicle${vehicleCount}_Style">Body Style of Vehicle</label>
        <select id="Vehicle${vehicleCount}_Style" name="Vehicle${vehicleCount}_Style">
          <option value="Auto">Auto</option>
          <option value="Truck">Truck</option>
          <option value="Van">Van</option>
          <option value="Motorcycle">Motorcycle</option>
          <option value="Camper">Camper</option>
          <option value="Boat">Boat</option>
          <option value="ATV">ATV</option>
          <option value="Golf Cart">Golf Cart</option>
          <option value="Trailer">Trailer</option>
        </select>
        <label for="Vehicle${vehicleCount}_Purchase_Date">Date of Purchase</label>
        <input id="Vehicle${vehicleCount}_Purchase_Date" name="Vehicle${vehicleCount}_Purchase_Date" type="date">
        <label for="Vehicle${vehicleCount}_Current_Odometer_Reading">Current Odometer Reading</label>
        <input name="Vehicle${vehicleCount}_Current_Odometer_Reading" id="Vehicle${vehicleCount}_Current_Odometer_Reading" type="number" placeholder="Miles">
        <label for="Vehicle${vehicleCount}_Anual_miles">Anual Miles Driven</label>
        <select name="Vehicle${vehicleCount}_Anual_miles" id="Vehicle${vehicleCount}_Anual_miles">
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
          <option value="5000">5000</option>
          <option value="6000">6000</option>
          <option value="7000">7000</option>
          <option value="8000">8000</option>
          <option value="9000">9000</option>
          <option value="25000+">25000+</option>
        </select>
        <div class="preference">
          <p>Comprehensive Deductible</p>
          <label for="Vehicle${vehicleCount}_Comprehensive_Deductible_100">$100
            <input type="radio" id="Vehicle${vehicleCount}_Comprehensive_Deductible" name="Vehicle${vehicleCount}_Comprehensive_Deductible"
              value="100">
          </label>
          <label for="Vehicle${vehicleCount}_Comprehensive_Deductible_250">$250
            <input type="radio" id="Vehicle${vehicleCount}_Comprehensive_Deductible_250" name="Vehicle${vehicleCount}_Comprehensive_Deductible"
              value="250">
          </label>
          <label for="Vehicle${vehicleCount}_Comprehensive_Deductible_500">$500
            <input type="radio" id="Vehicle${vehicleCount}_Comprehensive_Deductible_500" name="Vehicle${vehicleCount}_Comprehensive_Deductible"
              value="500">
          </label>
          <label for="Vehicle${vehicleCount}_Comprehensive_Deductible_1000">$1000
            <input type="radio" id="Vehicle${vehicleCount}_Comprehensive_Deductible_1000" name="Vehicle${vehicleCount}_Comprehensive_Deductible"
              value="1000">
          </label>
          <label for="Vehicle${vehicleCount}_Comprehensive_Deductible_2000">$2000
            <input type="radio" id="Vehicle${vehicleCount}_Comprehensive_Deductible_2000" name="Vehicle${vehicleCount}_Comprehensive_Deductible"
              value="2000">
          </label>
          <label for="Vehicle${vehicleCount}_Liability_Only">Liability Only
            <input type="radio" id="Vehicle${vehicleCount}_Liability_Only" name="Vehicle${vehicleCount}_Liability_Only"
              value="Yes">
          </label>
        </div>

        <div class="preference">
          <p>Collision Deductible</p>
          <label for="Vehicle${vehicleCount}_Collision_Deductible_100">$100
            <input type="radio" id="Vehicle${vehicleCount}_Collision_Deductible_100" name="Vehicle${vehicleCount}_Collision_Deductible"
              value="100">
          </label>
          <label for="Vehicle${vehicleCount}_Collision_Deductible_250">$250
            <input type="radio" id="Vehicle${vehicleCount}_Collision_Deductible_250" name="Vehicle${vehicleCount}_Collision_Deductible"
              value="250">
          </label>
          <label for="Vehicle${vehicleCount}_Collision_Deductible_500">$500
            <input type="radio" id="Vehicle${vehicleCount}_Collision_Deductible_500" name="Vehicle${vehicleCount}_Collision_Deductible"
              value="500">
          </label>
          <label for="Vehicle${vehicleCount}_Collision_Deductible_1000">$1000
            <input type="radio" id="Vehicle${vehicleCount}_Collision_Deductible_1000" name="Vehicle${vehicleCount}_Collision_Deductible"
              value="1000">
          </label>
          <label for="Vehicle${vehicleCount}_Collision_Deductible_2000">$2000
            <input type="radio" id="Vehicle${vehicleCount}_Collision_Deductible_2000" name="Vehicle${vehicleCount}_Collision_Deductible"
              value="2000">
          </label>
          <label for="Vehicle${vehicleCount}_Collision_Liablity_Only">Liability Only
            <input type="radio" id="Vehicle${vehicleCount}_Collision_Liablity_Only" name="Vehicle${vehicleCount}_Collision_Liablity_Only"
              value="Yes">
          </label>
        </div>

        <div class="preference">
          <p>Additional Coverages</p>
          <label for="Vehicle${vehicleCount}_Road_Service">Road Service
            <input for="sect1" type="checkbox" id="Vehicle${vehicleCount}_Road_Service" class="Checkbox" name="Vehicle${vehicleCount}_Road_Service" value="Yes">
          </label>
          <label for="Vehicle${vehicleCount}_Car_Rental">Car Rental
            <input for="sect2" type="checkbox" id="Vehicle${vehicleCount}_Car_Rental" class="Checkbox" name="Vehicle${vehicleCount}_Car_Rental" value="Yes">
          </label>
          <label for="Vehicle${vehicleCount}_Glass_Coverage">Glass Coverage
            <input type="checkbox" id="Vehicle${vehicleCount}_Glass_Coverage" name="Vehicle${vehicleCount}_Glass_Coverage"value="Yes">
          </label>
          <label for="Vehicle${vehicleCount}_GAP">Vehicle GAP
            <input type="checkbox" id="Vehicle${vehicleCount}_GAP" name="Vehicle${vehicleCount}_GAP" value="Yes">
          </label>

          <label for="Vehicle${vehicleCount}_Accident_Forgiveness">Accident Forgiveness
            <input type="checkbox" id="Vehicle${vehicleCount}_Accident_Forgiveness"
              name="Vehicle${vehicleCount}_Accident_Forgiveness" value="Yes">
          </label>

          <label for="Vehicle${vehicleCount}_Vanishing_Deductible">Vanishing Deductible
            <input type="checkbox" id="Vehicle${vehicleCount}_Vanishing_Deductible"
              name="Vehicle${vehicleCount}_Vanishing_Deductible" value="Yes">
          </label>
          <div class="Content" id="Vehicle${vehicleCount}_Road_Service_Ammount_Container" style="display: none">
            <label for="Vehicle${vehicleCount}_Road_Service_Ammount">Road Service Ammount</label>
            <select name="Vehicle${vehicleCount}_Road_Service_Ammount" id="Vehicle${vehicleCount}_Road_Service_Ammount">
              <option value="$50">$50</option>
              <option value="$100">$100</option>
              <option value="$150">$150</option>
              <option value="$175">$175</option>
              <option value="$200">$200</option>
              <option value="$250">$250</option>
            </select>
          </div>
          <div class="Content" id="Vehicle${vehicleCount}_Car_Rental_Ammount_Container" style="display: none">
            <label for="Vehicle${vehicleCount}_Car_Rental_Ammount">Car Rental Ammount</label>
            <select name="Vehicle${vehicleCount}_Car_Rental_Ammount" id="Vehicle${vehicleCount}_Car_Rental_Ammount">
              <option value="$50">$50</option>
              <option value="$100">$100</option>
              <option value="$150">$150</option>
              <option value="$175">$175</option>
              <option value="$200">$200</option>
              <option value="$250">$250</option>
            </select>
          </div>
        
      </div>

`;

  // Insert the new vehicle section after the last vehicle div in the container
  const vehiclesContainer = document.getElementById('vehicles-container');
  const lastvehicleDiv = vehiclesContainer.lastElementChild;
  vehiclesContainer.insertAdjacentElement('beforeend', newvehicleDiv);
}

function removevehicle() {
  if (vehicleCount > 1) {
    accidentsArray.pop();
    ticketsArray.pop();

    // Find the last added vehicle section
    const vehiclesContainer = document.getElementById('vehicles-container');
    const lastvehicleDivToRemove = vehiclesContainer.lastElementChild;

    // Remove the last vehicle section from the container
    vehiclesContainer.removeChild(lastvehicleDivToRemove);

    // Decrement vehicle count
    vehicleCount--;
  }
}


let vehiclesFullContainer = document.getElementById('Vehicles_Full_Container');

vehiclesFullContainer.addEventListener('click', doSomething2, false);

let API = false;

let currentVehicle = 1;


function doSomething2(e) {
  if (e.target !== e.currentTarget) {

    // IF DIFFERENT VEHICLE DROPDOWNS ARE SELECTED
   
    //ROAD SERVICE AND CAR RENTAL DEPENDENT DROPDOWNS


    let clickedItemId = e.target.id;

    if (clickedItemId.endsWith("_Road_Service")) 
    {
      checkbox = e.target;
      vehicleNumber = Number(e.target.id.charAt(7));
      if(typeof vehicleNumber == "number") 
      {
        if (checkbox.checked) 
        {
          document.getElementById(`Vehicle${vehicleNumber}_Road_Service_Ammount_Container`).style.display= "block";
        } 
        else 
        {
          document.getElementById(`Vehicle${vehicleNumber}_Road_Service_Ammount_Container`).style.display= "none";
        }
      }

    }

    if (clickedItemId.endsWith("_Car_Rental")) 
    {
      checkbox = e.target;
      vehicleNumber = Number(e.target.id.charAt(7));
      if(typeof vehicleNumber == "number") 
      {
        if (checkbox.checked) 
        {
          document.getElementById(`Vehicle${vehicleNumber}_Car_Rental_Ammount_Container`).style.display= "block";
        } 
        else 
        {
          document.getElementById(`Vehicle${vehicleNumber}_Car_Rental_Ammount_Container`).style.display= "none";
        }
      }

    }

  }
}


function yearCheck(Number) {

  let yearDropdown = document.getElementById(`Vehicle${Number}_Year`)
  selectedValue = yearDropdown.options[yearDropdown.selectedIndex].value;

    if (selectedValue <= 2022 && API === false || currentVehicle == Number == false && selectedValue <= 2022 && API === false ){
      API = true;
      currentVehicle = Number;
      carAPI();
    }



  let vehicleMakeDropdown = document.getElementById(`Vehicle${Number}_Make`);
  

  selectedValue = yearDropdown.options[yearDropdown.selectedIndex].value;
  if(selectedValue == 2023) {
    API = false;
    console.log('succesfull')
    setTimeout(() => {
      vehicleMakeDropdown.innerHTML= vehicleMakes2023;
    }, 1500);  

    console.log(vehicleMakeDropdown);
  }
  else {
    console.log('failed');
  }

  if(selectedValue == 2024) {
    API = false;
    console.log('succesfull')
    setTimeout(() => {
      vehicleMakeDropdown.innerHTML= vehicleMakes2024;
    }, 1500);  

    console.log(vehicleMakeDropdown);
  }
  else {
    console.log('failed');
  }
  
}

function checkModel(Number) {

  let yearDropdown = document.getElementById(`Vehicle${Number}_Year`);
  let vehicleMakeDropdown = document.getElementById(`Vehicle${Number}_Make`);
  let vehicleModelDropdown = document.getElementById(`Vehicle${Number}_Model`);

  selectedValue = yearDropdown.options[yearDropdown.selectedIndex].value;

  makeSelectedID = vehicleMakeDropdown.options[vehicleMakeDropdown.selectedIndex].id;

  if(selectedValue == 2023)
  {
    if(makeSelectedID >= 1) {
      makeSelectedIDToArray = makeSelectedID - 1;
      setTimeout(() => {
        vehicleModelDropdown.innerHTML= vehicleModels2023[makeSelectedIDToArray];
      }, 1000);
    }
  }

  if(selectedValue == 2024)
  {
    if(makeSelectedID >= 1) {
      makeSelectedIDToArray = makeSelectedID - 1;
      setTimeout(() => {
        vehicleModelDropdown.innerHTML= vehicleModels2024[makeSelectedIDToArray];
      }, 1000);
    }
  }
}










// CAR API


function carAPI() {
     //Create a variable for the CarQuery object.  You can call it whatever you like.
     var carquery = new CarQuery();


     console.log(carquery);
     //Run the carquery init function to get things started:
     carquery.init();
     
     //Optionally, you can pre-select a vehicle by passing year / make / model / trim to the init function:
     //carquery.init('2000', 'dodge', 'Viper', 11636);

     //Optional: Pass sold_in_us:true to the setFilters method to show only US models. 
     carquery.setFilters( {sold_in_us:false} );



     //Optional: initialize the year, make, model, and trim drop downs by providing their element IDs
     carquery.initYearMakeModelTrim(`Vehicle${currentVehicle}_Year`, `Vehicle${currentVehicle}_Make`, `Vehicle${currentVehicle}_Model`,);

     //Optional: set the onclick event for a button to show car data.
     $('#cq-show-data').click(  function(){ carquery.populateCarData('car-model-data'); } );

     //Optional: initialize the make, model, trim lists by providing their element IDs.
     carquery.initMakeModelTrimList('make-list', 'model-list', 'trim-list', 'trim-data-list');

     //Optional: set minimum and/or maximum year options.
     carquery.year_select_min=1941;
     carquery.year_select_max=2024;
 
     //Optional: initialize search interface elements.
     //The IDs provided below are the IDs of the text and select inputs that will be used to set the search criteria.
     //All values are optional, and will be set to the default values provided below if not specified.
     var searchArgs =
     ({
         body_id:                       "cq-body"
        ,default_search_text:           "Keyword Search"
        ,doors_id:                      "cq-doors"
        ,drive_id:                      "cq-drive"
        ,engine_position_id:            "cq-engine-position"
        ,engine_type_id:                "cq-engine-type"
        ,fuel_type_id:                  "cq-fuel-type"
        ,min_cylinders_id:              "cq-min-cylinders"
        ,min_mpg_hwy_id:                "cq-min-mpg-hwy"
        ,min_power_id:                  "cq-min-power"
        ,min_top_speed_id:              "cq-min-top-speed"
        ,min_torque_id:                 "cq-min-torque"
        ,min_weight_id:                 "cq-min-weight"
        ,min_year_id:                   "cq-min-year"
        ,max_cylinders_id:              "cq-max-cylinders"
        ,max_mpg_hwy_id:                "cq-max-mpg-hwy"
        ,max_power_id:                  "cq-max-power"
        ,max_top_speed_id:              "cq-max-top-speed"
        ,max_weight_id:                 "cq-max-weight"
        ,max_year_id:                   "cq-max-year"
        ,search_controls_id:            "cq-search-controls"
        ,search_input_id:               "cq-search-input"
        ,search_results_id:             "cq-search-results"
        ,search_result_id:              "cq-search-result"
        ,seats_id:                      "cq-seats"
        ,sold_in_us_id:                 "cq-sold-in-us"
     }); 
     carquery.initSearchInterface(searchArgs);

     //If creating a search interface, set onclick event for the search button.  Make sure the ID used matches your search button ID.
     $('#cq-search-btn').click( function(){ carquery.search(); } );
     console.log(carquery);
     setTimeout(
      function() {
     let option = document.createElement("option");
     option.innerHTML = '2023';

     let option2 = document.createElement("option");
     option2.innerHTML = '2024'

     document.getElementById(`Vehicle${currentVehicle}_Year`).prepend(option2, option);
    }, 3000);
};