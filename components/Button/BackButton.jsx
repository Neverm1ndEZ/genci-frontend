import { ArrowLeft2 } from 'iconsax-react';
import { useRouter } from 'next/router'
import React from 'react'

const BackButton = ({title}) => {
  const router = useRouter()
  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex gap-1 py-2 font-semibold capitalize">
        <button type="button" onClick={goBack} className='hover:scale-105 transition-all duration-300'>
          <ArrowLeft2 size="20" color="#FFFFFF" />
        </button>
        <p>{title}</p>
      </div>
  )
}

export default BackButton
