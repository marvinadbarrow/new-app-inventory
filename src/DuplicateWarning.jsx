import { useState } from "react"
import { v4 } from "uuid";
export const DuplicateWarning = ({duplicateFound, newBoxName, setExistingDuplicates, applyBoxNameChange, setNewBoxName, setTransferApplied, setDuplicateFound, setSelectedSectionInfo, selectedSectionInfo, selectedLocationInfo, testContainer, setSelectedLocationInfo, attemptTransfer}) =>{


// cancel box name change
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
    <b><em>WARNING - Duplicate box at destination:</em></b><br/>
     <p className="duplicate-warning-para"> the box name: -   
     <b><em className="warning-red"> {duplicateFound}</em></b>, already exists at the transfer destination<br/> Modify the box name to proceed, or cancel to change destination
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

        // when user hits the submit button, check if newBoxName (whatever was typed in to the input) has > 2 characters
 if(newBoxName.length > 2){

    //  then check if the freshly typed  newBoxName differs from the duplicateFound variable string
if(newBoxName !== duplicateFound){
    // process the newBoxName input
    localStorage.setItem('modified_box_name',JSON.stringify(newBoxName))
    applyBoxNameChange(newBoxName)
    attemptTransfer('yes', 'test variable')
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
<button className="reset-duplicates navigation-btn origin box-name-change" typeof="submit" >Apply and Transfer</button>
</form>


    {/* <p className="cancel-item-rename-para">cancel rename - select a different section or location</p> */}
    <button className="cancel-item-rename-btn" onClick={() =>{
        // if user changes their mind about renaming the item, they can cancel it with this button
        cancelBoxmNamechange()
    }}>cancel</button>



</div>

    
    </>
    )
}