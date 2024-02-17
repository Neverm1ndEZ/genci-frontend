import React from 'react'

const FilterButton = ({name}) => {
    return (
        <div className="inline-block text-left px-2 bg-[#0D0F10] rounded-lg hover:opacity-90">
            <button type="button" className="p-4 group inline-flex justify-center text-sm font-medium " id="menu-button" aria-expanded="false" aria-haspopup="true">
                {name}
                <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default FilterButton
