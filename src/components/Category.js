import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { setSelectedCategoryAction } from '../actions'

export default function Category({ store, categories }) {
  const categoriesArr = Object.keys(categories.categoryList)
  const { selectedCategory } = categories
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelectCateory = category => {
    store.dispatch(setSelectedCategoryAction(category))
    setAnchorEl(null)
  }
  return (
    <div>
      <List component='nav' aria-label='Categories'>
        <ListItem
          button
          aria-haspopup='true'
          aria-controls='category-menu'
          aria-label='category'
          onClick={handleClick}
        >
          <ListItemText primary='Category' secondary={selectedCategory} />
        </ListItem>
      </List>
      <Menu
        id='categories-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          selected={selectedCategory === null}
          onClick={() => handleSelectCateory(null)}
        >
          All
        </MenuItem>
        {categoriesArr.map((category, index) => (
          <MenuItem
            key={index}
            onClick={() => handleSelectCateory(category)}
            selected={category === selectedCategory}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

Category.propTypes = {
  store: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired
}
