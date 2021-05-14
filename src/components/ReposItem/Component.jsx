import React from 'react'
import './style.css'

export function ReposItem () {
  return (
    <li className="repos-list__repos-item">
      <p className="repos-item__name">repository name</p>

      <span className="repos-item__description">repository description</span>
    </li>
  )
}