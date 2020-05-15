import React, { Component } from 'react'
import initialData from './Data/initial-data'
import styled from 'styled-components'
import Column from './Components/Column'

const Container = styled.div`
    width: 80%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);

    background-color: red;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialData
  }

  render() {
    return (
      <Container>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId]
          const colorList = this.state.colors[columnId]
          return <Column
            key={columnId}
            column={column}
            colorList={colorList}
          />
        })}
      </Container>
    );
  }
}

export default App;