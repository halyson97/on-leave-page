import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  it('chamar callback quando usuario sair da tela', () => {
    const callback = jest.fn()

    const onLeaveIntent = new OnLeaveIntent(callback)

    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))

    expect(callback).toHaveBeenCalled()
  })

  it('nao chamar callback quando usuario nao sair da tela', () => {
    const callback = jest.fn()

    const onLeaveIntent = new OnLeaveIntent(callback)

    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: new EventTarget() }))

    expect(callback).not.toHaveBeenCalled()
  })
})
