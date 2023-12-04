import React from 'react'
import './team.css'
import Back from '../common/back/Back'
import TeamCard from './TeamCard'

const team = () => {
  return (
    <>
    <Back title='Time'/>
    <section className="team padding">
      <div className="container grid">
        <TeamCard />
      </div>
    </section>
    </>
  )
}

export default team