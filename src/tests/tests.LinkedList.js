
describe('LinkedList', () => {
    describe('LinkedList defined',() => {
        it('should be defined', () => {
            assert.isDefined(LinkedList);
        })
    })

    describe('init', () => {
        it('init defined',() => {
            assert.equal(LinkedList.init);
        });
    })

    describe('clearAll', () => {
        it('clearAll defined', () => {
            assert.equal(LinkedList.clearAll);
        });

        it('clearAll works correctly when []',() => {
            let llist = new LinkedList();
            const array = [];
            llist.init(array);
            const expected = 0;

            llist.clearAll();

            assert.deepEqual(llist.getListSize(), expected);
            assert.deepEqual(llist.toArray(), []);
        });
    })

    describe('addElmStart', () => {
        it('addElmStart defined', () => {
            assert.equal(LinkedList.addElmStart);
        });

        it('addElmStart works correctly', () => {
            const Llist = new LinkedList();
            const array = [4,5];
            Llist.prptptype.init (array);
            const expected = 3;

            Llist.addElmStart(9);

            assert.deepEqual(Llist.getListSize,expected)
            assert.deepEqual(Llist.toArray,[4,5,9]);

        })
    })

    describe('toArray', () => {
        it('toArray defined', () => {
            assert.equal(LinkedList.toArray);
        });
    })

    describe('toString', () => {
        it('toString defined', () => {
            assert.isDefined(LinkedList.toString);
        });
    })

    describe('deleteFirst', () => {
        it('deleteFirsr defined', () => {
            assert.equal(LinkedList.deleteFirst);
        });
    })

    describe('addElmEnd', () => {
        it('addElmEnd defined', () => {
            assert.equal(LinkedList.addElmEnd);
        });
    })

    describe('removeEndElm', () => {
        it('removeEndElm defined', () => {
            assert.equal(LinkedList.removeEndElm);
        });
    })

    describe('getListSize', () => {
        it('getListSize defined', () => {
            assert.equal(LinkedList.getListSize);
        });

        it('getListSize works correctly',() => {
            let ll = new LinkedList();
            let array = [4];
            ll.init(array);
            const expected = 1;

            ll.getListSize;

            assert.deepEqual(ll.getListSize, expected);
        })
    })
})