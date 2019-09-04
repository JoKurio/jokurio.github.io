function validate() {
      
    if( document.contactMe.name.value == "" ||
    document.contactMe.name.value.length < 4 ){
       alert( "Please enter your full name!" );
       document.contactMe.name.focus() ;
       return false;
    }
    if( document.contactMe.email.value == "") {
       alert( "Please enter a valid Email address!" );
       document.contactMe.email.focus() ;
       return false;
    }
    if( document.contactMe.message.value == ""  ||
       document.contactMe.message.value.length < 20 ) {
       
       alert( "Please provide more details." );
       document.contactMe.message.focus() ;
       return false;
    }
    return( true ) && alert( "Thank You!" );
    
 }