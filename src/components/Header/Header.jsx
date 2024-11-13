import profile from '../../assets/images/profile.jpg'
const Header = () => {
  return (
    <div className='profile-container flex justify-between items-center p-4 mx-4'>
      <h1 className="text-6xl font-bold">Spiritual Knowledge Cafe</h1>
      <img className='w-[100px] h-[100px] rounded-full' src={profile} alt="" />
    </div>
  );
};

export default Header;
