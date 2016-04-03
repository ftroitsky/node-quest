/* global describe it */

import {expect} from 'chai'
import {ComponentPosition, ComponentDescription} from '../src/components'

describe('Component Position', () => {
  const position = new ComponentPosition(5, 8)
  it('Should have constructor name of `position`', () => {
    expect(position.constructor.name).to.equal('position')
  })

  it('Should have values x & y not empty', () => {
    expect(position).to.have.property('x').to.equal(5)
    expect(position).to.have.property('y').to.equal(8)
  })

  const position2 = new ComponentPosition()
  it('Should handle empty input', () => {
    expect(position2).to.have.property('x').to.equal(0)
    expect(position2).to.have.property('y').to.equal(0)
  })
})

describe('Component Position', () => {
  const description = new ComponentDescription('Awesome')
  it('Should have constructor name of `position`', () => {
    expect(description.constructor.name).to.equal('description')
  })

  it('Should have property `value` not empty', () => {
    expect(description)
      .to.have.property('value').to.equal('Awesome')
  })

  const description2 = new ComponentDescription()
  it('Should handle empty input', () => {
    expect(description2)
      .to.have.property('value').to.be.not.empty
  })
})
