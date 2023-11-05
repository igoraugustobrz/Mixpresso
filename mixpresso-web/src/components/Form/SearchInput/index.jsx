import { TextInput } from 'flowbite-react'
import { HiOutlineSearch } from 'react-icons/hi'

const SearchInput = () => {
    return (
        <>
            <div className='hidden sm:inline md:w-[400px]'>
                <TextInput
                    type='text'
                    icon={HiOutlineSearch}
                    placeholder='Faça sua busca'
                    className='dark-theme-input w-full'
                />
            </div>
        </>
    )
}

export default SearchInput;