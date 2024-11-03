import Projects from '@/components/Projects'
import { SparklesPreview } from '@/components/SparklesPreview'
import React from 'react'

const projects = () => {
  return (
    <div className="pt-20 w-full">
      <div className="w-full">
        <SparklesPreview />
        <Projects />
      </div>
    </div>
  )
}

export default projects