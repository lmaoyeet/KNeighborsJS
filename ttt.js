let X_train;
let X_test;
let y_train;
let y_test;

function train_test_split(x, y) {
    // probability that datapoint is test or train
    this.prob = [];

    // output variables
    this.X_train = [];
    this.X_test = [];
    this.y_train = [];
    this.y_test = [];

    this.split = function() {
        for(item in x) {
            this.prob.push(Math.random());
            if(this.prob[item] >= 0.5) {
                // then put it in test

                this.X_test.push(x[item]);
            
            } else if(this.prob[item] < 0.5) {
                // then put it in train

                this.X_train.push(x[item]);
            }
        
        }
        for(item in y) {
            this.prob.push(Math.random());
            if(this.prob[item] >= 0.5) {
                // then put it in test

                this.y_test.push(y[item]);
            
            } else if(this.prob[item] < 0.5) {
                // then put it in train

                this.y_train.push([y[item]]);
            }
        
        }
    }
    this.assign = function() {
        // I couldn't think of a more dynamic way to do this

        X_train = this.X_train;
        X_test = this.X_test;
        y_train = this.y_train;
        y_test = this.y_test;
    }
    this.split();
    this.assign();
    console.log("Training data points are located in the variables: X_train, y_train");
    console.log("Testing data points are located in the variables: X_test, y_test");
}