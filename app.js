//              ASSIGNMENTS JAVASCRIPT

//                  Chapter 21 - 39

// Task 1:  concatenate the string   
// var first = prompt("Enter First name..","Abdullah");
// var last = prompt("Enter Last name..","Arif");
// var full_name = first +" " + last;
// alert("Assalam-O-Alaikum "+full_name+ " Welcome to my webiste..");

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 2: length of string
// var mobile = prompt("Enter yout favourite mobile phone","For Example , Motrolla")
// alert("Length of string : " + mobile.length)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 3:   Finding index of n
// var name = prompt("Enter any word having letter N inside ..","Pakistani")
// var find = name.indexOf('n')
// alert("Index of 'n' :" + find)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 4: Finding last index of l
// var name = prompt("Enter any word having letter l inside ..","Hello World!")
// var find = name.lastIndexOf('l')
// alert("Index of 'n' :" + find)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 5: find the 3rd index 
// var name = prompt("Enter any word ..","Hello Brother")
// var find = name.charAt(2)
// alert("Character at 3rd index : " + find)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 6: Concatinate Q1 by conncat() method
// var first = prompt("Enter First name.."," Abdullah ");
// var last = prompt("Enter Last name.."," Arif ");
// var full_name = first.concat( last);
// alert("Assalam-O-Alaikum "+full_name+ " Welcome to my webiste..");

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 7: replace a word
// var word = "Hyderabad";
// var rep = "Islam";
// var res = word.replace("Hyder", "Islam");
// alert("Word "+word + " " + "replace by "+ rep + " New word is "+ res)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 8: replace and by &
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace(/and/g,"&")
// alert(res)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 9: change str to number
// var str ='472' ;
// var chng = Number(str);
// alert('Value: '+str+' Type '+typeof str + ' Value: ' + chng+' Type '+typeof chng)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 10: change into uppercase
// var input = prompt("Enter any word","hello")
// var convert = input.toUpperCase()
// alert('User Input: '+input +'  UPPER case ' + convert)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 11: change into title case
// var input = prompt("Enter any word","hello")
// var str = input.split(' ');
// alert('User Input: '+input +'  Title case ' + convert)
// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 12: num to string
// var num = 313.1;
// var change = num.toString();
// var dec = change.replace('.','');
// alert("Result: "+dec+ " Type: "+ typeof dec)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 13: If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// var line = prompt("Enter string don't use [@ . , !] characters","@Cat ");
// var split = line.split("")
// for (let i = 0; i < split.length; i++) {
//     document.write(i)
//     document.write(split[i])
//     if (split[i] == '@'  ) {
//         alert("Please Enter a valid username.")
//     }
//     else if (split[i] == '.'){
//         alert("Please Enter a valid username.")
//     }
//     else if (split[i] == ','){
//         alert("Please Enter a valid username.")
//     }
//     else if (split[i] == '!'){
//         alert("Please Enter a valid username.")
//     }
// }

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 14
// var A = ["cake", "apple" , "pie", "cookie", "chips", "patties"];
// var find = prompt("WELCOME TO SHAH BAKERY. WHAT DO YOU WANT TO ORDER.");
// var convert = find.toLowerCase();
// var indeX = A.indexOf(convert);
//     if ( A[indeX] == convert ) {
//         alert(find + "is available at index "+indeX+' in our bakery...')
//     }
//     else{
//         alert("We are sorry. "+find+" is not available in our bakery...")
//     }
// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 15: Password validation
// function checkPassword(){
//     var [str] = prompt("Enter Password...");
//     var nums = [0,1,2,3,4,5,6,7,8,9];
//     var isvalid = !/[0-9]/.test(str)
// //     for (let i = 0; i < nums.length; i++) {
//     if (isvalid) {
//             alert("Password is valid");
//         }
//      else{
//             alert("Password should not start with number");
//         }
  
// }
// checkPassword()

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 16: Split and display name separately
// var university = prompt("Enter your university name","University of Karachi");
// var split = university.split("");
// for (let i = 0; i < split.length; i++) {
//     document.write(split[i]+"<br>");
    
// }

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 17: find Last chr 
// var input = prompt("Enter a word to find last character..");
// var split = input.split("");
// alert("Last Character of Input: "+ input.charAt(input.length - 1))

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task 18: number of words
// var word = prompt("Enter the line ","The quick brown fox jumps over the lazy dog");
// var smaller = word.toLowerCase();
// var occ = smaller.split(" ");
// var isvalid = 'the'
// var count = 0
//     for (let i = 0; i < occ.length; i++) {
//     if (isvalid == occ[i]) {
//         var count=count+1
//         }
//     }
//     if (count>1) {
//         alert("There are "+count+" occurence(s) of 'the'  ")
//     }
//     else if (count==1){
//         alert("There are "+count+" occurence of 'the'  ")
//     }
//     else{
        
//         alert("There is no occurence(s) of 'the' ")
//     }
// ------------------------------------------------------------------------------------------------------------------------------------------
