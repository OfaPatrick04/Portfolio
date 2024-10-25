import RecentProjects from '@/components/RecentProjects'
import { SparklesPreview } from '@/components/SparklesPreview'
import { LampDemo } from '@/components/ui/lamp'
import React from 'react'

const projects = () => {
  return (
    <div className="pt-20 w-full">
      <div className="w-full">
        {/* <LampDemo /> */}
        <SparklesPreview />
        <RecentProjects />
      </div>
    </div>
  )
}

export default projects