
import { useState } from "react";
import { v4 } from "uuid";
export const DestinationBoxes = ({selectedLocationInfo, selectedSectionInfo, testContainer, sectionItems, newBoxName, transferApplied, modifiedBoxName, existingDuplicates}) =>{

    // for some reason, modified boxname is not coming here after it has been updated on the transfer page - so maybe this has to refresh using useEffect or maybe that's why  you needed local storage.  I think it's not present because this page does not re-render once the name has been changed
console.log('modifiedBoxName')
console.log(modifiedBoxName)
console.log('selectedLocationInfo')
console.log(selectedLocationInfo)
// if incoming modified box name has a value then set it as state otherwise leave previous state, but I'm not sure it will work and might have to use local storage to solve this.


    return(
        <>
 <div className="transfer-box-output small-border">
<p className="transfer-box-heading"><b>Box Names:</b></p>
<ul key={v4()} className="box-contents-for-transfer">
<div className="list-div"> 
    { // this DIV will only display 5 or 6 destination boxes; the rest will be hidden but can be seen using the scroll bar or mousewheel. 

    testContainer[selectedLocationInfo.location_index].location_contents[selectedSectionInfo.section_index].section_contents.map(box =>{
        console.log(box.box_name)
        let nameOfClass;



// transfer isn't applied yet but a duplicate box is found at destination (that can happen when the section menu is )


// TRANSFER NOT YET APPLIED
      if(transferApplied !== 'yes'){
        if(modifiedBoxName !==''){ // if modified box name exists but transfer is not applied it means that a duplicate has been dealth with and the name of the transfer box no longer clashes with the name of the destination box that its  previous name duplicated so all classnames can be normal since there is no longer a conflict at destinatoin
            nameOfClass = "transfer-box-item" 
        }else{

// no modified box name exists yet, so check if there is a duplicate and if  destination box name duplicates the trasfer box name should be highlighted bold red
if(box.box_name == sectionItems.box_name){

    // highlight box with warning color
        nameOfClass = "transfer-box-item warning-red"
       }else{ // otherwise, currently examined box is not a duplicate so use regular color - if there are no duplicates then no box will be coloured red
       nameOfClass = "transfer-box-item" 
   }



        }

      }

else{ // TRANSFER IS HAS BEEN APPLIED
if(localStorage.getItem('modified_box_name')){ // if a modified box name is saved to local storage
let modified = localStorage.getItem('modified_box_name')
   // search for destination box that has modified name
        if(box.box_name == modified){ 

            // highlight green; it is the transfer box (renamed)
            nameOfClass = "transfer-box-item success-green"
    }else{ //all other boxes (not having modified name) get regular color
            nameOfClass = "transfer-box-item"     
        }
}else{ // otherwise no modified box name exists. 
// Check which destination box has original transfer box name
    if(box.box_name == sectionItems.box_name){

        // give it the success color; it is the transfer box 
        nameOfClass = "transfer-box-item success-green"
     }else{ 
        // all other boxes get normal color
        nameOfClass = "transfer-box-item"  
     }


}


}
   

return(
    <li id={box.id} className={nameOfClass}>{box.box_name}</li>
)
        })
    }
</div>
</ul>
</div>
        </>
    )
}

/*

 if(transferApplied !== 'yes'){

if(box.box_name == sectionItems.box_name){ // if a duplicate box exists
    if(modifiedBoxName !== ''){ // if modified box name exists
        nameOfClass = "transfer-box-item" // name has been changed so 
    }else{
        nameOfClass = "transfer-box-item warning-red"
    }

}else{ // the section has been selected but the box names doesn't match sectionItems.box_name so color it normal
    nameOfClass = "transfer-box-item" 
}
      }

else{       // TRANSFER IS APPLIED
if(newBoxName == ""){ // if new box name  hasn't been given
    if(existingDuplicates < 1){ // there were no duplicates so the transfer is a success
        if(box.box_name == sectionItems.box_name){ // if destination box has sectionItems box name, then there was no dublicate and the natching name should be colored green to indicate a successful transfer of the original item
            nameOfClass = "transfer-box-item success-green"
        }else{ // transfer applied but box name doesn't match sectionitems name, it must be one of the other baxes that were already in the section so color it normal
            nameOfClass = "transfer-box-item"     
        }
    }else{// there was a duplicate
        if(box.box_name == sectionItems.box_name){ //duplicate exist and a match is found so color it red; note that this is where a new box name has not yet been set
            nameOfClass = "transfer-box-item warning-red"
        }else{ // otherwise the name is not a duplicate so color it normal
            nameOfClass = "transfer-box-item" 

    }}


}else{ // new box name does exist so a the transfer box had a duplicate name (might need to use modifiedName as an alternative but will test it)
if(box.box_name == newBoxName){
    nameOfClass = "transfer-box-item success-green"   
}else{ // none of the other boxes has new box name so color them normal
    nameOfClass = "transfer-box-item" 
}}





   {// if a duplicate DOES exist, refers to the box name that WAS red prior to the tranfer apply attempt, in other words, there was a duplicate, but now, there is a duplicate, but the box name has not been modified. So the duplicated box name SHOULD remain red; and the the transfer applied will be reset to 'no', and also, the tranfer will not be written to the destination because existing duplicates is greater than zero, so nothing is set.  COLOR hte duplication name as red and all of the others as regular. The red box MUST be the actual duplication box already at destination since no transfer occurred due to duplicate number being 1 or greater.  
        if(box.box_name == sectionItems.box_name){ //duplicate exist and a match is found so color it red; note that this is where a new box name has not yet been set
            nameOfClass = "transfer-box-item warning-red"
        }else{ // otherwise the name is not a duplicate so color it normal
            nameOfClass = "transfer-box-item" 

    }}



*/