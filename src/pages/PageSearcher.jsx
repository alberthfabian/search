import React from 'react';
import Chips from '../components/Chips/Chips';
import Card from '../components/Card/Card';
import Photosnap from '../img/photosnap.svg';
import Manage from '../img/manage.svg';
import Account from '../img/account.svg';
import MyHome from '../img/myhome.svg';
import LoopStudios from '../img/loop-studios.svg';
import FaceIt from '../img/faceit.svg';
import Shortly from '../img/shortly.svg';
import Insure from '../img/insure.svg';
import EyecamCo from '../img/eyecam-co.svg';
import TheAirFilterCompany from '../img/the-air-filter-company.svg';
import header from '../img/bg-header-desktop2.jpg';
import './pageSearcher.scss';
import { NameProvider, useName } from '../Context/Name';

var unique = [];

// export default 

// function PageSearcher() {
  const PageSearcher = () => {

  const { jobs, name, all, handleClick, addAll } = useName();


  unique = all.filter( function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index})
  
  return (
    <div className='flex justify-center'>
      <div className='bg-blue-100 max-w-screen-xl'>

        <img className='pb-10 relative' src={header} alt="header" />

        <div className='flex justify-center w-full relative'>
          <Chips addAll={addAll} tags={[]} name={name} />
          <p className='clear absolute z-20 text-teal-600 font-bold hover:underline cursor-pointer'>Clear</p>
        </div>

        {name === '' ? '' : name === 'HTML' || name === 'CSS' || name === 'JavaScript' || name === 'Python' ? jobs.filter(find => find.languages[0] === name || find.languages[1] === name || find.languages[2] === name ).map(cards => (

        <React.Fragment key={cards.id}>
        
        {cards.company === 'Photosnap' ? <Card handleClick={handleClick} company={cards.company} logo={Photosnap} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Manage' ? <Card handleClick={handleClick} company={cards.company} logo={Manage} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Account' ? <Card handleClick={handleClick} company={cards.company} logo={Account} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'MyHome' ? <Card handleClick={handleClick} company={cards.company} logo={MyHome} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Loop Studios' ? <Card handleClick={handleClick} company={cards.company} logo={LoopStudios} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'FaceIt' ? <Card handleClick={handleClick} company={cards.company} logo={FaceIt} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Shortly' ? <Card handleClick={handleClick} company={cards.company} logo={Shortly} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Insure' ? <Card handleClick={handleClick} company={cards.company} logo={Insure} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Eyecam Co.' ? <Card handleClick={handleClick} company={cards.company} logo={EyecamCo} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        <Card handleClick={handleClick} company={cards.company} logo={TheAirFilterCompany} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> } 
        

          </React.Fragment>
        )) : name === 'React' || name === 'Sass' || name === 'Ruby' || name === 'RoR' || name === 'Vue' || name === 'Django' ? jobs.filter(find => find.tools[0] === name || find.tools[1] === name).map(cards => (

        <React.Fragment key={cards.id}>
        {cards.company === 'Photosnap' ? <Card handleClick={handleClick} company={cards.company} logo={Photosnap} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} />  : 
        cards.company === 'Manage' ? <Card handleClick={handleClick} company={cards.company} logo={Manage} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Account' ? <Card handleClick={handleClick} company={cards.company} logo={Account} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'MyHome' ? <Card handleClick={handleClick} company={cards.company} logo={MyHome} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Loop Studios' ? <Card handleClick={handleClick} company={cards.company} logo={LoopStudios} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'FaceIt' ? <Card handleClick={handleClick} company={cards.company} logo={FaceIt} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Shortly' ? <Card handleClick={handleClick} company={cards.company} logo={Shortly} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Insure' ? <Card handleClick={handleClick} company={cards.company} logo={Insure} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        cards.company === 'Eyecam Co.' ? <Card handleClick={handleClick} company={cards.company} logo={EyecamCo} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
        <Card handleClick={handleClick} company={cards.company} logo={TheAirFilterCompany} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> } 
        

          </React.Fragment>
        )) : jobs.filter(find => find.role === name || find.level === name).map(cards => (
          
          <React.Fragment key={cards.id}>
          {cards.company === 'Photosnap' ? <Card handleClick={handleClick} company={cards.company} logo={Photosnap} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} />  : 
          cards.company === 'Manage' ? <Card handleClick={handleClick} company={cards.company} logo={Manage} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Account' ? <Card handleClick={handleClick} company={cards.company} logo={Account} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'MyHome' ? <Card handleClick={handleClick} company={cards.company} logo={MyHome} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Loop Studios' ? <Card handleClick={handleClick} company={cards.company} logo={LoopStudios} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'FaceIt' ? <Card handleClick={handleClick} company={cards.company} logo={FaceIt} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Shortly' ? <Card handleClick={handleClick} company={cards.company} logo={Shortly} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Insure' ? <Card handleClick={handleClick} company={cards.company} logo={Insure} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Eyecam Co.' ? <Card handleClick={handleClick} company={cards.company} logo={EyecamCo} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          <Card handleClick={handleClick} company={cards.company} logo={TheAirFilterCompany} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> } 
          

            </React.Fragment>
          ))}




        {unique.length === 0 && name === '' ?
        
        jobs.map(cards => (

          <React.Fragment key={cards.id}>
          {cards.company === 'Photosnap' ? <Card handleClick={handleClick} company={cards.company} logo={Photosnap} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} />  : 
          cards.company === 'Manage' ? <Card handleClick={handleClick} company={cards.company} logo={Manage} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Account' ? <Card handleClick={handleClick} company={cards.company} logo={Account} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'MyHome' ? <Card handleClick={handleClick} company={cards.company} logo={MyHome} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Loop Studios' ? <Card handleClick={handleClick} company={cards.company} logo={LoopStudios} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'FaceIt' ? <Card handleClick={handleClick} company={cards.company} logo={FaceIt} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Shortly' ? <Card handleClick={handleClick} company={cards.company} logo={Shortly} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Insure' ? <Card handleClick={handleClick} company={cards.company} logo={Insure} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Eyecam Co.' ? <Card handleClick={handleClick} company={cards.company} logo={EyecamCo} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          <Card handleClick={handleClick} company={cards.company} logo={TheAirFilterCompany} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> } 
            
            </React.Fragment>
          )) : '' }

        {unique.map( item => (
          <span key={item.toString()}>

          {jobs.filter(find => find.languages[0] === item || find.languages[1] === item || find.languages[2] === item ).map(cards => (
            
            <React.Fragment key={cards.id}>

            {cards.company === 'Photosnap' ? <Card handleClick={handleClick} company={cards.company} logo={Photosnap} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} />  : 
            cards.company === 'Manage' ? <Card handleClick={handleClick} company={cards.company} logo={Manage} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Account' ? <Card handleClick={handleClick} company={cards.company} logo={Account} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'MyHome' ? <Card handleClick={handleClick} company={cards.company} logo={MyHome} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Loop Studios' ? <Card handleClick={handleClick} company={cards.company} logo={LoopStudios} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'FaceIt' ? <Card handleClick={handleClick} company={cards.company} logo={FaceIt} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Shortly' ? <Card handleClick={handleClick} company={cards.company} logo={Shortly} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Insure' ? <Card handleClick={handleClick} company={cards.company} logo={Insure} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Eyecam Co.' ? <Card handleClick={handleClick} company={cards.company} logo={EyecamCo} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            <Card handleClick={handleClick} company={cards.company} logo={TheAirFilterCompany} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> } 
              
              </React.Fragment>
            ))}

            {jobs.filter(find => find.tools[0] === item || find.tools[1] === item ).map(cards => (
          
            <React.Fragment key={cards.id}>
            {cards.company === 'Photosnap' ? <Card handleClick={handleClick} company={cards.company} logo={Photosnap} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} />  : 
            cards.company === 'Manage' ? <Card handleClick={handleClick} company={cards.company} logo={Manage} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Account' ? <Card handleClick={handleClick} company={cards.company} logo={Account} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'MyHome' ? <Card handleClick={handleClick} company={cards.company} logo={MyHome} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Loop Studios' ? <Card handleClick={handleClick} company={cards.company} logo={LoopStudios} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'FaceIt' ? <Card handleClick={handleClick} company={cards.company} logo={FaceIt} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Shortly' ? <Card handleClick={handleClick} company={cards.company} logo={Shortly} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Insure' ? <Card handleClick={handleClick} company={cards.company} logo={Insure} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            cards.company === 'Eyecam Co.' ? <Card handleClick={handleClick} company={cards.company} logo={EyecamCo} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
            <Card handleClick={handleClick} company={cards.company} logo={TheAirFilterCompany} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> } 
              
              </React.Fragment>
            ))}


            {jobs.filter(find => find.role === item || find.level === item).map(cards => (
          
          <React.Fragment key={cards.id}>
          {cards.company === 'Photosnap' ? <Card handleClick={handleClick} company={cards.company} logo={Photosnap} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} />  : 
          cards.company === 'Manage' ? <Card handleClick={handleClick} company={cards.company} logo={Manage} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Account' ? <Card handleClick={handleClick} company={cards.company} logo={Account} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'MyHome' ? <Card handleClick={handleClick} company={cards.company} logo={MyHome} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Loop Studios' ? <Card handleClick={handleClick} company={cards.company} logo={LoopStudios} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'FaceIt' ? <Card handleClick={handleClick} company={cards.company} logo={FaceIt} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Shortly' ? <Card handleClick={handleClick} company={cards.company} logo={Shortly} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Insure' ? <Card handleClick={handleClick} company={cards.company} logo={Insure} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          cards.company === 'Eyecam Co.' ? <Card handleClick={handleClick} company={cards.company} logo={EyecamCo} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> : 
          <Card handleClick={handleClick} company={cards.company} logo={TheAirFilterCompany} newJob={cards.new} featured={cards.featured} position={cards.position} role={cards.role} level={cards.level} postedAt={cards.postedAt} contract={cards.contract} location={cards.location} languages={cards.languages} tools={cards.tools} /> } 
            
            </React.Fragment>
          ))}
          </span>
        ))}
      </div>
    </div>
  )
}

export default () => <NameProvider>
  <PageSearcher>
  </PageSearcher>
</NameProvider>
