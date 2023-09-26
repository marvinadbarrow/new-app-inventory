import { useState } from "react"

export const DuplicateItemWarning = ({duplicateFound, modifiedItemName, setDuplicateItemExists, applyItemNameChange, SetCancelRename, setSelectedSectionInfo, setSelectedBoxInfo, setDuplicateFound, attemptTransfer, selectedLocationInfo, selectedSectionInfo, selectedBoxInfo, testContainer }) =>{
const [newItemName, setNewItemName] = useState('')

let destinationBox; // variable for destination box

// if all destination objects are not empty strings
if(selectedLocationInfo !=='' && selectedSectionInfo !=='' && selectedBoxInfo !==''){

    // locate the destionation box and set it as the value of the 'destnationBox' variable
destinationBox =  testContainer[selectedLocationInfo.location_index].location_contents[selectedSectionInfo.section_index].section_contents[selectedBoxInfo.box_index].box_contents
}


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

    let duplicatedNewName = 0;
// map through destination box to make sure none of the 'other' items duplicate the new name
destinationBox.map(items =>{
    // if a duplicates is found, increment duplicatedNewName
    if(items.itemString == newItemName){
        duplicatedNewName +=1
    }else{ // otherwise keep current number
        duplicatedNewName = duplicatedNewName
    }
})

// if duplicatedNewName > 0,  a duplicate was found so alert user
if(duplicatedNewName > 0){
    alert('new item name is still a duplicate of an item at the destination: try a different name')
}else{
    localStorage.setItem('modified_item_name', newItemName)
    //  otherwise, no duplicate was found so procede
    applyItemNameChange(newItemName)
  
}

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