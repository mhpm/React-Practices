import React, { Component } from 'react'
import deck from './deck.png'

class Cards extends Component {
  state = {
    isLoading: false,
    deck_id: '',
    cards: [],
    DIAMONDS: [],
    SPADES: [],
    HEARTS: [],
    CLUBS: [],
    QD: false,
    QS: false,
    QH: false,
    QC: false,
    fourQueens: false
  }

  componentWillMount = () => {
    this.setState({ isLoading: true })
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        this.setState({
          isLoading: false,
          deck_id: response.deck_id
        })
      })
  }

  drawCard = () => {
    this.setState({ isLoading: true })
    fetch(
      `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`
    )
      .then(response => {
        return response.json()
      })
      .then(response => {
        //console.log(response)
        this.assignToSuit(response.cards[0])
        let cards = [...this.state.cards, ...response.cards]
        this.setState({
          cards,
          isLoading: false
        })
      })
  }

  assignToSuit = card => {
    if (!isNaN(card.value)) card.number = parseInt(card.value)
    else if (card.value === 'ACE') card.number = 14
    else if (card.value === 'KING') card.number = 13
    else if (card.value === 'QUEEN') card.number = 12
    else if (card.value === 'JACK') card.number = 11

    let obj = {}
    obj[card.suit] = [...this.state[card.suit], card]
    if (card.code in this.state) obj[card.code] = true

    obj[card.suit].sort((a, b) => (a.number < b.number ? -1 : 1))

    this.setState(obj)
    this.checkStatus()
  }

  checkStatus = () => {
    if (this.state.QD && this.state.QS && this.state.QH && this.state.QC)
      this.setState({ fourQueens: true })
  }

  sortCards = () => {
    let { cards, DIAMONDS, SPADES, HEARTS, CLUBS } = this.state
    cards = [...DIAMONDS, ...SPADES, ...HEARTS, ...CLUBS]
    this.setState({ cards })
  }

  newDeck = () => {
    this.setState({ isLoading: true })
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        this.setState({
          isLoading: false,
          deck_id: response.deck_id,
          cards: [],
          DIAMONDS: [],
          SPADES: [],
          HEARTS: [],
          CLUBS: [],
          QD: false,
          QS: false,
          QH: false,
          QC: false,
          fourQueens: false
        })
      })
  }

  render() {
    const { fourQueens } = this.state
    const cards = this.state.cards.length
      ? this.state.cards.map((card, index) => {
          return (
            <div
              className="position-absolute mt-2"
              key={index}
              style={{
                left: 16.5 * index + 15 + 'px',
                top: card.number === 12 ? -15 + 'px' : null
              }}
            >
              <img src={card.images.png} width="120" />
            </div>
          )
        })
      : null

    const loading = this.state.isLoading ? (
      <div
        className="text-center position-absolute bg-gray"
        style={{ top: 56 + 'px', left: 50 + 'px' }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : null

    const isCompleted = !this.state.fourQueens ? (
      <a
        href="#!"
        onClick={this.drawCard}
        disabled={this.state.isLoading || this.state.fourQueens}
      >
        <img src={deck} width="100" className="shadow" />
        {loading}
      </a>
    ) : (
      <h3>You Got 4 Queens!</h3>
    )

    return (
      <div className="mb-5">
        <div class="alert alert-primary" role="alert">
          Click on deck to draw a card, you can sort anytime
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary rounded-pill"
              onClick={this.newDeck}
            >
              New Deck
            </button>
            <button
              className="btn btn-primary ml-2 rounded-pill"
              onClick={this.sortCards}
            >
              Sort Cards
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">{isCompleted}</div>
        </div>

        <div className="row mt-4">
          <div className="col-md">{cards}</div>
        </div>
      </div>
    )
  }
}

export default Cards
