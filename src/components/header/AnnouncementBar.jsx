import SpaceShip from '../../assets/space.png'

function AnnouncementBar() {
  return (
    <div className="w-[95%] relative h-9 flex items-center mx-auto z-[100]">
      <ul className="w-full flex flex-row justify-between items-center">
        <li className="hidden md:block text-sm w-[250px]">
        Teste e descubra seus óculos ideais <a className='text-[#EAB86E] font-medium underline' href="">aqui</a>
        </li>
        <li className="text-sm mx-auto flex items-center">
          <img src={SpaceShip} height='27px' width="27px" alt="" />
          Na ótica do futuro, o frete é grátis.
        </li>
        <li className="hidden md:block text-sm text-right w-[250px]">
          siga a <a className='text-[#EAB86E] font-medium underline' href="">@zerezes</a>
        </li>
      </ul>
    </div>
  );
}

export default AnnouncementBar;
