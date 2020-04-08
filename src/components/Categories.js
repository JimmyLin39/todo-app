import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'

export default function Categories({ categoriesArr }) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Button
        aria-controls='categories-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Category
      </Button>
      <Menu
        id='categories-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categoriesArr.map((category, index) => (
          <MenuItem onClick={handleClose} key={index}>
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

Categories.propType = {
  categoriesArr: PropTypes.array
}
