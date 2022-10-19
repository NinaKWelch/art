import React from 'react'

interface SearchProps {
  value: string
  onChange: any
  children: React.ReactNode
}

const Search: React.FC<SearchProps> = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        data-testid="search-input"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Search
