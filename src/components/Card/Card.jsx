import React from 'react';
import './card.scss';

let contLanguages = 0;
let contTools = 0;
let languagesList = [];
let toolsList = [];

const Card = (props) => {

  const { company, logo, newJob, featured, position, role, level, postedAt, contract, location, languages, tools, handleClick } = props;

  if (languages === undefined) {
    languagesList = ""
  } else {
    languagesList = languages.map( (language) =>
      <button name={language} onClick={handleClick} key={contLanguages = contLanguages + 1} className='hover:bg-teal-600 hover:text-white bg-blue-100 rounded-lg p-2 text-teal-600 font-bold mr-2 text-xs'>
        {language}
      </button>
    );
  }

  if (tools === undefined) {
    toolsList = ""
  } else {
    toolsList = tools.map( (tool) =>
      <button name={tool} onClick={handleClick} key={contTools = contTools + 1} className='hover:bg-teal-600 hover:text-white bg-blue-100 rounded-lg p-2 text-teal-600 font-bold mr-2 text-xs'>
        {tool}
      </button>
    );
  }

  return (

    <div>
      {featured === true ? <div className='feature relative pl-5 pb-5 ml-3 mr-3 mt-6 mb-10 h-auto lg:w-4/5s bg-white border border-gray-100 rounded-lg md:flex items-center lg:mx-32 lg:my-4 shadow-xl'>
        <figure className='absolute md:static'>
          {/* <img className='w-16 lg:w-24 md:mt-4 mx-6' src='../../img/Apple.png' alt={company} /> */}
          {/* <img className='w-16 lg:w-24 md:mt-4 mx-6' src={require(logo)} alt={company} /> */}
          <img className='w-16 lg:w-24 md:mt-4 mx-1 md:mx-6' src={logo} alt={company} />

        </figure>
        <section className='mt-10 md:mt-5 md:flex justify-between w-4/5'>
          <article>
            <div className='flex'>
              <h4 className='mt-2 mr-2 text-teal-600 font-bold'>{company}</h4>
              {newJob === true ? <p className='mt-2 ml-2 mr-2 bg-teal-600 rounded-full p-1 text-xs text-white'>NEW!</p> : ""}
              {featured === true ? <p className='mt-2 ml-2 mr-2 bg-black rounded-full p-1 text-xs text-white'>FEATURED</p> : ""}  
            </div>
            <div className='hover:text-teal-600 cursor-pointer mt-2 text-base lg:text-xl font-bold'>
              {position}
            </div>
            <div className='flex text-xs'>
              <span className='mt-2 mr-2 text-gray-600'>{postedAt}</span>
              <span className='mt-1 text-gray-600'>.</span>
              <span className='mt-2 ml-2 mr-2 text-gray-600'>{contract}</span>
              <span className='mt-1 mr-2 text-gray-600'>.</span>
              <span className='mt-2 ml-2 mr-2 text-gray-600'>{location}</span>
            </div>
            <div className='mt-4 border border-gray-400 md:hidden lg:hidden'></div>
          </article>
          <article className='mt-4 md:flex items-center'>
            <ul className='mb-3 flex'>
              <button name={role} onClick={handleClick} className='hover:bg-teal-600 hover:text-white bg-blue-100 rounded-lg p-2 mr-2 text-teal-600 font-bold text-xs'>{role}</button>
              <button name={level} onClick={handleClick} className='hover:bg-teal-600 hover:text-white bg-blue-100 rounded-lg p-2 mr-2 text-teal-600 font-bold text-xs'>{level}</button>
            </ul>
            <ul className='mb-3 flex'>{languagesList}</ul>
            <ul className='mb-3 flex'>{toolsList}</ul>
          </article>
        </section>
      </div> : 
      <div className='relative pl-5 pb-5 ml-3 mr-3 mt-6 mb-10 h-auto lg:w-4/5s bg-white border border-gray-100 rounded-lg md:flex items-center lg:mx-32 lg:my-4 shadow-xl'>
        <figure className='absolute md:static'>
          {/* <img className='w-16 lg:w-24 md:mt-4 mx-6' src='../../img/Apple.png' alt={company} /> */}
          {/* <img className='w-16 lg:w-24 md:mt-4 mx-6' src={require(logo)} alt={company} /> */}
          <img className='w-16 lg:w-24 md:mt-4 mx-1 md:mx-6' src={logo} alt={company} />

        </figure>
        <section className='mt-10 md:mt-5 md:flex justify-between w-4/5'>
          <article>
            <div className='flex'>
              <h4 className='mt-2 mr-2 text-teal-600 font-bold'>{company}</h4>
              {newJob === true ? <p className='mt-2 ml-2 mr-2 bg-teal-600 rounded-full p-1 text-xs text-white'>NEW!</p> : ""}
              {featured === true ? <p className='mt-2 ml-2 mr-2 bg-black rounded-full p-1 text-xs text-white'>FEATURED</p> : ""}  
            </div>
            <div className='hover:text-teal-600 cursor-pointer mt-2 text-base lg:text-xl font-bold'>
              {position}
            </div>
            <div className='flex text-xs'>
              <span className='mt-2 mr-2 text-gray-600'>{postedAt}</span>
              <span className='mt-1 text-gray-600'>.</span>
              <span className='mt-2 ml-2 mr-2 text-gray-600'>{contract}</span>
              <span className='mt-1 mr-2 text-gray-600'>.</span>
              <span className='mt-2 ml-2 mr-2 text-gray-600'>{location}</span>
            </div>
            <div className='mt-4 border border-gray-400 md:hidden lg:hidden'></div>
          </article>
          <article className='mt-4 md:flex items-center'>
            <ul className='mb-3 flex'>
              <button name={role} onClick={handleClick} className='hover:bg-teal-600 hover:text-white bg-blue-100 rounded-lg p-2 mr-2 text-teal-600 font-bold text-xs'>{role}</button>
              <button name={level} onClick={handleClick} className='hover:bg-teal-600 hover:text-white bg-blue-100 rounded-lg p-2 mr-2 text-teal-600 font-bold text-xs'>{level}</button>
            </ul>
            <ul className='mb-3 flex'>{languagesList}</ul>
            <ul className='mb-3 flex'>{toolsList}</ul>
          </article>
        </section>
      </div>}
      
    </div>

  )
}

export default Card;