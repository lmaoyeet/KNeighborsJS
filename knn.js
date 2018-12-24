// I'm calling it scrappy because it will only look at the closest neighbor, good for very small datasets, horrible for large ones
function ScrappyKNN() {
    this.fit = function(x_train, y_train) {
        this.X_train = x_train;
        this.y_train = y_train;
    }
    this.predict = function(x_test) {
        this.predictions = [];
        for(row in x_test) {
            this.label = this.closest(row);
            this.predictions.push(this.label);
        }
        return(predictions);
    }
    this.closest = function(row) {
        this.best_dist = euclidianDistance(row, this.X_train[0]);
        this.best_index = 0;
        for(var i = 1; i < this.X_train.length; i++) {
            this.dist = euclidianDistance(row, this.X_train[i]);
            if(this.dist < this.best_dist) {
                this.best_dist = dist;
                this.best_index = i;
            }
            return(this.y_train[best_index]);
        }
    }
}
function euclidianDistance(a, b) {
    return(sqrt(a - b));
}
function accuracy(y_test, predictions) {
    this.accurate = [];
    this.finalAccuracy = 0;
    this.count = 0;
    for(item in y_test) {
        if(y_test[item] == predictions[item]) {
            this.accurate.push(1);
        } else {
            this.accurate.push(0);
        }
    }
    for(j in accurate) {
        this.count++;
        this.finalAccuracy += accurate[j];
    }
    this.finalAccuracy = this.finalAccuracy / this.count;
}
