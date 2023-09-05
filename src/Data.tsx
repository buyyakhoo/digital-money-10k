interface CostData {
    name: string,
    price: number
}
    
const Residents : CostData[] = [
    {
        name: 'ค่าหอ (ต่อเดือน)',
        price: 5000
    },
    {
        name: 'ค่าโรงแรม (ต่อคืน)',
        price: 2000
    },
    {
        name: 'ค่าเช่าบ้าน (ต่อเดือน)',
        price: 15000
    },
]

const Transports : CostData[] = [
    {
        name: 'ค่าเช่ารถ (ต่อวัน)',
        price: 1375
    },
    {
        name: 'ค่าวิน (ต่อครั้ง)',
        price: 20
    },
    {
        name: 'ค่าแท็กซี่ (ต่อครั้ง)',
        price: 300
    },
    {
        name: 'ค่ารถสองแถว (ต่อครั้ง)',
        price: 10
    },
    {
        name: 'ค่ารถเมย์แอร์ (ต่อครั้ง)',
        price: 20
    },
    {
        name: 'ค่ารถไฟฟ้า',
        price: 45
    },
    {
        name: 'ค่าเครื่องบินไปเชียงใหม่ (ต่อครั้ง)',
        price: 2380
    },
    {
        name: 'ค่าเครื่องบินไปญี่ปุ่น (ต่อครั้ง)',
        price: 9000
    }
]

const Educations : CostData[] = [
    {
        name: 'ค่าเทอม รร รัฐ (ต่อเทอม)',
        price: 6000
    },
    {
        name: 'ค่าเทอม รร เอกชน',
        price: 20000
    },
    {
        name: 'ค่าเทอมมหาวิทยาลัยรัฐภาคปกติ (ต่อเทอม)',
        price: 20000
    },
    {
        name: 'ค่าเทอม ม.รัฐหลักสูตรนานาชาติ (ต่อเทอม)',
        price: 100000
    },
    {
        name: 'ค่าหนังสือเรียน',
        price: 2000
    },
    {
        name: 'ค่าเครื่องแบบ',
        price: 5000
    },
    {
        name: 'ค่าไอแพด',
        price: 20000
    },
    {
        name: 'ค่าคอมพิวเตอร์',
        price: 20000
    },
]

const Foods : CostData[] = [
    {
        name: 'ข้าวผัด',
        price: 35
    },
    {
        name: 'ข้าวไข่เจียว',
        price: 25
    },
    {
        name: 'ข้าวไก่เทอริยากิ',
        price: 69
    },
    {
        name: 'มิโซะราเมน',
        price: 100
    },
    {
        name: 'ข้าวมันไก่',
        price: 50
    },
    {
        name: 'ก๋วยเตี๋ยว',
        price: 40
    },
    {
        name: 'พิซซ่าฮาวายเอี้ยน',
        price: 379
    },
    {
        name: 'ข้าวผัดชาฮั่ง',
        price: 98
    },
]

const Subscriptions : CostData[] = [
    {
        name: 'เน็ตบ้าน (รายเดือน)',
        price: 699
    },
    {
        name: 'เน็ตมือถือ (รายเดือน)',
        price: 399
    },
    {
        name: 'ค่าไฟ (รายเดือน)',
        price: 5000
    },
    {
        name: 'ค่าน้ำ (รายเดือน)',
        price: 600
    },
    {
        name: 'Netflix (รายเดือน)',
        price: 105
    },
    {
        name: 'Spotify (รายเดือน)',
        price: 35
    },
    {
        name: 'Apple Music (รายเดือน)',
        price: 50
    },
    {
        name: 'Tidal (รายเดือน)',
        price: 65
    },
    {
        name: 'Youtube Premium (รายเดือน)',
        price: 50
    },
]

const Blanks : CostData[] = [
    {
        name: '',
        price: 0
    }
]

export {
    Residents,
    Transports,
    Educations,
    Foods,
    Subscriptions,
    Blanks
}