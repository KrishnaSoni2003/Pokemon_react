import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage}) {
  return (
    <div>
        {/* We need to hide the previos button when we are on
        first page. Because there is no previous page, the screen
        will constatntly show as loading. */}
        {/* Read as : if gotoprevpage true then render button  */}
        {/* In javascript when the first section, before &&, is 
        false, it will never render the second section. false && anything = false */}
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  )
}
