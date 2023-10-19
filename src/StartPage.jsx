import { useEffect, useState } from 'react'
import './App.css'
import{v4} from 'uuid'
import { SearchForm } from './SearchForm'
const [search, setSearch] = ('')
import { ImportModal } from './ImportModal'






import saveImg from '../images/save icon.png'
import importImg from '../images/import icon.png'
export  const StartPage = ({viewArea, openSearch, openAllLocations, fixLocationId, openUserGuide, container, allItemsArray}) =>{

  // the below variables never change - they are part of the backup file names for container and all items backups. 
  const inventoryTextName = 'INVENTORY Backup - '
  const allItemsTextName = 'ALL ITEMS Backup - '


// state for import modal activation: 
const [importInventory, setImportInventory] = useState('')



// location of saved text backup
const backupInventory = '../container backup/containerBackup2.txt';
const backupAllItems = '../container backup/itemsBackup.txt';



// IMPORT a backup inventory
    function inventoryImport(){
      setImportInventory('import')

        // inventory BACKUP
// fetch(backupInventory) // fetch text (promise)
// .then(resp => resp.text()) // returning response as text
// .then(data =>{// deal with data that comes back from promise
//     console.log('importing inventory...')
//   console.log((JSON.parse(data))) // parse for display in console
// })
// .catch(err =>{
//   console.log(err)
// })


// all items BACKUP
// fetch(backupAllItems)
// .then(resp => resp.text())
// .then(data =>{
// console.log('importing all items...')
//   console.log((JSON.parse(data)))
// })
// .catch(err =>{
//   console.log(err)
// })


    }


let stringifiedContainer = [JSON.stringify(container)]
// console.log(stringifiedContainer)


// INVENTORY BACKUP FILENAMES






// INVENTORY BACKUP 
function inventoryBackup(){



// precise backup time is only needed for backup filenames at the actual time a backup is requested so they can live here. 
  let dateTest = new Date(Date.now())
let backupDate = dateTest.toUTCString().replaceAll(':', '-').replaceAll(',', '')
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

        }



    return(
    <>

{
  importInventory !== '' && 
  <ImportModal setImportInventory={setImportInventory}  importInventory={importInventory}  />
}

{  // show search button and view locations button  if viewrea string is 'start page'
viewArea == "start page" && 
importInventory == '' && 

<>
<div className='start-page-btns-div'>


<button className="start-page-btns" onClick={() =>{openSearch("search page");
}}>Search Items </button> 

<button className="start-page-btns" onClick={() =>{openAllLocations('main');
}}>View/edit locations </button>

<button className="start-page-btns" onClick={() =>{openUserGuide('user guide');

// fixLocationId()
}}>Video userguide</button>


<button className="start-page-btns backup-btn" onClick={() =>{inventoryBackup();
}}><p className='button-para'>Backup Inventory</p><img className='backup-img' src={saveImg}></img></button> 

<button className="start-page-btns import-btn" onClick={() =>{inventoryImport();
}}><p className='button-para'>Import Inventory</p><img className='import-img' src={importImg}></img></button> 

</div>

</>


}




    </>
    )
    
    }
    

