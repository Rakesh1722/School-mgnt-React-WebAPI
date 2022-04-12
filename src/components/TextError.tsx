import { AnyAaaaRecord } from 'dns'
import React from 'react'

function TextError(props: any) {
  return (
    <div className='error'>
        {props.children}
    </div>
  )
}

export default TextError