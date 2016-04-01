import {expect} from 'chai';
import Map from '../src/Map';


describe("Reading the Map", () => {

    let map = new Map(5, 5);
    map.setTile(1, 1);
    map.setTile(1, 0);

    it("Should return undefined on incorrect type of targets", () => {
        expect(map.getTile('q', 'e').current).to.not.be.ok;
        expect(map.getTile(1.1, 1.1).current).to.not.be.ok;
        expect(map.getTile(3.1, -3.1).current).to.not.be.ok;
    });

    it("Should return undefined If out of boundary", () => {
        expect(map.getTile(10, 0).current).to.not.be.ok;
        expect(map.getTile(-10, 0).current).to.not.be.ok;
        expect(map.getTile(-5, 0).current).to.not.be.ok;
        expect(map.getTile(0, -5).current).to.not.be.ok;
        expect(map.getTile(-4, 0).current).to.not.be.ok;
        expect(map.getTile(0, -4).current).to.not.be.ok;
        expect(map.getTile(4, 5).current).to.not.be.ok;
    });

    it("Should return false on unfilled tiles of map", () => {
        expect(map.getTile(0, 0).current).to.not.be.ok;
        expect(map.getTile(0, 2).current).to.not.be.ok;
        expect(map.getTile(4, 0).current).to.not.be.ok;
        expect(map.getTile(4, 4).current).to.not.be.ok;
    });

    it("Should return correct Tile object", () => {
        expect(map.getTile(1, 0).current)
            .to.have.property('description')
            .to.equal('Generic tile');
        expect(map.getTile(1, 1).current)
            .to.have.property('description')
            .to.equal('Generic tile');
    });


    it("Empty cell === false", () => {
        expect(map.getTile(3, 3).east).to.not.be.ok;
        expect(map.getTile(3, 3).west).to.not.be.ok;
        expect(map.getTile(3, 3).north).to.not.be.ok;
    });

});

describe("Map should return correct exits:", () => {
    let map = new Map(5, 5);
    map.setTile(1, 0);
    map.setTile(0, 0);
    map.setTile(4, 4);
    map.setTile(4, 3);

    it("On north for target 4.4", () => {
        expect(map.getTile(4, 4).north)
            .to.have.property('description')
            .to.equal('Generic tile');
    });

    it("No exit on south for target 4.4", () => {
        expect(map.getTile(4, 4).south).to.not.be.ok;
    });

    it("Exit on east for target 3.3", () => {
        expect(map.getTile(3, 3).east)
            .to.have.property('description')
            .to.equal('Generic tile');
    });

    it("No exit on west for target 3.3", () => {
        expect(map.getTile(3, 3).west).to.not.be.ok;
    });
});


describe("Adding tiles to the Map", () => {

    let map = new Map(5, 5);

    it("Should be true if within boundary", () => {
        expect(map.setTile(0, 0))
            .to.have.property('description')
            .to.equal('Generic tile');
        expect(map.setTile(4, 4))
            .to.have.property('description')
            .to.equal('Generic tile');
    });
    it("Should be false if out of boundary", () => {
        expect(map.setTile(5, 4)).to.not.be.ok;
        expect(map.setTile(4, 5)).to.not.be.ok;
        expect(map.setTile(-5, 0)).to.not.be.ok;
        expect(map.setTile(0, -5)).to.not.be.ok;
    });
});
