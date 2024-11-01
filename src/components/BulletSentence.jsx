import correct from '../assets/icons/correct.svg'
const BulletSentence = ({text}) =>{
    return(
        <div className="flex center gap-1">
            <span className="size-6 mb-4" ><img src= {correct} alt="bullet-logo" /></span>
            <span className="text-black">{text}</span>
        </div>
    );
};
export default BulletSentence;
