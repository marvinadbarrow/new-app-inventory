import { useState } from "react"
import { v4 } from "uuid";
export const DuplicateWarning = ({duplicateFound, newBoxName, setExistingDuplicates, applyBoxNameChange, setNewBoxName, setTransferApplied, setDuplicateFound, setSelectedSectionInfo, selectedSectionInfo, selectedLocationInfo, testContainer, setSelectedLocationInfo, attemptTransfer}) =>{
const [newerBoxName, setNewerBoxName] = useState('')

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
 if(newerBoxName.length > 2){

    //  then check if the freshly typed  newBoxName differs from the duplicateFound variable 
if(newerBoxName !== duplicateFound){

{
//then  map through the destionation to see whether the new box name duplicates any of the other boxes

let furtherDuplicates = 0;
testContainer[selectedLocationInfo.location_index].location_contents[selectedSectionInfo.section_index].section_contents.map(boxes =>{

    // if the new name matches the currently assessed box name, alert user
    if(boxes.box_name == newerBoxName){
        furtherDuplicates +=1
    }else{ 
        furtherDuplicates = furtherDuplicates 
            // process the the new box name
    }  
                      })

        if(furtherDuplicates > 0){ // new name duplicates another box name
            alert('new box name is still a duplicate of a box at the destination: try a different name')
        }else{ // no duplicate found
            localStorage.setItem('modified_box_name', newerBoxName)
            applyBoxNameChange(newerBoxName)

        }
    }



}else{
    // otherwise inform user that the input is still a duplicate
    alert('new box name is still a duplicate of a box at the destination')}

}else{
        // otherwise inform user that new name is too short and must have more than two characters
    alert('please rename the box with more than two characteres')}

   }} className="rename-box-form">


 <label htmlFor="rename-input">{'Modify Box Name'}</label>
 
 <input value={newerBoxName} id='rename-input' type="text" placeholder={'New box name'} 
onChange={e => setNewerBoxName(e.target.value)} // as characters are typed, set new box name to input value which will appear in the input above
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