"use client";
import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

type Props = {}

const cards = [
    {
        name: 'Sales',
        description: 'พิจารณาความต้องการของแมวของคุณ: แมวของคุณชอบเล่น ชอบปีนป่าย หรือขี้อาย? เลือกโรงแรมแมวที่มีสิ่งอำนวยความสะดวกที่เหมาะสม เช่น มีเสาข่วน ของเล่นมากมาย หรือห้องพักที่เงียบสงบ.',
        icon: CheckIcon,
    },
    {
        name: 'Technical Support',
        description: 'อ่านรีวิวจากลูกค้า: อ่านรีวิวจากลูกค้าอื่นๆ เพื่อดูว่าพวกเขาประทับใจกับบริการของโรงแรมแมวหรือไม่.',
        icon: CheckIcon,
    },
    {
        name: 'Media Inquiries',
        description: 'เยี่ยมชมโรงแรมแมวก่อนตัดสินใจ: หากเป็นไปได้ ควรพาแมวของคุณไปเยี่ยมชมโรงแรมแมวก่อนเพื่อให้คุ้นเคยกับสถานที่.',
        icon: CheckIcon,
    },
]

const Support = (props: Props) => {
    return (
        <div className="relative bg-white isolate overflow-hidden b py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-4xl">เคล็ดลับในการเลือกโรงแรมแมว</h2>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p> */}
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {cards.map((card) => (
                        <div key={card.name} className="flex gap-x-4 rounded-xl bg-primary-600/5 p-6 ring-1 ring-inset ring-white/10">
                            <card.icon className="h-7 w-5 flex-none text-success-default" aria-hidden="true" />
                            <div className="text-base leading-7">
                                <p className=" text-gray-600">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Support