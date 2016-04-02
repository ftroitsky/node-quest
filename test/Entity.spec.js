import { expect } from 'chai';
import Entity from '../src/Entity';

const entity1 = new Entity();
const entity2 = new Entity();

describe('Entity', () => {
    it('Global counter should increment when new entity added', ()=> {
        expect(Entity.count).to.equal(2);
    });
    it('Entity id should not be empty', ()=> {
        expect(entity1).to.have.property('id').to.be.not.empty;
    });
    it('Entity should have property components', ()=> {
        expect(entity1).to.have.property('components').to.be.an('object');
    });

});
