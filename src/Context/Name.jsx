import React, { useState, useEffect, useMemo } from 'react';

const Name = React.createContext();

export function NameProvider(props) {
  const [ name, setName ] = useState('');
  const [ jobs, setJobs ] = useState([]);
  const [ all, setAll ] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch('http://localhost:3000/jobs')
    const jobsInfo = await data.json()
    setJobs(jobsInfo)
  }

  function handleClick(e) {
    setName(e.target.name);
  }

  const addAll = (e) => {
    setAll(e);
  };

  const value = useMemo(() => {
    return ({
      name,
      jobs,
      all,
      handleClick,
      addAll
    })
  }, [name, jobs, all])

  return <Name.Provider value={value} {...props} />
}

export function useName() {
  const context = React.useContext(Name);
  if (!context) {
    throw new Error('useName debe estar dentro del proveedor Name')
  }
  return context;
}