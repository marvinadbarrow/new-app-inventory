import { useState } from "react"
import { v4 } from "uuid";
export const DuplicateWarning = ({duplicateFound, newBoxName, setExistingDuplicates, applyBoxNameChange, setNewBoxName, setTransferApplied, setDuplicateFound, setSelectedSectionInfo, selectedSectionInfo, selectedLocationInfo, testContainer, setSelectedLocationInfo}) =>{


const processDuplicate = (nameofNewBox) =>{
    console.log('what select location should be')
console.log(selectedLocationInfo)
// set newBoxName as the name of the box
applyBoxNameChange(nameofNewBox)
  
// setting existing duplicates to zero will cause the duplicates warning to disappear and will allow the 'apply transfer' button to re-appear which is necessary because, since there was a duplicate, the transfer did not complete; so the user will have to activate the transfer function again by hitting the transfer button once more.  Now that the box name has been changed and used to set new box, when apply transfer is clicked, the box will take the existing new name, and no  duplicate will be found, and this will allow the process to complete and transfer the box.
setExistingDuplicates(0);
setDuplicateFound('')

}

const cancelBoxmNamechange = () =>{
    setExistingDuplicates(0) // reset duplicates number
    setDuplicateFound('') // reset duplicate name
    setSelectedSectionInfo('') // reset section selection menu option, so that the option zeros.  This will prevent the useEffect on transfer page for selectedSectionInfo from searching for a duplicate box, because the function requires the 
    setSelectedLocationInfo('')
}
    return(
    <>
    
    <div className="warning-message-element">
<div className="duplicate-box-warning medium-border">
    <b><em>WARNING - Duplicate box name exists:</em></b><br/>
     <p className="duplicate-warning-para"> the box name: -   
     <b><em className="warning-red"> {duplicateFound}</em></b>, already exists at the transfer destination<br/> Consider <em>modifying</em> the box name by <em>'adding a number'</em> at the end of the name to represent the order in which the box was placed in the destination
     </p>


     <div className="box-names-div">
     <p className="warn-elem-dest-heading">Destination box names:</p>
     <ul key={v4()} className="box-contents-for-transfer">


     {
    // map through boxes and list in the below div
    testContainer[selectedLocationInfo.location_index].location_contents[selectedSectionInfo.section_index].section_contents.map(boxes =>{
let nameOfClass; 

// if the duplicate matches the currently assessed box name, colour the name red
if(boxes.box_name == duplicateFound){
    nameOfClass = "transfer-box warning-red"
}else{ // otherwise box name doesn't match duplicate so color normal
    nameOfClass = "destination-box" 
}

return(
    <li key={boxes.id} className={nameOfClass}>{boxes.box_name}</li>
)



        
    })
}

     </ul>

     </div>
     </div>
{
    //RENAMING FORM FOR DUPLICATE BOX NAMES
}
<form action="" onSubmit={(e) =>{
        e.preventDefault();

        // when user hits the submit button, if newBoxName (whatever was typed in to the input) has > 2 characters
 if(newBoxName.length > 2){

    // if the freshly typed  newBoxName is not the same as the the duplicateFound variable
if(newBoxName !== duplicateFound){
    // process the newBoxName input
processDuplicate(newBoxName)
}else{
    // otherwise inform user that the input is still a duplicate
    alert('new box name is still a duplicate of a box at the destination')}

}else{
        // otherwise inform user that new name is too short
    alert('please rename the box with more than two characteres')}

   }} className="rename-box-form">


 <label htmlFor="rename-input">{'Modify Box Name'}</label>
 
 <input value={newBoxName} id='rename-input' type="text" placeholder={'New box name'} 
onChange={e => setNewBoxName(e.target.value)} // as characters are typed, set new box name to input value which will appear in the input above
  />
<button className="reset-duplicates navigation-btn origin" typeof="submit" >Apply Name Change</button>
</form>

<div className="cancel-item-rename-vid">
    <p className="cancel-item-rename-para">cancel rename - select a different section or location</p>
    <button className="cancel-item-rename-btn" onClick={() =>{
        // if user changes their mind about renaming the item, they can cancel it with this button
        cancelBoxmNamechange()
    }}>cancel</button>
</div>


</div>

    
    </>
    )
}