import React, { useState, useEffect, useMemo } from 'react';

var unique = [];
let pos = [];
let pos2 = [];
let pos3 = [];
var result = [];
var result2 = [];
var result3 = [];
var result4 = [];
var result5 = [];
var result6 = [];
var nameJob  = '';
var unique2 = [];
var unique3 = [];
var datos = [];
var cont = 0;
var cont3 = 0;
var result22 = [];


const Name = React.createContext();

export function NameProvider(props) {
  const [ jobs, setJobs ] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch('http://localhost:3000/jobs')
    const jobsInfo = await data.json()
    setJobs(jobsInfo)
  }

  function handleClick(e) {
    nameJob = e.target.value;
    addTags2(nameJob);
  }

  function handleClear(e) {
    setTags([]);
    result2 = [];
    result3 = [];
    result6 = [];
    datos = [];
    tags.splice(0,10);
  }

  const group = (e) => {
    datos.push(e);
  }

  const check = (e) => (
    e.splice(0, e.length).sort(function(a, b) {
      return a - b;
    })
  )

  const removeTags = indexToRemove => {
    result2 = [];
    result6 = [];
    
    setTags([...tags.filter((_, index) => index !== indexToRemove )]);
    tags.splice(indexToRemove, 1);

    datos.splice(indexToRemove, 1);

    unique2 = datos.filter( function onlyUnique(value, index, self) {return self.indexOf(value) === index})
  
    unique2.forEach(uni => {jobs.filter(job => job.data.indexOf(uni) < 0 ? '' : pos2.push(job.id))})
    
    result4 = check(pos2);

    const validate2 = (e) => {
      result22.splice(0, result22.length)
      if(datos.length === 1){
        for(let i=0; i<e.length; i++){
          result22.push(e[i]);
        }
        return result22;
      } else {
      for(let i=0; i<e.length; i++) {
        if(e[i] === e[i+1]) {
          cont = cont + 1;
          if(cont === datos.length-1) {
            result22.push(e[i]);
            result22 = check(result22);
            cont = 0;
          }
        } else {
          cont = 0;
          }      
        }
        return result22;
      }
    }
    result3 = validate2(result4);
  };

  const addTags2= (event) => {
    group(event);
    if (event !== "") {
      setTags([...tags, event]);
      event = ""; 
    }

    unique3 = datos.filter( function onlyUnique(value, index, self) {return self.indexOf(value) === index})
  
    unique3.forEach(uni => {jobs.filter(job => job.data.indexOf(uni) < 0 ? '' : pos3.push(job.id))})
  
    result5 = check(pos3);

    const validate3 = (e) => {
      
      if(datos.length === 1){
        for(let i=0; i<e.length; i++){
          result6.push(e[i]);
        }
        return result6;
      } else {
      result6.splice(0, result6.length)
      for(let i=0; i<e.length; i++) {
        if(e[i] === e[i+1]) {
          cont3 = cont3 + 1;
          if(cont3 === datos.length-1) {
            result6.push(e[i]);
            result6 = check(result6);
            cont3 = 0;
          }
        } else {
          cont3 = 0;
          }      
        }
        return result6;
      }
    }
    result3 = validate3(result5);
  };


  const addTags= (event) => {
    group(event.target.value);
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = ""; 
    }

    unique = datos.filter( function onlyUnique(value, index, self) {return self.indexOf(value) === index})
  
    unique.forEach(uni => {jobs.filter(job => job.data.indexOf(uni) < 0 ? '' : pos.push(job.id))})
  
    result = check(pos);

    const validate = (e) => {
      
      if(datos.length === 1){
        for(let i=0; i<e.length; i++){
          result2.push(e[i]);
        }
        return result2;
      } else {
      result2.splice(0, result2.length)
      for(let i=0; i<e.length; i++) {
        if(e[i] === e[i+1]) {
          cont = cont + 1;
          if(cont === datos.length-1) {
            result2.push(e[i]);
            result2 = check(result2);
            cont = 0;
          }
        } else {
          cont = 0;
          }      
        }
        return result2;
      }
    }
    result3 = validate(result);
  };


  const value = useMemo(() => {
    return ({
      jobs,
      tags,
      result6,
      datos,
      nameJob,
      result3,
      handleClick,
      handleClear,
      removeTags,
      addTags
    })
  }, [jobs, tags, result3, handleClear, handleClick, removeTags, addTags])

  return <Name.Provider value={value} {...props} />
}

export function useName() {
  const context = React.useContext(Name);
  if (!context) {
    throw new Error('useName debe estar dentro del proveedor Name')
  }
  return context;
}