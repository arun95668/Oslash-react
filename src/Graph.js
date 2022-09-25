
import React from 'react'
import './styles/Graph.css'
import avatar from './images/avatar.png';


function Graph() {
  let data = [{ id: 1, name: 'Salman Ahmed', title: 'updated Snippet', description: '', time: '2m ago' },
  { id: 2, name: 'Salman Ahmed', title: 'changed Shortcut name from ', description: `o/monthly-standup to o/company-intro`, time: '10m ago' },
  { id: 3, name: 'Salman Ahmed', title: 'Created o/intro', description: '', time: '15m ago' }]
  return (
    <>
      {data.map((user) => {
        return (<div key={user.id}><div className="data">
          <div className='wrap'>
            <img src={avatar} alt="avatar" />
            <div className='font1'>
              {user.name} <span className='font2 topText'>{user.title}</span>
              {user.description && (<div className='font2'>{user.description}</div>)}
            </div>
          </div>
          <div className='font3 timing'>
            {user.time}
          </div>
        </div>
          <div className='divide'></div></div>
        )
      })}
      {/* <div className='data'>
      <div className='wrap'>
        <img src={avatar} alt="avatar" />
        <div className='font1'>
          Salman Ahmed <span className='font2 topText'>updated Snippet</span>
        </div>
      </div>
      <div className='font3 timing'>
        2m ago
      </div>
      </div> */}
      {/* <div className='divide'></div>
      <div className='data'>
        <div className='wrap'>
          <img src={avatar} alt="avatar" />
          <div className='font1'>
            Salman Ahmed <span className='font2 topText'>updated Snippet</span>
            <div>o/monthly-standup to o/company-intro</div>
          </div>
        </div>
        <div className='font3 timing'>
          2m ago
        </div>
      </div> */}
    </>

  )
}

export default Graph