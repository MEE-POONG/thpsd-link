import Link from "next/link"

const TitleHead: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-8">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">Building digital
                        <br />products & brands.
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-base lg:text-lg dark:text-gray-400">
                        ต้องการย่อลิงค์ภายใต้ชื่อแบรนด์ของคุณ หรือจัดการลิงค์อย่างเป็นระบบมากขึ้น กรุณา สมัครมสาชิก หรือ เข้าสู่ระบบ
                    </p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <Link href='./register' className='text-gray-700 hover:text-purple-700  text-sm border py-3 px-5 rounded-md hover:bg-gray-100'>สมัครสมาชิก</Link>
                        <Link href='./login' className='text-gray-700 hover:text-purple-700  text-sm border py-3 px-5 rounded-md hover:bg-gray-100'>เข้าสู่ระบบ</Link>
                    </div>
                </div>
                <div className="lg:mt-0 lg:col-span-4 lg:flex hidden">
                    <img className='w-94 ' src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/7511fb7d-e4d0-4cfb-ac7a-d76528b5f800/250" alt="hero image" />
                </div>
            </div>
        </section>

    )
}
export default TitleHead;
