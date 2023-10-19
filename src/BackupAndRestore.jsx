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

  // the below variables never change - they are part of the backup file names for container and all items backups. 
  const inventoryTextName = 'INVENTORY Backup - '
  const allItemsTextName = 'ALL ITEMS Backup - '

// stringifying containter prior to using the string for new blob parameter
let stringifiedContainer = [JSON.stringify(container)]
// console.log(stringifiedContainer)


// INVENTORY BACKUP FILENAMES

 // INVENTORY BACKUP 
function inventoryBackup(){

    // precise backup time is only needed for backup filenames at the actual time a backup is requested so they can live here. 
      let currentDate = new Date(Date.now())
    let backupDate = currentDate.toUTCString().replaceAll(':', '-').replaceAll(',', '')
    let inventoryBackupFileName = inventoryTextName + backupDate + '.txt'
    let allItemsBackupFileName = allItemsTextName + backupDate + '.txt'
    

    
        console.log('backing up inventory...')
        // TEMPORARY BACKUP FOR INVENTORY
    
        const containerElement = document.createElement('a')
        const backupFile = new Blob(stringifiedContainer, {type:'text/plain'})
        containerElement.href = URL.createObjectURL(backupFile)
        containerElement.download = inventoryBackupFileName
        document.body.appendChild(containerElement)
        containerElement.click()
    
    
    
        const allItemsElement = document.createElement('a')
        const backupFile2 = new Blob([JSON.stringify(allItemsArray)], {type:'text/plain'})
        allItemsElement.href = URL.createObjectURL(backupFile2)
        // rather than automatically downloading the file, there probably needs to be some method here to open a dialogue box so a location can be chosen for the backup file.  I think this solution is better than having a default backup folder, because the user has no control over where the files are stored (unless they get the code base from GIT and know how to modify the code)
        allItemsElement.download = allItemsBackupFileName
        document.body.appendChild(allItemsElement)
        allItemsElement.click()
    
        // storing saved file names in an object to be used as prop on 'BackupModal' component
        setSavedFiles({
          "Structure_backup": inventoryBackupFileName,
          "All_items_backup": allItemsBackupFileName
        })
        setBackupComplete('complete')
// this will close remove backup buttons and restore regular start page buttons

            }
    
function cancelBackupAndRestore(){
setBackupInitiate('')
}

 return(
<>


  {/* <ConfirmationModal setImportInventory={setImportInventory}  importInventory={importInventory}  setBackupInitiate={setBackupInitiate}  setShowConfirmation={setShowConfirmation}  /> */}




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