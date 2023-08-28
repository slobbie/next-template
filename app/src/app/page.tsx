import Image from 'next/image'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import homeStyles from '@/styles/home.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'
import Container from '@/common/components/container/Container'

export default function Home() {
  return (
    <main className={homeStyles.wrapper}>
      <Container
        position='flex-col'
      >
        <TypoCommon
          typographyType='t1'
        >
          로그인 화면
        </TypoCommon>
        <ButtonCommon>
          간편 회원가입 하기
        </ButtonCommon>
      </Container>
    </main>
  )
}
