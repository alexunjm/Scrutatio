import React from "react"
import JSONData from "../../content/sample.json"

const JSONAtBuildTime = (props) => {
  const content = props.content || JSONData
  const level = props.level || 0
  return Array.isArray(content.list)
  ? (
    <div>
      <h3>{content.title} <span>l{level}</span></h3>
      <ul>
        {content.list.map((data, index) => {
          return (
            <li key={`content_item_l${level}_${index}`}>
              <JSONAtBuildTime content={data.item} level={level + 1}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
  : <p>{content}</p>
}
export default JSONAtBuildTime