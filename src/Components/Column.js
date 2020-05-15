import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 8px;
    background-color: green;
`

const Column = (props) => {
    console.log(props.colorList)
    return (
        <Container>

        </Container>
    );
}

export default Column;