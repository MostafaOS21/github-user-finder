import React from 'react'

const ErrorSearch = ({error}) => {
  const message = error ? error : "Please enter a vaild username";
  return (
    <main id='emptyUsername'>
      <h2>{message}</h2>
    </main>
  )
}

export default ErrorSearch
