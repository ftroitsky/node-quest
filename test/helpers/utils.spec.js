import { expect } from 'chai';
import { matrix, withinRange } from '../../src/helpers/utils';

const bufferX = 2, bufferY = 2;
const map = matrix(bufferX, bufferY, true);

describe('Matrix function for 2d arrays', () => {
    it('should return correct array', ()=> {
        expect(map[0][0]).to.be.ok;
        expect(map[1][0]).to.be.ok;
        expect(map[1][1]).to.be.ok;
        expect(map[0][1]).to.be.ok;
    });
    it(`should respect boundaries (bufferX: ${bufferX}, bufferY: ${bufferY})`,
        ()=> {
        expect(map[0][2]).to.not.be.ok;
        expect(map[2]).to.not.be.ok;
    });
});

describe('Value should be within range', () => {
    it('5 should be within range of 6', ()=> {
        expect(withinRange(5, 0, 6)).to.be.ok;
    });
    it('0 should be within range of 6', ()=> {
        expect(withinRange(0, 0, 6)).to.be.ok;
    });
    it('6 should not be within range of 6', ()=> {
        expect(withinRange(6, 0, 6)).to.not.be.ok;
    });
});
