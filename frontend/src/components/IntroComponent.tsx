import ButtonComponent from "./ButtonComponent"
import Description from "./Description"
import HeroHeading from "./HeroHeading"

type IntroComponentProps = {
    onButtonClick: () => void;
    loading: boolean
}


const IntroComponent = ({ onButtonClick, loading } : IntroComponentProps) => {
    return (
        <div className='flex flex-col justify-center'>
            <HeroHeading text1={"Meet Your New"} text2={"URL ShortCut!"} />
            <Description />
            <ButtonComponent 
            onClick = {onButtonClick}
            loader = {loading}
            label={"Simplify URL"} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>}
            
            />
        </div>
    )
}
export default IntroComponent;