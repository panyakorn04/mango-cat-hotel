'use client'
import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

import { twMerge } from 'tailwind-merge'
import Button from './button'

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
    {
        name: 'ห้องขนาดเล็ก',
        id: 'tier-basic',
        href: '#',
        price: { monthly: ' 1,000', annually: '$144' },
        description: 'The essentials to provide your best work for clients.',
        features: ['ขนาด 2x2 เมตร', 'เหมาะสำหรับแมวตัวเดียวหรือคู่', 'สิ่งอำนวยความสะดวก: เตียงนอน กระบะทราย เสาข่วน ของเล่น', '48-hour support response time'],
        mostPopular: false,
    },
    {
        name: 'ห้องขนาดกลาง',
        id: 'tier-startup',
        href: '#',
        price: { monthly: '1,500', annually: '$288' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            'ขนาด 3x3 เมตร',
            'เหมาะสำหรับแมว 2-3 ตัว',
            'สิ่งอำนวยความสะดวก: เตียงนอน กระบะทราย เสาข่วน ของเล่น พื้นที่เล่น',
            '24-hour support response time',
            'Marketing automations',
        ],
        mostPopular: true,
    },
    {
        name: 'ห้องขนาดใหญ่',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '2,000', annually: '$576' },
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'ขนาด 4x4 เมตร',
            'เหมาะสำหรับแมว 3-4 ตัว',
            'สิ่งอำนวยความสะดวก: เตียงนอน กระบะทราย เสาข่วน ของเล่น พื้นที่เล่น พื้นที่อาบน้ำ',
            '1-hour, dedicated support response time',
            'Marketing automations',
            'Custom reporting tools',
        ],
        mostPopular: false,
    },
]

export default function Pricing() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">

                        แผนราคาโรงแรมแมว
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    ราคาอาจแตกต่างกันไปตามปัจจัยต่างๆ เช่น ตำแหน่งที่ตั้งของโรงแรมแมว บริการเสริมที่ให้บริการ และช่วงเวลาที่ต้องการใช้บริการ.
                </p>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={twMerge(
                                tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                                'rounded-3xl p-8 xl:p-10'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3
                                    id={tier.id}
                                    className={twMerge(
                                        tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                                        'text-lg font-semibold leading-8'
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price ? tier.price.monthly : ''}</span>
                                {/* <span className="text-sm font-semibold leading-6 text-gray-600">{frequency ? tier.price[frequency] : ''}</span> */}
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={twMerge(
                                    tier.mostPopular
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                Buy plan
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
