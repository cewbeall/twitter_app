import React, {useState} from 'react'

const Search = () => {

    const [search, setSearch] = useState(true)

    return (
        <div>
            <input value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
    )

}

export default Search