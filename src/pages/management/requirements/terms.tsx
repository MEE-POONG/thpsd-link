import React from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';


const IndexPage: React.FC = (props) => {
  return (
    <RootLayoutAccount>
      <div className="requirements container px-6 mx-auto mt-6 grid">
        <div className='bg-slate-200 p-5 lg:p-10 rounded-md shadow-lg lg:w-4/6 text-xs lg:text-sm'>
          <h2 className='font-bold mb-2 text-purple-700 text-base'>Terms / เงื่อนไขการใช้งาน</h2>
          <div>
            <p>1. การยอมรับเงื่อนไขการให้บริการ</p>
            <ul className='list-none ml-3'>
              <li>โดยการเข้าใช้งานระบบย่อลิงค์นี้ ผู้ใช้ตกลงยอมรับและปฏิบัติตามเงื่อนไขการให้บริการเหล่านี้ รวมทั้งนโยบายความเป็นส่วนตัวที่เกี่ยวข้อง</li>
            </ul>

            <p>2. การเปลี่ยนแปลงเงื่อนไข</p>
            <ul className='list-none ml-3'>
              <li>เจ้าของระบบมีสิทธิ์ที่จะปรับเปลี่ยนเงื่อนไขการให้บริการนี้เมื่อใดก็ได้ ผู้ใช้ควรตรวจสอบเงื่อนไขเป็นประจำเพื่อดูการเปลี่ยนแปลงใด ๆ</li>
            </ul>


            <p>3. ลิขสิทธิ์และเครื่องหมายการค้า</p>
            <ul className='list-none ml-3'>
              <li>เนื้อหาทั้งหมดในระบบย่อลิงค์นี้รวมถึงข้อความ กราฟิก โลโก้ เป็นลิขสิทธิ์ของผู้ให้บริการหรือได้รับอนุญาตอย่างถูกต้อง</li>
            </ul>

            <p>4. การใช้งานที่อนุญาต</p>
            <ul className='list-none ml-3'>
              <li>ผู้ใช้สามารถใช้ลิงค์ย่อเพื่อประโยชน์ส่วนตัวหรือเพื่อการค้าที่ถูกกฎหมาย ห้ามใช้ลิงค์ย่อในการกระทำที่ผิดกฎหมาย หลอกลวง หรือเป็นการคุกคาม</li>
            </ul>

            <p>5. การใช้งานที่ห้าม</p>
            <ul className='list-none ml-3'>
              <li>ห้ามใช้ระบบย่อลิงค์ในการเผยแพร่ไวรัส โทรจัน หรือซอฟต์แวร์อันตรายอื่นๆ ห้ามส่งสแปมหรือใช้ในวิธีการที่ทำให้ระบบหรือบริการอื่นเสียหาย</li>
            </ul>

            <p>6. ความรับผิด</p>
            <ul className='list-none ml-3'>
              <li>เจ้าของระบบไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้งานระบบย่อลิงค์</li>
            </ul>

            <p>7. การระงับการใช้งาน</p>
            <ul className='list-none ml-3'>
              <li>เจ้าของระบบมีสิทธิ์ระงับการใช้งานหากพบว่ามีการละเมิดเงื่อนไขการให้บริการ</li>
            </ul>

            <p>8. กฎหมายที่ใช้บังคับ</p>
            <ul className='list-none ml-3'>
              <li>เงื่อนไขการให้บริการนี้อยู่ภายใต้กฎหมายของประเทศที่ระบบถูกดำเนินการ และทุกข้อพิพาทจะถูกตัดสินโดยศาลที่มีเขตอำนาจ</li>
            </ul>
          </div>
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default IndexPage;