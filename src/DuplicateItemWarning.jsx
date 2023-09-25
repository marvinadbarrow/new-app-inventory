import { useState } from "react"

export const DuplicateItemWarning = ({duplicateFound, modifiedItemName, setDuplicateItemExists, applyItemNameChange, SetCancelRename, setSelectedSectionInfo, setSelectedBoxInfo, setDuplicateFound, attemptTransfer }) =>{
const [newItemName, setNewItemName] = useState('')




function cancelItemNamechange(){
    setDuplicateItemExists(0)
    console.log('duplicate name')
    console.log(duplicateFound)  
    setDuplicateFound('') // reset duplicate name
    // setSelectedSectionInfo('') // reset section selection menu option
    setSelectedBoxInfo('') // reset box selection menu option
    // resetting the above two will cause the destination element to hide both section and box paragraphs which showed the previous selection, so user can choose another box or section and box
}

    return(
    <>
    
    <div className="warning-message-element-item">
<div className="duplicate-item-warning medium-border">
    <b><em>WARNING - Duplicate item at destination:</em></b><br/>
     <p className="duplicate-warning-para"> the item name: -   
     <b><em> {duplicateFound}</em></b>, already exists in the destination box<br/> Either modify the name to proceed or cancel to change destination
     </p>
     </div>
{
    // RENAMING FORM FOR DUPLICATE item NAMES
}
<form action="" onSubmit={(e) =>{
        e.preventDefault();

// new item name must have > 2 characters
 if(newItemName.length > 2){

    // if the newly typed item name is not the same as the duplicate
if(newItemName !== duplicateFound){
    // send the input name for processing; to be set as modifiedItem name
    applyItemNameChange(newItemName)
    attemptTransfer('yes', 'test variable')
}else{
 // otherwise advise user that the name is still a duplication   
    alert('new item name is still a duplicate of a item at the destination')}

}else{
//item name has < 3 characters so advise user to lengthen name
    alert('please rename the item with more than two characteres')}

   }} className="rename-item-form">
 <label htmlFor="rename-input">{'Modify item Name'}</label>
 <input value={newItemName} id='rename-input' type="text" placeholder={'New item name'} 
 // update the input value characters are types
 onChange={e => setNewItemName(e.target.value)}
  />
<button className="reset-duplicates navigation-btn origin item-name-change" typeof="submit" >Apply Name Change</button>
</form>


    <button className="cancel-item-rename-btn" onClick={() =>{
        // if user changes their mind about renaming the item, they can cancel it with this button
        cancelItemNamechange()
    }}>cancel</button>



</div>

    
    </>
    )
}