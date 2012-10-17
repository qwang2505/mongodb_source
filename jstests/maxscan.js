
t = db.maxscan;
t.drop();

N = 100;
for ( i=0; i<N; i++ ){
    t.insert( { _id : i , x : i % 10 } );
}

assert.eq( N , t.find().itcount() , "A" )
assert.eq( 50 , t.find()._addSpecial( "$maxScan" , 50 ).itcount() , "B" )

assert.eq( 10 , t.find( { x : 2 } ).itcount() , "C" )
assert.eq( 5 , t.find( { x : 2 } )._addSpecial( "$maxScan" , 50 ).itcount() , "D" )
