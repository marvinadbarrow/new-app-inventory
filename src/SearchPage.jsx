import { useEffect, useState } from 'react'
import './App.css'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'

export  const SearchPage = ({results, closeSearch, allItemsArray, container, openAllLocations, openSection, openLocation, sectionId, parentId, areaSpecific, preSearchArea, boxDetails, openBox}) =>{
const [searchResults, setSearchResults] = useState([])
const [resultsAdvice, setResultsAdvice] = useState(0)
const [searchTerm, setSearchTerm] = useState('')
const [plurality, setPlurality] = useState('')

// variable to store search name
function   searchCirteria(search){

setSearchTerm(search)



    const results = allItemsArray.filter(objects => objects.item_name.toLowerCase().includes(search));
    results.length < 1 ? setResultsAdvice(1):  setResultsAdvice(2)
  setSearchResults([...results])

  console.log('results length')
  console.log(results.length)
  results.length < 2? setPlurality('result'): setPlurality('results')
}


    return(
    <>




<SearchForm closeSearch={closeSearch} searchCirteria={searchCirteria} openAllLocations={openAllLocations} openSection={openSection} parentId={parentId} sectionId={sectionId} areaSpecific={areaSpecific} preSearchArea={preSearchArea} openLocation={openLocation} container={container} boxDetails={boxDetails} openBox={openBox}/>

{resultsAdvice === 0 && 'No searches yet'}
{resultsAdvice === 1 && 'No such item in storage'}
{resultsAdvice === 2 &&

<h4> {searchResults.length} {plurality} for <span>"{searchTerm}"</span></h4>
}

<SearchResults searchResults={searchResults} container={container} parentId={parentId} sectionId={sectionId} openBox={openBox}/>
    </>
    )
    
    }