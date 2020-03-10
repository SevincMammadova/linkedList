describe('LinkedList', () => {
    describe('LinkedList defined',() => {
        it('should be defined', () => {
            assert.isDefined(LinkedList);
        })
    })

    describe('init', () => {
        it('init defined',() => {
            const lList = new LinkedList();
            assert.isDefined(lList.init);
        });

        it('init works correctly when [1,2,3]', () => {
            const lList = new LinkedList();
            let array = [1, 2, 3];
            const expectedSize = 3;
            lList.init(array);

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('init works correctly when [1,2]', () => {
            const lList = new LinkedList();
            let array = [1, 2];
            const expectedSize = 2;
            lList.init(array);
            

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('init works correctly when []', () => {
            const lList = new LinkedList();
            let array = [];
            const expectedSize = 0;
            lList.init(array);

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('init works correctly when [1]', () => {
            const lList = new LinkedList();
            let array = [1];
            const expectedSize = 1;
            lList.init(array);

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('init works correctly when arr= undefined', () => {
            const lList = new LinkedList();
            let array = undefined;
            const expectedArr = [];
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getListSize(), arrayLength);
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('init works correctly when arr= null', () => {
            const lList = new LinkedList();
            let array = null;
            const expectedArr = [];
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getListSize(), arrayLength);
            assert.deepEqual(lList.toArray(), expectedArr);
        });
    })

    describe('clearAll', () => {
        it('clearAll defined', () => {
            let lList = new LinkedList();
            
            assert.isDefined(lList.clearAll);
        });

        it('clearAll works correctly when arr = []',() => {
            let lList = new LinkedList();
            const array = [];
            lList.init(array);
            const expected = 0;

            lList.clearAll();

            assert.deepEqual(lList.getListSize(), expected);
            assert.deepEqual(lList.toArray(), []);
        });

        it('clearAll works correctly when arr = [1, 2]',() => {
            let lList = new LinkedList();
            const array = [1, 2];
            lList.init(array);
            const expected = 0;

            lList.clearAll();

            assert.deepEqual(lList.getListSize(), expected);
            assert.deepEqual(lList.toArray(), []);
        });

        it('clearAll works correctly when arr = [1, 2, 3]',() => {
            let lList = new LinkedList();
            const array = [1, 2, 3];
            lList.init(array);
            const expected = 0;

            lList.clearAll();

            assert.deepEqual(lList.getListSize(), expected);
            assert.deepEqual(lList.toArray(), []);
        });

        it('clearAll works correctly when arr= [null]',() => {
            let lList = new LinkedList();
            const array = [null];
            lList.init(array);
            const expected = 0;

            lList.clearAll();

            assert.deepEqual(lList.getListSize(), expected);
            assert.deepEqual(lList.toArray(), []);
        });

        it('clearAll works correctly when arr = [undefined]',() => {
            let lList = new LinkedList();
            const array = [undefined];
            lList.init(array);
            const expected = 0;

            lList.clearAll();

            assert.deepEqual(lList.getListSize(), expected);
            assert.deepEqual(lList.toArray(), []);
        });

        it('clearAll works correctly when [1]',() => {
            let lList = new LinkedList();
            const array = [1];
            lList.init(array);
            const expected = 0;

            lList.clearAll();

            assert.deepEqual(lList.getListSize(), expected);
            assert.deepEqual(lList.toArray(), []);
        });
    })

    describe('addElmStart', () => {
        it('addElmStart defined', () => {
            const lList = new LinkedList();
            assert.isDefined(lList.addElmAtStart());
        });

        it('addElmStart works correctly when arr = [4, 5]', () => {
            const lList = new LinkedList();
            const array = [4, 5];
            lList.init (array);
            const expectedArr = [9, 4, 5];
            const expectedSize = 3;

            lList.addElmAtStart(9);

            assert.deepEqual(lList.getListSize(), expectedSize)
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('addElmStart works correctly when arr = [1]', () => {
            const lList = new LinkedList();
            const array = [1];
            lList.init (array);
            const expectedArr = [9, 1];
            const expectedSize = 2;

            lList.addElmAtStart(9);

            assert.deepEqual(lList.getListSize(), expectedSize)
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('addElmStart works correctly when arr = [1, 2, 3,]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            lList.init (array);
            const expectedArr = [9, 1, 2, 3];
            const expectedSize = 4;

            lList.addElmAtStart(9);

            assert.deepEqual(lList.getListSize(), expectedSize)
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('addElmStart works correctly when arr = []', () => {
            const lList = new LinkedList();
            const array = [];
            lList.init (array);
            const expectedArr = [9];
            const expectedSize = 1;

            lList.addElmAtStart(9);

            assert.deepEqual(lList.getListSize(), expectedSize)
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('addElmStart works correctly when arr = [1, 2, 3, 4, 5, 6]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3, 4, 5, 6];
            lList.init (array);
            const expectedArr = [9, 1, 2, 3, 4, 5, 6];
            const expectedSize = 7;

            lList.addElmAtStart(9);

            assert.deepEqual(lList.getListSize(), expectedSize)
            assert.deepEqual(lList.toArray(), expectedArr);
        });
    })

    describe('toArray', () => {
        it('toArray defined', () => {
            const Llist = new LinkedList();
            assert.isDefined(Llist.toArray);
        });

        it('toArray works correctly when arr = []',() => {
            const Llist = new LinkedList();
            const array = [];
            const expectedSize = 0;
            Llist.init(array);

            assert.deepEqual(Llist.getListSize(), expectedSize);
            assert.deepEqual(Llist.toArray(), array);
        });

        it('toArray works correctly when arr = [1]',() => {
            const Llist = new LinkedList();
            const array = [1];
            const expectedSize = 1;
            Llist.init(array);

            assert.deepEqual(Llist.getListSize(), expectedSize);
            assert.deepEqual(Llist.toArray(), array);
        });

        it('toArray works correctly when arr = [1, 2]',() => {
            const Llist = new LinkedList();
            const array = [1, 2];
            const expectedSize = 2;
            Llist.init(array);

            assert.deepEqual(Llist.getListSize(), expectedSize);
            assert.deepEqual(Llist.toArray(), array);
        });

        it('toArray works correctly when arr = [1, 2, 3, 4, 5, 6]',() => {
            const Llist = new LinkedList();
            const array = [1, 2, 3, 4, 5, 6];
            const expectedSize = 6;
            Llist.init(array);

            assert.deepEqual(Llist.getListSize(), expectedSize);
            assert.deepEqual(Llist.toArray(), array);
        });

        it('toArray works correctly when arr = [1, 2, 3]',() => {
            const Llist = new LinkedList();
            const array = [1, 2, 3];
            const expectedSize = 3;
            Llist.init(array);

            assert.deepEqual(Llist.getListSize(), expectedSize);
            assert.deepEqual(Llist.toArray(), array);
        });
    })

    describe('toString', () => {
        it('toString defined', () => {
            const Llist = new LinkedList();
            assert.isDefined(Llist.toString);
        });

        it('toString works correctly when arr = []', () =>{
            const lList = new LinkedList();
            let array = [];
            const expectedSize = 0;
            const expectedString = '[]';
            lList.init(array);

            const actual = lList.toString();
            console.log(actual);
            

            assert.deepEqual(actual, expectedString);
            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('toString works correctly when arr = [1]', () =>{
            const lList = new LinkedList();
            let array = [1];
            const expectedSize = 1;
            const expectedString = '[1,]';
            lList.init(array);

            const actual = lList.toString();
            console.log(actual);
            

            assert.deepEqual(actual, expectedString);
            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('toString works correctly when arr = [1,2]', () =>{
            const lList = new LinkedList();
            let array = [1,2];
            const expectedSize = 2;
            const expectedString = '[1,2,]';
            lList.init(array);

            const actual = lList.toString();
            console.log(actual);
            

            assert.deepEqual(actual, expectedString);
            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('toString works correctly when arr = [1,2,3]', () =>{
            const lList = new LinkedList();
            let array = [1, 2, 3];
            const expectedSize = 3;
            const expectedString = '[1,2,3,]';
            lList.init(array);

            const actual = lList.toString();
            console.log(actual);
            

            assert.deepEqual(actual, expectedString);
            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('toString works correctly when arr = [1,2,3,4,5,6]', () =>{
            const lList = new LinkedList();
            let array = [1, 2, 3, 4, 5, 6];
            const expectedSize = 6;
            const expectedString = '[1,2,3,4,5,6,]';
            lList.init(array);

            const actual = lList.toString();
            console.log(actual);
            

            assert.deepEqual(actual, expectedString);
            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });
    })

    describe('deleteFirst', () => {
        it('deleteFirsr defined', () => {
            const lList = new LinkedList();
            assert.isDefined(lList.deleteFirst);
        });

        it('deleteFirst works correctly when arr = []', () => {
            const lList = new LinkedList();
            const array = [];
            const expectedArr = [];
            const expectedSize = 0;
            lList.init(array);

            actual = lList.deleteFirst();

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr)
        });

        it('deleteFirst works correctly when arr = [1]', () => {
            const lList = new LinkedList();
            const array = [1];
            const expectedArr = [];
            const expectedSize = 0;
            lList.init(array);

            lList.deleteFirst();

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });  
        
        it('deleteFirst works correctly when arr = [1, 2]', () => {
            const lList = new LinkedList();
            const array = [1, 2];
            const expectedArr = [2];
            const expectedSize = 1;
            lList.init(array);

            lList.deleteFirst();

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('deleteFirst works correctly when arr = [1, 2, 3]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const expectedArr = [2, 3];
            const expectedSize = 2;
            lList.init(array);

            lList.deleteFirst();

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('deleteFirst works correctly when arr = [1, 2, 3, 4]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3, 4];
            const expectedArr = [2, 3, 4];
            const expectedSize = 3;
            lList.init(array);

            lList.deleteFirst();

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });
    })

    describe('addElmEnd', () => {
        it('addElmEnd defined', () => {
            const lList = new LinkedList();
            assert.isDefined(lList.addElmEnd);
        });

        it('addElmEnd works correctly when []', () => {
            const lList = new LinkedList();
            const array = [];
            const expectedArr = [1];
            const expectedSize = 1;
            lList.init(array);

            lList.addElmEnd(1);

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('addElmEnd works correctly when [1]', () => {
            const lList = new LinkedList();
            const array = [1];
            const expectedArr = [1, 2];
            const expectedSize = 2;
            lList.init(array);

            lList.addElmEnd(2);

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('addElmEnd works correctly when [1, 2]', () => {
            const lList = new LinkedList();
            const array = [1, 2];
            const expectedArr = [1, 2, 3];
            const expectedSize = 3;
            lList.init(array);

            lList.addElmEnd(3);

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('addElmEnd works correctly when [1, 2, 3, 4]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3, 4];
            const expectedArr = [1, 2, 3, 4, 5];
            const expectedSize = 5;
            lList.init(array);

            lList.addElmEnd(5);

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });

        it('addElmEnd works correctly when [1, 2, 3]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const expectedArr = [1, 2, 3, 4];
            const expectedSize = 4;
            lList.init(array);

            lList.addElmEnd(4);

            assert.deepEqual(lList.getListSize(), expectedSize);
            assert.deepEqual(lList.toArray(), expectedArr);
        });
    })

    describe('removeEndElm', () => {
        it('removeEndElm defined', () => {
            const lList = new LinkedList();
            assert.isDefined(lList.removeEndElm);
        });
    })

    describe('getListSize', () => {
        it('getListSize defined', () => {
            assert.equal(LinkedList.getListSize);
        });

        it('getListSize works correctly when arr = []',() => {
            let lList = new LinkedList();
            let array = [];
            lList.init(array);
            const expectedSize = 0;

            actual = lList.getListSize();

            assert.deepEqual(actual, expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('getListSize works correctly when arr = [1]',() => {
            let lList = new LinkedList();
            let array = [1];
            lList.init(array);
            const expectedSize = 1;

            actual = lList.getListSize();

            assert.deepEqual(actual, expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('getListSize works correctly when arr = [1,2]',() => {
            let lList = new LinkedList();
            let array = [1, 2];
            lList.init(array);
            const expectedSize = 2;

            actual = lList.getListSize();

            assert.deepEqual(actual, expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('getListSize works correctly when arr = [1,2,3]',() => {
            let lList = new LinkedList();
            let array = [1, 2, 3];
            lList.init(array);
            const expectedSize = 3;

            actual = lList.getListSize();

            assert.deepEqual(actual, expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('getListSize works correctly when arr = [1,2,3,4,5,6]',() => {
            let lList = new LinkedList();
            let array = [1, 2, 3, 4, 5, 6];
            lList.init(array);
            const expectedSize = 6;

            actual = lList.getListSize();

            assert.deepEqual(actual, expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('getListSize works correctly when arr = [null]',() => {
            let lList = new LinkedList();
            let array = [null];
            lList.init(array);
            const expectedSize = 1;

            actual = lList.getListSize();

            assert.deepEqual(actual, expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });

        it('getListSize works correctly when arr = [undefined]',() => {
            let lList = new LinkedList();
            let array = [undefined];
            lList.init(array);
            const expectedSize = 1;

            actual = lList.getListSize();

            assert.deepEqual(actual, expectedSize);
            assert.deepEqual(lList.toArray(), array);
        });
    })
})