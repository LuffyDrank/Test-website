materialPercentage ();

function materialPercentage () {
  const checkbox1 = document.getElementById('frame');
  const checkbox2 = document.getElementById('masonryVeneer');
  const checkbox3 = document.getElementById('brick');

  const framepercentage = document.getElementById('framepercentage');
  const masonryVeneerpercentage = document.getElementById('masonryVeneerpercentage');
  const brickpercentage = document.getElementById('brickpercentage');

  const percentageInputs = document.getElementById('percentageInputs');

  const NotePercentages = document.getElementById('NotePercentages');

 // Event listener for checkbox changes
 function handleCheckboxChange() {
  // Check how many checkboxes are checked
  const checkedCheckboxes = [checkbox1, checkbox2, checkbox3].filter(checkbox => checkbox.checked);
  console.log(checkedCheckboxes);

  const checkedCheckboxesID = [];

  for (const inputElement of checkedCheckboxes) {
    if (inputElement) {
      checkedCheckboxesID.push(inputElement.id);
    }
  }

  // Show or hide the percentage inputs based on the number of checked checkboxes

   if (checkedCheckboxes.length == 3) {
    percentageInputs.style.display = 'flex';
    document.getElementById(checkedCheckboxesID[0] + 'percentage' ).style.display = 'flex';
    document.getElementById(checkedCheckboxesID[1] + 'percentage' ).style.display = 'flex';
    document.getElementById(checkedCheckboxesID[2] + 'percentage' ).style.display = 'flex';
    console.log(checkedCheckboxes.length);

} 

  else if (checkedCheckboxes.length == 2) {

    [framepercentage, masonryVeneerpercentage, brickpercentage].forEach(input => {
      input.style.display = 'none';
    });

      percentageInputs.style.display = 'flex';
      document.getElementById(checkedCheckboxesID[0] + 'percentage' ).style.display = 'flex';
      document.getElementById(checkedCheckboxesID[1] + 'percentage' ).style.display = 'flex';
      NotePercentages.style.display = 'block';

  } 

  

  else {
      percentageInputs.style.display = 'none';
      NotePercentages.style.display = 'none';
  }
}

// Attach the event listener to the document to handle changes from any checkbox
document.addEventListener('change', function (event) {
  if (event.target.type === 'checkbox') {
      handleCheckboxChange();
  }
});
}







document.addEventListener('input', function (event) {
  if (event.target.type === 'number' && event.target.id.startsWith('percentage')) {
    validateTotalPercentage();
  }
});

// Function to validate total percentage and adjust if needed
function validateTotalPercentage() {
  const framePercentage = parseInt(percentage1.value) || 0;
  const masonryVeneerPercentage = parseInt(percentage2.value) || 0;
  const brickPercentage = parseInt(percentage3.value) || 0;

  const totalPercentage = framePercentage + masonryVeneerPercentage + brickPercentage;

  // If total exceeds 100%, adjust the percentages
  if (totalPercentage > 100) {
    const adjustmentFactor = 100 / totalPercentage;
    const adjustedFramePercentage = Math.round(framePercentage * adjustmentFactor);
    const adjustedMasonryVeneerPercentage = Math.round(masonryVeneerPercentage * adjustmentFactor);
    const adjustedBrickPercentage = Math.round(brickPercentage * adjustmentFactor);

    // Set the adjusted values
    percentage1.value = adjustedFramePercentage;
    percentage2.value = adjustedMasonryVeneerPercentage;
    percentage3.value = adjustedBrickPercentage;
  }
}


//Convert the numbers to words

function toWords(num) {
  const words = ['Zero', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
  return words[num] || num.toString();
}




//ADD AND REMOVE BUTTONS OF DETACHED STRUCTURES 

let numberOfStructures = 1;

function addDetachedStructureScript() {
  
  // Increment detached structure count
  numberOfStructures++;

  // Create a new div for the detached structure section
  const newDetachedStructureDiv = document.createElement('div');
  newDetachedStructureDiv.innerHTML = `

  <h3>${toWords(numberOfStructures)} detached structure</h3>

  <label for="detachStructuresName${numberOfStructures}">Name</label>
  <input type="text" id="detachStructuresName${numberOfStructures}" name="detachStructuresName${numberOfStructures}">

  <label for="detachStructuresPrice${numberOfStructures}">Price</label>
  <input type="text" id="detachStructuresPrice${numberOfStructures}" name="detachStructuresPrice${numberOfStructures}">

  <label for="detachStructuresReplacementCosts${numberOfStructures}">Replacement Costs</label>
  <input type="text" id="detachStructuresReplacementCosts${numberOfStructures}" name="detachStructuresReplacementCosts${numberOfStructures}">
`;

  // Insert the new detached structure section after the last detached structure div in the container
  const detachStructuresDiv = document.getElementById('detachStructuresDiv');
  detachStructuresDiv.insertAdjacentElement('beforeend', newDetachedStructureDiv);
}

function removeDetachedStructureScript() {
  if (numberOfStructures > 1) {

    // Find the last added Detached structuresection
    const detachedStructureDiv = document.getElementById('detachStructuresDiv');
    const lastDetachedStructureDivToRemove = detachedStructureDiv.lastElementChild;

    // Remove the last Detached structuresection from the container
    detachedStructureDiv.removeChild(lastDetachedStructureDivToRemove);

    // Decrement Detached structurecount
    numberOfStructures--;
  }
}