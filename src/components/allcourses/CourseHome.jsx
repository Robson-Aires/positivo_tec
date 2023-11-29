import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CoursesCard'
import OnlineCourse from './OnlineCourse'

const CourseHome = () => {
  return (
    <>
    <Back title='Explore Course' />
    <CoursesCard />
    <OnlineCourse />
    </>
  )
}

export default CourseHome