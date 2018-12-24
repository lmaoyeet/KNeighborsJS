/*
X_train
X_test

y_train
y_test

Are the variables after train test split
*/
x = [[130, 1], [140, 1], [170, 0], [180, 0]];
y = [1, 1, 0, 0];

train_test_split(x, y);

var my_knn = new ScrappyKNN();

my_knn.fit(X_train, y_train);

var predictions = my_knn.predict(X_test)

console.log(accuracy(y_test, predictions));