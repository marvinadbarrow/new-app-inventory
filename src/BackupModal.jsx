


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
   <p className="post-backup-info">Your Backup is downloaded to the default download folder used by your browser. Backup filename:<br/><br/>

   <span className="highlight-span">{savedFiles["container"]}<br/></span>

    The <span className="highlight-span">INVENTORY backup</span> filename includes backup date, backup time (<span className="highlight-span">HH-MM-SS</span> - format), as well as the the local timezone abbreviation.  Copy and save this file to a secure location on your computer. And as an extra precaution you may want to keep a copy on a secondary device or even store a copy in a secure email for later retrieval. <br/><br/><br/>
    
    </p><br/>
   <div className="confirmation-btn-holder">
       <button className="return-btn" onClick={() =>{returnToBackupPage()}}>Return to Backup and Import</button>
       <button className="return-btn" onClick={() =>{returnToStart()}}>Return to Start Page</button>
   </div>
        </>
    )
}