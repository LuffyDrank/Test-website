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
<select id="Driver${driverNumber}_Ticket_Type${getTicketNumber(driverNumber)}" name="Driver${driverNumber}_Ticket_Type${getTicketNumber(driverNumber)}">
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
<select id="Driver${driverNumber}_Ticket_Type${ticketNumber}" name="Driver${driverNumber}_Ticket_Type${ticketNumber}">
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

<label for="Driver's_${toWords(driverCount)}_License_Number">${toWords(driverCount)} Driver's License Number</label>
<input type="number" id="Driver_${toWords(driverCount)}_License_Number" name="Driver_${toWords(driverCount)}_License_Number">

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
  <select id="Vehicle${vehicleCount}_Year" name="Vehicle${vehicleCount}_Year">
  </select>
    <label for="Vehicle${vehicleCount}_Make">Make of Vehicle</label>
    <select id="Vehicle${vehicleCount}_Make" name="Vehicle${vehicleCount}_Make">
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
          <label for="Vehicle${vehicleCount}_GAP">Vehicle${vehicleCount}_GAP
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
          <div class="Content" id="Sect1" style="display: none">
            <label for="Vehicle${vehicleCount}_Road_Service">Road Service Ammount</label>
            <select name="Vehicle${vehicleCount}_Road_Service_ammount" id="Vehicle${vehicleCount}_Road_Service">
              <option value="$50">$50</option>
              <option value="$100">$100</option>
              <option value="$150">$150</option>
              <option value="$175">$175</option>
              <option value="$200">$200</option>
              <option value="$250">$250</option>
            </select>
          </div>
          <div class="Content" id="Sect2" style="display: none">
            <label for="Vehicle${vehicleCount}_Car_Rental">Car Rental Ammount</label>
            <select name="Vehicle${vehicleCount}_Car_Rental_ammount" id="Vehicle${vehicleCount}_Car_Rental">
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

let currentVehicle = 1;

function doSomething2(e) {
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.outerHTML;



    
    // IF IT IS A TICKET CHECKBOX

    if (clickedItem.endsWith('</select>')) {
      vehicleNumber = Number(e.target.id.charAt(7));
      alert(vehicleNumber);

      if(typeof vehicleNumber == "number") {
        if (currentVehicle === vehicleNumber){
          alert('WTF');
        }
      
      else{
        alert('lol')
        currentVehicle = vehicleNumber;
        carAPI();
      }
    }
    }
  }
}

function roadServiceDropdown() {
  checkbox = document.getElementById('Vehicle1_Road_Service');
  if (checkbox.checked) {
    alert("FUNNY TAIL");
  }
}





carAPI();




// CAR API


function carAPI() {
     //Create a variable for the CarQuery object.  You can call it whatever you like.
     var carquery = new CarQuery();

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
     carquery.year_select_max=2025;
 
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
};