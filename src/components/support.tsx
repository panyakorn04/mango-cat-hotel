"use client";
import React from 'react'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

type Props = {}

const cards = [
    {
        name: 'Sales',
        description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
        icon: PhoneIcon,
    },
    {
        name: 'Technical Support',
        description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
        icon: LifebuoyIcon,
    },
    {
        name: 'Media Inquiries',
        description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
        icon: NewspaperIcon,
    },
]

const Support = (props: Props) => {
    return (
        <div className="relative bg-white isolate overflow-hidden b py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Support center</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {cards.map((card) => (
                        <div key={card.name} className="flex gap-x-4 rounded-xl bg-primary-600/5 p-6 ring-1 ring-inset ring-white/10">
                            <card.icon className="h-7 w-5 flex-none text-primary-default" aria-hidden="true" />
                            <div className="text-base leading-7">
                                <h3 className="font-semibold text-gray-900">{card.name}</h3>
                                <p className="mt-2 text-gray-600">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Support