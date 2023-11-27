import { MyTeam, Searchbar } from '.';
import poketeamImg from '../assets/poke-team.png';

const Navbar = () => {
  return (
    <div className="py-5 grid grid-cols-3 gap-5">
        <div className="col-span-1">
            <img className='w-[300px]' src={poketeamImg} alt="Pokédex" />
        </div>

        <div className="col-span-1">
            <Searchbar />
        </div>

        <div className="col-span-1">
            <MyTeam />
        </div>
    </div>
  )
}

export default Navbar