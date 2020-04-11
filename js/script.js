
function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://c39rsx5v9b.execute-api.ap-southeast-2.amazonaws.com/Prod/contactus";

            var Namere = /[A-Za-z]{1}[A-Za-z]/;
            if (!Namere.test($("#field1").val())) {
                         Swal.fire ("Name can not less than 2 char");
                return;
            }
         //   var mobilere = /[0-9]{10}/;
        //    if (!mobilere.test($("#field3").val())) {
        //        alert ("Please enter valid mobile number");
        //       return;
         // }
            if ($("#field2").val()=="") {
                Swal.fire ("Please enter your email id");
                return;
            }

            var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            if (!reeamil.test($("#field2").val())) {
                Swal.fire ("Please enter valid email address");
                return;
            }

       var name = $("#field1").val();
       var phone = $("#field3").val();
       var email = $("#field2").val();
       var desc = $("#field4").val();
       var data = {
          name : name,
          phone : phone,
          email : email,
          desc : desc
        };

       $.ajax({
         type: "POST",
         url : "https://c39rsx5v9b.execute-api.ap-southeast-2.amazonaws.com/Prod/contactus",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),

         
         success: function () {
           // clear form and show a success message
           //alert("Thanks for your enquiry, we will get back to you shortly");
           Swal.fire(
  'Thank you!',
  'Thanks for your enquiry, we will get back to you shortly',
  'success'
)
           document.getElementById("contact-form").reset();
       location.reload();
         },
         error: function () {
           // show an error message
           alert("There is some technical issue while sending the message . Please send the email directly to info.hdcm@hdcmonline.org with your query");
         }});
     }