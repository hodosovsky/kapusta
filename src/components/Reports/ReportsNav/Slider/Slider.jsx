
import { SliderBox, Sliderr, SliderButton, SliderText, SliderSvg } from './Slider.styled'
import reports  from '../../../../images/reportsFiles/reports.svg'

export const Slider =()=>{
    return (
             <SliderBox>
        <p>Current period:</p>
      <Sliderr>
        <SliderButton> <SliderSvg width="6" height="12">
            <use  href={`${reports}#icon-prev`}></use>
          </SliderSvg>
        </SliderButton>
        <SliderText>November 2019</SliderText>
        <SliderButton> <SliderSvg width="6" height="12">
            <use  href={`${reports}#icon-next`}></use>
          </SliderSvg>
        </SliderButton>
      </Sliderr>
      </SliderBox>
      
    )
}