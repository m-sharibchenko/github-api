import React from 'react'
import './style.css'

export function ReposItem (props) {
  const { html_url, description, name } = props.data

  return (
    <li className="repos-list__repos-item">
      <p className="repos-item__name">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>

      <p className="repos-item__description">{description}</p>
    </li>
  )
}