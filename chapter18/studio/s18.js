//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.




class CrewCandidate {

    constructor(name, mass, scores){

        this.name = name;

        this.mass = mass;

        this.scores = scores;

    }

    addScore = function (score){

     this.scores.push(score)

    }

   average = function(){

    let sum = 0;

    for (let i = 0; i < this.scores.length; i++ ) {

    sum += this.scores[i]

   }

    this.averageScores = sum/this.scores.length

    let avg= Math.round(this.averageScores * 10)/10




    // console.log(avg)

    return avg;

}

    status = function (){

       

     let x = this.average(this.scores)

        // console.log(this.average(this.scores))

        if (x >= 90){

            console.log(`${this.name} earned an average test score of ${x} and has a status of Accepted`);      

          } else if (this.averageScores >= 80) {

            console.log(`${this.name} earned an average test score of ${x} and has a status of Reserved`);

          } else if (this.averageScores) {

            console.log(`${this.name} earned an average test score of ${x} and has a status of Probationary`);

          } else {console.log(`${this.name} earned an average test score of ${x} and has a status of Rejected`);

        }

    }

};





let bear = new CrewCandidate('Bubba Bear',135,[88,85,90]);

let dog = new CrewCandidate("Merry Maltese",1.5,[93,88,97]);

let gator = new CrewCandidate("Glad Gator",225,[75,78,62]);

// console.log(bear);

// bear.addScore(83)

// console.log(bear);

gator.status()




let i = 0;




while(gator.average() < 90){




gator.addScore(100);




i++




console.log(i)




}




 




gator.status()

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.






//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.