'use client'
import React from 'react'
import Button from './button'

type Props = {}

function Hero({ }: Props) {
    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="mt-24 text-4xl font-semibold tracking-tight text-primary-yellow sm:mt-10 sm:text-6xl">
                            Mango Cat Hotel Sukhumvit
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            โรงแรมแมวสุดหรูที่ตกแต่งเหมือนคอนโดแมว มีทั้งห้องสไตล์ญี่ปุ่นแบบเรียบง่าย และห้องสไตล์ลักชูรี่พร้อมระเบียงชมวิว พวกเขามีบริการเสริมสุดพิเศษอย่างสปาแมว นวดผ่อนคลาย และของเล่นแมวแบบจัดเต็ม
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Button
                                onClick={() => { }}
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-3 "
                            >
                                Book Now
                            </Button>
                            <Button
                                onClick={() => { }}
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-default bg-white hover:bg-gray-50"
                            >
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <img
                        className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                        src="/img/cat-01.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero