// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, pages, checkoutAmount, discardedYet) {
      this.title = title;
      this.author = author;
      this.copyrightDate = copyrightDate;
      this.ISBN = ISBN;
      this.pages = pages;
      this.checkoutAmount= checkoutAmount;
      this.discardedYet = discardedYet;
    }
    checkout(uses=1) {
      this.checkoutAmount += uses
    }
    
  }
  
  // Define your Manual and Novel classes here:
  class Manual extends Book{
    constructor(title, author, copyrightDate, ISBN, pages, checkoutAmount, discardedYet) {
      super(title, author, copyrightDate, ISBN, pages, checkoutAmount, discardedYet); 
    }
    dispose() {
      if (this.copyrightDate > 5) {
        this.discardedYet = "Yes";
      }
    }
  }
  
  class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
     }
    dispose() {
      if (this.checkoutAmount > 100) {
        this.discardedYet = "Yes";
      }
    }
  }
  // Declare the objects for exercises 2 and 3 here:
  let novel1 = new Novel("Pride & Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
  // make new variable in "let" for child class to become after intaking parent
  
  let manual1 = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");
  
  // Code exercises 4 & 5 here:
  
  manual1.dispose()
  
  
  novel1.checkout(5);