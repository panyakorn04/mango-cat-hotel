"use client"
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
type Props = {}

const faqs = [
    {
        question: "โรงแรมแมวของคุณตั้งอยู่ที่ไหน?",
        answer:
            "โรงแรมแมวของเราตั้งอยู่ที่ 123 ถนนสุขุมวิท กรุงเทพมหานคร 10110.",
    },
    {
        question: "โรงแรมแมวของคุณเปิดบริการวันไหนบ้าง?",
        answer:
            "โรงแรมแมวของเราเปิดบริการทุกวัน ตั้งแต่เวลา 08.00 น. ถึง 20.00 น.",
    },
    {
        question: "โรงแรมแมวของคุณรับแมวอายุเท่าไรบ้าง?",
        answer:
            "โรงแรมแมวของเรารับแมวอายุตั้งแต่ 6 เดือนขึ้นไป.",
    },
    {
        question: "โรงแรมแมวของคุณรับแมวพันธุ์อะไรบ้าง?",
        answer:
            "โรงแรมแมวของเรารับแมวทุกพันธุ์.",
    },
    {
        question: "โรงแรมแมวของคุณมีบริการอะไรบ้าง?",
        answer:
            "โรงแรมแมวของเรามีบริการรับฝากแมว บริการอาบน้ำตัดขน บริการดูแลสุขภาพ และบริการอื่นๆ อีกมากมาย.",
    },
    // More questions...
]

function Faqs({ }: Props) {
    return (
        <div className="bg-white rounded-md">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Faqs