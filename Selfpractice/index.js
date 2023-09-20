 //untuk menulis kata ---> ini untuk komentar
   /* document.writeln("Hello\\Word") 
    document.writeln ("</br>")
    document.writeln (100.123) //klo type data number tidak perlu pke petik*/
    /*number notation
    default basis 10--> mendukung binary, hexadecimal, dan octal
    hexsa = 0x
    binary = 0b
    octal = 0o  */
    /*document.writeln("</br>")
    document.writeln (0b1111010)*/
    //type data boolean (False True)
    //type data string = berisikan kumpulan kosong atau lebih karakter (wajib pke petik 1/2)
        //js bisa menggabungkan beberapa data string dgn menggunakan +
            /*document.writeln("</br>")
            document.writeln("chanel : "+"programer")*/


// operator aritmatika
let result = 1+2; // 3
document.writeln("<p>1+2="+ result +"</p>");
let originalResult = result; //3

result = result - 1; //2
document.writeln("<p>"+ originalResult /*3 */+ " - 1 = " + result /*2*/ + "</p>")
originalResult = result; //2

result = result * 2;
document.writeln("<p>"+ originalResult + " * 2 = " + result + "</p>")
originalResult = result;