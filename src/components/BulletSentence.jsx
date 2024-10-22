const BulletSentence = ({text}) =>{
    return(
        <div className="flex center gap-1">
            <span className="size-6 mb-4" ><img src="src/assets/icons/correct.svg" alt="bullet-logo" /></span>
            <span className="text-black">{text}</span>
        </div>
    );
};
export default BulletSentence;
