import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'บรรยากาศเงียบสงบและสะอาด',
        description: 'รงแรมมีการจัดสรรบรรยากาศที่เงียบสงบและสะอาด เพื่อให้น้องแมวรู้สึกผ่อนคลาย มีการเปิดเพลง Relax ตลอดเวลาที่อยู่ในโรงแรมเพื่อสร้างบรรยากาศที่ผ่อนคลาย.',
    },
    { name: 'พื้นที่ส่วนกลางและการเล่น', description: 'น้องแมวจะได้รับเวลาเพื่อวิ่งเล่นในพื้นที่ส่วนกลางของโรงแรม 2-3 รอบต่อวัน เพื่อให้มีเวลาที่เพียงพอในการผ่อนคลาย ร่วมกับคอนโดและของเล่นที่ให้น้องแมวเล่น.' },
    {
        name: 'ทรายแมวฟรี',
        description: 'การให้ทรายแมวโดยไม่เรียกเก็บค่าบริการเพิ่มเติม เพื่อความสะดวกสบายของน้องแมวและเจ้าของ.',
    },
    {
        name: 'การดูแลและเลี้ยงน้องแมว',
        description: 'มีการดูแลและเลี้ยงน้องแมวอย่างใกล้ชิด 24 ชั่วโมง เพื่อให้น้องแมวรู้สึกอุ่นใจและสบายใจ.',
    },
    { name: 'ความสะอาดของห้องพัก', description: 'มีการทำความสะอาดห้องพักอย่างละเอียดก่อนและหลังเข้าพัก เพื่อให้มั่นใจว่าน้องแมวอยู่ในสภาพแวดล้อมที่สะอาดและปลอดภัย.' },
    { name: 'การอัพเดทภาพและวิดีโอ', description: 'มีการอัพเดทภาพและวิดีโอทุกวัน เพื่อให้เจ้าของได้ติดตามสุขภาพและสภาพอารมณ์ของน้องแมวของตน.' },
    {
        name: 'น้ำดื่มสะอาด',
        description: 'การให้น้ำดื่มที่มีคุณภาพเทียบเท่ากับน้ำดื่มของคน เพื่อให้น้องแมวมีสุขภาพที่ดี.',
    },
    {
        name: 'ห้องแอร์ VIP',
        description: 'การให้บริการแอร์ VIP 24 ชั่วโมง ที่สำหรับน้องแมวที่ต้องการความสะดวกสบายเพิ่มเติม.',
    },
    {
        name: 'เครื่องฟอกอากาศ',
        description: 'มีการให้บริการเครื่องฟอกอากาศ 24 ชั่วโมง เพื่อให้มีอากาศที่สะอาดและสดชื่น.',
    },
    {
        name: 'กล้องวงจรปิด',
        description: 'การให้บริการกล้องวงจรปิดเพื่อให้เจ้าของสามารถตรวจสอบการเคลื่อนไหวของน้องแมวได้อย่างสะดวกใจและมั่นใจ.',
    },

]

type Props = {}

const Feature = (props: Props) => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">Our Service</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-500">
                        บริการหลากหลายของ Mango Cat Hotel สาขาสุขุมวิท ประกอบด้วย
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">     
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="font-semibold text-gray-700">
                                    <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-primary-yellow" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Feature