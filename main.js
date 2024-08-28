document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mainForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const fileUpload = document.getElementById('file');
  


    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(checkInputs()){
            showModal();
        }
    });

    name.addEventListener('input', () =>{
        valdiateField(name, name.value.trim() !=='', 'name cannot be blank');
        
    });

    email.addEventListener('input', ()=>{
        valdiateField(email, isEmail(email.value.trim()), 'not a valid email');
    });

    phone.addEventListener('input', ()=>{
        valdiateField(phone, isPhone(phone.value.trim()), 'not a valid phone number');
    });

    password.addEventListener('input', ()=>{
        valdiateField(password, isPass(password.value.trim()), 'not a valid password');   
    });
    
    passwordConfirm.addEventListener('input', ()=>{
        valdiateField(passwordConfirm, isPassConfirm(password.value, passwordConfirm.value.trim()), 'password do not match');   
    });

    // fileUpload.addEventListener('change', (event) => {
    //     const file = event.target.files[0];
    //     const fileSize = file.size / (1024 * 1024);
        
    //     if(fileSize > 5 || file == null || file == undefined ) {            
    //         invalidSize.style.display = 'block';
    //         isValid = false;
            
    //     } else {
    //         invalidSize.style.display = 'none';
    //         isValid = true;
    //         formInputsValue.file = file;
    //     }
        
    // });

    function checkInputs(){
        let isValid = true;
        valdiateField(name, name.value.trim() !=='', 'name cannot be blank');
        valdiateField(email, isEmail(email.value.trim()), 'not a valid email');
        valdiateField(phone, isPhone(phone.value.trim()), 'not a valid phone number');
        valdiateField(password, isPass(password.value.trim()), 'not a valid password');     
        valdiateField(passwordConfirm, isPassConfirm(password.value, passwordConfirm.value.trim()), 'password do not match');   

        document.querySelectorAll('.form-control').forEach((control) =>{
            if(control.classList.contains('error')){
                isValid=false; 
            }
        });
        return isValid;
    }

    function valdiateField(input, condition, errorMessage){
        if(condition){
            setSuccess(input);
        }else{
            setError(input, errorMessage);
        }
    }

    // error and success messages 
    function setError(input, message){
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }

    function setSuccess(input){
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control success';
        icon.className = 'icon fas fa-check-circle';
    }

    function isEmail(email){
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    }

    function isPass(password) {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);
      }
    function isPassConfirm(password, passwordConfirm) {
        return password === passwordConfirm;
      }
    
    function isPhone(phone){
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(phone);
    }

    function showModal(){
        const modal = document.getElementById('successModal');
        modal.style.display='block';
        
        const closeBtn = document.querySelector('.close-button');
        closeBtn.onclick = function(){
            modal.style.display = 'none';
        };

        window.onclick = function(event){
            if(event.target === modal){
                modal.style.display = 'none';

            }
        };

    }
    

    fileUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const fileSize = file.size / (1024 * 1024);
        
        if(fileSize > 5 || file == null || file == undefined ) {            
            invalidSize.style.display = 'block';
            isValid = false;
            
        } else {
            invalidSize.style.display = 'none';
            isValid = true;
            formInputsValue.file = file;
        }
        
    });



    



});


