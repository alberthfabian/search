import React, { useState } from 'react';
import { useName } from '../../Context/Name';
import './chips.scss';


const Chips = (props) => {

  const [tags, setTags] = useState(props.tags);
  const { addAll } = useName();


	const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove )]);
    tags.splice(indexToRemove, 1);
    addAll(tags)
  };
  
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      addAll([...tags, event.target.value])
      event.target.value = ""; 
    }
  };

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