import { useEffect, useState } from 'react'
import './App.css'
import{v4} from 'uuid'
import { SearchForm } from './SearchForm'
import { BackupAndRestore } from './BackupAndRestore'
const [search, setSearch] = ('')


export  const StartPage = ({viewArea, openSearch, openAllLocations, openUserGuide, container, allItemsArray, setContainer, setAllItemsArray}) =>{


// state for accessing backup and import buttons: 
const [backupInitiate, setBackupInitiate] = useState('')


    return(
    <>

{
  backupInitiate !== '' && 
  <BackupAndRestore setBackupInitiate={setBackupInitiate}  container={container} allItemsArray={allItemsArray} setContainer={setContainer} setAllItemsArray={setAllItemsArray} />
}




{  // show search button and view locations button  if viewrea string is 'start page'
viewArea == "start page" && 
backupInitiate == '' && 
<>
<div className='start-page-btns-div'>


<button className="start-page-btns" onClick={() =>{openSearch("search page");
}}>Search Items </button> 

<button className="start-page-btns" onClick={() =>{openAllLocations('main');
}}>View/edit locations </button>

<button className="start-page-btns" onClick={() =>{openUserGuide('user guide');
// fixLocationId()
}}>Video userguide</button>

<button className="start-page-btns backup-and-import" onClick={() =>{
  setBackupInitiate('backup') // all default buttons will disappear and backup and restore buttons will appear
}}>Backup and Import</button>

</div>

</>


}




    </>
    )
    
    }
    

