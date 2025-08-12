import React from 'react'

export default function UserCard(props) {
  return (
    <>
            <div className="card card-side bg-base-200 shadow-sm hover:shadow-lg border-primary hover:bg-base-100">

                <div className="card-body">
                    <h2 className="card-title text-primary mb-3">{props.name}</h2>
                    <ul>
                      <li><span className="badge badge-soft badge-secondary mb-2">Email </span> {props.email}</li>
                      <li><span className="badge badge-soft badge-secondary mb-2">City </span> {props.city}</li>
                      <li><span className="badge badge-soft badge-secondary mb-2">Zipcode </span> {props.zipcode}</li>
                    </ul>
                </div>
            </div>
    </>
  )
}
