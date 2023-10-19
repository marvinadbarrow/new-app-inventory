import { useState } from "react";
import { ImportModal } from './ImportModal'
import saveImg from '../images/save icon.png' // for backup button
import importImg from '../images/import icon.png' // for import button
import { render } from "react-dom";
import { BackupModal } from "./BackupModal";

// need one for restore button
 export const BackupAndRestore = ({setBackupInitiate, container, allItemsArray, setContainer, setAllItemsArray}) =>{
 // used to hide default buttons and to render 'import and usebackup' modal
 const [importInventory, setImportInventory] = useState('')

 // when downloadComplete is not an empty string 'download complete' modal will render
 const [backupComplete, setBackupComplete] = useState('')
const [savedFiles, setSavedFiles] = useState({})


// opens importModal where files can be selected and restore/replace/create inventory can be executed. 
function inventoryImport(){
    setImportInventory('import')

  }

  // description part of filename, for file that holds download. 
  const inventoryTextName = 'INVENTORY Backup - '
 
  let combinedObj = {
    "container": JSON.stringify(container),
    "all_items":  JSON.stringify(allItemsArray)
  }

// stringify entire object for new Blob
let stringifiedContainer = [JSON.stringify(combinedObj)]

 // INVENTORY BACKUP process which creates a text file for download
function inventoryBackup(){

    // create a current time and date string to be included in filename. 
      let currentDate = new Date(Date.now())
    let backupDate = currentDate.toUTCString().replaceAll(':', '-').replaceAll(',', '')
    let inventoryBackupFileName = inventoryTextName + backupDate + '.txt'
   
        console.log('backing up inventory...')
// create a blob that will convert inventory object to a text file for download
        const combinedElement = document.createElement('a')
        const backupFile3 = new Blob(stringifiedContainer, {type:'text/plain'} )
        combinedElement.href = URL.createObjectURL(backupFile3)
        combinedElement.download = inventoryBackupFileName
        document.body.appendChild(combinedElement)
        combinedElement.click()

    // storing saved filename in an object to be used as prop on 'BackupModal' component
        setSavedFiles({
          "container": inventoryBackupFileName,
        })
        setBackupComplete('complete')
// this will close remove backup buttons and restore regular start page buttons

            }
    
function cancelBackupAndRestore(){
setBackupInitiate('')
}

 return(
<>


{ // import modal will show when import button below is pressed
  importInventory !== '' && 
  <ImportModal setImportInventory={setImportInventory} importInventory={importInventory}  setBackupInitiate={setBackupInitiate} setContainer={setContainer} setAllItemsArray={setAllItemsArray}  />
}

{ // import modal will show when import button below is pressed
  backupComplete !== '' && 
  <BackupModal setImportInventory={setImportInventory}   setBackupInitiate={setBackupInitiate} setBackupComplete={setBackupComplete} savedFiles={savedFiles}/>
}

{ 
// buttons will only show if import button has not been clicked
importInventory == '' && 
// buttons only show if backup has not happened
backupComplete =='' &&
    <>
<div className="backup-btns">

<button className="start-page-btns backup-btn" onClick={() =>{inventoryBackup();
}}><p className='button-para'>Backup Inventory</p><img className='backup-img' src={saveImg}></img></button> 

<button className="start-page-btns import-btn" onClick={() =>{inventoryImport();
}}><p className='button-para'>Import Inventory</p><img className='import-img' src={importImg}></img></button> 

<button className='backup-cancel' onClick={() =>{cancelBackupAndRestore()}} >Cancel Backup and Import</button>


</div>
  
    </>

}

</>


 )
}