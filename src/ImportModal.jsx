import { useEffect, useState } from 'react'
import './App.css'
import{v4} from 'uuid'
import FilePlayer from 'react-player/file'

export  const ImportModal = ({setImportInventory, importInventory, inventoryTextFile,  allItemsTextFile}) =>{

    const [inventoryJson, setinventoryJSON] = useState('')
    const [allItemsJson, setAllItemsJSON] = useState('')



    const cancelImport = () =>{
        setAllItemsJSON('')
        setinventoryJSON('')
        setImportInventory('')

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
    console.log(resultObject)
    setinventoryJSON(resultObject)
}else if(resultObject[0].hasOwnProperty('item_name')){
    console.log('this is the ALL ITEMS backup') 
    console.log(resultObject)
    setAllItemsJSON(resultObject)
}else{alert('no valid backup is contained in this file: choose another file or cancel import')}
}

reader.readAsText(selectedFiles[0]);

}





const useImport = (e) =>{

 if(inventoryJson !==''){
    console.log('inventory creation in process...')
    console.log(inventoryJson)

 }else if(allItemsJson !==''){
    console.log('all items creation in process...')
    console.log(allItemsJson)

}else{alert('no valid backup is available to be used yet - please choose a valid file to proceed')}



// setImportInventory('')
}

return(<>

<div className="import-modal">

<div className="use-import-div">
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

</div>

</div>


</>)
}