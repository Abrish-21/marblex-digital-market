
const ProfileCard = ({name,role, Img}) =>{
  return (
    <div className="flex gap-5">
        <img className="lg:size-28 size-20 rounded-full" src={Img} alt="profile photo" />
        <div className="text-slate-900 font-BebasNeueStatic lg:mt-9 mt-5 font-semibold">
            <p className="text-2xl text-gray-500">{name}</p>
            <p className="text-[#fb923c] font-semibold font-BebasNeueStatic">{role}</p>
        </div>
    </div>
  )
}

export default ProfileCard