import { expect } from 'chai';
import { matrix, withinRange } from '../../src/helpers/utils';

const bufferX = 2, bufferY = 2;
const map = matrix(bufferX, bufferY, true);

describe('Matrix function for 2d arrays', () => {
    it('should return correct array', ()=> {
        expect(map[0][0]).to.eql(true);
        expect(map[1][0]).to.eql(true);
        expect(map[1][1]).to.eql(true);
        expect(map[0][1]).to.eql(true);
    });
    it(`should respect boundaries (bufferX: ${bufferX}, bufferY: ${bufferY})`,
        ()=> {
        expect(map[0][2]).to.eql(undefined);
        expect(map[2]).to.eql(undefined);
    });
});

describe('Value should be within range', () => {
    it('5 should be within range of 6', ()=> {
        expect(withinRange(5, 0, 6)).to.eql(true);
    });
    it('0 should be within range of 6', ()=> {
        expect(withinRange(0, 0, 6)).to.eql(true);
    });
    it('6 should not be within range of 6', ()=> {
        expect(withinRange(6, 0, 6)).to.eql(false);
    });
});
