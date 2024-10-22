import BulletSentence from "../components/BulletSentence"

function About() {
  return (
    <div className="w-full h-screen bg-white grid grid-cols-[30fr_30fr_30fr] gap-3 pt-52">
      <div>
        <h1 className="text-5xl">We Have A To Of Process We Grow</h1>
        <BulletSentence text = "this is so cool" />
        <BulletSentence text = "we can help you grow" />
        <BulletSentence text = "the one and the only is here" />
        <BulletSentence text = "just come to us, we will take care everything" />
        
      </div>
      <div className="bg-yellow-500"></div>
      <div className="bg-red-600"></div>
<p>About us</p>
    </div>
  )
}
export default About