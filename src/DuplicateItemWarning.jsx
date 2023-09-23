import { useState } from "react"

export const DuplicateItemWarning = ({duplicateFound, modifiedItemName, setDuplicateItemExists, applyItemNameChange, SetCancelRename, setSelectedSectionInfo, setSelectedBoxInfo, setDuplicateFound }) =>{
const [newItemName, setNewItemName] = useState('')

console.log(duplicateFound, modifiedItemName)

const processDuplicate = (nameOfNewItem) =>{
    // store modified name for potential later use
    localStorage.setItem('modified_item_name',JSON.stringify(nameOfNewItem))
// set set the transfer item name as the new name
applyItemNameChange(nameOfNewItem)
setDuplicateItemExists(0); // reset duplicates so that item can be transferred
setDuplicateFound('') // reset duplicate name
}


function cancelItemNamechange(){
    setDuplicateItemExists(0)
    console.log('duplicate name')
    console.log(duplicateFound)  
    setDuplicateFound('') // reset duplicate name
    setSelectedSectionInfo('') // reset section selection menu option
    setSelectedBoxInfo('') // reset box selection menu option
    // resetting the above two will cause the destination element to hide both section and box paragraphs which showed the previous selection, so user can choose another box or section and box
}

    return(
    <>
    
    <div className="warning-message-element-item">
<div className="duplicate-item-warning medium-border">
    <b><em>WARNING - Duplicate item name:</em></b><br/>
     <p className="duplicate-warning-para"> the item name: -   
     <b><em> {duplicateFound}</em></b>, already exists in the destination box<br/> Consider <em>modifying</em> the item name by <em>'adding a number'</em> at the end of the name to represent the order in which the item was placed in the box
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
processDuplicate(newItemName)
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
<button className="reset-duplicates navigation-btn origin" typeof="submit" >Apply Name Change</button>
</form>

<div className="cancel-item-rename-vid">
    <p className="cancel-item-rename-para">cancel rename - select a different box or area</p>
    <button className="cancel-item-rename-btn" onClick={() =>{
        // if user changes their mind about renaming the item, they can cancel it with this button
        cancelItemNamechange()
    }}>cancel</button>
</div>


</div>

    
    </>
    )
}