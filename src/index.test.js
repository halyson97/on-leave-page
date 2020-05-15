import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  let callback
  let onLeaveIntent

  beforeEach(() => {
    callback = jest.fn()
    onLeaveIntent = new OnLeaveIntent(callback)
  })

  it('chamar callback quando usuario sair da tela', () => {
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).toHaveBeenCalled()
  })

  it('nao chamar callback quando usuario nao sair da tela', () => {
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: new EventTarget() }))
    expect(callback).not.toHaveBeenCalled()
  })
})
