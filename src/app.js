import React, { Component } from "react";
import Navbar from "./components/navbar/navbar.js";
import Modal from "./components/modal/modal.js";
import ClickCard from "./components/click/click.js";
import Footer from "./components/footer/footer.js";
import cards from "./cards.json";

import "./index.css";


class App extends Component {
  state = {
      cards: cards,
      score: 0,
      topScore: 0,
      clickedCards: [],
      footerText: ""
    }

  clickedCharacter = (id) => {
    const [pageBody] = document.getElementsByTagName("body");

    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0, clickedCards: []})

      pageBody.classList.add("shakeWrapper")
      this.setState({footerText: "You picked that already! Start over."})
      setTimeout(() => {
        pageBody.classList.remove("shakeWrapper");
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800)

    } else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
        this.setState({footerText: "You won! Play again?"})
        this.setState({score: 0, clickedCards: [], cards: cards})
        setTimeout(() => {
          this.setState({footerText: ""})
        }, 1800)
      } 
    }
  }

  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // pick remaining element
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // swap with current element
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({cards:cards});
  }

  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className="col s4 m3 l3" key={card.id} id={card.id}>
        <ClickCard
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          clickedCharacter={() => {this.clickedCharacter(card.id)}}/>
      </section>
      )
    )
  }


  render() {
    return (
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Modal />
        <br />
        <div className="container row cardWrapper">
          {this.renderCards(this.state.cards)}
        </div>
        <Footer text={this.state.footerText}/>
      </div>
    );
  }
}

export default App;