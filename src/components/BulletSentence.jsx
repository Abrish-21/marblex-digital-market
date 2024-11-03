import correct from '../assets/icons/correct.svg'
const BulletSentence = ({text}) =>{
    return(
        <div className="flex center gap-1">
            <span className="lg:size-6 lg:mb-4 size-4 mb-2" ><img src= {correct} alt="bullet-logo" /></span>
            <span className="text-black text-sm lg:text-lg">{text}</span>
        </div>
    );
};
export default BulletSentence;
