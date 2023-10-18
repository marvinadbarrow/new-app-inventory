import { useEffect, useState } from 'react'
import './App.css'
import{v4} from 'uuid'
import { SearchForm } from './SearchForm'
const [search, setSearch] = ('')
import saveImg from '../images/save icon.png'
import importImg from '../images/import icon.png'
export  const StartPage = ({viewArea, openSearch, openAllLocations, fixLocationId, openUserGuide, container, allItemsArray}) =>{

console.log(saveImg)
// location of saved text backup
const backupText = '../container backup/containerBackup.txt';
const backupItems = '../container backup/itemsBackup.txt';
    function inventoryImport(){

        // inventory backup
fetch(backupText) // fetch text (promise)
.then(resp => resp.text()) // returning response as text
.then(data =>{// deal with data that comes back from promise
    console.log('importing inventory...')
  console.log((JSON.parse(data))) // parse for display in console
})
.catch(err =>{
  console.log(err)
})


// all items backup
fetch(backupItems)
.then(resp => resp.text())
.then(data =>{
console.log('importing all items...')
  console.log((JSON.parse(data)))
})
.catch(err =>{
  console.log(err)
})
    }





function inventoryBackup(){
    console.log('backing up inventory...')
    // TEMPORARY BACKUP FOR INVENTORY

    const element = document.createElement('a')
    const backupFile = new Blob([JSON.stringify(container)], {type:'text/plain'})
    element.href = URL.createObjectURL(backupFile)
    element.download = 'backupFile.txt'
    document.body.appendChild(element)
    element.click()



    const element2 = document.createElement('a')
    const backupFile2 = new Blob([JSON.stringify(allItemsArray)], {type:'text/plain'})
    element2.href = URL.createObjectURL(backupFile2)
    element2.download = 'backupFile.txt'
    document.body.appendChild(element2)
    element2.click()

        }



    return(
    <>



{  // show search button and view locations button  if viewrea string is 'start page'
viewArea == "start page" && 
<>
<div className='start-page-btns-div'>


<button className="start-page-btns" onClick={() =>{openSearch("search page");
}}>Search Items </button> 

<button className="start-page-btns" onClick={() =>{openAllLocations('main');
}}>View/edit locations </button>

<button className="start-page-btns" onClick={() =>{openUserGuide('user guide');

// fixLocationId()
}}>Video userguide</button>



<button className="start-page-btns import-btn" onClick={() =>{inventoryImport();
}}><p className='button-para'>Import Inventory</p><img className='import-img' src={importImg}></img></button> 

<button className="start-page-btns backup-btn" onClick={() =>{inventoryBackup();
}}><p className='button-para'>Backup Inventory</p><img className='backup-img' src={saveImg}></img></button> 
</div>

</>


}




    </>
    )
    
    }
    

