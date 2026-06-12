import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-full lg:w-1/3 p-6 flex flex-col justify-between'>
        <HeroText />
        <Arrow/>
    </div>
  )
}

export default LeftContent