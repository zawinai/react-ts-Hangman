import React, {useState, useContext } from 'react'
import { ReactElement } from 'react'
import { AppContext } from '../context'

const BodyPart = () : ReactElement => {

     const {incorrectGuess} = useContext(AppContext)

     const Head = (
          <div
          className='absolute top-12 right-[-165px] w-[70px] h-[70px] border-2 rounded-[100%]' key={1}
          />
     )

     const Body = (
          <div
     className='absolute bottom-[100px] right-[-130px] w-[2px] h-[80px] bg-white' key={2}
     />
     )

     const RightArm = (
          <div
          className='absolute top-[115px] right-[-150px] w-[2px] h-[80px]  bg-white rotate-[-30deg]' key={3}
          />    
     )

     const LeftArm = (
          <div
     className='absolute top-[115px] left-[112px] w-[2px] h-[80px]  bg-white rotate-[30deg]' key={4}
     />
     )

     const LeftLeg = (
          <div
     className='absolute top-[195px] left-[112px] w-[2px] h-[80px]  bg-white rotate-[30deg]' key={5}
     />
     )

     const RightLeg = (
          <div
     className='absolute top-[195px] right-[-150px] w-[2px] h-[80px]  bg-white rotate-[-30deg]' key={6}
     />
     )

     const bodyParts = [Head, Body, RightArm, LeftArm, LeftLeg, RightLeg]


  return (
    <div className='relative'>

          {/* Pole */}
          <div className='w-[4px] h-[300px] bg-white'/>

          {/* Base*/}
          <div className='absolute bottom-0 left-[-20px] w-[200px] h-[10px] bg-white'/>

          {/* Upper bar */}
          <div className='absolute top-0 w-[150px] h-[5px] bg-white'/>

          {/* Hang */}
          <div className='absolute top-0 right-[-130px] w-[4px] h-[45px] bg-white'/>

          {/* Body Parts */}
          {bodyParts.slice(0, incorrectGuess.length)}

     </div>
  )
}

export default BodyPart