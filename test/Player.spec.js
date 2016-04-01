import {expect} from 'chai';
import Map from '../src/Map';
import Player from '../src/Player';

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
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.X).to.equal(0);
        expect(player.Y).to.equal(0);
    });

    it("Player should be able to tell correct exits", () => {
        expect(player.look().north).to.not.be.ok;
        expect(player.look().south.constructor.name).to.equal('Tile');
        expect(player.look().east).to.not.be.ok;
        expect(player.look().west).to.not.be.ok;
    });

    it("Player should be able to walk south", () => {
        player.walk('SOUTH');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.look().north.constructor.name).to.equal('Tile');
        expect(player.look().south.constructor.name).to.equal('Tile');
        expect(player.look().east).to.not.be.ok;
        expect(player.look().west).to.not.be.ok;
        expect(player.X).to.equal(0);
        expect(player.Y).to.equal(1);

        player.walk('SOUTH');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.look().north.constructor.name).to.equal('Tile');
        expect(player.look().south).to.not.be.ok;
        expect(player.look().east.constructor.name).to.equal('Tile');
        expect(player.look().west).to.not.be.ok;
        expect(player.X).to.equal(0);
        expect(player.Y).to.equal(2);
    });

    it("Player should be able to walk east", () => {
        player.walk('EAST');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.look().north).to.not.be.ok;
        expect(player.look().south).to.not.be.ok;
        expect(player.look().east.constructor.name).to.equal('Tile');
        expect(player.look().west.constructor.name).to.equal('Tile');
        expect(player.X).to.equal(1);
        expect(player.Y).to.equal(2);

        player.walk('EAST');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.look().north).to.not.be.ok;
        expect(player.look().south).to.not.be.ok;
        expect(player.look().east.constructor.name).to.equal('Tile');
        expect(player.look().west.constructor.name).to.equal('Tile');
        expect(player.X).to.equal(2);
        expect(player.Y).to.equal(2);

        player.walk('EAST');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.look().north.constructor.name).to.equal('Tile');
        expect(player.look().south).to.not.be.ok;
        expect(player.look().east).to.not.be.ok;
        expect(player.look().west.constructor.name).to.equal('Tile');
        expect(player.X).to.equal(3);
        expect(player.Y).to.equal(2);
    });

    it("Player should be able to walk north", () => {
        player.walk('NORTH');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.look().north.constructor.name).to.equal('Tile');
        expect(player.look().south.constructor.name).to.equal('Tile');
        expect(player.look().east).to.not.be.ok;
        expect(player.look().west).to.not.be.ok;
        expect(player.X).to.equal(3);
        expect(player.Y).to.equal(1);

        player.walk('NORTH');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.look().north).to.not.be.ok;
        expect(player.look().south.constructor.name).to.equal('Tile');
        expect(player.look().east).to.not.be.ok;
        expect(player.look().west.constructor.name).to.equal('Tile');
        expect(player.X).to.equal(3);
        expect(player.Y).to.equal(0);
    });

    it("Player should be able to walk west", () => {
        player.walk('WEST');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.look().north).to.not.be.ok;
        expect(player.look().south).to.not.be.ok;
        expect(player.look().east.constructor.name).to.equal('Tile');
        expect(player.look().west).to.not.be.ok;
        expect(player.X).to.equal(2);
        expect(player.Y).to.equal(0);
    });

    it("Player should not be able to walk on empty tile", () => {
        player.walk('WEST');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.X).to.equal(2);
        expect(player.Y).to.equal(0);
    });

    it("Player should not be able to walk off the map", () => {
        player.walk('NORTH');
        expect(player.look().current.constructor.name).to.equal('Tile');
        expect(player.X).to.equal(2);
        expect(player.Y).to.equal(0);
    });

});
