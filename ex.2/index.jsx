import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family'
import Member  from'./member'

ReactDOM.render (
    <Family lastName='Silva'>
        <Member name='Guilherme'  />
        <Member name='José'  />
        <Member name='Maria'  />
    </Family>
, document.getElementById('app'))

