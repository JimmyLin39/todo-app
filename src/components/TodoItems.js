import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/checkbox'
import Chip from '@material-ui/core/Chip'
import DeleteIcon from '@material-ui/icons/Delete'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  item: {
    marginLeft: '0px'
  }
}))

export default function TodoItems({ items, remove, toggle }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='Todo items'>
        {items.map(item => (
          <ListItem key={item.id}>
            <FormControlLabel
              className={classes.item}
              control={
                <Checkbox
                  checked={item.complete}
                  onChange={() => toggle(item.id)}
                  name={item.name}
                  color='primary'
                />
              }
              label={item.name}
              style={{
                textDecoration: item.complete ? 'line-through' : 'none'
              }}
            />
            {item.category && <Chip label={item.category} color='primary' />}
            <IconButton
              color='primary'
              aria-label='remove task'
              component='span'
              onClick={() => remove(item.category, item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

TodoItems.propTypes = {
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
}
