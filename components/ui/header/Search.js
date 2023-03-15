import { AiOutlineSearch } from 'react-icons/ai';


const Search = () => {
  return (
    <form className='w-[380px] border-2 flex pr-3 rounded'>
        <input type="text" placeholder="Search..." className='flex-1 p-2 border-none focus:border-none focus:ring-0 focus:outline-none' />
        <button>
            <AiOutlineSearch size={20} />
        </button>
    </form>
  )
}

export default Search;