import React from 'react'

import BadgeListItem from './BadgeListItem'

import './styles/BadgeList.css'

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const results = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })

    if(filteredBadges.length !== results.length) {
      setFilteredBadges(results)
    }
  }, [badges, query])

  return {query, setQuery, filteredBadges}
}

const BadgeList = props => {
  const badges = props.badges.slice(0).reverse()
  const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  return(
    <React.Fragment>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search for the badges you want!"
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }}
        />
      </div>

      {filteredBadges.length
      ? <div className="BadgeList">
        {filteredBadges.map((badge) => {
          return(
            <BadgeListItem badge={badge} handleDeleteBadge={props.handleDeleteBadge} key={badge.id}/>
          )
        })}
        </div>
      : <div className="NoBadgeList">
          <h1>There is nothing to see.</h1>
          <span>Why don't you add the first badge?</span>
        </div>
      }
    </React.Fragment>
  )
}


export default BadgeList