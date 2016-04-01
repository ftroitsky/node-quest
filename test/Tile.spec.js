import { expect } from 'chai';
import Tile from '../src/Tile';


const tile = new Tile();

describe('Tile', () => {
    it('Should have generic description', ()=> {
        expect(tile.description)
            .to.equal('Generic tile');
    });

    tile.storeObject({id: 1, name: 'something'});

    it('Should be able to store objects', ()=> {
        expect(tile.objects[0])
            .to.eql({id: 1, name: 'something'});
    });

    it('Should be able to read objects', ()=> {
        tile.storeObject({id: 2, name: 'whatever'});
        expect(tile.readObjects())
            .to.eql([{id: 1, name: 'something'},{id: 2, name: 'whatever'}]);
    });
});
