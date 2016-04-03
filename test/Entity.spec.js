/* global describe it */

import {expect} from 'chai'
import Entity from '../src/Entity'
import {ComponentPosition, ComponentDescription} from '../src/components'

const entity1 = new Entity()
const entity2 = new Entity()
const entity3 = new Entity()

const position = new ComponentPosition(5, 8)
const description = new ComponentDescription('Awesome')
entity1.addComponent(position)
entity2.addComponent(position)
entity2.addComponent(description)
entity3.addComponent(position)

describe('Entity', () => {
  it('Global counter should increment when new entity added', () => {
    expect(Entity.count).to.equal(3)
  })
  it('Id should not be empty', () => {
    expect(entity1).to.have.property('id').to.be.not.empty
  })
  it('Should handle addition of new components', () => {
    expect(entity2).to.have.property('components')
      .to.include.keys('position', 'description')
  })

  it('Should have component position with x = 5, y = 8', () => {
    expect(entity1.components.position.x).to.equal(5)
    expect(entity1.components.position.y).to.equal(8)
  })

  it('Should handle component removal by string name', () => {
    expect(entity2.removeComponent('position')).to.not.include.keys('position')
    expect(entity2.removeComponent('description')).to.be.empty
  })

  it('Should handle component removal by object constructor name', () => {
    expect(entity3.removeComponent(position)).to.be.empty
  })
})
