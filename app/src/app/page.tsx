import Image from 'next/image'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import homeStyles from '@/styles/home.module.scss'

export default function Home() {
  return (
    <main className={homeStyles.wrapper}>
      <ButtonCommon>
        간편 회원가입 하기
      </ButtonCommon>
    </main>
  )
}
