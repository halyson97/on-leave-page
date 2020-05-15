import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  let callback
  let onLeaveIntent

  const delay = 1000

  jest.useFakeTimers()

  beforeEach(() => {
    callback = jest.fn()
    onLeaveIntent = new OnLeaveIntent(callback, delay)
  })

  it('chamar callback quando usuario sair da tela', () => {
    jest.advanceTimersByTime(delay)
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).toHaveBeenCalled()
  })

  it('nao chamar callback quando usuario nao sair da tela', () => {
    jest.advanceTimersByTime(delay)
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: new EventTarget() }))
    expect(callback).not.toHaveBeenCalled()
  })

  it('nao chamar callback antes do tempo', () => {
    jest.advanceTimersByTime(delay / 2)
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).not.toHaveBeenCalled()
  })
})
