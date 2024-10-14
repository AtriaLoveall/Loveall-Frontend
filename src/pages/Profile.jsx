import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import BasicInfo from '../components/BasicInfo'
import MoreAboutYou from '../components/MoreAboutYou'
import Security from '../components/Security'

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <ProfileHeader />
      <main className="container mx-auto flex-grow">
        <BasicInfo />
        <MoreAboutYou />
        <Security />
      </main>
    </div>
  )
}