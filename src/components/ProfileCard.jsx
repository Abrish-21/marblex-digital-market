const ProfileCard = ({name,role, Img}) =>{
  return (
    <div className="flex gap-4">
        <img className="size-28 rounded-full" src={Img} alt="profile photo" />
        <div className="text-slate-900 font-BebasNeueStatic mt-9 font-semibold">
            <p className="text-2xl text-gray-500">{name}</p>
            <p className="text-[#fb923c] font-semibold font-BebasNeueStatic">{role}</p>
        </div>
    </div>
  )
}

export default ProfileCard