import {expect} from 'chai';
import Map from '../src/Map';
import Player from '../src/Player';
import Tile from '../src/Tile';

var map = new Map();
map.setTile(0,0);
map.setTile(0,1);
map.setTile(0,2);
map.setTile(1,2);
map.setTile(2,2);
map.setTile(3,2);
map.setTile(3,1);
map.setTile(3,0);
map.setTile(2,0);

var player = new Player(map);

describe("Player moving around map", () => {
    it("Player should be able to tell current position", () => {
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.X).to.equal(0);
        expect(player.Y).to.equal(0);
    });

    it("Player should be able to tell correct exits", () => {
        expect(player.location.north).to.not.be.ok;
        expect(player.location.south).to.be.an.instanceof(Tile);
        expect(player.location.east).to.not.be.ok;
        expect(player.location.west).to.not.be.ok;
    });

    it("Player should be able to walk south", () => {
        player.walk('SOUTH');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.location.north).to.be.an.instanceof(Tile);
        expect(player.location.south).to.be.an.instanceof(Tile);
        expect(player.location.east).to.not.be.ok;
        expect(player.location.west).to.not.be.ok;
        expect(player.X).to.equal(0);
        expect(player.Y).to.equal(1);

        player.walk('SOUTH');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.location.north).to.be.an.instanceof(Tile);
        expect(player.location.south).to.not.be.ok;
        expect(player.location.east).to.be.an.instanceof(Tile);
        expect(player.location.west).to.not.be.ok;
        expect(player.X).to.equal(0);
        expect(player.Y).to.equal(2);
    });

    it("Player should be able to walk east", () => {
        player.walk('EAST');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.location.north).to.not.be.ok;
        expect(player.location.south).to.not.be.ok;
        expect(player.location.east).to.be.an.instanceof(Tile);
        expect(player.location.west).to.be.an.instanceof(Tile);
        expect(player.X).to.equal(1);
        expect(player.Y).to.equal(2);

        player.walk('EAST');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.location.north).to.not.be.ok;
        expect(player.location.south).to.not.be.ok;
        expect(player.location.east).to.be.an.instanceof(Tile);
        expect(player.location.west).to.be.an.instanceof(Tile);
        expect(player.X).to.equal(2);
        expect(player.Y).to.equal(2);

        player.walk('EAST');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.location.north).to.be.an.instanceof(Tile);
        expect(player.location.south).to.not.be.ok;
        expect(player.location.east).to.not.be.ok;
        expect(player.location.west).to.be.an.instanceof(Tile);
        expect(player.X).to.equal(3);
        expect(player.Y).to.equal(2);
    });

    it("Player should be able to walk north", () => {
        player.walk('NORTH');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.location.north).to.be.an.instanceof(Tile);
        expect(player.location.south).to.be.an.instanceof(Tile);
        expect(player.location.east).to.not.be.ok;
        expect(player.location.west).to.not.be.ok;
        expect(player.X).to.equal(3);
        expect(player.Y).to.equal(1);

        player.walk('NORTH');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.location.north).to.not.be.ok;
        expect(player.location.south).to.be.an.instanceof(Tile);
        expect(player.location.east).to.not.be.ok;
        expect(player.location.west).to.be.an.instanceof(Tile);
        expect(player.X).to.equal(3);
        expect(player.Y).to.equal(0);
    });

    it("Player should be able to walk west", () => {
        player.walk('WEST');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.location.north).to.not.be.ok;
        expect(player.location.south).to.not.be.ok;
        expect(player.location.east).to.be.an.instanceof(Tile);
        expect(player.location.west).to.not.be.ok;
        expect(player.X).to.equal(2);
        expect(player.Y).to.equal(0);
    });

    it("Player should not be able to walk on empty tile", () => {
        player.walk('WEST');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.X).to.equal(2);
        expect(player.Y).to.equal(0);
    });

    it("Player should not be able to walk off the map", () => {
        player.walk('NORTH');
        expect(player.location.current).to.be.an.instanceof(Tile);
        expect(player.X).to.equal(2);
        expect(player.Y).to.equal(0);
    });

});
