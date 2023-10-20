import { useEffect, useState } from 'react'
import './App.css'
import{v4} from 'uuid'
import FilePlayer from 'react-player/file'

export  const ImportModal = ({setImportInventory, setBackupInitiate, setContainer, setAllItemsArray}) =>{

    // state to hold imported inventory JSON
    const [inventoryBackupJson, setinventoryBackupJSON] = useState('')
    // state to hold imported all items JSON
    const [allItemsBackupJson, setAllItemsJSON] = useState('')
    const [testConfirm, setTestConfirm] = useState('')


    const cancelImport = () =>{
        setAllItemsJSON('')
        setinventoryBackupJSON('')
        setImportInventory('')

        }

        const returnToStart = () =>{
            setTestConfirm('')
            setImportInventory('')
            setBackupInitiate('')
        }


        let selectedFiles;    // VARIABLE for FileList   
const prepareImportFilename = (e) =>{
setAllItemsJSON('')
setinventoryBackupJSON('')

    console.log('importing database...')
console.log('log the event')
selectedFiles = e.target.files
const reader = new FileReader() // create a new reader
reader.onload = function(){
    
let importResult = reader.result
let resultObject = JSON.parse(importResult) // actually if you can parse, one of 

let all_items_backup = JSON.parse(resultObject.all_items)
let container_backup = JSON.parse(resultObject.container)

// if file includes container information
if(container_backup[0].hasOwnProperty('location_contents')){
setinventoryBackupJSON(container_backup)//set state with IMPORTED inventory object
}else{alert('no valid CONTAINER backup is contained in this file: choose another file or cancel import')}

// if file includes ALL ITEMS information
if(all_items_backup[0].hasOwnProperty('item_name')){
    setAllItemsJSON(all_items_backup) // set state with IMPORTED all items object
}else{alert('no valid ALL ITEMS backup is contained in this file: choose another file or cancel import')}
}
reader.readAsText(selectedFiles[0]);

}




// overwrites current inventory and all items arrays with imports if those already exist, or a fresh copy is created. 
const useImport = (e) =>{
    
 if(inventoryBackupJson !=='' && allItemsBackupJson !==''){
    console.log(inventoryBackupJson)
    console.log(allItemsBackupJson)
    // this will render success message to modal
    setTestConfirm('yes')

    // set container and ALL ITEMS as state - for new inventory installation
    setContainer(inventoryBackupJson) 
    setAllItemsArray(allItemsBackupJson) 
 }else{alert('ALL ITEMS and/or CONTAINER information missing - cannot use this file')}

}

return(<>


<div className="import-modal">

<div className="use-import-div">


{
    testConfirm == '' &&
<>
<p className="use-import-warning"><b>WARNING: </b>If you proceed with this import (by importing a backup file and clicking 'use BACKUP'), should there already exist an inventory on this device, it will be overwritten.  If the imported inventory is a backup from a different device, to avoid losing data, consider backing up this device's inventory first, by cancelling the import and using the backup button on screen. Otherwise you can import as normal, since there is no inventory here to overwrite. 
 </p>

<button className='import-cancel' onClick={() =>{cancelImport()}} >CANCEL IMPORT</button>

<div id="pick-and-size">
               <input type="file" id="file-chooser"
               accept='text/plain'
               onChange={prepareImportFilename}
               />
      </div>
   
    <button className="start-page-btns use-import-btn" onClick={(e) =>{useImport(e);
    }}><p className='button-para'>Use BACKUP</p></button>

</>
}

{
     testConfirm !== '' &&
     <>
     <h3 className="overwrite-confirmation">Import process complete</h3>
<p className="import-success-para">You can start using your inventory</p>
<div className="confirmation-btn-holder">
    <button className="return-btn" onClick={() =>{cancelImport()}}>Return to Backup and Import</button>
    <button className="return-btn" onClick={() =>{returnToStart()}}>Return to Start Page</button>
</div>
     </>
     
}


</div>







</div>


</>)
}
