import RecentProjects from '@/components/RecentProjects'
import { SparklesPreview } from '@/components/SparklesPreview'
import React from 'react'

const projects = () => {
  return (
    <div className="pt-20 w-full">
      <div className="w-full">
        <SparklesPreview />
        <RecentProjects />
      </div>
    </div>
  )
}

export default projects