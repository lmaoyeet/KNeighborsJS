// I'm calling it scrappy because it will only look at the closest neighbor, good for very small datasets, horrible for large ones
function ScrappyKNN() {
    this.fit = function(x_train, y_train) {
        this.X_train = x_train;
        this.y_train = y_train;
    }
    this.predict = function(x_test) {
        this.predictions = [];
        for(var row = 1; row < x_test; row++) {
            this.label = this.closest(row);
            this.predictions.push(this.label);
        }
        console.log('Predictions: ' + this.predictions);
        return(this.predictions);
    }
    this.closest = function(row) {
        this.best_dist = 0;
        this.best_dist = euclidianDistance(row, this.X_train[0]);
        this.best_index = 0;
        for(var i = 0; i < this.X_train.length; i++) {
            this.dist = euclidianDistance(row, this.X_train[i]);
            if(this.dist < this.best_dist) {
                this.best_dist = this.dist;
                this.best_index = i;
            }
            return(this.y_train[this.best_index]);
        }
    }
}


//THESE PARTS DONT WORK BUT I NEED THEM TO
function euclidianDistance(a, b) {
    /*//return(Math.sqrt(a - b));
    this.distout = [];
    for(i = 0; i < a.length; i++) {
        this.distout.push(Math.sqrt((a[i]-b[i])));
    }
    return(this.distout);
    */
   this.monkey = 0;
   this.final = 0;
   this.dist = [];
   this.temp = [];
   for(var i = 0; i < a.length; i++) {
        this.temp.push(a[i] - b[i]);
   }
   for(var j = 0; j < a.length; j+=2) {
    //    this.dist.push(this.temp[j]+ this.tempo);
        this.monkey = this.final + this.temp[j];
        this.monkey = Math.pow(this.monkey, 2);
   }
   this.final = Math.sqrt(this.monkey);
}
function accuracy(y_test, predictions) {
    
    this.finalAccuracy = 0;
    this.count = 0;
    
    // loop to see if the predicted outcome is the right outcome, and then doing that for all results, and then averaging it out to be the error
    for(var j = 0; j < y_test.length; j++/*item in y_test*/) {
        if(y_test[j] == predictions[j]) {
            this.finalAccuracy++;
        } else {
            
        }
    }
    this.finalAccuracy = this.finalAccuracy / this.count;
    return(this.finalAccuracy);
}
