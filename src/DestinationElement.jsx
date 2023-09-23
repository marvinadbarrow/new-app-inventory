import { DestinationBoxes } from "./DestinationBoxes"
import { DuplicateWarning } from "./DuplicateWarning"

export const DestinationElement = ({selectedLocationInfo, selectedSectionInfo, sectionItems, testContainer, newBoxName, transferApplied, selectedBoxInfo, modifiedBoxName, existingDuplicates}) =>{





return(<>

<div className="element-div-transfer-destination medium-border">
            <p className="results-para heading-clr-destination text-shadow-heading"><em>{'DESTINATION'}</em></p>

            {selectedLocationInfo.hasOwnProperty('location_name') && 
                 <p className="results-para">Location:<br/> <b>{selectedLocationInfo.location_name}</b></p>       
            }

    {selectedSectionInfo.hasOwnProperty('section_name') && 
    <p className="results-para">Section:<br/> <b>{selectedSectionInfo.section_name}</b></p>
    }
   {    // if section items property exists, desplay element to list all items in a box transfer
sectionItems.hasOwnProperty('parent_section_name') &&
// only show section boxes once section is selected
selectedSectionInfo.section_name &&


<DestinationBoxes testContainer={testContainer} selectedSectionInfo={selectedSectionInfo} selectedLocationInfo={selectedLocationInfo} sectionItems={sectionItems} newBoxName={newBoxName} transferApplied={transferApplied} modifiedBoxName={modifiedBoxName} existingDuplicates={existingDuplicates}/>


   }

   {
      // if selectedBoxInfo has any properties then an item is being transferred.  There needs to be a check to see if the name of the transfer item is unique, i.e. the dstination does not have an item of the same name. 
   selectedBoxInfo !== undefined  &&
   <>


   {

selectedBoxInfo !== '' &&
selectedBoxInfo.hasOwnProperty('box_index') && //  and  paragraph for selected box name only shown if a box is selected in select menu
<p className="results-para">Box:<br/> <b>{selectedBoxInfo.box_name}</b></p>


   }
   </>

   }
            </div>
</>)
}