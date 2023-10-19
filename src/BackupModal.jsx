


export const BackupModal = ({setBackupInitiate, setBackupComplete, savedFiles}) =>{



    const returnToStart = () =>{
                // hide this modal
        setBackupComplete('')
  // hide backup and restore modal
        setBackupInitiate('')
    }


    const returnToBackupPage = () =>{
        // hide this modal
        setBackupComplete('')
        // hide import modal if it's showing (it shouldn't be - can remove this after further testing)
  
     }
    
    return(

        <>
        <h3 className="overwrite-confirmation">Backup Successful</h3>
   <p className="import-success-para">Your backup is downloaded </p>
   <p className="post-backup-info">Backups are downloaded to the default download folder used by your browser. There are two backup files, named below:<br/><br/>

   <span className="highlight-span">{savedFiles["Structure_backup"]}<br/>
   {savedFiles["All_items_backup"]}<br/><br/></span>

    The file names include the type of backup, the date, and time ( <span className="highlight-span">HH-MM-SS</span> format) the backup was made, as well as the the local timezone abbreviation, so they can be easily matched when selecting backups for import (on exremely rare occasions, the last digit of the time for the two files may differ by just one, due to the precise timing of backup creation).  Copy and save these two files to a secure location on your computer. As an extra precaution you may want to keep copies on a secondary device or even store them in a secure email for later retrieval. <br/><br/><br/>

    <span className={'important-span'}>IMPORTANT!</span> When restoring an inventory, BOTH files are needed; if you  restore the <span className="highlight-span">INVENTORY backup</span> only, the app will still work and you will be able to navigate around the app and, create, add, transfer and delete items, create and delete locations, and view items and locations throughout the structure, but the search will likely fail, or at best, return inaccurate results, with a high probability of the app crashing as a result.  It is recommended that you ALWAYS keep these two files together and import the <span className="highlight-span">ALL ITEMS backup</span> immediately after importing the <span className="highlight-span">INVENTORY backup</span>  to avoid any issues. 

    
    </p><br/>
   <div className="confirmation-btn-holder">
       <button className="return-btn" onClick={() =>{returnToBackupPage()}}>Return to Backup and Import</button>
       <button className="return-btn" onClick={() =>{returnToStart()}}>Return to Start Page</button>
   </div>
        </>
    )
}