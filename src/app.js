import styles from './style.css'
import { el, Component, render } from './lib';

const root = document.getElementById('root');

class PointTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: this.props.points
    }
    this.addPoint = this.addPoint.bind(this);
  }

  addPoint() {
    this.setState(prevState => ({ points: ++prevState.points }))
  }

  render() {
    return this.renderChild(
      el('div', `${this.state.points}`, { onclick: this.addPoint })
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      points: 2
    }
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState(prevState => ({ count: ++prevState.count }));
  }

  render() {
    const { count, points } = this.state;

    return this.renderChild(
      el('div', { class: 'container' },
        el('span', `${count}`, { tabindex: 0 }, { onclick: this.incrementCount }),
        new PointTracker({ points })
      )
    )
  }
}

window.onload = render(new App(), root)

