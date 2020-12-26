import React from 'react'

export default function SectionsHeading({ children, title, desc, titleClass, descClass }) {
    return (
        <>
            <div className="section-heading">
                {
                    title ? (<b className={'sec__title '+titleClass}>{title}</b>) : ' '
                }
                {
                    desc ? (<p className={'sec__desc '+descClass}>{desc}</p>) : ' '
                }
            </div>
            {children}
        </>
    )
}
