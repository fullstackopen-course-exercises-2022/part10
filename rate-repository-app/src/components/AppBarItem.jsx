import React from 'react'
import Text from './Text'

const AppBarItem = ({ name }) => {
    return <Text color="headingPrimary" fontWeight="bold" fontSize="subheading">{name}</Text>
}

export default AppBarItem;