const dbManager = require('../app/dbManager');
const postData = {
  "name": "A",
  "start": { "x": 0, "y": 0 },
  "end": { "x": 60, "y": 50 }
};

describe('Database tests', () => {
  it("Tests territory CRUD", (done) => {

    let created;

    dbManager.set('territory', postData).then((res) => {
      created = res.data;
      expect(res.name).toEqual("A");
      done();
    });

    dbManager.get('territory', 0).then(res => {
      expect(res.name).toEqual("A");
      done();
    });

    dbManager.list('territory').then(res => {
      expect(res).not.toBe(null);
      done();
    });

    dbManager.remove('territory', 0).then(() => {
      dbManager.get('territory', 0).then((res) => {
        expect(res).toBe(undefined);
        done();
      })
    });
  })
});
