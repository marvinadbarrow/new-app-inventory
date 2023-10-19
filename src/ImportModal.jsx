import { useEffect, useState } from 'react'
import './App.css'
import{v4} from 'uuid'
import FilePlayer from 'react-player/file'

export  const ImportModal = ({setImportInventory, setBackupInitiate, setContainer, setAllItemsArray}) =>{

    // state to hold imported inventory JSON
    const [inventoryJson, setinventoryJSON] = useState('')
    // state to hold imported all items JSON
    const [allItemsJson, setAllItemsJSON] = useState('')
    const [testConfirm, setTestConfirm] = useState('')


    const cancelImport = () =>{
        setAllItemsJSON('')
        setinventoryJSON('')
        setImportInventory('')

        }

        const returnToStart = () =>{
            setTestConfirm('')
            setImportInventory('')
            setBackupInitiate('')
        }
        let selectedFiles;       
const prepareImportFilename = (e) =>{
setAllItemsJSON('')
setinventoryJSON('')

    console.log('importing database...')
console.log('log the event')
selectedFiles = e.target.files
const reader = new FileReader() // create a new reader
reader.onload = function(){
    
let importResult = reader.result
let resultObject = JSON.parse(importResult) // actually if you can parse, one of 

if(resultObject[0].hasOwnProperty('location_contents')){
    console.log('this is the CONTAINER backup')
    console.log(resultObject) // an array of container with locations
    setinventoryJSON(resultObject) // set state with IMPORTED inventory object
}else if(resultObject[0].hasOwnProperty('item_name')){
    console.log('this is the ALL ITEMS backup') 
    console.log(resultObject) // an array all inventory items
    setAllItemsJSON(resultObject) // set state with IMPORTED all items object
}else{alert('no valid backup is contained in this file: choose another file or cancel import')}
}

reader.readAsText(selectedFiles[0]);

}




// this function accesses the imported objects and overwrites current inventory and all items arrays with imports if those already exist, or is used as a fresh copy if no locations have been created in the inventory. 
const useImport = (e) =>{

    
 if(inventoryJson !==''){
    console.log('inventory creation in process...')
    console.log(inventoryJson)
    setTestConfirm('yes')
    setContainer(inventoryJson) // set import as new container
 }else if(allItemsJson !==''){
    console.log('all items creation in process...')
    console.log(allItemsJson)
    setAllItemsArray(allItemsJson) // set import as new all items array
setTestConfirm('yes')
}else{alert('no valid backup is available to be used yet - please choose a valid file to proceed')}

}

return(<>


<div className="import-modal">

<div className="use-import-div">


{
    testConfirm == '' &&
<>
<p className="use-import-warning"><b>WARNING: </b>If you procede with this import, should there already exist an inventory on this device, it will be overwritten.  If the imported inventory is a backup from a different device, to avoid losing data, consider backing up this device's inventory first, by cancelling the import and using the backup button on screen. Otherwise you can import as normal, since there is no inventory here to overwrite. 
<br/>
<br/>

<b>IMPORTANT!</b> - please remember to import 'BOTH' inventory files, the 'INVENTORY...txt' file and the 'ALL ITEMS.....txt' file.  Without the 'all items' import your search results will be inaccurate or non-existent and may result in an application crash. </p>

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


/*
<h3 className="overwrite-confirmation">Use Import Successful</h3>
<p className="import-success-para">You can start using your inventory</p>
<div className="confirmation-btn-holder">
    <button className="return-btn">Return to Backup and Import</button>
    <button className="return-btn">Return to Start Page</button>
</div>

*/