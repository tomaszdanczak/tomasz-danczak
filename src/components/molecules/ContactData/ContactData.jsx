import React from "react"

export default function ContactData({
  srOnly,
  paragraph1,
  paragraph2,
  span,
  icon,
  marginTop,
}) {
  return (
    <div className={`${marginTop}`}>
      <dt className="sr-only">{srOnly}</dt>
      <dd className={`${icon && "flex"}`}>
        {icon && icon}
        {paragraph1 && <p>{paragraph1}</p>}
        {paragraph2 && <p>{paragraph2}</p>}
        {span && <span className="ml-3">{span}</span>}
      </dd>
    </div>
  )
}
