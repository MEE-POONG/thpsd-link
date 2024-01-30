const Tips = () => {
    return (
        <>
            <div className='mt-16'>
                <p className='flex items-center font-semibold text-3xl'>
                    Tip
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="25" viewBox="0 0 64 64">
                        <polygon fill="#94c1d8" points="25,47 34,46 39,48 40,56 35,60 30,60 26,56.359"></polygon><polygon fill="#fedb29" points="42,10 40,22 35,26 44.905,32.579 48,30 49,20"></polygon><polygon fill="#fedb29" points="34,30 33.73,43.72 40,44 42,34"></polygon><polygon fill="#fedb29" points="29,7 23,9 28,21 31.587,23.522 37,21 38,9"></polygon><polygon fill="#fedb29" points="29,29 22,35 25,43 30.04,43.34 31,32"></polygon><polygon fill="#fedb29" points="20,12 15,19 16,28 20,32 28,26"></polygon><polygon fill="#ffa62e" points="50,11 52,12 58,9 56,6"></polygon><polygon fill="#ffa62e" points="53.707,25.516 53,28 62,30 61.424,25"></polygon><polygon fill="#ffa62e" points="51,40 50,43 56,48 59,45"></polygon><polygon fill="#ffa62e" points="13,41 15,42 8,49 5,45"></polygon><polygon fill="#ffa62e" points="0,26 2,24 10,26 9,28 2,28"></polygon><polygon fill="#ffa62e" points="12.966,12.87 14,11 9.255,6 5,8"></polygon>
                    </svg>
                </p>
                <div className='mt-5 bg-white p-5 rounded-md w-full lg:w-1/2 drop-shadow-lg'>
                    <div>
                        <article className="prose lg:prose-xl">
                            <h4>Shortlink (ช๊อตลิ้งค์) คืออะไร?</h4>
                            <p className='text-sm indent-5 whitespace-break-spaces text-justify'>
                                Shortlink (ช๊อตลิ้งค์) คือ การทำ URL (ยูอาร์แอล) หรือ Link (ลิงค์) ต่างๆให้สั้นลง ทำให้ง่ายต่อการนำไปแชร์ยัง Social (โซเชียล) ต่างๆ เช่น อย่างใน Twitter (ทวิตเตอร์) ที่จะมีการกำหนดจำนวนตัวอักษรในข้อความว่าห้ามเกิน 140 ตัวอักษร หากนำ Link มาแชร์ในบางครั้งก็จะทำให้จำนวนตัวอักษรเกินจำนวนที่กำหนดไว้ก็จะไม่สามารถโพสต์ได้ การทำ Shortlink จึงได้เกิดขึ้น นอกจากนี้ไม่เพียงแต่ทำให้ URL ที่มีความยาวหรือตัวอักษรจำนวนมากให้สั้นลงเหลือแค่ไม่กี่ตัวอักษรแล้ว ยังมีการเก็บสถิติค่าต่างๆ ของแต่ละ Link (ลิ้งค์) ทำให้มีประโยชน์ต่อการที่จะนำข้อมูลเหล่านั้นมาวิเคราะห์เพื่อปรับปรุง เพิ่มเติม ทำให้บทความมีคุณภาพตามความต้องการของผู้เขียนอีกด้วย
                            </p>
                        </article>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Tips