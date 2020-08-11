import React from 'react';
import { useName } from '../../Context/Name';
import './chips.scss';


const Chips = (props) => {

  const { tags, removeTags, addTags } = useName();

  return (
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon'
                onClick={() => removeTags(index)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={event => event.key === "Enter" ? addTags(event) : null
          }
          placeholder="Press enter to add tags"
        />
      </div>
  )
}
export default Chips;