import React from 'react'
import { useState, useEffect } from 'react'
const Demo = () => {
    return (
        <section className='mt-16 w-full max-w-xl rtl'>
            {/* search */}
            <div className='flex flex-col w-full gap-2'>
                <form className='relative flex justify-center items-center'
                    onSubmit={() => { }}>
                    <img
                        src='/assets/link.svg'
                        className=' absolute left-0 my-2 ml-3 w-5'
                    />

                    <input
                        type='url'
                        placeholder='ادخل الرابط'

                        onChange={() => { }}
                        required
                        className='url_input peer text-black'

                    />
                </form>
            </div>
        </section>
    )
}

export default Demo
