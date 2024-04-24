import React from 'react';
import TitleHead from '@/container/Index/TitleHead';
import ShortenLink from '@/container/All/ShortenLink';
import Tips from '@/container/All/Tip';
import Questions from '@/container/Index/Questions';
import TrialShow from '@/container/All/TrialShow';
import RootLayoutAccount from '@/components/RootLayoutAcc';


const IndexPage: React.FC = (props) => {
  return (
    <RootLayoutAccount>
      <div className="requirements container px-6 mx-auto mt-6 grid">
        <div className='bg-slate-200 p-5 lg:p-10 rounded-md shadow-lg lg:w-4/6 text-xs lg:text-sm'>
          <h2 className='font-bold mb-2 text-purple-700 text-base'>Policy</h2>
          <p>การสร้างและบริหารระบบย่อลิงค์เป็นบริการที่มีประโยชน์มากในยุคดิจิทัลนี้ โดยเฉพาะอย่างยิ่งเมื่อต้องการแชร์ลิงค์ที่มีความยาวหรือซับซ้อนให้เข้าถึงได้ง่ายขึ้นในช่องทางออนไลน์ต่างๆ นี่คือแนวทางบางประการที่ควรพิจารณาเมื่อตั้งค่ากฎการใช้งานระบบย่อลิงค์:</p>

          <div className=''>
            <p className='font-bold'>1. ความโปร่งใสและความเชื่อถือได้</p>
            <ul className='list-disc list-inside ml-3'>
              <li>ให้ข้อมูลที่ชัดเจนเกี่ยวกับบริการของคุณ รวมถึงการระบุว่าลิงค์ที่สร้างขึ้นจะมีอายุการใช้งานอย่างไร หรือจะถาวรตลอดไป</li>
              <li>สร้างและใช้งาน HTTPS เพื่อเพิ่มความน่าเชื่อถือและความปลอดภัยให้กับลิงค์ที่สร้างขึ้น</li>
            </ul>

            <p className='font-bold'>2. กฎเกณฑ์การใช้งาน</p>
            <ul className='list-disc list-inside ml-3'>
              <li>ห้ามใช้บริการในการส่งมอบเนื้อหาที่ผิดกฎหมาย, หลอกลวง, มีเนื้อหาที่รุนแรง, ข่มขู่, ละเมิดสิทธิ์, หรือเป็นการละเมิดสิทธิ์ส่วนบุคคล</li>
              <li>ต้องมีการตรวจสอบเนื้อหาที่มากับลิงค์อย่างเข้มงวด เพื่อป้องกันการใช้งานในทางที่ผิด</li>
            </ul>

            <p className='font-bold'>3. การติดตามและการวิเคราะห์</p>
            <ul className='list-disc list-inside ml-3'>
              <li>ให้บริการแดชบอร์ดที่ช่วยให้ผู้ใช้สามารถติดตามสถิติการใช้งานลิงค์ เช่น จำนวนคลิก, แหล่งที่มาของการเข้าชม, ฯลฯ</li>
              <li>อาจมีการตั้งค่าให้ผู้ใช้สามารถดูและจัดการลิงค์ที่พวกเขาสร้างไว้ได้</li>
            </ul>

            <p className='font-bold'>4. การป้องกันการละเมิด</p>
            <ul className='list-disc list-inside ml-3'>
              <li>สร้างกลไกการรายงานสำหรับผู้ใช้ที่พบเห็นลิงค์ที่อาจมีเนื้อหาไม่เหมาะสมหรือน่าสงสัย</li>
              <li>มีระบบการตรวจสอบและการตอบสนองอัตโนมัติเพื่อจัดการกับลิงค์ที่ถูกรายงานว่ามีปัญหา</li>
            </ul>

            <p className='font-bold'>5. นโยบายความเป็นส่วนตัว</p>
            <ul className='list-disc list-inside ml-3'>
              <li>ประกาศนโยบายการจัดการข้อมูลส่วนบุคคลของผู้ใช้อย่างชัดเจน เพื่อให้ผู้ใช้มั่นใจในการคุ้มครองข้อมูลของตน</li>
              <li>ระบุว่าข้อมูลจะถูกเก็บรักษาไว้อย่างไรและใช้ประโยชน์อย่างไร</li>
            </ul>

          </div>
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default IndexPage;