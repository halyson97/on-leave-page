export default class OnLeaveIntent {
  constructor(callback, delay) {
    this.callback = callback
    this.delay = delay

    this.init()
  }

  init = () => {
    window.setTimeout(this.handleMouseOut, this.delay)
  }

  checkOutOfBounds = (e) => {
    if (!e.relatedTarget) {
      this.callback()
    }
  }

  handleMouseOut = () => {
    document.addEventListener('mouseout', this.checkOutOfBounds)
  }
}
