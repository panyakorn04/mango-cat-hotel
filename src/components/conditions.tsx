import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
const benefits = [
    'น้องแมวต้องได้รับวัคซีนเบื้องต้นครบถ้วน เช่น วัคซีนเข็มรวม ไข้หัด พิษสุนัขบ้า',
    'น้องแมวต้องมีอายุ 3 เดือนขึ้นไป',
    'รับน้องแมวเลี้ยงระบบปิดเท่านั้น',
    'รับเฉพาะน้องแมวสุขภาพแข็งแรง ไม่มีโรคติดต่อ ไม่มีเห็บหมัด เชื้อรา ไรหู',
    'สามารถรับ - ส่ง น้องแมวได้ภายในเวลา 09.30 - 19.00 น. ⏰😽',
    'กรณีรับ - ส่งน้องนอกเวลา มีค่าบริการล่วงเวลาเพิ่มเติม',
]

type Props = {}

const Conditions = (props: Props) => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="relative isolate">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                        <Image
                            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                            src="/img/conditions-banner.png"
                            alt=""
                            width={500}
                            height={500}
                        />
                        <div className="w-full flex-auto">
                            <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl">เงื่อนไขการเข้าพัก</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                การตรวจสอบเงื่อนไขเหล่านี้ก่อนการเข้าพักจะช่วยให้คุณและแมวของคุณมีประสบการณ์ที่ดีในการเข้าพักที่โรงแรมแมวได้เตรียมไว้ให้แล้วทุกสิ่งทุกอย่างแล้ว!
                            </p>
                            <ul
                                role="list"
                                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-700 sm:grid-cols-2"
                            >
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex gap-x-3">
                                        <CheckCircleIcon className="h-7 w-5 flex-none text-success-default" aria-hidden="true" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            {/* <div className="mt-10 flex">
                                <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">
                                    See our job postings <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conditions