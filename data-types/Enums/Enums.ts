/* 

Enums or enumerations are a new data type supported in TypeScript. Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.

In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.


there are three types of enums

There are three types of enums:

Numeric enum - these are number based enums. i.e they store string values as numbers
String enum
Heterogeneous enum
*/


/* 
Enums are always assigned numeric values when they are stored. The first value always takes the numeric value of 0, while the other values in the enum are incremented by 1.

*/



// Example of numeric enums

enum PrintMedia {
    Newspaper, // 0
    NewsLetter, // 1
    Magazine, // 2
    Book // 3
}


// we can also initialize the first numeric value by ourselves e.g

// here The first member, Newspaper, is initialized with the numeric value 1. The remaining members will be incremented by 1 from the numeric value of the first value. Thus, in the above example, Newsletter would be 2, Magazine would be 3 and Book would be 4.

enum PrintMedia2 {
    Newspaper = 1, // 0
    NewsLetter, // 1
    Magazine, // 2
    Book // 3
}

/* 

Also,It is not necessary to assign sequential values to Enum members. They can have any values.
*/


enum PrintMedia3 {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
}


// The enum can be used as a function parameter or return type, as shown below:

function getMedia(mediaName: string): PrintMedia3 {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia3.Magazine;
    }

    return PrintMedia3.Book
 }


 let mediaType: PrintMedia3 = getMedia('Forbes')
 

 console.log(`this is the media type`,mediaType)



 /* 
 
 Computed Enums
 Numeric enums can include members with computed numeric value. The value of an enum member can be either a constant or computed. The following enum includes members with computed values.
 */



 enum PrintMedia5 {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }

    return 1
}


console.log(PrintMedia5.Newsletter)
console.log(PrintMedia5.Magazine)



/* 
String Enum
String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.

The benefits of using string enums is that string enums offer better readability. If we were to debug a program, it is easier to read string values rather than numeric values.

Consider the same example of a numeric enum, but represented as a string enum:

which can be accessed either by the . or square notations syntax
*/


enum PrintMediaString {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
console.log(PrintMediaString.Newspaper); //returns NEWSPAPER
console.log(PrintMediaString['Magazine']);//returns MAGAZINE



/* 
Heterogeneous Enum
Heterogeneous enums are enums that contain both string and numeric values. */


enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}


/* 
Reverse Mapping
Enum in TypeScript supports reverse mapping. It means we can access the value of a member and also a member name from its value. Consider the following example.

*/



enum PrintMedia7 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}


  console.log(PrintMedia7.Magazine)
  console.log(PrintMedia7['Magazine'])
  console.log(PrintMedia7[3])



  enum MappedPrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  console.log(MappedPrintMedia)


  /* 

  Reverse mapping is not supported for string enum members. For the heterogeneous enum, reverse mapping is only supported for numeric type members but not for string type members.
  
  
  */