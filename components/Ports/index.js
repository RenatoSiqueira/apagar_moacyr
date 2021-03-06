import React from 'react'
import PortsItem from './PortsItem'

const portifolios = [
  {
    layout: '/images/portifolio/moacyrsantana.dev.png',
    name: 'moacyrsantana.dev',
    site: 'https://moacyrsantana.vercel.app/'
  },
  {
    layout: '/images/layout-base.png',
    name: 'Nome do site',
    site: '#'
  }
]

const Ports = () => {
  return (
    <div>
      <h3 className='text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5'>Portfolios</h3>
      <div className='md:grid md:grid-cols-3 bg-white mx-auto leading-none shadow-lg rounded-xl p-2 md:p-6'>
        {portifolios.map( (portifolio, i) => (
          <PortsItem  key={'i', i} portifolio={portifolio}/>
        ))}
      </div>
    </div>
  )
}

export default Ports