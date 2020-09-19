import * as React from 'react'

export const RestaurantsLoadMore = ({ loadMore, className = 'posts-load-more' }) => {
  return (
    <a className={className} onClick={loadMore}>
      Show More
    </a>
  )
}
