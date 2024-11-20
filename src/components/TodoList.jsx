import React from 'react'

export default function TodoList() {
  let todos = [
    "Make Allison's lunch",
    'Make breakfast',
    'Personal dev time',
    'Catch up on Slack at work',
    'Create post mortem for outage while I was out',
    'Fix 404 alerts to catch scans',
    'Catch up on demo environment setup',
    'Game dev time',
    'Launch party'
  ]

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <li className='todoItem' key={todoIndex}>
                    {todo}
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                    </li>
            )
        })}
    </ul>
  )
}
