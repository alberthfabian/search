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

export default () => <NameProvider>
  <PageSearcher>
  </PageSearcher>
</NameProvider>

  const PageSearcher = () => {

  const { jobs, handleClick, handleClear, result3, datos } = useName();

  return (
    <div className='flex justify-center'>
      <div className='bg-blue-100 max-w-screen-xl'>

        <img className='pb-10 relative' src={header} alt="header" />

        <div className='flex justify-center w-full relative'>
          <Chips tags={[]}/>
          <button onClick={handleClear} name='Clear' className='clear absolute z-20 text-teal-600 font-bold hover:underline cursor-pointer'>Clear</button>
        </div>

        {result3.length === 0 && datos.length !== 0 ? <h1 className='flex justify-center text-3xl text-teal-600'>No se encontraron resultados, por favor elimina el tag o dale en Clear para iniciar otra busqueda</h1> : '' }

        {result3.length === 0 && datos.length === 0 ? 

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
          ))

              : jobs.filter(find => find.id === result3[0] || find.id === result3[1] || find.id === result3[2] || find.id === result3[3] || find.id === result3[4] || find.id === result3[5] || find.id === result3[6] || find.id === result3[7] || find.id === result3[8] || find.id === result3[9] ).map(cards => (
            
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
          )) 
              }
      </div>
    </div>
  )
}