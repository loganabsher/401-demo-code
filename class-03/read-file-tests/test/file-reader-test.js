'use strict';

const expect = require('chai').expect;
const fr = require('../lib/file-reader.js');

describe('File Reader Module', () => {
  describe('with improper file path', () => {
    it('Should return an error', (done) => {
      fr(`${__dirname}/not-a-file.txt`, (err) => {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', () => {
    it('Should return the content of the file', (done) => {
      fr(`${__dirname}/../data/data.txt`, (err, data) => {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('cool read file testing demo bro\n');
        done();
      });
    });
  });
});
